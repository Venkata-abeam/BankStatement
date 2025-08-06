/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Yy1_Bankstatementapi } from './Yy1_Bankstatementapi';
import { Yy1_BankstatementapiRequestBuilder } from './Yy1_BankstatementapiRequestBuilder';
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
export class Yy1_BankstatementapiApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<Yy1_Bankstatementapi<DeSerializersT>, DeSerializersT>
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
  ): Yy1_BankstatementapiApi<DeSerializersT> {
    return new Yy1_BankstatementapiApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = Yy1_Bankstatementapi;

  requestBuilder(): Yy1_BankstatementapiRequestBuilder<DeSerializersT> {
    return new Yy1_BankstatementapiRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    Yy1_Bankstatementapi<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<Yy1_Bankstatementapi<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    Yy1_Bankstatementapi<DeSerializersT>,
    DeSerializersT,
    NullableT
  > {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof Yy1_Bankstatementapi,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        Yy1_Bankstatementapi,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    BANK_STATEMENT_SHORT_ID: OrderableEdmTypeField<
      Yy1_Bankstatementapi<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    COMPANY_CODE: OrderableEdmTypeField<
      Yy1_Bankstatementapi<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HOUSE_BANK: OrderableEdmTypeField<
      Yy1_Bankstatementapi<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HOUSE_BANK_ACCOUNT: OrderableEdmTypeField<
      Yy1_Bankstatementapi<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BANK_STATEMENT_DATE: OrderableEdmTypeField<
      Yy1_Bankstatementapi<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    OPENING_BALANCE_AMT_IN_TRANS_CRCY: OrderableEdmTypeField<
      Yy1_Bankstatementapi<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    CLOSING_BALANCE_AMT_IN_TRANS_CRCY: OrderableEdmTypeField<
      Yy1_Bankstatementapi<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    CURRENCY: OrderableEdmTypeField<
      Yy1_Bankstatementapi<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMPANY_CODE_1: OrderableEdmTypeField<
      Yy1_Bankstatementapi<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HOUSE_BANK_1: OrderableEdmTypeField<
      Yy1_Bankstatementapi<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HOUSE_BANK_ACCOUNT_1: OrderableEdmTypeField<
      Yy1_Bankstatementapi<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GL_ACCOUNT: OrderableEdmTypeField<
      Yy1_Bankstatementapi<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BANK_ACCOUNT: OrderableEdmTypeField<
      Yy1_Bankstatementapi<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BANK_ACCOUNT_DESCRIPTION: OrderableEdmTypeField<
      Yy1_Bankstatementapi<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<Yy1_Bankstatementapi<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link bankStatementShortId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_STATEMENT_SHORT_ID: fieldBuilder.buildEdmTypeField(
          'BankStatementShortID',
          'Edm.String',
          false
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
         * Static representation of the {@link bankStatementDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_STATEMENT_DATE: fieldBuilder.buildEdmTypeField(
          'BankStatementDate',
          'Edm.DateTime',
          true
        ),
        /**
         * Static representation of the {@link openingBalanceAmtInTransCrcy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OPENING_BALANCE_AMT_IN_TRANS_CRCY: fieldBuilder.buildEdmTypeField(
          'OpeningBalanceAmtInTransCrcy',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link closingBalanceAmtInTransCrcy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CLOSING_BALANCE_AMT_IN_TRANS_CRCY: fieldBuilder.buildEdmTypeField(
          'ClosingBalanceAmtInTransCrcy',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link currency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CURRENCY: fieldBuilder.buildEdmTypeField(
          'Currency',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link companyCode1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPANY_CODE_1: fieldBuilder.buildEdmTypeField(
          'CompanyCode_1',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link houseBank1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HOUSE_BANK_1: fieldBuilder.buildEdmTypeField(
          'HouseBank_1',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link houseBankAccount1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HOUSE_BANK_ACCOUNT_1: fieldBuilder.buildEdmTypeField(
          'HouseBankAccount_1',
          'Edm.String',
          true
        ),
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
        ALL_FIELDS: new AllFields('*', Yy1_Bankstatementapi)
      };
    }

    return this._schema;
  }
}
