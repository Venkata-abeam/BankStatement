/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  CreateRequestBuilder,
  DeSerializers,
  DefaultDeSerializers,
  DeleteRequestBuilder,
  DeserializedType,
  GetAllRequestBuilder,
  GetByKeyRequestBuilder,
  RequestBuilder,
  UpdateRequestBuilder
} from '@sap-cloud-sdk/odata-v4';
import { BusinessUserIamApps } from './BusinessUserIamApps';
/**
 * Request builder class for operations supported on the {@link BusinessUserIamApps} entity.
 */
export declare class BusinessUserIamAppsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BusinessUserIamApps<T>, T> {
  /**
   * Returns a request builder for querying all `BusinessUserIamApps` entities.
   * @returns A request builder for creating requests to retrieve all `BusinessUserIamApps` entities.
   */
  getAll(): GetAllRequestBuilder<BusinessUserIamApps<T>, T>;
  /**
   * Returns a request builder for creating a `BusinessUserIamApps` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BusinessUserIamApps`.
   */
  create(
    entity: BusinessUserIamApps<T>
  ): CreateRequestBuilder<BusinessUserIamApps<T>, T>;
  /**
   * Returns a request builder for retrieving one `BusinessUserIamApps` entity based on its keys.
   * @param userId Key property. See {@link BusinessUserIamApps.userId}.
   * @param appId Key property. See {@link BusinessUserIamApps.appId}.
   * @returns A request builder for creating requests to retrieve one `BusinessUserIamApps` entity based on its keys.
   */
  getByKey(
    userId: DeserializedType<T, 'Edm.String'>,
    appId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<BusinessUserIamApps<T>, T>;
  /**
   * Returns a request builder for updating an entity of type `BusinessUserIamApps`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BusinessUserIamApps`.
   */
  update(
    entity: BusinessUserIamApps<T>
  ): UpdateRequestBuilder<BusinessUserIamApps<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BusinessUserIamApps`.
   * @param userId Key property. See {@link BusinessUserIamApps.userId}.
   * @param appId Key property. See {@link BusinessUserIamApps.appId}.
   * @returns A request builder for creating requests that delete an entity of type `BusinessUserIamApps`.
   */
  delete(
    userId: string,
    appId: string
  ): DeleteRequestBuilder<BusinessUserIamApps<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BusinessUserIamApps`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BusinessUserIamApps` by taking the entity as a parameter.
   */
  delete(
    entity: BusinessUserIamApps<T>
  ): DeleteRequestBuilder<BusinessUserIamApps<T>, T>;
}
