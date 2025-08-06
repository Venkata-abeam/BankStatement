"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Yy1_HousebanklistapiApi = void 0;
/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const Yy1_Housebanklistapi_1 = require("./Yy1_Housebanklistapi");
const Yy1_HousebanklistapiRequestBuilder_1 = require("./Yy1_HousebanklistapiRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class Yy1_HousebanklistapiApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = Yy1_Housebanklistapi_1.Yy1_Housebanklistapi;
        this.deSerializers = deSerializers;
    }
    /**
     * Do not use this method or the constructor directly.
     * Use the service function as described in the documentation to get an API instance.
     */
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new Yy1_HousebanklistapiApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {};
        return this;
    }
    requestBuilder() {
        return new Yy1_HousebanklistapiRequestBuilder_1.Yy1_HousebanklistapiRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(Yy1_Housebanklistapi_1.Yy1_Housebanklistapi, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                /**
                 * Static representation of the {@link companyCode} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                COMPANY_CODE: fieldBuilder.buildEdmTypeField('CompanyCode', 'Edm.String', false),
                /**
                 * Static representation of the {@link houseBank} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                HOUSE_BANK: fieldBuilder.buildEdmTypeField('HouseBank', 'Edm.String', false),
                /**
                 * Static representation of the {@link houseBankAccount} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                HOUSE_BANK_ACCOUNT: fieldBuilder.buildEdmTypeField('HouseBankAccount', 'Edm.String', false),
                /**
                 * Static representation of the {@link companyCodeName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                COMPANY_CODE_NAME: fieldBuilder.buildEdmTypeField('CompanyCodeName', 'Edm.String', true),
                /**
                 * Static representation of the {@link bankAccountInternalId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BANK_ACCOUNT_INTERNAL_ID: fieldBuilder.buildEdmTypeField('BankAccountInternalID', 'Edm.String', true),
                /**
                 * Static representation of the {@link bankInternalId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BANK_INTERNAL_ID: fieldBuilder.buildEdmTypeField('BankInternalID', 'Edm.String', true),
                /**
                 * Static representation of the {@link bankCountry} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BANK_COUNTRY: fieldBuilder.buildEdmTypeField('BankCountry', 'Edm.String', true),
                /**
                 * Static representation of the {@link bankNumber} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BANK_NUMBER: fieldBuilder.buildEdmTypeField('BankNumber', 'Edm.String', true),
                /**
                 * Static representation of the {@link bankAccount} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BANK_ACCOUNT: fieldBuilder.buildEdmTypeField('BankAccount', 'Edm.String', true),
                /**
                 * Static representation of the {@link glAccount} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                GL_ACCOUNT: fieldBuilder.buildEdmTypeField('GLAccount', 'Edm.String', true),
                /**
                 * Static representation of the {@link bankName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BANK_NAME: fieldBuilder.buildEdmTypeField('BankName', 'Edm.String', true),
                /**
                 * Static representation of the {@link bankAccountDescription} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BANK_ACCOUNT_DESCRIPTION: fieldBuilder.buildEdmTypeField('BankAccountDescription', 'Edm.String', true),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', Yy1_Housebanklistapi_1.Yy1_Housebanklistapi)
            };
        }
        return this._schema;
    }
}
exports.Yy1_HousebanklistapiApi = Yy1_HousebanklistapiApi;
//# sourceMappingURL=Yy1_HousebanklistapiApi.js.map