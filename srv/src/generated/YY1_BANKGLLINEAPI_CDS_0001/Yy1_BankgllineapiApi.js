"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Yy1_BankgllineapiApi = void 0;
/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const Yy1_Bankgllineapi_1 = require("./Yy1_Bankgllineapi");
const Yy1_BankgllineapiRequestBuilder_1 = require("./Yy1_BankgllineapiRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class Yy1_BankgllineapiApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = Yy1_Bankgllineapi_1.Yy1_Bankgllineapi;
        this.deSerializers = deSerializers;
    }
    /**
     * Do not use this method or the constructor directly.
     * Use the service function as described in the documentation to get an API instance.
     */
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new Yy1_BankgllineapiApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {};
        return this;
    }
    requestBuilder() {
        return new Yy1_BankgllineapiRequestBuilder_1.Yy1_BankgllineapiRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(Yy1_Bankgllineapi_1.Yy1_Bankgllineapi, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                /**
                 * Static representation of the {@link id} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ID: fieldBuilder.buildEdmTypeField('ID', 'Edm.String', false),
                /**
                 * Static representation of the {@link sourceLedger} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SOURCE_LEDGER: fieldBuilder.buildEdmTypeField('SourceLedger', 'Edm.String', true),
                /**
                 * Static representation of the {@link companyCode} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                COMPANY_CODE: fieldBuilder.buildEdmTypeField('CompanyCode', 'Edm.String', true),
                /**
                 * Static representation of the {@link fiscalYear} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                FISCAL_YEAR: fieldBuilder.buildEdmTypeField('FiscalYear', 'Edm.String', true),
                /**
                 * Static representation of the {@link accountingDocument} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ACCOUNTING_DOCUMENT: fieldBuilder.buildEdmTypeField('AccountingDocument', 'Edm.String', true),
                /**
                 * Static representation of the {@link ledgerGlLineItem} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                LEDGER_GL_LINE_ITEM: fieldBuilder.buildEdmTypeField('LedgerGLLineItem', 'Edm.String', true),
                /**
                 * Static representation of the {@link ledger} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                LEDGER: fieldBuilder.buildEdmTypeField('Ledger', 'Edm.String', true),
                /**
                 * Static representation of the {@link glAccount} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                GL_ACCOUNT: fieldBuilder.buildEdmTypeField('GLAccount', 'Edm.String', true),
                /**
                 * Static representation of the {@link amountInTransactionCurrency} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                AMOUNT_IN_TRANSACTION_CURRENCY: fieldBuilder.buildEdmTypeField('AmountInTransactionCurrency', 'Edm.Decimal', true),
                /**
                 * Static representation of the {@link transactionCurrency} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                TRANSACTION_CURRENCY: fieldBuilder.buildEdmTypeField('TransactionCurrency', 'Edm.String', true),
                /**
                 * Static representation of the {@link companyCodeCurrency} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                COMPANY_CODE_CURRENCY: fieldBuilder.buildEdmTypeField('CompanyCodeCurrency', 'Edm.String', true),
                /**
                 * Static representation of the {@link amountInCompanyCodeCurrency} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                AMOUNT_IN_COMPANY_CODE_CURRENCY: fieldBuilder.buildEdmTypeField('AmountInCompanyCodeCurrency', 'Edm.Decimal', true),
                /**
                 * Static representation of the {@link globalCurrency} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                GLOBAL_CURRENCY: fieldBuilder.buildEdmTypeField('GlobalCurrency', 'Edm.String', true),
                /**
                 * Static representation of the {@link amountInGlobalCurrency} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                AMOUNT_IN_GLOBAL_CURRENCY: fieldBuilder.buildEdmTypeField('AmountInGlobalCurrency', 'Edm.Decimal', true),
                /**
                 * Static representation of the {@link chartOfAccounts} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CHART_OF_ACCOUNTS: fieldBuilder.buildEdmTypeField('ChartOfAccounts', 'Edm.String', true),
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
                 * Static representation of the {@link postingDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                POSTING_DATE: fieldBuilder.buildEdmTypeField('PostingDate', 'Edm.DateTime', true),
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
                ALL_FIELDS: new odata_v2_1.AllFields('*', Yy1_Bankgllineapi_1.Yy1_Bankgllineapi)
            };
        }
        return this._schema;
    }
}
exports.Yy1_BankgllineapiApi = Yy1_BankgllineapiApi;
//# sourceMappingURL=Yy1_BankgllineapiApi.js.map