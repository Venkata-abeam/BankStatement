const cds = require('@sap/cds');
const proxy = require('@cap-js-community/odata-v2-adapter');
const { or } = require('@sap-cloud-sdk/odata-v2');
const { and } = require('@sap-cloud-sdk/odata-v2');
cds.on('bootstrap', (app) => app.use(proxy()));
module.exports = cds.service.impl(async function (srv) {
    var houseBankFilter;
    var companyCodeFilter = [];
    const { HouseBankVH } = this.entities;
    const getBankVH = async function (req) {
        const { yy1HousebanklistapiCds0001 } = require('./src/generated/YY1_HOUSEBANKLISTAPI_CDS_0001');
        const { yy1_HousebanklistapiApi } = yy1HousebanklistapiCds0001();
        if (companyCodeFilter.length > 0 && houseBankFilter) {
            const houseBanks = await yy1_HousebanklistapiApi.requestBuilder().getAll().top(9999999).select(
                yy1_HousebanklistapiApi.schema.ALL_FIELDS
            ).filter(
                and(yy1_HousebanklistapiApi.schema.HOUSE_BANK.equals(houseBankFilter),
                    or(
                        ...companyCodeFilter.map(ccode =>
                            yy1_HousebanklistapiApi.schema.COMPANY_CODE.equals(ccode)
                        )
                    )
                )
            ).execute({
                destinationName: 'S4HANABASICAUTH'
            });
            return houseBanks;
        } else if (!houseBankFilter && companyCodeFilter.length > 0) {
            const houseBanks = await yy1_HousebanklistapiApi.requestBuilder().getAll().top(9999999).select(
                yy1_HousebanklistapiApi.schema.ALL_FIELDS
            ).filter(
                or(
                    ...companyCodeFilter.map(ccode =>
                        yy1_HousebanklistapiApi.schema.COMPANY_CODE.equals(ccode)
                    )
                )
            ).execute({
                destinationName: 'S4HANABASICAUTH'
            });
            return houseBanks;
        } else if (houseBankFilter && !companyCodeFilter) {
            const houseBanks = await yy1_HousebanklistapiApi.requestBuilder().getAll().top(9999999).select(
                yy1_HousebanklistapiApi.schema.ALL_FIELDS
            ).filter(
                yy1_HousebanklistapiApi.schema.HOUSE_BANK.equals(houseBankFilter)
            ).execute({
                destinationName: 'S4HANABASICAUTH'
            });
            return houseBanks;
        } else {
            const houseBanks = await yy1_HousebanklistapiApi.requestBuilder().getAll().top(9999999).select(
                yy1_HousebanklistapiApi.schema.ALL_FIELDS
            ).execute({
                destinationName: 'S4HANABASICAUTH'
            });
            return houseBanks;
        }


    };
    const extractfilterquery = async function (query, fieldName) {
        const where = query.SELECT?.where || [];
        const result = {};

        function extract(whereClause) {
            if (!Array.isArray(whereClause)) return;

            for (let i = 0; i < whereClause.length - 2; i++) {
                const field = whereClause[i];
                const operator = whereClause[i + 1];
                const value = whereClause[i + 2];

                // Recurse into xpr
                if (field?.xpr) {
                    extract(field.xpr);
                    continue;
                }

                const fieldName = field?.ref?.[0];
                if (fieldName && operator === '=' && value?.val !== undefined) {
                    if (!result[fieldName]) result[fieldName] = [];
                    result[fieldName].push(value.val);
                }
            }
        }

        extract(where);
        return result;
    };
    srv.on('READ', HouseBankVH, async (req) => {
        var aFilter = req.query.SELECT.where;
        var ofiltersData = await extractfilterquery(req.query);
        houseBankFilter = "";
        companyCodeFilter = [];
        if (ofiltersData) {
            const CompanyCodeResults = ofiltersData.CompanyCode ?? [];
            if (CompanyCodeResults.length > 0){
                companyCodeFilter = CompanyCodeResults;
            }
            const HouseBankResults = ofiltersData.HouseBank ?? [];
            if (HouseBankResults.length > 0){
                houseBankFilter = HouseBankResults[0];
            }
           
        }

        var BankVHTab = await getBankVH().then(
            BankVHs => {
                var aRecord = [];
                BankVHs.forEach(element => {
                    var record = {};
                    record.HouseBank = element.houseBank;
                    record.CompanyCode = element.companyCode;
                    record.CompanyCodeName = element.companyCodeName;
                    record.BankName = element.bankName;
                    aRecord.push(record);
                });
                return aRecord;
            }
        );
        const uniqueBankVH = [];
        const seen = new Set();
        BankVHTab.forEach(entry => {
            const key = `${entry.HouseBank}`;
            if (!seen.has(key)) {
                seen.add(key);
                uniqueBankVH.push(entry);
            }
        });
        return uniqueBankVH;
    });
});