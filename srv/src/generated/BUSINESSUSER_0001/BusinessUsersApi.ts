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
  defaultDeSerializers,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  entityBuilder,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField,
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class BusinessUsersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<BusinessUsers<DeSerializersT>, DeSerializersT>
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
  ): BusinessUsersApi<DeSerializersT> {
    return new BusinessUsersApi(deSerializers);
  }

  private navigationPropertyFields!: {
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
  };

  _addNavigationProperties(
    linkedApis: [
      BusinessUserApplicationJobsApi<DeSerializersT>,
      BusinessUserBusinessCatalogsApi<DeSerializersT>,
      BusinessUserBusinessRolesApi<DeSerializersT>,
      BusinessUserIamAppsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      APPLICATION_JOBS: new OneToManyLink(
        'ApplicationJobs',
        this,
        linkedApis[0]
      ),
      BUSINESS_CATALOGS: new OneToManyLink(
        'BusinessCatalogs',
        this,
        linkedApis[1]
      ),
      BUSINESS_ROLES: new OneToManyLink('BusinessRoles', this, linkedApis[2]),
      IAM_APPS: new OneToManyLink('IAMApps', this, linkedApis[3])
    };
    return this;
  }

  entityConstructor = BusinessUsers;

  requestBuilder(): BusinessUsersRequestBuilder<DeSerializersT> {
    return new BusinessUsersRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    BusinessUsers<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<BusinessUsers<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<BusinessUsers<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof BusinessUsers, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(BusinessUsers, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
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

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link userId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USER_ID: fieldBuilder.buildEdmTypeField('UserID', 'Edm.String', false),
        /**
         * Static representation of the {@link userName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USER_NAME: fieldBuilder.buildEdmTypeField(
          'UserName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Description',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link firstName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIRST_NAME: fieldBuilder.buildEdmTypeField(
          'FirstName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link lastName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_NAME: fieldBuilder.buildEdmTypeField(
          'LastName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link eMailAddress} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        E_MAIL_ADDRESS: fieldBuilder.buildEdmTypeField(
          'EMailAddress',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link globalUserId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GLOBAL_USER_ID: fieldBuilder.buildEdmTypeField(
          'GlobalUserID',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link businessUserGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUSINESS_USER_GROUP: fieldBuilder.buildEdmTypeField(
          'BusinessUserGroup',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link priceCategoryCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICE_CATEGORY_CODE: fieldBuilder.buildEdmTypeField(
          'PriceCategoryCode',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link priceCategory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICE_CATEGORY: fieldBuilder.buildEdmTypeField(
          'PriceCategory',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link lockStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOCK_STATUS: fieldBuilder.buildEdmTypeField(
          'LockStatus',
          'Edm.Boolean',
          false
        ),
        /**
         * Static representation of the {@link validity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALIDITY: fieldBuilder.buildEdmTypeField(
          'Validity',
          'Edm.Boolean',
          false
        ),
        /**
         * Static representation of the {@link isLoggedOn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_LOGGED_ON: fieldBuilder.buildEdmTypeField(
          'IsLoggedOn',
          'Edm.Boolean',
          false
        ),
        /**
         * Static representation of the {@link neverLoggedOn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NEVER_LOGGED_ON: fieldBuilder.buildEdmTypeField(
          'NeverLoggedOn',
          'Edm.Boolean',
          false
        ),
        /**
         * Static representation of the {@link validFromDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALID_FROM_DATE: fieldBuilder.buildEdmTypeField(
          'ValidFromDate',
          'Edm.Date',
          true
        ),
        /**
         * Static representation of the {@link validToDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALID_TO_DATE: fieldBuilder.buildEdmTypeField(
          'ValidToDate',
          'Edm.Date',
          true
        ),
        /**
         * Static representation of the {@link lastLogonDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_LOGON_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'LastLogonDateTime',
          'Edm.Date',
          true
        ),
        /**
         * Static representation of the {@link creationDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATION_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'CreationDateTime',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link creationByUserId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATION_BY_USER_ID: fieldBuilder.buildEdmTypeField(
          'CreationByUserID',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link creationByUserName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATION_BY_USER_NAME: fieldBuilder.buildEdmTypeField(
          'CreationByUserName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link creationByUserDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATION_BY_USER_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'CreationByUserDescription',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link creationByEMailAddress} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATION_BY_E_MAIL_ADDRESS: fieldBuilder.buildEdmTypeField(
          'CreationByEMailAddress',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link creationByGlobalUserId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATION_BY_GLOBAL_USER_ID: fieldBuilder.buildEdmTypeField(
          'CreationByGlobalUserID',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link lastChangedDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_CHANGED_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'LastChangedDateTime',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link lastChangedByUserId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_CHANGED_BY_USER_ID: fieldBuilder.buildEdmTypeField(
          'LastChangedByUserID',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link lastChangedByUserName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_CHANGED_BY_USER_NAME: fieldBuilder.buildEdmTypeField(
          'LastChangedByUserName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link lastChangedByUserDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_CHANGED_BY_USER_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'LastChangedByUserDescription',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link lastChangedByEMailAddress} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_CHANGED_BY_E_MAIL_ADDRESS: fieldBuilder.buildEdmTypeField(
          'LastChangedByEMailAddress',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link lastChangedByGlobalUserId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_CHANGED_BY_GLOBAL_USER_ID: fieldBuilder.buildEdmTypeField(
          'LastChangedByGlobalUserID',
          'Edm.String',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', BusinessUsers)
      };
    }

    return this._schema;
  }
}
