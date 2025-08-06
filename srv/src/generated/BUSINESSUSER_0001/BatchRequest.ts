/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  CreateRequestBuilder,
  DeleteRequestBuilder,
  DeSerializers,
  GetAllRequestBuilder,
  GetByKeyRequestBuilder,
  ODataBatchRequestBuilder,
  UpdateRequestBuilder,
  BatchChangeSet
} from '@sap-cloud-sdk/odata-v4';
import { transformVariadicArgumentToArray } from '@sap-cloud-sdk/util';
import {
  BusinessUserApplicationJobs,
  BusinessUserAutoLockStatus,
  BusinessUserBusinessCatalogs,
  BusinessUserBusinessRoles,
  BusinessUserIamApps,
  BusinessUsers
} from './index';

/**
 * Batch builder for operations supported on the Businessuser 0001.
 * @param requests The requests of the batch.
 * @returns A request builder for batch.
 */
export function batch<DeSerializersT extends DeSerializers>(
  ...requests: Array<
    | ReadBusinessuser0001RequestBuilder<DeSerializersT>
    | BatchChangeSet<DeSerializersT>
  >
): ODataBatchRequestBuilder<DeSerializersT>;
export function batch<DeSerializersT extends DeSerializers>(
  requests: Array<
    | ReadBusinessuser0001RequestBuilder<DeSerializersT>
    | BatchChangeSet<DeSerializersT>
  >
): ODataBatchRequestBuilder<DeSerializersT>;
export function batch<DeSerializersT extends DeSerializers>(
  first:
    | undefined
    | ReadBusinessuser0001RequestBuilder<DeSerializersT>
    | BatchChangeSet<DeSerializersT>
    | Array<
        | ReadBusinessuser0001RequestBuilder<DeSerializersT>
        | BatchChangeSet<DeSerializersT>
      >,
  ...rest: Array<
    | ReadBusinessuser0001RequestBuilder<DeSerializersT>
    | BatchChangeSet<DeSerializersT>
  >
): ODataBatchRequestBuilder<DeSerializersT> {
  return new ODataBatchRequestBuilder(
    defaultBusinessuser0001Path,
    transformVariadicArgumentToArray(first, rest)
  );
}

/**
 * Change set constructor consists of write operations supported on the Businessuser 0001.
 * @param requests The requests of the change set.
 * @returns A change set for batch.
 */
export function changeset<DeSerializersT extends DeSerializers>(
  ...requests: Array<WriteBusinessuser0001RequestBuilder<DeSerializersT>>
): BatchChangeSet<DeSerializersT>;
export function changeset<DeSerializersT extends DeSerializers>(
  requests: Array<WriteBusinessuser0001RequestBuilder<DeSerializersT>>
): BatchChangeSet<DeSerializersT>;
export function changeset<DeSerializersT extends DeSerializers>(
  first:
    | undefined
    | WriteBusinessuser0001RequestBuilder<DeSerializersT>
    | Array<WriteBusinessuser0001RequestBuilder<DeSerializersT>>,
  ...rest: Array<WriteBusinessuser0001RequestBuilder<DeSerializersT>>
): BatchChangeSet<DeSerializersT> {
  return new BatchChangeSet(transformVariadicArgumentToArray(first, rest));
}

export const defaultBusinessuser0001Path = '/';
export type ReadBusinessuser0001RequestBuilder<
  DeSerializersT extends DeSerializers
> =
  | GetAllRequestBuilder<
      BusinessUserApplicationJobs<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<
      BusinessUserAutoLockStatus<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<
      BusinessUserBusinessCatalogs<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<
      BusinessUserBusinessRoles<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<BusinessUserIamApps<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<BusinessUsers<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<
      BusinessUserApplicationJobs<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<
      BusinessUserAutoLockStatus<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<
      BusinessUserBusinessCatalogs<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<
      BusinessUserBusinessRoles<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<BusinessUserIamApps<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<BusinessUsers<DeSerializersT>, DeSerializersT>;
export type WriteBusinessuser0001RequestBuilder<
  DeSerializersT extends DeSerializers
> =
  | CreateRequestBuilder<
      BusinessUserApplicationJobs<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      BusinessUserApplicationJobs<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      BusinessUserApplicationJobs<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<
      BusinessUserAutoLockStatus<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      BusinessUserAutoLockStatus<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      BusinessUserAutoLockStatus<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<
      BusinessUserBusinessCatalogs<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      BusinessUserBusinessCatalogs<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      BusinessUserBusinessCatalogs<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<
      BusinessUserBusinessRoles<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      BusinessUserBusinessRoles<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      BusinessUserBusinessRoles<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<BusinessUserIamApps<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<BusinessUserIamApps<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<BusinessUserIamApps<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<BusinessUsers<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<BusinessUsers<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<BusinessUsers<DeSerializersT>, DeSerializersT>;
