/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  Entity,
  DefaultDeSerializers,
  DeSerializers,
  DeserializedType
} from '@sap-cloud-sdk/odata-v4';
import type { BusinessUsersApi } from './BusinessUsersApi';
import {
  BusinessUserApplicationJobs,
  BusinessUserApplicationJobsType
} from './BusinessUserApplicationJobs';
import {
  BusinessUserBusinessCatalogs,
  BusinessUserBusinessCatalogsType
} from './BusinessUserBusinessCatalogs';
import {
  BusinessUserBusinessRoles,
  BusinessUserBusinessRolesType
} from './BusinessUserBusinessRoles';
import {
  BusinessUserIamApps,
  BusinessUserIamAppsType
} from './BusinessUserIamApps';

/**
 * This class represents the entity "BusinessUsers" of service "com.sap.gateway.srvd_a2x.aps_iam_api_buser_read.v0001".
 */
export class BusinessUsers<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements BusinessUsersType<T>
{
  /**
   * Technical entity name for BusinessUsers.
   */
  static override _entityName = 'BusinessUsers';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BusinessUsers entity.
   */
  static _keys = ['UserID'];
  /**
   * User Id.
   * Maximum length: 12.
   */
  declare userId: DeserializedType<T, 'Edm.String'>;
  /**
   * User Name.
   * Maximum length: 40.
   */
  declare userName: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * Maximum length: 81.
   */
  declare description: DeserializedType<T, 'Edm.String'>;
  /**
   * First Name.
   * Maximum length: 40.
   */
  declare firstName: DeserializedType<T, 'Edm.String'>;
  /**
   * Last Name.
   * Maximum length: 40.
   */
  declare lastName: DeserializedType<T, 'Edm.String'>;
  /**
   * E Mail Address.
   * Maximum length: 241.
   */
  declare eMailAddress: DeserializedType<T, 'Edm.String'>;
  /**
   * Global User Id.
   * Maximum length: 36.
   */
  declare globalUserId: DeserializedType<T, 'Edm.String'>;
  /**
   * Business User Group.
   * Maximum length: 12.
   */
  declare businessUserGroup: DeserializedType<T, 'Edm.String'>;
  /**
   * Price Category Code.
   * Maximum length: 30.
   */
  declare priceCategoryCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Price Category.
   * Maximum length: 80.
   */
  declare priceCategory: DeserializedType<T, 'Edm.String'>;
  /**
   * Lock Status.
   */
  declare lockStatus: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Validity.
   */
  declare validity: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Is Logged On.
   */
  declare isLoggedOn: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Never Logged On.
   */
  declare neverLoggedOn: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Valid From Date.
   * @nullable
   */
  declare validFromDate?: DeserializedType<T, 'Edm.Date'> | null;
  /**
   * Valid To Date.
   * @nullable
   */
  declare validToDate?: DeserializedType<T, 'Edm.Date'> | null;
  /**
   * Last Logon Date Time.
   * @nullable
   */
  declare lastLogonDateTime?: DeserializedType<T, 'Edm.Date'> | null;
  /**
   * Creation Date Time.
   * @nullable
   */
  declare creationDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Creation By User Id.
   * Maximum length: 12.
   */
  declare creationByUserId: DeserializedType<T, 'Edm.String'>;
  /**
   * Creation By User Name.
   * Maximum length: 40.
   */
  declare creationByUserName: DeserializedType<T, 'Edm.String'>;
  /**
   * Creation By User Description.
   * Maximum length: 80.
   */
  declare creationByUserDescription: DeserializedType<T, 'Edm.String'>;
  /**
   * Creation By E Mail Address.
   * Maximum length: 241.
   */
  declare creationByEMailAddress: DeserializedType<T, 'Edm.String'>;
  /**
   * Creation By Global User Id.
   * Maximum length: 36.
   */
  declare creationByGlobalUserId: DeserializedType<T, 'Edm.String'>;
  /**
   * Last Changed Date Time.
   * @nullable
   */
  declare lastChangedDateTime?: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  > | null;
  /**
   * Last Changed By User Id.
   * Maximum length: 12.
   */
  declare lastChangedByUserId: DeserializedType<T, 'Edm.String'>;
  /**
   * Last Changed By User Name.
   * Maximum length: 40.
   */
  declare lastChangedByUserName: DeserializedType<T, 'Edm.String'>;
  /**
   * Last Changed By User Description.
   * Maximum length: 80.
   */
  declare lastChangedByUserDescription: DeserializedType<T, 'Edm.String'>;
  /**
   * Last Changed By E Mail Address.
   * Maximum length: 241.
   */
  declare lastChangedByEMailAddress: DeserializedType<T, 'Edm.String'>;
  /**
   * Last Changed By Global User Id.
   * Maximum length: 36.
   */
  declare lastChangedByGlobalUserId: DeserializedType<T, 'Edm.String'>;
  /**
   * One-to-many navigation property to the {@link BusinessUserApplicationJobs} entity.
   */
  declare applicationJobs: BusinessUserApplicationJobs<T>[];
  /**
   * One-to-many navigation property to the {@link BusinessUserBusinessCatalogs} entity.
   */
  declare businessCatalogs: BusinessUserBusinessCatalogs<T>[];
  /**
   * One-to-many navigation property to the {@link BusinessUserBusinessRoles} entity.
   */
  declare businessRoles: BusinessUserBusinessRoles<T>[];
  /**
   * One-to-many navigation property to the {@link BusinessUserIamApps} entity.
   */
  declare iamApps: BusinessUserIamApps<T>[];

