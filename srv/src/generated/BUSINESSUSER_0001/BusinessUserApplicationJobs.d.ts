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
export declare class BusinessUserApplicationJobs<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements BusinessUserApplicationJobsType<T>
{
  /**
   * Technical entity name for BusinessUserApplicationJobs.
   */
  static _entityName: string;
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath: string;
  /**
   * All key fields of the BusinessUserApplicationJobs entity.
   */
  static _keys: string[];
  /**
   * User Id.
   * Maximum length: 12.
   */
  userId: DeserializedType<T, 'Edm.String'>;
  /**
   * Application Job.
   * Maximum length: 32.
   */
  applicationJob: DeserializedType<T, 'Edm.String'>;
  /**
   * Application Job Description.
   * Maximum length: 120.
   */
  applicationJobDescription: DeserializedType<T, 'Edm.String'>;
  /**
   * Application Job Template.
   * Maximum length: 40.
   */
  applicationJobTemplate: DeserializedType<T, 'Edm.String'>;
  /**
   * Application Job Template Text.
   * Maximum length: 120.
   */
  applicationJobTemplateText: DeserializedType<T, 'Edm.String'>;
  constructor(_entityApi: BusinessUserApplicationJobsApi<T>);
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
