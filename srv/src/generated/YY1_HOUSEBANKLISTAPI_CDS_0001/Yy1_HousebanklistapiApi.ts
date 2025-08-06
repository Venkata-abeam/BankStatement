/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Yy1_Housebanklistapi } from './Yy1_Housebanklistapi';
import { Yy1_HousebanklistapiRequestBuilder } from './Yy1_HousebanklistapiRequestBuilder';
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
export class Yy1_HousebanklistapiApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<Yy1_Housebanklistapi<DeSerializersT>, DeSerializersT>
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
  ): Yy1_HousebanklistapiApi<DeSerializersT> {
    return new Yy1_HousebanklistapiApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = Yy1_Housebanklistapi;

  requestBuilder(): Yy1_HousebanklistapiRequestBuilder<DeSerializersT> {
    return new Yy1_HousebanklistapiRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    Yy1_Housebanklistapi<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<Yy1_Housebanklistapi<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    Yy1_Housebanklistapi<DeSerializersT>,
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
    typeof Yy1_Housebanklistapi,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        Yy1_Housebanklistapi,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    COMPANY_CODE: OrderableEdmTypeField<
      Yy1_Housebanklistapi<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    HOUSE_BANK: OrderableEdmTypeField<
      Yy1_Housebanklistapi<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    HOUSE_BANK_ACCOUNT: OrderableEdmTypeField<
      Yy1_Housebanklistapi<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    COMPANY_CODE_NAME: OrderableEdmTypeField<
      Yy1_Housebanklistapi<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BANK_ACCOUNT_INTERNAL_ID: OrderableEdmTypeField<
      Yy1_Housebanklistapi<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BANK_INTERNAL_ID: OrderableEdmTypeField<
      Yy1_Housebanklistapi<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BANK_COUNTRY: OrderableEdmTypeField<
      Yy1_Housebanklistapi<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BANK_NUMBER: OrderableEdmTypeField<
      Yy1_Housebanklistapi<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BANK_ACCOUNT: OrderableEdmTypeField<
      Yy1_Housebanklistapi<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GL_ACCOUNT: OrderableEdmTypeField<
      Yy1_Housebanklistapi<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BANK_NAME: OrderableEdmTypeField<
      Yy1_Housebanklistapi<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BANK_ACCOUNT_DESCRIPTION: OrderableEdmTypeField<
      Yy1_Housebanklistapi<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<Yy1_Housebanklistapi<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link companyCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPANY_CODE: fieldBuilder.buildEdmTypeField(
          'CompanyCode',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link houseBank} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HOUSE_BANK: fieldBuilder.buildEdmTypeField(
          'HouseBank',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link houseBankAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HOUSE_BANK_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'HouseBankAccount',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link companyCodeName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPANY_CODE_NAME: fieldBuilder.buildEdmTypeField(
          'CompanyCodeName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link bankAccountInternalId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_ACCOUNT_INTERNAL_ID: fieldBuilder.buildEdmTypeField(
          'BankAccountInternalID',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link bankInternalId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_INTERNAL_ID: fieldBuilder.buildEdmTypeField(
          'BankInternalID',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link bankCountry} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_COUNTRY: fieldBuilder.buildEdmTypeField(
          'BankCountry',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link bankNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_NUMBER: fieldBuilder.buildEdmTypeField(
          'BankNumber',
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
         * Static representation of the {@link glAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GL_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'GLAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link bankName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_NAME: fieldBuilder.buildEdmTypeField(
          'BankName',
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
        ALL_FIELDS: new AllFields('*', Yy1_Housebanklistapi)
      };
    }

    return this._schema;
  }
}
