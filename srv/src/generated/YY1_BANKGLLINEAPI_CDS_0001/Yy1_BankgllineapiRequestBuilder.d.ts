/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  DeSerializers,
  DefaultDeSerializers,
  DeserializedType,
  GetAllRequestBuilder,
  GetByKeyRequestBuilder,
  RequestBuilder
} from '@sap-cloud-sdk/odata-v2';
import { Yy1_Bankgllineapi } from './Yy1_Bankgllineapi';
/**
 * Request builder class for operations supported on the {@link Yy1_Bankgllineapi} entity.
 */
export declare class Yy1_BankgllineapiRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Yy1_Bankgllineapi<T>, T> {
  /**
   * Returns a request builder for querying all `Yy1_Bankgllineapi` entities.
   * @returns A request builder for creating requests to retrieve all `Yy1_Bankgllineapi` entities.
   */
  getAll(): GetAllRequestBuilder<Yy1_Bankgllineapi<T>, T>;
  /**
   * Returns a request builder for retrieving one `Yy1_Bankgllineapi` entity based on its keys.
   * @param id Key property. See {@link Yy1_Bankgllineapi.id}.
   * @returns A request builder for creating requests to retrieve one `Yy1_Bankgllineapi` entity based on its keys.
   */
  getByKey(
    id: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<Yy1_Bankgllineapi<T>, T>;
}
