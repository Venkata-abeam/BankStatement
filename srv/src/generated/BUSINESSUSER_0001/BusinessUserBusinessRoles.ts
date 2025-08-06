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
import type { BusinessUserBusinessRolesApi } from './BusinessUserBusinessRolesApi';

/**
 * This class represents the entity "BusinessUserBusinessRoles" of service "com.sap.gateway.srvd_a2x.aps_iam_api_buser_read.v0001".
 */
export class BusinessUserBusinessRoles<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements BusinessUserBusinessRolesType<T>
{
  /**
   * Technical entity name for BusinessUserBusinessRoles.
   */
  static override _entityName = 'BusinessUserBusinessRoles';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BusinessUserBusinessRoles entity.
   */
  static _keys = ['UserID', 'BusinessRoleID'];
  /**
   * User Id.
   * Maximum length: 12.
   */
  declare userId: DeserializedType<T, 'Edm.String'>;
  /**
   * Business Role Id.
   * Maximum length: 40.
   */
  declare businessRoleId: DeserializedType<T, 'Edm.String'>;

  constructor(_entityApi: BusinessUserBusinessRolesApi<T>) {
    super(_entityApi);
  }
}

export interface BusinessUserBusinessRolesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  userId: DeserializedType<T, 'Edm.String'>;
  businessRoleId: DeserializedType<T, 'Edm.String'>;
}
