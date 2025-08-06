namespace srv;

using {YY1_HOUSEBANKLISTAPI_CDS_0001 as HouseBank} from './external/YY1_HOUSEBANKLISTAPI_CDS_0001';

service houseBankVH @(path: 'housebankVH') {

entity HouseBankVH as
        projection on HouseBank.YY1_HOUSEBANKLISTAPI {
            key HouseBank,
                BankName,
                CompanyCode,
                CompanyCodeName
        }

}