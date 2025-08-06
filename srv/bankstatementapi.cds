namespace srv;

using {YY1_HOUSEBANKLISTAPI_CDS_0001 as Bank} from './external/YY1_HOUSEBANKLISTAPI_CDS_0001';

service bankstatementapi @(path: 'bankstatementapi') {

    entity BankStatement as
        projection on Bank.YY1_HOUSEBANKLISTAPI {
            key HouseBank,
                CompanyCode,
                CompanyCodeName,
                HouseBankAccount,
                BankName,
                BankAccount,
                BankAccountDescription,
                // Virtual fields from React logic
                '' as DateRange      : Date,
                '' as OpeningBalance : String,
                '' as OpenDate       : String,
                '' as ClosingBalance : String,
                '' as CloseDate      : String,
                '' as CashInflow     : String,
                '' as CashOutflow    : String
        };

}
annotate bankstatementapi with @cds.server.body_parser.limit:'20000mb'
