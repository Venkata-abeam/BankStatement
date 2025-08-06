"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Yy1_BankstatementapiApi = void 0;
/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const Yy1_Bankstatementapi_1 = require("./Yy1_Bankstatementapi");
const Yy1_BankstatementapiRequestBuilder_1 = require("./Yy1_BankstatementapiRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class Yy1_BankstatementapiApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = Yy1_Bankstatementapi_1.Yy1_Bankstatementapi;
        this.deSerializers = deSerializers;
    }
    /**
     * Do not use this method or the constructor directly.
     * Use the service function as described in the documentation to get an API instance.
     */
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new Yy1_BankstatementapiApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {};
        return this;
    }
    requestBuilder() {
        return new Yy1_BankstatementapiRequestBuilder_1.Yy1_BankstatementapiRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(Yy1_Bankstatementapi_1.Yy1_Bankstatementapi, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                /**
                 * Static representation of the {@link bankStatementShortId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BANK_STATEMENT_SHORT_ID: fieldBuilder.buildEdmTypeField('BankStatementShortID', 'Edm.String', false),
                /**
                 * Static representation of the {@link companyCode} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                COMPANY_CODE: fieldBuilder.buildEdmTypeField('CompanyCode', 'Edm.String', true),
                /**
                 * Static representation of the {@link houseBank} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                HOUSE_BANK: fieldBuilder.buildEdmTypeField('HouseBank', 'Edm.String', true),
                /**
                 * Static representation of the {@link houseBankAccount} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                HOUSE_BANK_ACCOUNT: fieldBuilder.buildEdmTypeField('HouseBankAccount', 'Edm.String', true),
                /**
                 * Static representation of the {@link bankStatementDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BANK_STATEMENT_DATE: fieldBuilder.buildEdmTypeField('BankStatementDate', 'Edm.DateTime', true),
                /**
                 * Static representation of the {@link openingBalanceAmtInTransCrcy} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                OPENING_BALANCE_AMT_IN_TRANS_CRCY: fieldBuilder.buildEdmTypeField('OpeningBalanceAmtInTransCrcy', 'Edm.Decimal', true),
                /**
                 * Static representation of the {@link closingBalanceAmtInTransCrcy} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CLOSING_BALANCE_AMT_IN_TRANS_CRCY: fieldBuilder.buildEdmTypeField('ClosingBalanceAmtInTransCrcy', 'Edm.Decimal', true),
                /**
                 * Static representation of the {@link currency} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CURRENCY: fieldBuilder.buildEdmTypeField('Currency', 'Edm.String', true),
                /**
                 * Static representation of the {@link companyCode1} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                COMPANY_CODE_1: fieldBuilder.buildEdmTypeField('CompanyCode_1', 'Edm.String', true),
                /**
                 * Static representation of the {@link houseBank1} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                HOUSE_BANK_1: fieldBuilder.buildEdmTypeField('HouseBank_1', 'Edm.String', true),
                /**
                 * Static representation of the {@link houseBankAccount1} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                HOUSE_BANK_ACCOUNT_1: fieldBuilder.buildEdmTypeField('HouseBankAccount_1', 'Edm.String', true),
                /**
                 * Static representation of the {@link glAccount} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                GL_ACCOUNT: fieldBuilder.buildEdmTypeField('GLAccount', 'Edm.String', true),
                /**
                 * Static representation of the {@link bankAccount} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BANK_ACCOUNT: fieldBuilder.buildEdmTypeField('BankAccount', 'Edm.String', true),
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
                ALL_FIELDS: new odata_v2_1.AllFields('*', Yy1_Bankstatementapi_1.Yy1_Bankstatementapi)
            };
        }
        return this._schema;
    }
}
exports.Yy1_BankstatementapiApi = Yy1_BankstatementapiApi;
//# sourceMappingURL=Yy1_BankstatementapiApi.js.map