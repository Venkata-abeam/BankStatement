/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BusinessUserBusinessCatalogs } from './BusinessUserBusinessCatalogs';
import { BusinessUserBusinessCatalogsRequestBuilder } from './BusinessUserBusinessCatalogsRequestBuilder';
import {
  CustomField,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField
} from '@sap-cloud-sdk/odata-v4';
export declare class BusinessUserBusinessCatalogsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<BusinessUserBusinessCatalogs<DeSerializersT>, DeSerializersT>
{
  deSerializers: DeSerializersT;
  private constructor();
  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(
    deSerializers?: DeSerializersT
  ): BusinessUserBusinessCatalogsApi<DeSerializersT>;
  private navigationPropertyFields;
  _addNavigationProperties(linkedApis: []): this;
  entityConstructor: typeof BusinessUserBusinessCatalogs;
  requestBuilder(): BusinessUserBusinessCatalogsRequestBuilder<DeSerializersT>;
  entityBuilder(): EntityBuilderType<
    BusinessUserBusinessCatalogs<DeSerializersT>,
    DeSerializersT
  >;
  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable?: NullableT
  ): CustomField<
    BusinessUserBusinessCatalogs<DeSerializersT>,
    DeSerializersT,
    NullableT
  >;
  private _fieldBuilder?;
  get fieldBuilder(): FieldBuilder<
    typeof BusinessUserBusinessCatalogs,
    DeSerializersT
  >;
  private _schema?;
  get schema(): {
    USER_ID: OrderableEdmTypeField<
      BusinessUserBusinessCatalogs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BUSINESS_CATALOG_ID: OrderableEdmTypeField<
      BusinessUserBusinessCatalogs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ALL_FIELDS: AllFields<BusinessUserBusinessCatalogs<DeSerializers>>;
  };
}
