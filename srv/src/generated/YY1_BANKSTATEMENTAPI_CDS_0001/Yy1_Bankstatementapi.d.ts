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
import type { Yy1_BankstatementapiApi } from './Yy1_BankstatementapiApi';
/**
 * This class represents the entity "YY1_BANKSTATEMENTAPI" of service "YY1_BANKSTATEMENTAPI_CDS".
 */
export declare class Yy1_Bankstatementapi<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements Yy1_BankstatementapiType<T>
{
  /**
   * Technical entity name for Yy1_Bankstatementapi.
   */
  static _entityName: string;
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath: string;
  /**
   * All key fields of the Yy1_Bankstatementapi entity.
   */
  static _keys: string[];
  /**
   * Short Key for Bank Statement (Surrogate Key).
   * Maximum length: 8.
   */
  bankStatementShortId: DeserializedType<T, 'Edm.String'>;
  /**
   * Company Code.
   * Maximum length: 4.
   * @nullable
   */
  companyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Short Key for a House Bank.
   * Maximum length: 5.
   * @nullable
   */
  houseBank?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * House Bank Account ID.
   * Maximum length: 5.
   * @nullable
   */
  houseBankAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bank Statement Date.
   * @nullable
   */
  bankStatementDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Opening Balance Amount.
   * @nullable
   */
  openingBalanceAmtInTransCrcy?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Ending Balance Amount.
   * @nullable
   */
  closingBalanceAmtInTransCrcy?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Currency Key.
   * Maximum length: 5.
   * @nullable
   */
  currency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Company Code.
   * Maximum length: 4.
   * @nullable
   */
  companyCode1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Short Key for a House Bank.
   * Maximum length: 5.
   * @nullable
   */
  houseBank1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * House Bank Account.
   * Maximum length: 5.
   * @nullable
   */
  houseBankAccount1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * General Ledger Account.
   * Maximum length: 10.
   * @nullable
   */
  glAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bank Account Number.
   * Maximum length: 18.
   * @nullable
   */
  bankAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Account Description.
   * Maximum length: 60.
   * @nullable
   */
  bankAccountDescription?: DeserializedType<T, 'Edm.String'> | null;
  constructor(_entityApi: Yy1_BankstatementapiApi<T>);
}
export interface Yy1_BankstatementapiType<
  T extends DeSerializers = DefaultDeSerializers
> {
  bankStatementShortId: DeserializedType<T, 'Edm.String'>;
  companyCode?: DeserializedType<T, 'Edm.String'> | null;
  houseBank?: DeserializedType<T, 'Edm.String'> | null;
  houseBankAccount?: DeserializedType<T, 'Edm.String'> | null;
  bankStatementDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  openingBalanceAmtInTransCrcy?: DeserializedType<T, 'Edm.Decimal'> | null;
  closingBalanceAmtInTransCrcy?: DeserializedType<T, 'Edm.Decimal'> | null;
  currency?: DeserializedType<T, 'Edm.String'> | null;
  companyCode1?: DeserializedType<T, 'Edm.String'> | null;
  houseBank1?: DeserializedType<T, 'Edm.String'> | null;
  houseBankAccount1?: DeserializedType<T, 'Edm.String'> | null;
  glAccount?: DeserializedType<T, 'Edm.String'> | null;
  bankAccount?: DeserializedType<T, 'Edm.String'> | null;
  bankAccountDescription?: DeserializedType<T, 'Edm.String'> | null;
}
