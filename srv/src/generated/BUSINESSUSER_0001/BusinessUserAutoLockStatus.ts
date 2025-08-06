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
import type { BusinessUserAutoLockStatusApi } from './BusinessUserAutoLockStatusApi';

/**
 * This class represents the entity "BusinessUserAutoLockStatus" of service "com.sap.gateway.srvd_a2x.aps_iam_api_buser_read.v0001".
 */
export class BusinessUserAutoLockStatus<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements BusinessUserAutoLockStatusType<T>
{
  /**
   * Technical entity name for BusinessUserAutoLockStatus.
   */
  static override _entityName = 'BusinessUserAutoLockStatus';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BusinessUserAutoLockStatus entity.
   */
  static _keys = ['BusinessUserAutoLockStatus'];
  /**
   * Business User Auto Lock Status.
   */
  declare businessUserAutoLockStatus: DeserializedType<T, 'Edm.Boolean'>;

  constructor(_entityApi: BusinessUserAutoLockStatusApi<T>) {
    super(_entityApi);
  }
}

export interface BusinessUserAutoLockStatusType<
  T extends DeSerializers = DefaultDeSerializers
> {
  businessUserAutoLockStatus: DeserializedType<T, 'Edm.Boolean'>;
}
