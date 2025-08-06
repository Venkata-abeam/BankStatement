/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BusinessUserBusinessRoles } from './BusinessUserBusinessRoles';
import { BusinessUserBusinessRolesRequestBuilder } from './BusinessUserBusinessRolesRequestBuilder';
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
export declare class BusinessUserBusinessRolesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<BusinessUserBusinessRoles<DeSerializersT>, DeSerializersT>
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
  ): BusinessUserBusinessRolesApi<DeSerializersT>;
  private navigationPropertyFields;
  _addNavigationProperties(linkedApis: []): this;
  entityConstructor: typeof BusinessUserBusinessRoles;
  requestBuilder(): BusinessUserBusinessRolesRequestBuilder<DeSerializersT>;
  entityBuilder(): EntityBuilderType<
    BusinessUserBusinessRoles<DeSerializersT>,
    DeSerializersT
  >;
  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable?: NullableT
  ): CustomField<
    BusinessUserBusinessRoles<DeSerializersT>,
    DeSerializersT,
    NullableT
  >;
  private _fieldBuilder?;
  get fieldBuilder(): FieldBuilder<
    typeof BusinessUserBusinessRoles,
    DeSerializersT
  >;
  private _schema?;
  get schema(): {
    USER_ID: OrderableEdmTypeField<
      BusinessUserBusinessRoles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BUSINESS_ROLE_ID: OrderableEdmTypeField<
      BusinessUserBusinessRoles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ALL_FIELDS: AllFields<BusinessUserBusinessRoles<DeSerializers>>;
  };
}
