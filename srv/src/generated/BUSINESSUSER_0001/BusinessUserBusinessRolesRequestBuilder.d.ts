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
import { BusinessUserBusinessRoles } from './BusinessUserBusinessRoles';
/**
 * Request builder class for operations supported on the {@link BusinessUserBusinessRoles} entity.
 */
export declare class BusinessUserBusinessRolesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BusinessUserBusinessRoles<T>, T> {
  /**
   * Returns a request builder for querying all `BusinessUserBusinessRoles` entities.
   * @returns A request builder for creating requests to retrieve all `BusinessUserBusinessRoles` entities.
   */
  getAll(): GetAllRequestBuilder<BusinessUserBusinessRoles<T>, T>;
  /**
   * Returns a request builder for creating a `BusinessUserBusinessRoles` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BusinessUserBusinessRoles`.
   */
  create(
    entity: BusinessUserBusinessRoles<T>
  ): CreateRequestBuilder<BusinessUserBusinessRoles<T>, T>;
  /**
   * Returns a request builder for retrieving one `BusinessUserBusinessRoles` entity based on its keys.
   * @param userId Key property. See {@link BusinessUserBusinessRoles.userId}.
   * @param businessRoleId Key property. See {@link BusinessUserBusinessRoles.businessRoleId}.
   * @returns A request builder for creating requests to retrieve one `BusinessUserBusinessRoles` entity based on its keys.
   */
  getByKey(
    userId: DeserializedType<T, 'Edm.String'>,
    businessRoleId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<BusinessUserBusinessRoles<T>, T>;
  /**
   * Returns a request builder for updating an entity of type `BusinessUserBusinessRoles`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BusinessUserBusinessRoles`.
   */
  update(
    entity: BusinessUserBusinessRoles<T>
  ): UpdateRequestBuilder<BusinessUserBusinessRoles<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BusinessUserBusinessRoles`.
   * @param userId Key property. See {@link BusinessUserBusinessRoles.userId}.
   * @param businessRoleId Key property. See {@link BusinessUserBusinessRoles.businessRoleId}.
   * @returns A request builder for creating requests that delete an entity of type `BusinessUserBusinessRoles`.
   */
  delete(
    userId: string,
    businessRoleId: string
  ): DeleteRequestBuilder<BusinessUserBusinessRoles<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BusinessUserBusinessRoles`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BusinessUserBusinessRoles` by taking the entity as a parameter.
   */
  delete(
    entity: BusinessUserBusinessRoles<T>
  ): DeleteRequestBuilder<BusinessUserBusinessRoles<T>, T>;
}
