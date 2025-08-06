"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusinessUserAutoLockStatusApi = void 0;
/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const BusinessUserAutoLockStatus_1 = require("./BusinessUserAutoLockStatus");
const BusinessUserAutoLockStatusRequestBuilder_1 = require("./BusinessUserAutoLockStatusRequestBuilder");
const odata_v4_1 = require("@sap-cloud-sdk/odata-v4");
class BusinessUserAutoLockStatusApi {
    constructor(deSerializers = odata_v4_1.defaultDeSerializers) {
        this.entityConstructor = BusinessUserAutoLockStatus_1.BusinessUserAutoLockStatus;
        this.deSerializers = deSerializers;
    }
    /**
     * Do not use this method or the constructor directly.
     * Use the service function as described in the documentation to get an API instance.
     */
    static _privateFactory(deSerializers = odata_v4_1.defaultDeSerializers) {
        return new BusinessUserAutoLockStatusApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {};
        return this;
    }
    requestBuilder() {
        return new BusinessUserAutoLockStatusRequestBuilder_1.BusinessUserAutoLockStatusRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v4_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v4_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v4_1.FieldBuilder(BusinessUserAutoLockStatus_1.BusinessUserAutoLockStatus, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                /**
                 * Static representation of the {@link businessUserAutoLockStatus} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BUSINESS_USER_AUTO_LOCK_STATUS: fieldBuilder.buildEdmTypeField('BusinessUserAutoLockStatus', 'Edm.Boolean', false),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v4_1.AllFields('*', BusinessUserAutoLockStatus_1.BusinessUserAutoLockStatus)
            };
        }
        return this._schema;
    }
}
exports.BusinessUserAutoLockStatusApi = BusinessUserAutoLockStatusApi;
//# sourceMappingURL=BusinessUserAutoLockStatusApi.js.map