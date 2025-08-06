/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BusinessUserIamApps } from './BusinessUserIamApps';
import { BusinessUserIamAppsRequestBuilder } from './BusinessUserIamAppsRequestBuilder';
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
export declare class BusinessUserIamAppsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<BusinessUserIamApps<DeSerializersT>, DeSerializersT>
{
  deSerializers: DeSerializersT;
  private constructor();
  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(deSerializers?: DeSerializersT): BusinessUserIamAppsApi<DeSerializersT>;
  private navigationPropertyFields;
  _addNavigationProperties(linkedApis: []): this;
  entityConstructor: typeof BusinessUserIamApps;
  requestBuilder(): BusinessUserIamAppsRequestBuilder<DeSerializersT>;
  entityBuilder(): EntityBuilderType<
    BusinessUserIamApps<DeSerializersT>,
    DeSerializersT
  >;
  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable?: NullableT
  ): CustomField<
    BusinessUserIamApps<DeSerializersT>,
    DeSerializersT,
    NullableT
  >;
  private _fieldBuilder?;
  get fieldBuilder(): FieldBuilder<typeof BusinessUserIamApps, DeSerializersT>;
  private _schema?;
  get schema(): {
    USER_ID: OrderableEdmTypeField<
      BusinessUserIamApps<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    APP_ID: OrderableEdmTypeField<
      BusinessUserIamApps<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    APP_TYPE: OrderableEdmTypeField<
      BusinessUserIamApps<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ALL_FIELDS: AllFields<BusinessUserIamApps<DeSerializers>>;
  };
}
