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
import { BusinessUserAutoLockStatus } from './BusinessUserAutoLockStatus';
/**
 * Request builder class for operations supported on the {@link BusinessUserAutoLockStatus} entity.
 */
export declare class BusinessUserAutoLockStatusRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BusinessUserAutoLockStatus<T>, T> {
  /**
   * Returns a request builder for querying all `BusinessUserAutoLockStatus` entities.
   * @returns A request builder for creating requests to retrieve all `BusinessUserAutoLockStatus` entities.
   */
  getAll(): GetAllRequestBuilder<BusinessUserAutoLockStatus<T>, T>;
  /**
   * Returns a request builder for creating a `BusinessUserAutoLockStatus` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BusinessUserAutoLockStatus`.
   */
  create(
    entity: BusinessUserAutoLockStatus<T>
  ): CreateRequestBuilder<BusinessUserAutoLockStatus<T>, T>;
  /**
   * Returns a request builder for retrieving one `BusinessUserAutoLockStatus` entity based on its keys.
   * @param businessUserAutoLockStatus Key property. See {@link BusinessUserAutoLockStatus.businessUserAutoLockStatus}.
   * @returns A request builder for creating requests to retrieve one `BusinessUserAutoLockStatus` entity based on its keys.
   */
  getByKey(
    businessUserAutoLockStatus: DeserializedType<T, 'Edm.Boolean'>
  ): GetByKeyRequestBuilder<BusinessUserAutoLockStatus<T>, T>;
  /**
   * Returns a request builder for updating an entity of type `BusinessUserAutoLockStatus`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BusinessUserAutoLockStatus`.
   */
  update(
    entity: BusinessUserAutoLockStatus<T>
  ): UpdateRequestBuilder<BusinessUserAutoLockStatus<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BusinessUserAutoLockStatus`.
   * @param businessUserAutoLockStatus Key property. See {@link BusinessUserAutoLockStatus.businessUserAutoLockStatus}.
   * @returns A request builder for creating requests that delete an entity of type `BusinessUserAutoLockStatus`.
   */
  delete(
    businessUserAutoLockStatus: boolean
  ): DeleteRequestBuilder<BusinessUserAutoLockStatus<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BusinessUserAutoLockStatus`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BusinessUserAutoLockStatus` by taking the entity as a parameter.
   */
  delete(
    entity: BusinessUserAutoLockStatus<T>
  ): DeleteRequestBuilder<BusinessUserAutoLockStatus<T>, T>;
}
