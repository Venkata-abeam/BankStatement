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
} from '@sap-cloud-sdk/odata-v2';
import { Yy1_Bankgllineapi } from './index';
/**
 * Batch builder for operations supported on the Yy1 Bankgllineapi Cds 0001.
 * @param requests The requests of the batch.
 * @returns A request builder for batch.
 */
export declare function batch<DeSerializersT extends DeSerializers>(
  ...requests: Array<
    | ReadYy1BankgllineapiCds0001RequestBuilder<DeSerializersT>
    | BatchChangeSet<DeSerializersT>
  >
): ODataBatchRequestBuilder<DeSerializersT>;
export declare function batch<DeSerializersT extends DeSerializers>(
  requests: Array<
    | ReadYy1BankgllineapiCds0001RequestBuilder<DeSerializersT>
    | BatchChangeSet<DeSerializersT>
  >
): ODataBatchRequestBuilder<DeSerializersT>;
/**
 * Change set constructor consists of write operations supported on the Yy1 Bankgllineapi Cds 0001.
 * @param requests The requests of the change set.
 * @returns A change set for batch.
 */
export declare function changeset<DeSerializersT extends DeSerializers>(
  ...requests: Array<WriteYy1BankgllineapiCds0001RequestBuilder<DeSerializersT>>
): BatchChangeSet<DeSerializersT>;
export declare function changeset<DeSerializersT extends DeSerializers>(
  requests: Array<WriteYy1BankgllineapiCds0001RequestBuilder<DeSerializersT>>
): BatchChangeSet<DeSerializersT>;
export declare const defaultYy1BankgllineapiCds0001Path =
  '/sap/opu/odata/sap/YY1_BANKGLLINEAPI_CDS';
export type ReadYy1BankgllineapiCds0001RequestBuilder<
  DeSerializersT extends DeSerializers
> =
  | GetAllRequestBuilder<Yy1_Bankgllineapi<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<Yy1_Bankgllineapi<DeSerializersT>, DeSerializersT>;
export type WriteYy1BankgllineapiCds0001RequestBuilder<
  DeSerializersT extends DeSerializers
> =
  | CreateRequestBuilder<Yy1_Bankgllineapi<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<Yy1_Bankgllineapi<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<Yy1_Bankgllineapi<DeSerializersT>, DeSerializersT>;
