"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.businessuser0001 = businessuser0001;
/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const BusinessUserApplicationJobsApi_1 = require("./BusinessUserApplicationJobsApi");
const BusinessUserAutoLockStatusApi_1 = require("./BusinessUserAutoLockStatusApi");
const BusinessUserBusinessCatalogsApi_1 = require("./BusinessUserBusinessCatalogsApi");
const BusinessUserBusinessRolesApi_1 = require("./BusinessUserBusinessRolesApi");
const BusinessUserIamAppsApi_1 = require("./BusinessUserIamAppsApi");
const BusinessUsersApi_1 = require("./BusinessUsersApi");
const odata_v4_1 = require("@sap-cloud-sdk/odata-v4");
const BatchRequest_1 = require("./BatchRequest");
function businessuser0001(deSerializers = odata_v4_1.defaultDeSerializers) {
    return new Businessuser0001((0, odata_v4_1.mergeDefaultDeSerializersWith)(deSerializers));
}
class Businessuser0001 {
    constructor(deSerializers) {
        this.apis = {};
        this.deSerializers = deSerializers;
    }
    initApi(key, entityApi) {
        if (!this.apis[key]) {
            this.apis[key] = entityApi._privateFactory(this.deSerializers);
        }
        return this.apis[key];
    }
    get businessUserApplicationJobsApi() {
        return this.initApi('businessUserApplicationJobsApi', BusinessUserApplicationJobsApi_1.BusinessUserApplicationJobsApi);
    }
    get businessUserAutoLockStatusApi() {
        return this.initApi('businessUserAutoLockStatusApi', BusinessUserAutoLockStatusApi_1.BusinessUserAutoLockStatusApi);
    }
    get businessUserBusinessCatalogsApi() {
        return this.initApi('businessUserBusinessCatalogsApi', BusinessUserBusinessCatalogsApi_1.BusinessUserBusinessCatalogsApi);
    }
    get businessUserBusinessRolesApi() {
        return this.initApi('businessUserBusinessRolesApi', BusinessUserBusinessRolesApi_1.BusinessUserBusinessRolesApi);
    }
    get businessUserIamAppsApi() {
        return this.initApi('businessUserIamAppsApi', BusinessUserIamAppsApi_1.BusinessUserIamAppsApi);
    }
    get businessUsersApi() {
        const api = this.initApi('businessUsersApi', BusinessUsersApi_1.BusinessUsersApi);
        const linkedApis = [
            this.initApi('businessUserApplicationJobsApi', BusinessUserApplicationJobsApi_1.BusinessUserApplicationJobsApi),
            this.initApi('businessUserBusinessCatalogsApi', BusinessUserBusinessCatalogsApi_1.BusinessUserBusinessCatalogsApi),
            this.initApi('businessUserBusinessRolesApi', BusinessUserBusinessRolesApi_1.BusinessUserBusinessRolesApi),
            this.initApi('businessUserIamAppsApi', BusinessUserIamAppsApi_1.BusinessUserIamAppsApi)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get batch() {
        return BatchRequest_1.batch;
    }
    get changeset() {
        return BatchRequest_1.changeset;
    }
}
//# sourceMappingURL=service.js.map