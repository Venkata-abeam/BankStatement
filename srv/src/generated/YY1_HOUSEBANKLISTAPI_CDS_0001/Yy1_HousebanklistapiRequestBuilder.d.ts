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
import { Yy1_Housebanklistapi } from './Yy1_Housebanklistapi';
/**
 * Request builder class for operations supported on the {@link Yy1_Housebanklistapi} entity.
 */
export declare class Yy1_HousebanklistapiRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Yy1_Housebanklistapi<T>, T> {
  /**
   * Returns a request builder for querying all `Yy1_Housebanklistapi` entities.
   * @returns A request builder for creating requests to retrieve all `Yy1_Housebanklistapi` entities.
   */
  getAll(): GetAllRequestBuilder<Yy1_Housebanklistapi<T>, T>;
  /**
   * Returns a request builder for retrieving one `Yy1_Housebanklistapi` entity based on its keys.
   * @param companyCode Key property. See {@link Yy1_Housebanklistapi.companyCode}.
   * @param houseBank Key property. See {@link Yy1_Housebanklistapi.houseBank}.
   * @param houseBankAccount Key property. See {@link Yy1_Housebanklistapi.houseBankAccount}.
   * @returns A request builder for creating requests to retrieve one `Yy1_Housebanklistapi` entity based on its keys.
   */
  getByKey(
    companyCode: DeserializedType<T, 'Edm.String'>,
    houseBank: DeserializedType<T, 'Edm.String'>,
    houseBankAccount: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<Yy1_Housebanklistapi<T>, T>;
}
