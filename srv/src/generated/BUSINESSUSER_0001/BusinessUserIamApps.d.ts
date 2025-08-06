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
import type { BusinessUserIamAppsApi } from './BusinessUserIamAppsApi';
/**
 * This class represents the entity "BusinessUserIAMApps" of service "com.sap.gateway.srvd_a2x.aps_iam_api_buser_read.v0001".
 */
export declare class BusinessUserIamApps<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements BusinessUserIamAppsType<T>
{
  /**
   * Technical entity name for BusinessUserIamApps.
   */
  static _entityName: string;
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath: string;
  /**
   * All key fields of the BusinessUserIamApps entity.
   */
  static _keys: string[];
  /**
   * User Id.
   * Maximum length: 12.
   */
  userId: DeserializedType<T, 'Edm.String'>;
  /**
   * App Id.
   * Maximum length: 35.
   */
  appId: DeserializedType<T, 'Edm.String'>;
  /**
   * App Type.
   * Maximum length: 60.
   */
  appType: DeserializedType<T, 'Edm.String'>;
  constructor(_entityApi: BusinessUserIamAppsApi<T>);
}
export interface BusinessUserIamAppsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  userId: DeserializedType<T, 'Edm.String'>;
  appId: DeserializedType<T, 'Edm.String'>;
  appType: DeserializedType<T, 'Edm.String'>;
}
