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
import type { BusinessUserBusinessCatalogsApi } from './BusinessUserBusinessCatalogsApi';
/**
 * This class represents the entity "BusinessUserBusinessCatalogs" of service "com.sap.gateway.srvd_a2x.aps_iam_api_buser_read.v0001".
 */
export declare class BusinessUserBusinessCatalogs<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements BusinessUserBusinessCatalogsType<T>
{
  /**
   * Technical entity name for BusinessUserBusinessCatalogs.
   */
  static _entityName: string;
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath: string;
  /**
   * All key fields of the BusinessUserBusinessCatalogs entity.
   */
  static _keys: string[];
  /**
   * User Id.
   * Maximum length: 12.
   */
  userId: DeserializedType<T, 'Edm.String'>;
  /**
   * Business Catalog Id.
   * Maximum length: 35.
   */
  businessCatalogId: DeserializedType<T, 'Edm.String'>;
  constructor(_entityApi: BusinessUserBusinessCatalogsApi<T>);
}
export interface BusinessUserBusinessCatalogsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  userId: DeserializedType<T, 'Edm.String'>;
  businessCatalogId: DeserializedType<T, 'Edm.String'>;
}
