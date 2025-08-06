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
import { Yy1_Bankstatementapi } from './Yy1_Bankstatementapi';

/**
 * Request builder class for operations supported on the {@link Yy1_Bankstatementapi} entity.
 */
export class Yy1_BankstatementapiRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Yy1_Bankstatementapi<T>, T> {
  /**
   * Returns a request builder for querying all `Yy1_Bankstatementapi` entities.
   * @returns A request builder for creating requests to retrieve all `Yy1_Bankstatementapi` entities.
   */
  getAll(): GetAllRequestBuilder<Yy1_Bankstatementapi<T>, T> {
    return new GetAllRequestBuilder<Yy1_Bankstatementapi<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for retrieving one `Yy1_Bankstatementapi` entity based on its keys.
   * @param bankStatementShortId Key property. See {@link Yy1_Bankstatementapi.bankStatementShortId}.
   * @returns A request builder for creating requests to retrieve one `Yy1_Bankstatementapi` entity based on its keys.
   */
  getByKey(
    bankStatementShortId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<Yy1_Bankstatementapi<T>, T> {
    return new GetByKeyRequestBuilder<Yy1_Bankstatementapi<T>, T>(
      this.entityApi,
      { BankStatementShortID: bankStatementShortId }
    );
  }
}
