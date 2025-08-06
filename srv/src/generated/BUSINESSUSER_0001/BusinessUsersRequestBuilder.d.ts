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
import { BusinessUsers } from './BusinessUsers';
/**
 * Request builder class for operations supported on the {@link BusinessUsers} entity.
 */
export declare class BusinessUsersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BusinessUsers<T>, T> {
  /**
   * Returns a request builder for querying all `BusinessUsers` entities.
   * @returns A request builder for creating requests to retrieve all `BusinessUsers` entities.
   */
  getAll(): GetAllRequestBuilder<BusinessUsers<T>, T>;
  /**
   * Returns a request builder for creating a `BusinessUsers` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BusinessUsers`.
   */
  create(entity: BusinessUsers<T>): CreateRequestBuilder<BusinessUsers<T>, T>;
  /**
   * Returns a request builder for retrieving one `BusinessUsers` entity based on its keys.
   * @param userId Key property. See {@link BusinessUsers.userId}.
   * @returns A request builder for creating requests to retrieve one `BusinessUsers` entity based on its keys.
   */
  getByKey(
    userId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<BusinessUsers<T>, T>;
  /**
   * Returns a request builder for updating an entity of type `BusinessUsers`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BusinessUsers`.
   */
  update(entity: BusinessUsers<T>): UpdateRequestBuilder<BusinessUsers<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BusinessUsers`.
   * @param userId Key property. See {@link BusinessUsers.userId}.
   * @returns A request builder for creating requests that delete an entity of type `BusinessUsers`.
   */
  delete(userId: string): DeleteRequestBuilder<BusinessUsers<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BusinessUsers`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BusinessUsers` by taking the entity as a parameter.
   */
  delete(entity: BusinessUsers<T>): DeleteRequestBuilder<BusinessUsers<T>, T>;
}
