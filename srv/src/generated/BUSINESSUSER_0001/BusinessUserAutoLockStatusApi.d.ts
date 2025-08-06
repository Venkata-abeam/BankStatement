/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BusinessUserAutoLockStatus } from './BusinessUserAutoLockStatus';
import { BusinessUserAutoLockStatusRequestBuilder } from './BusinessUserAutoLockStatusRequestBuilder';
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
export declare class BusinessUserAutoLockStatusApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<BusinessUserAutoLockStatus<DeSerializersT>, DeSerializersT>
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
  ): BusinessUserAutoLockStatusApi<DeSerializersT>;
  private navigationPropertyFields;
  _addNavigationProperties(linkedApis: []): this;
  entityConstructor: typeof BusinessUserAutoLockStatus;
  requestBuilder(): BusinessUserAutoLockStatusRequestBuilder<DeSerializersT>;
  entityBuilder(): EntityBuilderType<
    BusinessUserAutoLockStatus<DeSerializersT>,
    DeSerializersT
  >;
  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable?: NullableT
  ): CustomField<
    BusinessUserAutoLockStatus<DeSerializersT>,
    DeSerializersT,
    NullableT
  >;
  private _fieldBuilder?;
  get fieldBuilder(): FieldBuilder<
    typeof BusinessUserAutoLockStatus,
    DeSerializersT
  >;
  private _schema?;
  get schema(): {
    BUSINESS_USER_AUTO_LOCK_STATUS: OrderableEdmTypeField<
      BusinessUserAutoLockStatus<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    ALL_FIELDS: AllFields<BusinessUserAutoLockStatus<DeSerializers>>;
  };
}
