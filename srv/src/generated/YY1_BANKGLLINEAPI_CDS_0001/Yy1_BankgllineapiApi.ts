/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Yy1_Bankgllineapi } from './Yy1_Bankgllineapi';
import { Yy1_BankgllineapiRequestBuilder } from './Yy1_BankgllineapiRequestBuilder';
import {
  CustomField,
  defaultDeSerializers,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  entityBuilder,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField
} from '@sap-cloud-sdk/odata-v2';
export class Yy1_BankgllineapiApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<Yy1_Bankgllineapi<DeSerializersT>, DeSerializersT>
{
  public deSerializers: DeSerializersT;

  private constructor(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ) {
    this.deSerializers = deSerializers;
  }

  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  public static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ): Yy1_BankgllineapiApi<DeSerializersT> {
    return new Yy1_BankgllineapiApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = Yy1_Bankgllineapi;

  requestBuilder(): Yy1_BankgllineapiRequestBuilder<DeSerializersT> {
    return new Yy1_BankgllineapiRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    Yy1_Bankgllineapi<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<Yy1_Bankgllineapi<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<Yy1_Bankgllineapi<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof Yy1_Bankgllineapi,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        Yy1_Bankgllineapi,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ID: OrderableEdmTypeField<
      Yy1_Bankgllineapi<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SOURCE_LEDGER: OrderableEdmTypeField<
      Yy1_Bankgllineapi<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMPANY_CODE: OrderableEdmTypeField<
      Yy1_Bankgllineapi<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FISCAL_YEAR: OrderableEdmTypeField<
      Yy1_Bankgllineapi<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACCOUNTING_DOCUMENT: OrderableEdmTypeField<
      Yy1_Bankgllineapi<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LEDGER_GL_LINE_ITEM: OrderableEdmTypeField<
      Yy1_Bankgllineapi<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LEDGER: OrderableEdmTypeField<
      Yy1_Bankgllineapi<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GL_ACCOUNT: OrderableEdmTypeField<
      Yy1_Bankgllineapi<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AMOUNT_IN_TRANSACTION_CURRENCY: OrderableEdmTypeField<
      Yy1_Bankgllineapi<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    TRANSACTION_CURRENCY: OrderableEdmTypeField<
      Yy1_Bankgllineapi<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMPANY_CODE_CURRENCY: OrderableEdmTypeField<
      Yy1_Bankgllineapi<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AMOUNT_IN_COMPANY_CODE_CURRENCY: OrderableEdmTypeField<
      Yy1_Bankgllineapi<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    GLOBAL_CURRENCY: OrderableEdmTypeField<
      Yy1_Bankgllineapi<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AMOUNT_IN_GLOBAL_CURRENCY: OrderableEdmTypeField<
      Yy1_Bankgllineapi<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    CHART_OF_ACCOUNTS: OrderableEdmTypeField<
      Yy1_Bankgllineapi<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HOUSE_BANK: OrderableEdmTypeField<
      Yy1_Bankgllineapi<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HOUSE_BANK_ACCOUNT: OrderableEdmTypeField<
      Yy1_Bankgllineapi<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POSTING_DATE: OrderableEdmTypeField<
      Yy1_Bankgllineapi<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    BANK_ACCOUNT: OrderableEdmTypeField<
      Yy1_Bankgllineapi<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BANK_ACCOUNT_DESCRIPTION: OrderableEdmTypeField<
      Yy1_Bankgllineapi<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<Yy1_Bankgllineapi<DeSerializers>>;
  };

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
        SOURCE_LEDGER: fieldBuilder.buildEdmTypeField(
          'SourceLedger',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link companyCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPANY_CODE: fieldBuilder.buildEdmTypeField(
          'CompanyCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link fiscalYear} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FISCAL_YEAR: fieldBuilder.buildEdmTypeField(
          'FiscalYear',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link accountingDocument} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNTING_DOCUMENT: fieldBuilder.buildEdmTypeField(
          'AccountingDocument',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link ledgerGlLineItem} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEDGER_GL_LINE_ITEM: fieldBuilder.buildEdmTypeField(
          'LedgerGLLineItem',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link ledger} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEDGER: fieldBuilder.buildEdmTypeField('Ledger', 'Edm.String', true),
        /**
         * Static representation of the {@link glAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GL_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'GLAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link amountInTransactionCurrency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT_IN_TRANSACTION_CURRENCY: fieldBuilder.buildEdmTypeField(
          'AmountInTransactionCurrency',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link transactionCurrency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_CURRENCY: fieldBuilder.buildEdmTypeField(
          'TransactionCurrency',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link companyCodeCurrency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPANY_CODE_CURRENCY: fieldBuilder.buildEdmTypeField(
          'CompanyCodeCurrency',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link amountInCompanyCodeCurrency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT_IN_COMPANY_CODE_CURRENCY: fieldBuilder.buildEdmTypeField(
          'AmountInCompanyCodeCurrency',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link globalCurrency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GLOBAL_CURRENCY: fieldBuilder.buildEdmTypeField(
          'GlobalCurrency',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link amountInGlobalCurrency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT_IN_GLOBAL_CURRENCY: fieldBuilder.buildEdmTypeField(
          'AmountInGlobalCurrency',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link chartOfAccounts} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHART_OF_ACCOUNTS: fieldBuilder.buildEdmTypeField(
          'ChartOfAccounts',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link houseBank} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HOUSE_BANK: fieldBuilder.buildEdmTypeField(
          'HouseBank',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link houseBankAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HOUSE_BANK_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'HouseBankAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link postingDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTING_DATE: fieldBuilder.buildEdmTypeField(
          'PostingDate',
          'Edm.DateTime',
          true
        ),
        /**
         * Static representation of the {@link bankAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'BankAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link bankAccountDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_ACCOUNT_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'BankAccountDescription',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', Yy1_Bankgllineapi)
      };
    }

    return this._schema;
  }
}
