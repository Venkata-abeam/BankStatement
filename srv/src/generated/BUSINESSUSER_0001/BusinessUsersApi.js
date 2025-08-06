"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusinessUsersApi = void 0;
/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const BusinessUsers_1 = require("./BusinessUsers");
const BusinessUsersRequestBuilder_1 = require("./BusinessUsersRequestBuilder");
const odata_v4_1 = require("@sap-cloud-sdk/odata-v4");
class BusinessUsersApi {
    constructor(deSerializers = odata_v4_1.defaultDeSerializers) {
        this.entityConstructor = BusinessUsers_1.BusinessUsers;
        this.deSerializers = deSerializers;
    }
    /**
     * Do not use this method or the constructor directly.
     * Use the service function as described in the documentation to get an API instance.
     */
    static _privateFactory(deSerializers = odata_v4_1.defaultDeSerializers) {
        return new BusinessUsersApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            APPLICATION_JOBS: new odata_v4_1.OneToManyLink('ApplicationJobs', this, linkedApis[0]),
            BUSINESS_CATALOGS: new odata_v4_1.OneToManyLink('BusinessCatalogs', this, linkedApis[1]),
            BUSINESS_ROLES: new odata_v4_1.OneToManyLink('BusinessRoles', this, linkedApis[2]),
            IAM_APPS: new odata_v4_1.OneToManyLink('IAMApps', this, linkedApis[3])
        };
        return this;
    }
    requestBuilder() {
        return new BusinessUsersRequestBuilder_1.BusinessUsersRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v4_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v4_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v4_1.FieldBuilder(BusinessUsers_1.BusinessUsers, this.deSerializers);
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
                 * Static representation of the {@link userName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                USER_NAME: fieldBuilder.buildEdmTypeField('UserName', 'Edm.String', false),
                /**
                 * Static representation of the {@link description} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                DESCRIPTION: fieldBuilder.buildEdmTypeField('Description', 'Edm.String', false),
                /**
                 * Static representation of the {@link firstName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                FIRST_NAME: fieldBuilder.buildEdmTypeField('FirstName', 'Edm.String', false),
                /**
                 * Static representation of the {@link lastName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                LAST_NAME: fieldBuilder.buildEdmTypeField('LastName', 'Edm.String', false),
                /**
                 * Static representation of the {@link eMailAddress} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                E_MAIL_ADDRESS: fieldBuilder.buildEdmTypeField('EMailAddress', 'Edm.String', false),
                /**
                 * Static representation of the {@link globalUserId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                GLOBAL_USER_ID: fieldBuilder.buildEdmTypeField('GlobalUserID', 'Edm.String', false),
                /**
                 * Static representation of the {@link businessUserGroup} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BUSINESS_USER_GROUP: fieldBuilder.buildEdmTypeField('BusinessUserGroup', 'Edm.String', false),
                /**
                 * Static representation of the {@link priceCategoryCode} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PRICE_CATEGORY_CODE: fieldBuilder.buildEdmTypeField('PriceCategoryCode', 'Edm.String', false),
                /**
                 * Static representation of the {@link priceCategory} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PRICE_CATEGORY: fieldBuilder.buildEdmTypeField('PriceCategory', 'Edm.String', false),
                /**
                 * Static representation of the {@link lockStatus} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                LOCK_STATUS: fieldBuilder.buildEdmTypeField('LockStatus', 'Edm.Boolean', false),
                /**
                 * Static representation of the {@link validity} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                VALIDITY: fieldBuilder.buildEdmTypeField('Validity', 'Edm.Boolean', false),
                /**
                 * Static representation of the {@link isLoggedOn} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                IS_LOGGED_ON: fieldBuilder.buildEdmTypeField('IsLoggedOn', 'Edm.Boolean', false),
                /**
                 * Static representation of the {@link neverLoggedOn} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                NEVER_LOGGED_ON: fieldBuilder.buildEdmTypeField('NeverLoggedOn', 'Edm.Boolean', false),
                /**
                 * Static representation of the {@link validFromDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                VALID_FROM_DATE: fieldBuilder.buildEdmTypeField('ValidFromDate', 'Edm.Date', true),
                /**
                 * Static representation of the {@link validToDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                VALID_TO_DATE: fieldBuilder.buildEdmTypeField('ValidToDate', 'Edm.Date', true),
                /**
                 * Static representation of the {@link lastLogonDateTime} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                LAST_LOGON_DATE_TIME: fieldBuilder.buildEdmTypeField('LastLogonDateTime', 'Edm.Date', true),
                /**
                 * Static representation of the {@link creationDateTime} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CREATION_DATE_TIME: fieldBuilder.buildEdmTypeField('CreationDateTime', 'Edm.DateTimeOffset', true),
                /**
                 * Static representation of the {@link creationByUserId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CREATION_BY_USER_ID: fieldBuilder.buildEdmTypeField('CreationByUserID', 'Edm.String', false),
                /**
                 * Static representation of the {@link creationByUserName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CREATION_BY_USER_NAME: fieldBuilder.buildEdmTypeField('CreationByUserName', 'Edm.String', false),
                /**
                 * Static representation of the {@link creationByUserDescription} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CREATION_BY_USER_DESCRIPTION: fieldBuilder.buildEdmTypeField('CreationByUserDescription', 'Edm.String', false),
                /**
                 * Static representation of the {@link creationByEMailAddress} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CREATION_BY_E_MAIL_ADDRESS: fieldBuilder.buildEdmTypeField('CreationByEMailAddress', 'Edm.String', false),
                /**
                 * Static representation of the {@link creationByGlobalUserId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CREATION_BY_GLOBAL_USER_ID: fieldBuilder.buildEdmTypeField('CreationByGlobalUserID', 'Edm.String', false),
                /**
                 * Static representation of the {@link lastChangedDateTime} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                LAST_CHANGED_DATE_TIME: fieldBuilder.buildEdmTypeField('LastChangedDateTime', 'Edm.DateTimeOffset', true),
                /**
                 * Static representation of the {@link lastChangedByUserId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                LAST_CHANGED_BY_USER_ID: fieldBuilder.buildEdmTypeField('LastChangedByUserID', 'Edm.String', false),
                /**
                 * Static representation of the {@link lastChangedByUserName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                LAST_CHANGED_BY_USER_NAME: fieldBuilder.buildEdmTypeField('LastChangedByUserName', 'Edm.String', false),
                /**
                 * Static representation of the {@link lastChangedByUserDescription} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                LAST_CHANGED_BY_USER_DESCRIPTION: fieldBuilder.buildEdmTypeField('LastChangedByUserDescription', 'Edm.String', false),
                /**
                 * Static representation of the {@link lastChangedByEMailAddress} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                LAST_CHANGED_BY_E_MAIL_ADDRESS: fieldBuilder.buildEdmTypeField('LastChangedByEMailAddress', 'Edm.String', false),
                /**
                 * Static representation of the {@link lastChangedByGlobalUserId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                LAST_CHANGED_BY_GLOBAL_USER_ID: fieldBuilder.buildEdmTypeField('LastChangedByGlobalUserID', 'Edm.String', false),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v4_1.AllFields('*', BusinessUsers_1.BusinessUsers)
            };
        }
        return this._schema;
    }
}
exports.BusinessUsersApi = BusinessUsersApi;
//# sourceMappingURL=BusinessUsersApi.js.map