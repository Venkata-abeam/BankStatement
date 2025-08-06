namespace srv;

using {YY1_HOUSEBANKLISTAPI_CDS_0001 as BankVH} from './external/YY1_HOUSEBANKLISTAPI_CDS_0001';

service bankaccountVH @(path: 'bankaccountVH') {

entity BankAccountVH as
        projection on BankVH.YY1_HOUSEBANKLISTAPI {
            key HouseBank,
                HouseBankAccount,
                BankAccountDescription,
                CompanyCode,
                CompanyCodeName
        }

}