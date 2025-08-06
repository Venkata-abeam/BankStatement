/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Yy1_Housebanklistapi } from './Yy1_Housebanklistapi';
import { Yy1_HousebanklistapiRequestBuilder } from './Yy1_HousebanklistapiRequestBuilder';
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
export declare class Yy1_HousebanklistapiApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<Yy1_Housebanklistapi<DeSerializersT>, DeSerializersT>
{
  deSerializers: DeSerializersT;
  private constructor();
  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(deSerializers?: DeSerializersT): Yy1_HousebanklistapiApi<DeSerializersT>;
  private navigationPropertyFields;
  _addNavigationProperties(linkedApis: []): this;
  entityConstructor: typeof Yy1_Housebanklistapi;
  requestBuilder(): Yy1_HousebanklistapiRequestBuilder<DeSerializersT>;
  entityBuilder(): EntityBuilderType<
    Yy1_Housebanklistapi<DeSerializersT>,
    DeSerializersT
  >;
  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable?: NullableT
  ): CustomField<
    Yy1_Housebanklistapi<DeSerializersT>,
    DeSerializersT,
    NullableT
  >;
  private _fieldBuilder?;
  get fieldBuilder(): FieldBuilder<typeof Yy1_Housebanklistapi, DeSerializersT>;
  private _schema?;
  get schema(): {
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
}
