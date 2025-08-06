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
import type { Yy1_BankgllineapiApi } from './Yy1_BankgllineapiApi';
/**
 * This class represents the entity "YY1_BANKGLLINEAPI" of service "YY1_BANKGLLINEAPI_CDS".
 */
export declare class Yy1_Bankgllineapi<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements Yy1_BankgllineapiType<T>
{
  /**
   * Technical entity name for Yy1_Bankgllineapi.
   */
  static _entityName: string;
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath: string;
  /**
   * All key fields of the Yy1_Bankgllineapi entity.
   */
  static _keys: string[];
  /**
   * Id.
   */
  id: DeserializedType<T, 'Edm.String'>;
  /**
   * Source Ledger.
   * Maximum length: 2.
   * @nullable
   */
  sourceLedger?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Company Code.
   * Maximum length: 4.
   * @nullable
   */
  companyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fiscal Year.
   * Maximum length: 4.
   * @nullable
   */
  fiscalYear?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Journal Entry.
   * Maximum length: 10.
   * @nullable
   */
  accountingDocument?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * General Ledger Journal Entry Line Item.
   * Maximum length: 6.
   * @nullable
   */
  ledgerGlLineItem?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ledger in General Ledger Accounting.
   * Maximum length: 2.
   * @nullable
   */
  ledger?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * G/L Account.
   * Maximum length: 10.
   * @nullable
   */
  glAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Amount in Transaction Currency.
   * @nullable
   */
  amountInTransactionCurrency?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Transaction Currency.
   * Maximum length: 5.
   * @nullable
   */
  transactionCurrency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Company Code Currency.
   * Maximum length: 5.
   * @nullable
   */
  companyCodeCurrency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Amount in Company Code Currency.
   * @nullable
   */
  amountInCompanyCodeCurrency?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Global Currency.
   * Maximum length: 5.
   * @nullable
   */
  globalCurrency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Amount in Global Currency.
   * @nullable
   */
  amountInGlobalCurrency?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Chart of Accounts.
   * Maximum length: 4.
   * @nullable
   */
  chartOfAccounts?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * House Bank Key.
   * Maximum length: 5.
   * @nullable
   */
  houseBank?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * House Bank Account.
   * Maximum length: 5.
   * @nullable
   */
  houseBankAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Posting Date.
   * @nullable
   */
  postingDate?: DeserializedType<T, 'Edm.DateTime'> | null;
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
  constructor(_entityApi: Yy1_BankgllineapiApi<T>);
}
export interface Yy1_BankgllineapiType<
  T extends DeSerializers = DefaultDeSerializers
> {
  id: DeserializedType<T, 'Edm.String'>;
  sourceLedger?: DeserializedType<T, 'Edm.String'> | null;
  companyCode?: DeserializedType<T, 'Edm.String'> | null;
  fiscalYear?: DeserializedType<T, 'Edm.String'> | null;
  accountingDocument?: DeserializedType<T, 'Edm.String'> | null;
  ledgerGlLineItem?: DeserializedType<T, 'Edm.String'> | null;
  ledger?: DeserializedType<T, 'Edm.String'> | null;
  glAccount?: DeserializedType<T, 'Edm.String'> | null;
  amountInTransactionCurrency?: DeserializedType<T, 'Edm.Decimal'> | null;
  transactionCurrency?: DeserializedType<T, 'Edm.String'> | null;
  companyCodeCurrency?: DeserializedType<T, 'Edm.String'> | null;
  amountInCompanyCodeCurrency?: DeserializedType<T, 'Edm.Decimal'> | null;
  globalCurrency?: DeserializedType<T, 'Edm.String'> | null;
  amountInGlobalCurrency?: DeserializedType<T, 'Edm.Decimal'> | null;
  chartOfAccounts?: DeserializedType<T, 'Edm.String'> | null;
  houseBank?: DeserializedType<T, 'Edm.String'> | null;
  houseBankAccount?: DeserializedType<T, 'Edm.String'> | null;
  postingDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  bankAccount?: DeserializedType<T, 'Edm.String'> | null;
  bankAccountDescription?: DeserializedType<T, 'Edm.String'> | null;
}
