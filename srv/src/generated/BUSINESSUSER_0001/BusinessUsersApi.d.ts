/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BusinessUsers } from './BusinessUsers';
import { BusinessUsersRequestBuilder } from './BusinessUsersRequestBuilder';
import { BusinessUserApplicationJobsApi } from './BusinessUserApplicationJobsApi';
import { BusinessUserBusinessCatalogsApi } from './BusinessUserBusinessCatalogsApi';
import { BusinessUserBusinessRolesApi } from './BusinessUserBusinessRolesApi';
import { BusinessUserIamAppsApi } from './BusinessUserIamAppsApi';
import {
  CustomField,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField,
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export declare class BusinessUsersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<BusinessUsers<DeSerializersT>, DeSerializersT>
{
  deSerializers: DeSerializersT;
  private constructor();
  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(deSerializers?: DeSerializersT): BusinessUsersApi<DeSerializersT>;
  private navigationPropertyFields;
  _addNavigationProperties(
    linkedApis: [
      BusinessUserApplicationJobsApi<DeSerializersT>,
      BusinessUserBusinessCatalogsApi<DeSerializersT>,
      BusinessUserBusinessRolesApi<DeSerializersT>,
      BusinessUserIamAppsApi<DeSerializersT>
    ]
  ): this;
  entityConstructor: typeof BusinessUsers;
  requestBuilder(): BusinessUsersRequestBuilder<DeSerializersT>;
  entityBuilder(): EntityBuilderType<
    BusinessUsers<DeSerializersT>,
    DeSerializersT
  >;
  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable?: NullableT
  ): CustomField<BusinessUsers<DeSerializersT>, DeSerializersT, NullableT>;
  private _fieldBuilder?;
  get fieldBuilder(): FieldBuilder<typeof BusinessUsers, DeSerializersT>;
  private _schema?;
  get schema(): {
    USER_ID: OrderableEdmTypeField<
      BusinessUsers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    USER_NAME: OrderableEdmTypeField<
      BusinessUsers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      BusinessUsers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FIRST_NAME: OrderableEdmTypeField<
      BusinessUsers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LAST_NAME: OrderableEdmTypeField<
      BusinessUsers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    E_MAIL_ADDRESS: OrderableEdmTypeField<
      BusinessUsers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    GLOBAL_USER_ID: OrderableEdmTypeField<
      BusinessUsers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BUSINESS_USER_GROUP: OrderableEdmTypeField<
      BusinessUsers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRICE_CATEGORY_CODE: OrderableEdmTypeField<
      BusinessUsers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRICE_CATEGORY: OrderableEdmTypeField<
      BusinessUsers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LOCK_STATUS: OrderableEdmTypeField<
      BusinessUsers<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    VALIDITY: OrderableEdmTypeField<
      BusinessUsers<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    IS_LOGGED_ON: OrderableEdmTypeField<
      BusinessUsers<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    NEVER_LOGGED_ON: OrderableEdmTypeField<
      BusinessUsers<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    VALID_FROM_DATE: OrderableEdmTypeField<
      BusinessUsers<DeSerializers>,
      DeSerializersT,
      'Edm.Date',
      true,
      true
    >;
    VALID_TO_DATE: OrderableEdmTypeField<
      BusinessUsers<DeSerializers>,
      DeSerializersT,
      'Edm.Date',
      true,
      true
    >;
    LAST_LOGON_DATE_TIME: OrderableEdmTypeField<
      BusinessUsers<DeSerializers>,
      DeSerializersT,
      'Edm.Date',
      true,
      true
    >;
    CREATION_DATE_TIME: OrderableEdmTypeField<
      BusinessUsers<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    CREATION_BY_USER_ID: OrderableEdmTypeField<
      BusinessUsers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CREATION_BY_USER_NAME: OrderableEdmTypeField<
      BusinessUsers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CREATION_BY_USER_DESCRIPTION: OrderableEdmTypeField<
      BusinessUsers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CREATION_BY_E_MAIL_ADDRESS: OrderableEdmTypeField<
      BusinessUsers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CREATION_BY_GLOBAL_USER_ID: OrderableEdmTypeField<
      BusinessUsers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LAST_CHANGED_DATE_TIME: OrderableEdmTypeField<
      BusinessUsers<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    LAST_CHANGED_BY_USER_ID: OrderableEdmTypeField<
      BusinessUsers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LAST_CHANGED_BY_USER_NAME: OrderableEdmTypeField<
      BusinessUsers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LAST_CHANGED_BY_USER_DESCRIPTION: OrderableEdmTypeField<
      BusinessUsers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LAST_CHANGED_BY_E_MAIL_ADDRESS: OrderableEdmTypeField<
      BusinessUsers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LAST_CHANGED_BY_GLOBAL_USER_ID: OrderableEdmTypeField<
      BusinessUsers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link applicationJobs} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    APPLICATION_JOBS: OneToManyLink<
      BusinessUsers<DeSerializersT>,
      DeSerializersT,
      BusinessUserApplicationJobsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link businessCatalogs} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_CATALOGS: OneToManyLink<
      BusinessUsers<DeSerializersT>,
      DeSerializersT,
      BusinessUserBusinessCatalogsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link businessRoles} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_ROLES: OneToManyLink<
      BusinessUsers<DeSerializersT>,
      DeSerializersT,
      BusinessUserBusinessRolesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link iamApps} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    IAM_APPS: OneToManyLink<
      BusinessUsers<DeSerializersT>,
      DeSerializersT,
      BusinessUserIamAppsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<BusinessUsers<DeSerializers>>;
  };
}
