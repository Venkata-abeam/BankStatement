namespace srv;

using {YY1_HOUSEBANKLISTAPI_CDS_0001 as cCodeVH} from './external/YY1_HOUSEBANKLISTAPI_CDS_0001';

service companyCodeVH @(path: 'companyCodeVH') {

entity MyVirtualEntity {
  key   CompanyCode   : String;
        EmailAddress     : String;
        CompanyCodeName    : String;
}
entity CompanyCodeVH as
        projection on MyVirtualEntity {
            key CompanyCode,
            EmailAddress,
            CompanyCodeName,
                
        }

}