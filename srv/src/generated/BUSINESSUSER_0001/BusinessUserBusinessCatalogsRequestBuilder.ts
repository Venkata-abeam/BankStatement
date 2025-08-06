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
import { BusinessUserBusinessCatalogs } from './BusinessUserBusinessCatalogs';

/**
 * Request builder class for operations supported on the {@link BusinessUserBusinessCatalogs} entity.
 */
export class BusinessUserBusinessCatalogsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BusinessUserBusinessCatalogs<T>, T> {
  /**
   * Returns a request builder for querying all `BusinessUserBusinessCatalogs` entities.
   * @returns A request builder for creating requests to retrieve all `BusinessUserBusinessCatalogs` entities.
   */
  getAll(): GetAllRequestBuilder<BusinessUserBusinessCatalogs<T>, T> {
    return new GetAllRequestBuilder<BusinessUserBusinessCatalogs<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `BusinessUserBusinessCatalogs` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BusinessUserBusinessCatalogs`.
   */
  create(
    entity: BusinessUserBusinessCatalogs<T>
  ): CreateRequestBuilder<BusinessUserBusinessCatalogs<T>, T> {
    return new CreateRequestBuilder<BusinessUserBusinessCatalogs<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BusinessUserBusinessCatalogs` entity based on its keys.
   * @param userId Key property. See {@link BusinessUserBusinessCatalogs.userId}.
   * @param businessCatalogId Key property. See {@link BusinessUserBusinessCatalogs.businessCatalogId}.
   * @returns A request builder for creating requests to retrieve one `BusinessUserBusinessCatalogs` entity based on its keys.
   */
  getByKey(
    userId: DeserializedType<T, 'Edm.String'>,
    businessCatalogId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<BusinessUserBusinessCatalogs<T>, T> {
    return new GetByKeyRequestBuilder<BusinessUserBusinessCatalogs<T>, T>(
      this.entityApi,
      {
        UserID: userId,
        BusinessCatalogID: businessCatalogId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `BusinessUserBusinessCatalogs`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BusinessUserBusinessCatalogs`.
   */
  update(
    entity: BusinessUserBusinessCatalogs<T>
  ): UpdateRequestBuilder<BusinessUserBusinessCatalogs<T>, T> {
    return new UpdateRequestBuilder<BusinessUserBusinessCatalogs<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BusinessUserBusinessCatalogs`.
   * @param userId Key property. See {@link BusinessUserBusinessCatalogs.userId}.
   * @param businessCatalogId Key property. See {@link BusinessUserBusinessCatalogs.businessCatalogId}.
   * @returns A request builder for creating requests that delete an entity of type `BusinessUserBusinessCatalogs`.
   */
  delete(
    userId: string,
    businessCatalogId: string
  ): DeleteRequestBuilder<BusinessUserBusinessCatalogs<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BusinessUserBusinessCatalogs`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BusinessUserBusinessCatalogs` by taking the entity as a parameter.
   */
  delete(
    entity: BusinessUserBusinessCatalogs<T>
  ): DeleteRequestBuilder<BusinessUserBusinessCatalogs<T>, T>;
  delete(
    userIdOrEntity: any,
    businessCatalogId?: string
  ): DeleteRequestBuilder<BusinessUserBusinessCatalogs<T>, T> {
    return new DeleteRequestBuilder<BusinessUserBusinessCatalogs<T>, T>(
      this.entityApi,
      userIdOrEntity instanceof BusinessUserBusinessCatalogs
        ? userIdOrEntity
        : {
            UserID: userIdOrEntity!,
            BusinessCatalogID: businessCatalogId!
          }
    );
  }
}
