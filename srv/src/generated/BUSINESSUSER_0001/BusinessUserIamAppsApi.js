"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusinessUserIamAppsApi = void 0;
/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const BusinessUserIamApps_1 = require("./BusinessUserIamApps");
const BusinessUserIamAppsRequestBuilder_1 = require("./BusinessUserIamAppsRequestBuilder");
const odata_v4_1 = require("@sap-cloud-sdk/odata-v4");
class BusinessUserIamAppsApi {
    constructor(deSerializers = odata_v4_1.defaultDeSerializers) {
        this.entityConstructor = BusinessUserIamApps_1.BusinessUserIamApps;
        this.deSerializers = deSerializers;
    }
    /**
     * Do not use this method or the constructor directly.
     * Use the service function as described in the documentation to get an API instance.
     */
    static _privateFactory(deSerializers = odata_v4_1.defaultDeSerializers) {
        return new BusinessUserIamAppsApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {};
        return this;
    }
    requestBuilder() {
        return new BusinessUserIamAppsRequestBuilder_1.BusinessUserIamAppsRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v4_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v4_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v4_1.FieldBuilder(BusinessUserIamApps_1.BusinessUserIamApps, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                /**
                 * Static representation of the {@link userId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                USER_ID: fieldBuilder.buildEdmTypeField('UserID', 'Edm.String', false),
                /**
                 * Static representation of the {@link appId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                APP_ID: fieldBuilder.buildEdmTypeField('AppID', 'Edm.String', false),
                /**
                 * Static representation of the {@link appType} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                APP_TYPE: fieldBuilder.buildEdmTypeField('AppType', 'Edm.String', false),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v4_1.AllFields('*', BusinessUserIamApps_1.BusinessUserIamApps)
            };
        }
        return this._schema;
    }
}
exports.BusinessUserIamAppsApi = BusinessUserIamAppsApi;
//# sourceMappingURL=BusinessUserIamAppsApi.js.map