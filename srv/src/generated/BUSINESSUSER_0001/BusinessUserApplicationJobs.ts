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
import type { BusinessUserApplicationJobsApi } from './BusinessUserApplicationJobsApi';

/**
 * This class represents the entity "BusinessUserApplicationJobs" of service "com.sap.gateway.srvd_a2x.aps_iam_api_buser_read.v0001".
 */
export class BusinessUserApplicationJobs<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements BusinessUserApplicationJobsType<T>
{
  /**
   * Technical entity name for BusinessUserApplicationJobs.
   */
  static override _entityName = 'BusinessUserApplicationJobs';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BusinessUserApplicationJobs entity.
   */
  static _keys = ['UserID', 'ApplicationJob'];
  /**
   * User Id.
   * Maximum length: 12.
   */
  declare userId: DeserializedType<T, 'Edm.String'>;
  /**
   * Application Job.
   * Maximum length: 32.
   */
  declare applicationJob: DeserializedType<T, 'Edm.String'>;
  /**
   * Application Job Description.
   * Maximum length: 120.
   */
  declare applicationJobDescription: DeserializedType<T, 'Edm.String'>;
  /**
   * Application Job Template.
   * Maximum length: 40.
   */
  declare applicationJobTemplate: DeserializedType<T, 'Edm.String'>;
  /**
   * Application Job Template Text.
   * Maximum length: 120.
   */
  declare applicationJobTemplateText: DeserializedType<T, 'Edm.String'>;

  constructor(_entityApi: BusinessUserApplicationJobsApi<T>) {
    super(_entityApi);
  }
}

export interface BusinessUserApplicationJobsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  userId: DeserializedType<T, 'Edm.String'>;
  applicationJob: DeserializedType<T, 'Edm.String'>;
  applicationJobDescription: DeserializedType<T, 'Edm.String'>;
  applicationJobTemplate: DeserializedType<T, 'Edm.String'>;
  applicationJobTemplateText: DeserializedType<T, 'Edm.String'>;
}
