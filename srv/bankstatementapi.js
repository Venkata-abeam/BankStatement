const cds = require('@sap/cds');
const proxy = require('@cap-js-community/odata-v2-adapter');
const { or } = require('@sap-cloud-sdk/odata-v2');
const { and } = require('@sap-cloud-sdk/odata-v2');
const { parseZone, isMoment } = require('moment');
const BigNumber = require('bignumber.js');
const { Yy1_BankstatementapiApi } = require('./src/generated/YY1_BANKSTATEMENTAPI_CDS_0001/Yy1_BankstatementapiApi');
//cds.on('bootstrap', app =>  { console.log('✅ V2 Adapter loaded'); app.use(proxy());});
const { executeHttpRequest } = require('@sap-cloud-sdk/http-client');
module.exports = cds.service.impl(async function (srv) {
  //----Bank Acccount----//
  var ohouseBankAccountfilter, ohouseBankfilter, oCompanyCodefilter;
  const { BankAccountVH } = this.entities;
  const { CompanyCodeVH } = this.entities;
  const { HouseBankVH } = this.entities;
  const { BankStatement } = this.entities;
  const { MyEmail } = this.entities;

  var companyCodeFilter = [];
  var companyCodefilter = [];
  var houseBank = [];
  var houseBankAcc;

  var companyCodefilterVH, userId;
  var houseBankFilter;

  var oStartDate;
  var oEndDate;
  var houseBankfilter = [];
  var houseBankAccfilter = [];

  const getBankData = async function (req) {
    if (oStartDate && oEndDate) {
      const defaultStart = new Date(oStartDate);
      const defaultEnd = new Date(oEndDate);
      const { yy1HousebanklistapiCds0001 } = require('./src/generated/YY1_HOUSEBANKLISTAPI_CDS_0001');
      const { yy1_HousebanklistapiApi } = yy1HousebanklistapiCds0001();
      const { yy1BankstatementapiCds0001 } = require('./src/generated/YY1_BANKSTATEMENTAPI_CDS_0001');
      const { yy1_BankstatementapiApi } = yy1BankstatementapiCds0001();
      const { yy1BankgllineapiCds0001 } = require('./src/generated/YY1_BANKGLLINEAPI_CDS_0001');
      const { yy1_BankgllineapiApi } = yy1BankgllineapiCds0001();
      const { businessuser0001 } = require('./src/generated/BUSINESSUSER_0001');
      const { businessUsersApi } = businessuser0001();

      const houseBanks = await yy1_HousebanklistapiApi.requestBuilder().getAll().top(9999999).select(
        yy1_HousebanklistapiApi.schema.ALL_FIELDS
      ).filter(
        and(
          or(
            ...companyCodefilter.map(ccode =>
              yy1_HousebanklistapiApi.schema.COMPANY_CODE.equals(ccode)
            )
          ),
          or(
            ...houseBankfilter.map(housebank =>
              yy1_HousebanklistapiApi.schema.HOUSE_BANK.equals(housebank)
            )
          ),
          or(
            ...houseBankAccfilter.map(housebankAcc =>
              yy1_HousebanklistapiApi.schema.HOUSE_BANK_ACCOUNT.equals(housebankAcc)
            )
          )
        )
      ).execute({
        destinationName: 'S4HANABASICAUTH'
      });

      const houseBanksfilteredData = houseBanks;

      const bankStatements = await yy1_BankstatementapiApi.requestBuilder().getAll().top(9999999).select(
        yy1_BankstatementapiApi.schema.ALL_FIELDS
      ).filter(
        and(
          or(
            ...companyCodefilter.map(ccode =>
              yy1_BankstatementapiApi.schema.COMPANY_CODE.equals(ccode)
            )
          ),
          or(
            ...houseBankfilter.map(housebank =>
              yy1_BankstatementapiApi.schema.HOUSE_BANK.equals(housebank)
            )
          ),
          or(
            ...houseBankAccfilter.map(housebankAcc =>
              yy1_BankstatementapiApi.schema.HOUSE_BANK_ACCOUNT.equals(housebankAcc)
            )
          ),
          and(yy1_BankstatementapiApi.schema.BANK_STATEMENT_DATE.lessOrEqual(defaultEnd),
            yy1_BankstatementapiApi.schema.BANK_STATEMENT_DATE.greaterOrEqual(defaultStart))
        )
      ).execute({
        destinationName: 'S4HANABASICAUTH'
      });

      const bankStatementsfilteredData = bankStatements;
      const bankstatementFunction = async function (bankStatementsfilteredData) {
        const grouped = new Map();

        for (const row of bankStatementsfilteredData) {
          const key = [
            row.companyCode?.trim(),
            row.houseBank?.trim(),
            row.houseBankAccount?.trim(),
            row.glAccount?.trim(),
            row.bankAccount?.trim()
          ].join('|');

          if (!grouped.has(key)) grouped.set(key, []);
          grouped.get(key).push(row);
        }
        const results = [];

        for (const [key, entries] of grouped.entries()) {

          // Sort by bankStatementDate
          entries.sort((a, b) => new Date(a.bankStatementDate) - new Date(b.bankStatementDate));

          const current = entries[0];
          const last = entries[entries.length - 1];

          results.push({
            companyCode: current.companyCode,
            houseBank: current.houseBank,
            houseBankAccount: current.houseBankAccount,
            glAccount: current.glAccount,
            bankAccount: current.bankAccount,
            openingDate: current.bankStatementDate.toISOString().split('T')[0],
            closingDate: last.bankStatementDate.toISOString().split('T')[0],
            openingBalance: current.openingBalanceAmtInTransCrcy.toString(),
            closingBalance: last.closingBalanceAmtInTransCrcy.toString()
          });
        }
        return results;
      }

      var bankStatementResults = await bankstatementFunction(bankStatementsfilteredData);

      var glAccountsfilter = [];
      glAccountsfilter = bankStatementResults.map(item => item.glAccount);
      const bankGLLines = await yy1_BankgllineapiApi.requestBuilder().getAll().top(9999999).select(
        yy1_BankgllineapiApi.schema.ALL_FIELDS
      ).filter(
        and(
          or(
            ...companyCodefilter.map(ccode =>
              yy1_BankgllineapiApi.schema.COMPANY_CODE.equals(ccode)
            )
          ),
          or(
            ...houseBankfilter.map(housebank =>
              yy1_BankgllineapiApi.schema.HOUSE_BANK.equals(housebank)
            )
          ),
          or(
            ...houseBankAccfilter.map(housebankAcc =>
              yy1_BankgllineapiApi.schema.HOUSE_BANK_ACCOUNT.equals(housebankAcc)
            )
          ),
          or(
            ...glAccountsfilter.map(glacc =>
              yy1_BankgllineapiApi.schema.GL_ACCOUNT.equals(glacc)
            )
          ),
          and(yy1_BankgllineapiApi.schema.POSTING_DATE.lessOrEqual(defaultEnd),
            yy1_BankgllineapiApi.schema.POSTING_DATE.greaterOrEqual(defaultStart))
        )
      ).execute({
        destinationName: 'S4HANABASICAUTH'
      });
      const bankGLLinesfilteredData = bankGLLines;

      const formatNumber = (val) => isNaN(val) ? '-' : parseFloat(val).toLocaleString('en-US', { minimumFractionDigits: 2 });

      const combinedData = async function (houseBanksfilteredData, bankStatementResults, bankGLLinesfilteredData, oStartDate, oEndDate) {
        var aCombinedFinalData = [];
        for (const housebank of houseBanksfilteredData) {
          var finaldata = {};
          var StatementopeningDate, statementClosingDate, statementOpeningBalance, statementClosingBalance, Inflow, Outflow, Currency;
          const {
            companyCode,
            houseBank,
            houseBankAccount,
            glAccount,
            bankAccount
          } = housebank;

          const statement = bankStatementResults.find(
            s =>
              s.companyCode === companyCode &&
              s.houseBank === houseBank &&
              s.houseBankAccount === houseBankAccount &&
              s.glAccount === glAccount &&
              s.bankAccount === bankAccount
          );

          //get GL accounts
          const matchingGLs = bankGLLinesfilteredData.filter(
            gl =>
              gl.companyCode === companyCode &&
              gl.houseBank === houseBank &&
              gl.houseBankAccount === houseBankAccount &&
              gl.glAccount === glAccount &&
              gl.bankAccount === bankAccount
          );

          //If Statement there
          if (statement) {
            const statementData = statement;
            const startDate = new Date('2024-01-01');
            const openingEndDate = parseZone(oStartDate).subtract(1, 'day').format('YYYY-MM-DD');
            const closingEndDate = new Date(oEndDate);

            if (parseZone(statementData.openingDate).format('YYYY-MM-DD') === parseZone(oStartDate).format('YYYY-MM-DD')) {
              let statementopen = new BigNumber(0);
              statementopen = new BigNumber(statementData.openingBalance);
              StatementopeningDate = statementData.openingDate;
              statementOpeningBalance = formatNumber(statementopen);
            } else {
              const bankGLLinesOpening = await yy1_BankgllineapiApi.requestBuilder().getAll().top(9999999).select(
                yy1_BankgllineapiApi.schema.ALL_FIELDS
              ).filter(
                and(yy1_BankgllineapiApi.schema.COMPANY_CODE.equals(companyCode),
                  and(yy1_BankgllineapiApi.schema.POSTING_DATE.lessOrEqual(new Date(openingEndDate)),
                    yy1_BankgllineapiApi.schema.POSTING_DATE.greaterOrEqual(startDate)),
                  and(yy1_BankgllineapiApi.schema.HOUSE_BANK.equals(houseBank)),
                  and(yy1_BankgllineapiApi.schema.HOUSE_BANK_ACCOUNT.equals(houseBankAccount)),
                  and(yy1_BankgllineapiApi.schema.GL_ACCOUNT.equals(glAccount)),
                  and(yy1_BankgllineapiApi.schema.BANK_ACCOUNT.equals(bankAccount))
                )
              ).execute({
                destinationName: 'S4HANABASICAUTH'
              });
              StatementopeningDate = 'GL Derived';
              const statementopenamount = bankGLLinesOpening.reduce((sum, gl) => {
                return sum.plus(new BigNumber(gl.amountInTransactionCurrency));
              }, new BigNumber(0));
              statementOpeningBalance = formatNumber(statementopenamount);
            }
            if (parseZone(statementData.closingDate).format('YYYY-MM-DD') === parseZone(oEndDate).format('YYYY-MM-DD')) {
              let statementclose = new BigNumber(0);
              statementclose = new BigNumber(statementData.closingBalance);
              statementClosingDate = statementData.closingDate;
              statementClosingBalance = formatNumber(statementclose);
            } else {
              const bankGLLinesClosing = await yy1_BankgllineapiApi.requestBuilder().getAll().top(9999999).select(
                yy1_BankgllineapiApi.schema.ALL_FIELDS
              ).filter(
                and(yy1_BankgllineapiApi.schema.COMPANY_CODE.equals(companyCode),
                  and(yy1_BankgllineapiApi.schema.POSTING_DATE.lessOrEqual(closingEndDate),
                    yy1_BankgllineapiApi.schema.POSTING_DATE.greaterOrEqual(startDate)),
                  and(yy1_BankgllineapiApi.schema.HOUSE_BANK.equals(houseBank)),
                  and(yy1_BankgllineapiApi.schema.HOUSE_BANK_ACCOUNT.equals(houseBankAccount)),
                  and(yy1_BankgllineapiApi.schema.GL_ACCOUNT.equals(glAccount)),
                  and(yy1_BankgllineapiApi.schema.BANK_ACCOUNT.equals(bankAccount))
                )
              ).execute({
                destinationName: 'S4HANABASICAUTH'
              });
              statementClosingDate = 'GL Derived';
              const statementcloseamount = bankGLLinesClosing.reduce((sum, gl) => {
                return sum.plus(new BigNumber(gl.amountInTransactionCurrency));
              }, new BigNumber(0));

              statementClosingBalance = formatNumber(statementcloseamount);
            }
          } else {
            const startDate = new Date('2024-01-01');
            const openingEndDate = parseZone(oStartDate).subtract(1, 'day').format('YYYY-MM-DD');
            const closingEndDate = new Date(oEndDate);
            const bankGLLinesOpening = await yy1_BankgllineapiApi.requestBuilder().getAll().top(9999999).select(
              yy1_BankgllineapiApi.schema.ALL_FIELDS
            ).filter(
              and(yy1_BankgllineapiApi.schema.COMPANY_CODE.equals(companyCode),
                and(yy1_BankgllineapiApi.schema.POSTING_DATE.lessOrEqual(new Date(openingEndDate)),
                  yy1_BankgllineapiApi.schema.POSTING_DATE.greaterOrEqual(startDate)),
                and(yy1_BankgllineapiApi.schema.HOUSE_BANK.equals(houseBank)),
                and(yy1_BankgllineapiApi.schema.HOUSE_BANK_ACCOUNT.equals(houseBankAccount)),
                and(yy1_BankgllineapiApi.schema.GL_ACCOUNT.equals(glAccount)),
                and(yy1_BankgllineapiApi.schema.BANK_ACCOUNT.equals(bankAccount))
              )
            ).execute({
              destinationName: 'S4HANABASICAUTH'
            });

            const statementopenamount = bankGLLinesOpening.reduce((sum, gl) => {
              return sum.plus(new BigNumber(gl.amountInTransactionCurrency));
            }, new BigNumber(0));
            statementOpeningBalance = formatNumber(statementopenamount);
            if (bankGLLinesOpening.length > 0) Currency = bankGLLinesOpening[0].transactionCurrency;
            const bankGLLinesClosing = await yy1_BankgllineapiApi.requestBuilder().getAll().top(9999999).select(
              yy1_BankgllineapiApi.schema.ALL_FIELDS
            ).filter(
              and(yy1_BankgllineapiApi.schema.COMPANY_CODE.equals(companyCode),
                and(yy1_BankgllineapiApi.schema.POSTING_DATE.lessOrEqual(closingEndDate),
                  yy1_BankgllineapiApi.schema.POSTING_DATE.greaterOrEqual(startDate)),
                and(yy1_BankgllineapiApi.schema.HOUSE_BANK.equals(houseBank)),
                and(yy1_BankgllineapiApi.schema.HOUSE_BANK_ACCOUNT.equals(houseBankAccount)),
                and(yy1_BankgllineapiApi.schema.GL_ACCOUNT.equals(glAccount)),
                and(yy1_BankgllineapiApi.schema.BANK_ACCOUNT.equals(bankAccount))
              )
            ).execute({
              destinationName: 'S4HANABASICAUTH'
            });
            statementClosingDate = 'GL Derived';
            const statementcloseamount = bankGLLinesClosing.reduce((sum, gl) => {
              return sum.plus(new BigNumber(gl.amountInTransactionCurrency));
            }, new BigNumber(0));
            statementClosingBalance = formatNumber(statementcloseamount);
            Currency = (bankGLLinesOpening.length > 0) ? bankGLLinesOpening[0].transactionCurrency : (bankGLLinesClosing.length > 0) ? bankGLLinesClosing[0].transactionCurrency : '';
          }


          //Inflow and outflow Data
          let inflow = new BigNumber(0);
          let outflow = 0;
          matchingGLs.forEach(entry => {

            if (entry.amountInTransactionCurrency > 0) {
              inflow = inflow.plus(new BigNumber(entry.amountInTransactionCurrency));
            } else if (entry.amountInTransactionCurrency < 0) {
              outflow -= new BigNumber(entry.amountInTransactionCurrency);
            }
            Currency = (Currency == "") ? entry.transactionCurrency : Currency;
          });

          Inflow = formatNumber(inflow);

          Outflow = formatNumber(outflow);

          finaldata.houseBank = housebank.houseBank;
          finaldata.companyCode = housebank.companyCode;
          finaldata.companyCodeName = housebank.companyCodeName;
          finaldata.houseBankAccount = housebank.houseBankAccount;
          finaldata.bankName = housebank.bankName;
          finaldata.bankAccount = housebank.bankAccount;
          finaldata.bankAccountDescription = housebank.bankAccountDescription;
          finaldata.GlAccount = housebank.glAccount;
          finaldata.OpeningBalance = statementOpeningBalance;
          finaldata.OpenDate = StatementopeningDate;
          finaldata.ClosingBalance = statementClosingBalance;
          finaldata.CloseDate = statementClosingDate;
          finaldata.CashInflow = Inflow;
          finaldata.CashOutflow = Outflow;
          finaldata.Currency = Currency;
          aCombinedFinalData.push(finaldata);
        }
        return aCombinedFinalData;
      };
      const result = await combinedData(houseBanksfilteredData, bankStatementResults, bankGLLinesfilteredData, oStartDate, oEndDate);
      return result
        .sort((a, b) => parseInt(a.companyCode) - parseInt(b.companyCode));

    } else {
      result = []
      return result;
    }

  };

  const extractfilterquery = async function (query) {
    const where = query.SELECT?.where || [];
    const result = {};

    function addToResult(field, value) {
      if (!result[field]) result[field] = [];
      result[field].push(value);
    }

    function extract(whereClause) {
      if (!Array.isArray(whereClause)) return;

      for (let i = 0; i < whereClause.length; i++) {
        const item = whereClause[i];
        // 🔁 Handle nested expressions
        if (item?.xpr && Array.isArray(item.xpr)) {
          extract(item.xpr);
          continue;
        }

        // 🔁 Handle groupings like: [ {ref}, '=', {val} ]
        if (Array.isArray(item)) {
          extract(item); // Treat it as a nested expression
          continue;
        }

        // ⛔ Skip logic strings like 'and', 'or'
        if (typeof item !== 'object' || item === null) continue;

        // ✅ Handle: {ref} '=' {val}
        if (
          item.ref &&
          Array.isArray(item.ref) &&
          i + 2 < whereClause.length &&
          typeof whereClause[i + 1] === 'string'
        ) {
          const field = item.ref[0];
          const valueNode = whereClause[i + 2];
          if (valueNode?.val !== undefined) {
            addToResult(field, valueNode.val);
            i += 2;
            continue;
          }

          if (valueNode?.list) {
            const values = valueNode.list.map(v => v.val);
            for (const v of values) addToResult(field, v);
            i += 2;
            continue;
          }
        }
        if (item.func && item.args && Array.isArray(item.args)) {
          if (item.func.toLowerCase() === 'contains') {
            // args: [ { ref: [field] }, { val: '...' } ]
            const fieldArg = item.args[0];
            const valArg = item.args[1];

            if (fieldArg?.ref && Array.isArray(fieldArg.ref) && valArg?.val !== undefined) {
              const field = fieldArg.ref[0];
              const value = valArg.val;
              addToResult(field, value);
              continue;
            }
          }

          // You can add more function handling here if needed
        }
      }
    }

    extract(where);
    return result;
  };

  srv.on('READ', BankStatement, async (req) => {
    const aFilter = req.query.SELECT.where;
    userId = req.user.id == 'anonymous' ? 'ateo@abeam.com' : req.user.id;
    var ofiltersData = await extractfilterquery(req.query);
    if (ofiltersData) {
      const CompanyCodeResults = ofiltersData.CompanyCode ?? [];
      var CCodeVHTab = await getCompanyVH().then(
        cCodeVHs => {
          var aRecord = [];
          cCodeVHs.forEach(element => {
            var record = {};
            record.CompanyCode = element.companyCode;
            record.CompanyCodeName = element.companyCodeName;
            //record.Emailid = userId;
            aRecord.push(record);
          });
          return aRecord;
        }
      );
      if (CCodeVHTab.length === 0) {
        var BankTab = []
        return BankTab;
      }
      const companyCodes = CCodeVHTab.map(item => item.CompanyCode);
      if (CompanyCodeResults.length > 0) {
        const companycodesList = CompanyCodeResults.filter(code => companyCodes.includes(code));
        companyCodefilter = companycodesList;
        if (companyCodefilter.length === 0) {
          var BankTab = []
          return BankTab;
        }
      } else {
        var BankTab = []
        return BankTab;
      }
      const HouseBankResults = ofiltersData.HouseBank ?? [];
      if (HouseBankResults.length > 0) {
        houseBankfilter = HouseBankResults;
      }
      const HouseBankAccResults = ofiltersData.HouseBankAccount ?? [];
      if (HouseBankAccResults.length > 0) {
        houseBankAccfilter = HouseBankAccResults
      }
      const PostingDateResults = ofiltersData.DateRange ?? [];
      if (PostingDateResults.length > 1) {
        oStartDate = PostingDateResults[0]
        oEndDate = PostingDateResults[1]
      } else {
        oStartDate = PostingDateResults[0]
        oEndDate = PostingDateResults[0]
      }
    }

    var BankTab = await getBankData().then(
      Banks => {
        var aRecord = [];
        Banks.forEach(element => {
          var record = {};
          record.HouseBank = element.houseBank;
          record.CompanyCode = element.companyCode;
          record.CompanyCodeName = element.companyCodeName;
          record.HouseBankAccount = element.houseBankAccount;
          record.BankName = element.bankName;
          record.BankAccount = element.bankAccount;
          record.BankAccountDescription = element.bankAccountDescription;
          record.OpeningBalance = element.OpeningBalance;
          record.OpenDate = element.OpenDate;
          record.ClosingBalance = element.ClosingBalance;
          record.CloseDate = element.CloseDate;
          record.GLAccount = element.GlAccount;
          record.Currency = element.Currency || "";
          record.CashInflow = element.CashInflow;
          record.CashOutflow = element.CashOutflow;
          aRecord.push(record);
        });
        return aRecord;
      }
    );
    return BankTab;
  });


  //Bank Account VH
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
  const extractfilterqueryBACVH = async function (query, fieldName) {
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
    var ofiltersData = await extractfilterqueryBACVH(req.query);
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

  //--CompanyCode VH
  const getCompanyVH = async function (req) {
    const { yy1HousebanklistapiCds0001 } = require('./src/generated/YY1_HOUSEBANKLISTAPI_CDS_0001');
    const { yy1_HousebanklistapiApi } = yy1HousebanklistapiCds0001();
    const { businessuser0001 } = require('./src/generated/BUSINESSUSER_0001');
    const { businessUsersApi } = businessuser0001();
    const { businessUserBusinessRolesApi } = businessuser0001();
    var ouserRoles = [];

    const filterParts = [];
    filterParts.push(`EMailAddress eq '${userId}'`);
    const encodeURI = encodeURIComponent(filterParts);
    const userData = await executeHttpRequest(
      {
        destinationName: 'S4HANABASICAUTH'
      },
      {
        method: 'GET',
        url: '/sap/opu/odata4/sap/aps_iam_api_buser_read/srvd_a2x/sap/businessuser/0001/BusinessUsers',
        headers: {
          'Content-Type': 'application/json'
        },
        params: {
          $filter: encodeURI
        }

      }
    );
    if (userData.data) {
      var sapuserID = userData.data.value[0].UserID;
      const UserfilterParts = [];
      UserfilterParts.push(`UserID eq '${sapuserID}'`);
      const encodeUserURI = encodeURIComponent(UserfilterParts);
      if (sapuserID) {
        const userRoles = await executeHttpRequest(
          {
            destinationName: 'S4HANABASICAUTH'
          },
          {
            method: 'GET',
            url: '/sap/opu/odata4/sap/aps_iam_api_buser_read/srvd_a2x/sap/businessuser/0001/BusinessUserBusinessRoles',
            headers: {
              'Content-Type': 'application/json'
            },
            params: {
              $filter: encodeUserURI
            }

          }
        );

        ouserRoles = userRoles.data.value;
      }
    }
    const filteredRoles = ouserRoles.filter(role => role.BusinessRoleID.includes('FIN_TREASURY'));
    const filteredRolesFinal = filteredRoles.filter(role => role.BusinessRoleID.startsWith('YHPXXXX'));
    const companyCodeData = await executeHttpRequest(
      {
        destinationName: 'S4HANABASICAUTH'
      },
      {
        method: 'GET',
        url: '/sap/opu/odata/sap/YY1_YY1_COMPANYCODEAPI_CDS/YY1_YY1_COMPANYCODEAPI',
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
    if (filteredRolesFinal.length > 0) {
      const companyCodeResults = companyCodeData.data.d.results;
      if (companyCodefilterVH) {
        const companyCodes = companyCodeResults.filter(item => item.CompanyCode === companyCodefilterVH).map(item => ({
          companyCode: item.CompanyCode,
          companyCodeName: item.CompanyCodeName
        }));

        return companyCodes;
      } else {
        const companyCodes = companyCodeResults.map(item => ({
          companyCode: item.CompanyCode,
          companyCodeName: item.CompanyCodeName
        }));

        return companyCodes;
      }

    } else {
      const trimmedRoles = filteredRoles.map(role => ({
        ...role,
        TrimmedBusinessRoleID: role.BusinessRoleID.substring(3, 7)
      }));
      const companyCodeResults = companyCodeData.data.d.results;
      const companyCodes = companyCodeResults.map(item => ({
        companyCode: item.CompanyCode,
        companyCodeName: item.CompanyCodeName
      }));

      const allowedCompanyCodes = trimmedRoles.map(role => role.TrimmedBusinessRoleID);
      const finalCompanyCodes = companyCodes.filter(item => allowedCompanyCodes.includes(item.companyCode))
        .map(item => ({
          companyCode: item.companyCode,
          companyCodeName: item.companyCodeName
        }));

      if (companyCodefilterVH) {
        const companyCodesfinal = finalCompanyCodes.filter(item => item.CompanyCode === companyCodefilterVH).map(item => ({
          companyCode: item.CompanyCode,
          companyCodeName: item.CompanyCodeName
        }));

        return companyCodesfinal;
      } else {
        return finalCompanyCodes;
      }

    }

  };
  srv.on('READ', CompanyCodeVH, async (req) => {
    var aFilter = req.query.SELECT.where;
    userId = req.user.id == 'anonymous' ? 'ateo@abeam.com' : req.user.id;

    /*if (aFilter) {
      if (aFilter.length === 7) {
        for (let i = 0; i < aFilter.length; i++) {
          if (typeof aFilter[i] === 'object' && aFilter[i].ref) {
            if (aFilter[i].ref[0] === 'EmailAddress' && aFilter[i + 2]?.val) {
              //userId = aFilter[i + 2].val;
            }

            if (aFilter[i].ref[0] === 'CompanyCode' && aFilter[i + 2]?.val) {
              companyCodefilterVH = aFilter[i + 2].val;
            }
          }
        }
      } else {
        companyCodefilterVH = '';
        //userId = aFilter.find(item => typeof item === 'object' && item.val)?.val;
      }
    }*/

    var CCodeVHTab = await getCompanyVH().then(
      cCodeVHs => {
        var aRecord = [];
        cCodeVHs.forEach(element => {
          var record = {};
          record.CompanyCode = element.companyCode;
          record.CompanyCodeName = element.companyCodeName;
          //record.Emailid = userId;
          aRecord.push(record);
        });
        return aRecord;
      }
    );
    return CCodeVHTab;
  });

  //-----House Bank
  const getBankHouseBankVH = async function (req) {
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
  const extractfilterqueryhouseBank = async function (query, fieldName) {
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
    var ofiltersData = await extractfilterqueryhouseBank(req.query);
    houseBankFilter = "";
    companyCodeFilter = [];
    if (ofiltersData) {
      const CompanyCodeResults = ofiltersData.CompanyCode ?? [];
      if (CompanyCodeResults.length > 0) {
        companyCodeFilter = CompanyCodeResults;
      }
      const HouseBankResults = ofiltersData.HouseBank ?? [];
      if (HouseBankResults.length > 0) {
        houseBankFilter = HouseBankResults[0];
      }

    }

    var BankVHTab = await getBankHouseBankVH().then(
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

  srv.on('READ', MyEmail, async (req) => {
    return { Emailid: req.user.id, EmailAddress: req.user.id }
  })

})