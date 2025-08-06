/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Yy1_Bankstatementapi } from './Yy1_Bankstatementapi';
import { Yy1_BankstatementapiRequestBuilder } from './Yy1_BankstatementapiRequestBuilder';
import {
  CustomField,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField
} from '@sap-cloud-sdk/odata-v2';
export declare class Yy1_BankstatementapiApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<Yy1_Bankstatementapi<DeSerializersT>, DeSerializersT>
{
  deSerializers: DeSerializersT;
  private constructor();
  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(deSerializers?: DeSerializersT): Yy1_BankstatementapiApi<DeSerializersT>;
  private navigationPropertyFields;
  _addNavigationProperties(linkedApis: []): this;
  entityConstructor: typeof Yy1_Bankstatementapi;
  requestBuilder(): Yy1_BankstatementapiRequestBuilder<DeSerializersT>;
  entityBuilder(): EntityBuilderType<
    Yy1_Bankstatementapi<DeSerializersT>,
    DeSerializersT
  >;
  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable?: NullableT
  ): CustomField<
    Yy1_Bankstatementapi<DeSerializersT>,
    DeSerializersT,
    NullableT
  >;
  private _fieldBuilder?;
  get fieldBuilder(): FieldBuilder<typeof Yy1_Bankstatementapi, DeSerializersT>;
  private _schema?;
  get schema(): {
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
}
