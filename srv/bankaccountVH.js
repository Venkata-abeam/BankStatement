const cds = require('@sap/cds');
const proxy = require('@cap-js-community/odata-v2-adapter');
const { or } = require('@sap-cloud-sdk/odata-v2');
const { and } = require('@sap-cloud-sdk/odata-v2');
cds.on('bootstrap', (app) => app.use(proxy()));
module.exports = cds.service.impl(async function (srv) {
    var ohouseBankAccountfilter, ohouseBankfilter, oCompanyCodefilter;
    const { BankAccountVH } = this.entities;
    var companyCodeFilter = [];
    var houseBank = [];
    var houseBankAcc;
    const getBankVH = async function (req) {
        const { yy1HousebanklistapiCds0001 } = require('./src/generated/YY1_HOUSEBANKLISTAPI_CDS_0001');
        const { yy1_HousebanklistapiApi } = yy1HousebanklistapiCds0001();
        if (houseBank.length > 0 && companyCodeFilter.length > 0 && houseBankAcc) {
            const houseBanks = await yy1_HousebanklistapiApi.requestBuilder().getAll().top(9999999).select(
                yy1_HousebanklistapiApi.schema.ALL_FIELDS
            ).filter(
                and(yy1_HousebanklistapiApi.schema.HOUSE_BANK_ACCOUNT.equals(houseBankAcc),
                    or(
                        ...companyCodeFilter.map(ccode =>
                            yy1_HousebanklistapiApi.schema.COMPANY_CODE.equals(ccode)
                        )
                    ),
                    or(
                        ...houseBank.map(hbank =>
                            yy1_HousebanklistapiApi.schema.HOUSE_BANK.equals(hbank)
                        )
                    )
                )
            ).execute({
                destinationName: 'S4HANABASICAUTH'
            });
            return houseBanks;
        }
        else if (houseBank.length > 0 && companyCodeFilter.length > 0) {
            const houseBanks = await yy1_HousebanklistapiApi.requestBuilder().getAll().top(9999999).select(
                yy1_HousebanklistapiApi.schema.ALL_FIELDS
            ).filter(
                and(or(
                    ...companyCodeFilter.map(ccode =>
                        yy1_HousebanklistapiApi.schema.COMPANY_CODE.equals(ccode)
                    )
                ),
                or(
                    ...houseBank.map(hbank =>
                        yy1_HousebanklistapiApi.schema.HOUSE_BANK.equals(hbank)
                    )
                )
                )
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

            for (let i = 0; i < whereClause.length; i++) {
                const item = whereClause[i];

                if (item?.xpr) {
                    extract(item.xpr);
                }

                if (
                    i + 2 < whereClause.length &&
                    item?.ref &&
                    whereClause[i + 1] === '=' &&
                    whereClause[i + 2]?.val !== undefined
                ) {
                    const field = item.ref[0];
                    const value = whereClause[i + 2].val;

                    if (!result[field]) result[field] = [];
                    result[field].push(value);
                    i += 2;
                }
            }
        }

        extract(where);
        return result;
    };
    srv.on('READ', BankAccountVH, async (req) => {
        var aFilter = req.query.SELECT.where;
        var ofiltersData = await extractfilterquery(req.query);
        if (ofiltersData) {
            const CompanyCodeResults = ofiltersData.CompanyCode ?? [];
            if (CompanyCodeResults.length > 0) {
                companyCodeFilter = CompanyCodeResults;
            }
            const HouseBankResults = ofiltersData.HouseBank ?? [];
            if (HouseBankResults.length > 0) {
                houseBank = HouseBankResults;
            }
            const HouseBankAccResults = ofiltersData.HouseBankAccount ?? [];
            if (HouseBankAccResults.length > 0) {
                houseBankAcc = HouseBankAccResults[0]
            }
        }
       /* if (aFilter) {
            console.log(aFilter.length);
            if (aFilter.length === 7) {
                oCompanyCodefilter = aFilter[2].val;
                ohouseBankfilter = aFilter[6].val;
                ohouseBankAccountfilter = "";
            } else if (aFilter.length === 11) {
                oCompanyCodefilter = aFilter[2].val;
                ohouseBankfilter = aFilter[6].val;
                ohouseBankAccountfilter = aFilter[10].val;
            }
        } else {
            oCompanyCodefilter = "";
            ohouseBankfilter = "";
            ohouseBankAccountfilter = "";
        } */
        var BankVHTab = await getBankVH().then(
            BankVHs => {
                var aRecord = [];
                BankVHs.forEach(element => {
                    var record = {};
                    record.HouseBank = element.houseBank;
                    record.CompanyCode = element.companyCode;
                    record.CompanyCodeName = element.companyCodeName;
                    record.HouseBankAccount = element.houseBankAccount;
                    record.BankAccountDescription = element.bankAccountDescription;
                    aRecord.push(record);
                });
                return aRecord;
            }
        );
        const uniqueBankVH = [];
        const seen = new Set();
        BankVHTab.forEach(entry => {
            const key = `${entry.HouseBankAccount}`;
            if (!seen.has(key)) {
                seen.add(key);
                uniqueBankVH.push(entry);
            }
        });
        return uniqueBankVH;
    });
});