const cds = require('@sap/cds');
const proxy = require('@cap-js-community/odata-v2-adapter');
const { executeHttpRequest } = require('@sap-cloud-sdk/http-client');
cds.on('bootstrap', (app) => app.use(proxy()));
module.exports = cds.service.impl(async function (srv) {
    var companyCodefilter,userId;
    const { CompanyCodeVH } = this.entities;
    const getCompanyVH = async function (req) {
        const { yy1HousebanklistapiCds0001 } = require('./src/generated/YY1_HOUSEBANKLISTAPI_CDS_0001');
        const { yy1_HousebanklistapiApi } = yy1HousebanklistapiCds0001();
        const { businessuser0001 } = require('./src/generated/BUSINESSUSER_0001');
        const { businessUsersApi } = businessuser0001();
        const { businessUserBusinessRolesApi }  = businessuser0001();
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
                    headers:{
                        'Content-Type':'application/json'
                    },
                    params:{
                        $filter: encodeURI
                    }

                }
        );
        if (userData.data){
            var sapuserID = userData.data.value[0].UserID;
            const UserfilterParts = [];
            UserfilterParts.push(`UserID eq '${sapuserID}'`);
            const encodeUserURI = encodeURIComponent(UserfilterParts);
            if (sapuserID){
                const userRoles = await executeHttpRequest(
                    {
                        destinationName: 'S4HANABASICAUTH'
                    },
                        {
                            method: 'GET',
                            url: '/sap/opu/odata4/sap/aps_iam_api_buser_read/srvd_a2x/sap/businessuser/0001/BusinessUserBusinessRoles',
                            headers:{
                                'Content-Type':'application/json'
                            },
                            params:{
                                $filter: encodeUserURI
                            }
        
                        }
                );
                
                ouserRoles = userRoles.data.value;
            }
        }
        const filteredRoles = ouserRoles.filter(role => role.BusinessRoleID.startsWith('YHP'));
        const filteredRolesFinal = filteredRoles.filter(role => role.BusinessRoleID.startsWith('YHPXXXX'));
        const companyCodeData = await executeHttpRequest(
            {
                destinationName: 'S4HANABASICAUTH'
            },
                {
                    method: 'GET',
                    url: '/sap/opu/odata/sap/YY1_YY1_COMPANYCODEAPI_CDS/YY1_YY1_COMPANYCODEAPI',
                    headers:{
                        'Content-Type':'application/json'
                    }
                }
        );
        if (filteredRolesFinal.length > 0){             
            const companyCodeResults = companyCodeData.data.d.results;
            if (companyCodefilter){
                const companyCodes = companyCodeResults.filter(item => item.CompanyCode === companyCodefilter).map(item => ({
                    companyCode: item.CompanyCode,
                    companyCodeName: item.CompanyCodeName
                  }));
     
                return companyCodes;
            }else{
                const companyCodes = companyCodeResults.map(item => ({
                    companyCode: item.CompanyCode,
                    companyCodeName: item.CompanyCodeName
                  }));
     
                return companyCodes;
            }

        }else{
            const trimmedRoles = filteredRolesFinal.map(role => ({
                ...role,
                TrimmedBusinessRoleID: role.BusinessRoleID.substring(2, 8)
              }));
            const companyCodeResults = companyCodeData.data.d.results;
            const companyCodes = companyCodeResults.map(item => ({
                companyCode: item.CompanyCode,
                companyCodeName: item.CompanyCodeName
              }));

              const allowedCompanyCodes = trimmedRoles.map( role => role.TrimmedBusinessRoleID );
              const finalCompanyCodes = companyCodes.filter(item => allowedCompanyCodes.includes(item.companyCode))
              .map(item => ({
                companyCode: item.companyCode,
                companyCodeName: item.companyCodeName
              }));

              if (companyCodefilter){
                const companyCodesfinal = finalCompanyCodes.filter(item => item.CompanyCode === companyCodefilter).map(item => ({
                    companyCode: item.CompanyCode,
                    companyCodeName: item.CompanyCodeName
                  }));
     
                return companyCodesfinal;
            }else{
                return finalCompanyCodes;
            }
              
        }

    };
    srv.on('READ',CompanyCodeVH, async (req) => {
        var aFilter = req.query.SELECT.where;
        if(aFilter){
            if (aFilter.length === 7){
                for (let i = 0; i < aFilter.length; i++) {
                    if (typeof aFilter[i] === 'object' && aFilter[i].ref) {
                      if (aFilter[i].ref[0] === 'EmailAddress' && aFilter[i + 2]?.val) {
                        userId = aFilter[i + 2].val;
                      }
                  
                      if (aFilter[i].ref[0] === 'CompanyCode' && aFilter[i + 2]?.val) {
                        companyCodefilter = aFilter[i + 2].val;
                      }
                    }
                  }
            }else{
                companyCodefilter = '';
                userId = aFilter.find(item => typeof item === 'object' && item.val)?.val;
            }
        }

        var CCodeVHTab = await getCompanyVH().then(
            cCodeVHs =>{
                var aRecord = [];
                cCodeVHs.forEach(element => {
                    var record = {};
                    record.CompanyCode = element.companyCode;
                    record.CompanyCodeName = element.companyCodeName;
                    aRecord.push(record);
                });
             return aRecord;
            }
        );
        return CCodeVHTab;
    });
});