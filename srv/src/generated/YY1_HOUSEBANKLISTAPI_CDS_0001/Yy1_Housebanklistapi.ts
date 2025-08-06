/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  Entity,
  DefaultDeSerializers,
  DeSerializers,
  DeserializedType
} from '@sap-cloud-sdk/odata-v2';
import type { Yy1_HousebanklistapiApi } from './Yy1_HousebanklistapiApi';

/**
 * This class represents the entity "YY1_HOUSEBANKLISTAPI" of service "YY1_HOUSEBANKLISTAPI_CDS".
 */
export class Yy1_Housebanklistapi<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements Yy1_HousebanklistapiType<T>
{
  /**
   * Technical entity name for Yy1_Housebanklistapi.
   */
  static override _entityName = 'YY1_HOUSEBANKLISTAPI';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath =
    '/sap/opu/odata/sap/YY1_HOUSEBANKLISTAPI_CDS';
  /**
   * All key fields of the Yy1_Housebanklistapi entity.
   */
  static _keys = ['CompanyCode', 'HouseBank', 'HouseBankAccount'];
  /**
   * Company Code.
   * Maximum length: 4.
   */
  declare companyCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Short Key for a House Bank.
   * Maximum length: 5.
   */
  declare houseBank: DeserializedType<T, 'Edm.String'>;
  /**
   * House Bank Account.
   * Maximum length: 5.
   */
  declare houseBankAccount: DeserializedType<T, 'Edm.String'>;
  /**
   * Name of Company Code or Company.
   * Maximum length: 25.
   * @nullable
   */
  declare companyCodeName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bank Account Technical ID.
   * Maximum length: 10.
   * @nullable
   */
  declare bankAccountInternalId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bank Keys.
   * Maximum length: 15.
   * @nullable
   */
  declare bankInternalId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bank Country/Region Key.
   * Maximum length: 3.
   * @nullable
   */
  declare bankCountry?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bank Number.
   * Maximum length: 15.
   * @nullable
   */
  declare bankNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bank Account Number.
   * Maximum length: 18.
   * @nullable
   */
  declare bankAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * General Ledger Account.
   * Maximum length: 10.
   * @nullable
   */
  declare glAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name of Financial Institution.
   * Maximum length: 60.
   * @nullable
   */
  declare bankName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Account Description.
   * Maximum length: 60.
   * @nullable
   */
  declare bankAccountDescription?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: Yy1_HousebanklistapiApi<T>) {
    super(_entityApi);
  }
}

export interface Yy1_HousebanklistapiType<
  T extends DeSerializers = DefaultDeSerializers
> {
  companyCode: DeserializedType<T, 'Edm.String'>;
  houseBank: DeserializedType<T, 'Edm.String'>;
  houseBankAccount: DeserializedType<T, 'Edm.String'>;
  companyCodeName?: DeserializedType<T, 'Edm.String'> | null;
  bankAccountInternalId?: DeserializedType<T, 'Edm.String'> | null;
  bankInternalId?: DeserializedType<T, 'Edm.String'> | null;
  bankCountry?: DeserializedType<T, 'Edm.String'> | null;
  bankNumber?: DeserializedType<T, 'Edm.String'> | null;
  bankAccount?: DeserializedType<T, 'Edm.String'> | null;
  glAccount?: DeserializedType<T, 'Edm.String'> | null;
  bankName?: DeserializedType<T, 'Edm.String'> | null;
  bankAccountDescription?: DeserializedType<T, 'Edm.String'> | null;
}
