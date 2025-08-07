const cds = require('@sap/cds');
const proxy = require('@cap-js-community/odata-v2-adapter');
const { elements } = require('@sap/cds/lib/ql/cds.ql-infer');
const { or } = require('@sap-cloud-sdk/odata-v2');
const { and } = require('@sap-cloud-sdk/odata-v2');
const { parseZone, isMoment } = require('moment');
const BigNumber = require('bignumber.js');
const { Yy1_BankstatementapiApi } = require('./src/generated/YY1_BANKSTATEMENTAPI_CDS_0001/Yy1_BankstatementapiApi');
const { foreach } = require('@sap/cds');
cds.on('bootstrap', (app) => app.use(proxy()));
module.exports = cds.service.impl(async function (srv) {
  var companyCodefilter = [];
  var oStartDate;
  var oEndDate;
  var houseBankfilter = [];
  var houseBankAccfilter = [];
  const { BankStatement } = this.entities;

  const getBankData = async function (req) {
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
    //console.log('----houseBanksfilteredData Succcess Triggered');

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
    //console.log('----bankStatementsfilteredData Succcess Triggered');

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
    //console.log('---------------------------bankStatementResults');
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
    //console.log('---------------------------bankGLLinesfilteredData');

    const formatNumber = (val) => isNaN(val) ? '-' : parseFloat(val).toLocaleString('en-US', { minimumFractionDigits: 2 });

    const combinedData = async function (houseBanksfilteredData, bankStatementResults, bankGLLinesfilteredData, oStartDate, oEndDate) {
      var aCombinedFinalData = [];
      for (const housebank of houseBanksfilteredData) {
        var finaldata = {};
        var StatementopeningDate, statementClosingDate, statementOpeningBalance, statementClosingBalance, Inflow, Outflow
        const {
          companyCode,
          houseBank,
          houseBankAccount,
          glAccount,
          bankAccount
        } = housebank;
        //console.log(companyCode + houseBank + houseBankAccount + glAccount + bankAccount);
        //Get Bank Statement Data
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
           // console.log('----satisfied---');
            let statementopen = new BigNumber(0);
            statementopen = new BigNumber(statementData.openingBalance);
            StatementopeningDate = statementData.openingDate;
            statementOpeningBalance = formatNumber(statementopen);
          } else {
           // console.log('---else satisfied---opening balance');
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
           // console.log('---else satisfied---closing balance');
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

          StatementopeningDate = 'GL Derived';
          const statementopenamount = bankGLLinesOpening.reduce((sum, gl) => {
            return sum.plus(new BigNumber(gl.amountInTransactionCurrency));
          }, new BigNumber(0));
          statementOpeningBalance = formatNumber(statementopenamount);
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

        //Inflow and outflow Data
        let inflow = new BigNumber(0);
        let outflow = 0;
        matchingGLs.forEach(entry => {
         // console.log('------------GL Value--------------')
          //console.log(formatNumber(new BigNumber(entry.amountInTransactionCurrency)));
          if (entry.amountInTransactionCurrency > 0) {
            //console.log('-----Plus-----');
            //inflow += new BigNumber(entry.amountInTransactionCurrency);
            inflow = inflow.plus(new BigNumber(entry.amountInTransactionCurrency));
           // console.log(formatNumber(inflow));
          } else if (entry.amountInTransactionCurrency < 0) {
           // console.log('-----Minus-----');
            outflow -= new BigNumber(entry.amountInTransactionCurrency);
           // console.log(formatNumber(outflow));
          }
        });

        Inflow = formatNumber(inflow);
       // console.log('-----------Inflow-----------');
       // console.log(Inflow);
        Outflow = formatNumber(outflow);
       // console.log(Outflow);


        finaldata.houseBank = housebank.houseBank;
        finaldata.companyCode = housebank.companyCode;
        finaldata.companyCodeName = housebank.companyCodeName;
        finaldata.houseBankAccount = housebank.houseBankAccount;
        finaldata.bankName = housebank.bankName;
        finaldata.bankAccount = housebank.bankAccount;
        finaldata.bankAccountDescription = housebank.bankAccountDescription;
        finaldata.OpeningBalance = statementOpeningBalance;
        finaldata.OpenDate = StatementopeningDate;
        finaldata.ClosingBalance = statementClosingBalance;
        finaldata.CloseDate = statementClosingDate;
        finaldata.CashInflow = Inflow;
        finaldata.CashOutflow = Outflow;
        aCombinedFinalData.push(finaldata);
      }
      return aCombinedFinalData;
    };
    const result = await combinedData(houseBanksfilteredData, bankStatementResults, bankGLLinesfilteredData, oStartDate, oEndDate);

    return result
      .sort((a, b) => parseInt(a.companyCode) - parseInt(b.companyCode))
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
      }
    }

    extract(where);
    return result;
  };


  srv.on('READ', BankStatement, async (req) => {
    const aFilter = req.query.SELECT.where;
    var ofiltersData = await extractfilterquery(req.query);
    if (ofiltersData) {
      const CompanyCodeResults = ofiltersData.CompanyCode ?? [];
      if (CompanyCodeResults.length > 0) {
        companyCodefilter = CompanyCodeResults;
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
      //console.log(PostingDateResults)
      if (PostingDateResults.length > 1) {
        oStartDate = PostingDateResults[0]
        oEndDate = PostingDateResults[1]
      } else {
        oStartDate = PostingDateResults[0]
        oEndDate = PostingDateResults[0]
      }
    }
    /*if (!aFilter) {
    } else {
      if (aFilter.length === 13) {
        companyCodefilter = aFilter[2].val;
        const ofilterDate = aFilter[4];
        oStartDate = new Date(ofilterDate.xpr[2].val);
        oEndDate = new Date(ofilterDate.xpr[6].val);
        houseBankfilter = aFilter[8].val;
        houseBankAccfilter = aFilter[12].val;
      } else {
        companyCodefilter = aFilter[2].val;
        const ofilterDate = aFilter[4];
        oStartDate = new Date(ofilterDate.xpr[2].val);
        oEndDate = new Date(ofilterDate.xpr[6].val);
        if (aFilter.length > 5) {
          if (aFilter[6].ref == 'HouseBank') {
            houseBankfilter = aFilter[8].val;
          } else if (aFilter[6].ref == 'HouseBankAccount') {
            houseBankAccfilter = aFilter[8].val;
          }
        }
      }
    } */

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
          record.CashInflow = element.CashInflow;
          record.CashOutflow = element.CashOutflow;
          aRecord.push(record);
        });
        return aRecord;
      }
    );
    return BankTab;
  });

})