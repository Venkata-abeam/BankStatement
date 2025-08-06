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
import { BusinessUserApplicationJobs } from './BusinessUserApplicationJobs';
/**
 * Request builder class for operations supported on the {@link BusinessUserApplicationJobs} entity.
 */
export declare class BusinessUserApplicationJobsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BusinessUserApplicationJobs<T>, T> {
  /**
   * Returns a request builder for querying all `BusinessUserApplicationJobs` entities.
   * @returns A request builder for creating requests to retrieve all `BusinessUserApplicationJobs` entities.
   */
  getAll(): GetAllRequestBuilder<BusinessUserApplicationJobs<T>, T>;
  /**
   * Returns a request builder for creating a `BusinessUserApplicationJobs` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BusinessUserApplicationJobs`.
   */
  create(
    entity: BusinessUserApplicationJobs<T>
  ): CreateRequestBuilder<BusinessUserApplicationJobs<T>, T>;
  /**
   * Returns a request builder for retrieving one `BusinessUserApplicationJobs` entity based on its keys.
   * @param userId Key property. See {@link BusinessUserApplicationJobs.userId}.
   * @param applicationJob Key property. See {@link BusinessUserApplicationJobs.applicationJob}.
   * @returns A request builder for creating requests to retrieve one `BusinessUserApplicationJobs` entity based on its keys.
   */
  getByKey(
    userId: DeserializedType<T, 'Edm.String'>,
    applicationJob: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<BusinessUserApplicationJobs<T>, T>;
  /**
   * Returns a request builder for updating an entity of type `BusinessUserApplicationJobs`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BusinessUserApplicationJobs`.
   */
  update(
    entity: BusinessUserApplicationJobs<T>
  ): UpdateRequestBuilder<BusinessUserApplicationJobs<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BusinessUserApplicationJobs`.
   * @param userId Key property. See {@link BusinessUserApplicationJobs.userId}.
   * @param applicationJob Key property. See {@link BusinessUserApplicationJobs.applicationJob}.
   * @returns A request builder for creating requests that delete an entity of type `BusinessUserApplicationJobs`.
   */
  delete(
    userId: string,
    applicationJob: string
  ): DeleteRequestBuilder<BusinessUserApplicationJobs<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BusinessUserApplicationJobs`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BusinessUserApplicationJobs` by taking the entity as a parameter.
   */
  delete(
    entity: BusinessUserApplicationJobs<T>
  ): DeleteRequestBuilder<BusinessUserApplicationJobs<T>, T>;
}