  constructor(_entityApi: BusinessUsersApi<T>) {
    super(_entityApi);
  }
}

export interface BusinessUsersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  userId: DeserializedType<T, 'Edm.String'>;
  userName: DeserializedType<T, 'Edm.String'>;
  description: DeserializedType<T, 'Edm.String'>;
  firstName: DeserializedType<T, 'Edm.String'>;
  lastName: DeserializedType<T, 'Edm.String'>;
  eMailAddress: DeserializedType<T, 'Edm.String'>;
  globalUserId: DeserializedType<T, 'Edm.String'>;
  businessUserGroup: DeserializedType<T, 'Edm.String'>;
  priceCategoryCode: DeserializedType<T, 'Edm.String'>;
  priceCategory: DeserializedType<T, 'Edm.String'>;
  lockStatus: DeserializedType<T, 'Edm.Boolean'>;
  validity: DeserializedType<T, 'Edm.Boolean'>;
  isLoggedOn: DeserializedType<T, 'Edm.Boolean'>;
  neverLoggedOn: DeserializedType<T, 'Edm.Boolean'>;
  validFromDate?: DeserializedType<T, 'Edm.Date'> | null;
  validToDate?: DeserializedType<T, 'Edm.Date'> | null;
  lastLogonDateTime?: DeserializedType<T, 'Edm.Date'> | null;
  creationDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  creationByUserId: DeserializedType<T, 'Edm.String'>;
  creationByUserName: DeserializedType<T, 'Edm.String'>;
  creationByUserDescription: DeserializedType<T, 'Edm.String'>;
  creationByEMailAddress: DeserializedType<T, 'Edm.String'>;
  creationByGlobalUserId: DeserializedType<T, 'Edm.String'>;
  lastChangedDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  lastChangedByUserId: DeserializedType<T, 'Edm.String'>;
  lastChangedByUserName: DeserializedType<T, 'Edm.String'>;
  lastChangedByUserDescription: DeserializedType<T, 'Edm.String'>;
  lastChangedByEMailAddress: DeserializedType<T, 'Edm.String'>;
  lastChangedByGlobalUserId: DeserializedType<T, 'Edm.String'>;
  applicationJobs: BusinessUserApplicationJobsType<T>[];
  businessCatalogs: BusinessUserBusinessCatalogsType<T>[];
  businessRoles: BusinessUserBusinessRolesType<T>[];
  iamApps: BusinessUserIamAppsType<T>[];
}
