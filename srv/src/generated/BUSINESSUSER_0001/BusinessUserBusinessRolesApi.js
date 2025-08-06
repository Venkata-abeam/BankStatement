"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusinessUserBusinessRolesApi = void 0;
/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const BusinessUserBusinessRoles_1 = require("./BusinessUserBusinessRoles");
const BusinessUserBusinessRolesRequestBuilder_1 = require("./BusinessUserBusinessRolesRequestBuilder");
const odata_v4_1 = require("@sap-cloud-sdk/odata-v4");
class BusinessUserBusinessRolesApi {
    constructor(deSerializers = odata_v4_1.defaultDeSerializers) {
        this.entityConstructor = BusinessUserBusinessRoles_1.BusinessUserBusinessRoles;
        this.deSerializers = deSerializers;
    }
    /**
     * Do not use this method or the constructor directly.
     * Use the service function as described in the documentation to get an API instance.
     */
    static _privateFactory(deSerializers = odata_v4_1.defaultDeSerializers) {
        return new BusinessUserBusinessRolesApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {};
        return this;
    }
    requestBuilder() {
        return new BusinessUserBusinessRolesRequestBuilder_1.BusinessUserBusinessRolesRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v4_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v4_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v4_1.FieldBuilder(BusinessUserBusinessRoles_1.BusinessUserBusinessRoles, this.deSerializers);
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
                 * Static representation of the {@link businessRoleId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BUSINESS_ROLE_ID: fieldBuilder.buildEdmTypeField('BusinessRoleID', 'Edm.String', false),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v4_1.AllFields('*', BusinessUserBusinessRoles_1.BusinessUserBusinessRoles)
            };
        }
        return this._schema;
    }
}
exports.BusinessUserBusinessRolesApi = BusinessUserBusinessRolesApi;
//# sourceMappingURL=BusinessUserBusinessRolesApi.js.map