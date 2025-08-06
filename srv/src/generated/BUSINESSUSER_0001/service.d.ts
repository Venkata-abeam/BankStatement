/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BusinessUserApplicationJobsApi } from './BusinessUserApplicationJobsApi';
import { BusinessUserAutoLockStatusApi } from './BusinessUserAutoLockStatusApi';
import { BusinessUserBusinessCatalogsApi } from './BusinessUserBusinessCatalogsApi';
import { BusinessUserBusinessRolesApi } from './BusinessUserBusinessRolesApi';
import { BusinessUserIamAppsApi } from './BusinessUserIamAppsApi';
import { BusinessUsersApi } from './BusinessUsersApi';
import { Moment, Duration } from 'moment';
import {
  DeSerializers,
  DefaultDeSerializers,
  Time
} from '@sap-cloud-sdk/odata-v4';
import { batch, changeset } from './BatchRequest';
export declare function businessuser0001<
  BinaryT = string,
  BooleanT = boolean,
  ByteT = number,
  DecimalT = BigNumber,
  DoubleT = number,
  FloatT = number,
  Int16T = number,
  Int32T = number,
  Int64T = BigNumber,
  GuidT = string,
  SByteT = number,
  SingleT = number,
  StringT = string,
  AnyT = any,
  DateTimeOffsetT = Moment,
  DateT = Moment,
  DurationT = Duration,
  TimeOfDayT = Time,
  EnumT = any
>(
  deSerializers?: Partial<
    DeSerializers<
      BinaryT,
      BooleanT,
      ByteT,
      DecimalT,
      DoubleT,
      FloatT,
      Int16T,
      Int32T,
      Int64T,
      GuidT,
      SByteT,
      SingleT,
      StringT,
      AnyT,
      DateTimeOffsetT,
      DateT,
      DurationT,
      TimeOfDayT,
      EnumT
    >
  >
): Businessuser0001<
  DeSerializers<
    BinaryT,
    BooleanT,
    ByteT,
    DecimalT,
    DoubleT,
    FloatT,
    Int16T,
    Int32T,
    Int64T,
    GuidT,
    SByteT,
    SingleT,
    StringT,
    AnyT,
    DateTimeOffsetT,
    DateT,
    DurationT,
    TimeOfDayT,
    EnumT
  >
>;
declare class Businessuser0001<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  private apis;
  private deSerializers;
  constructor(deSerializers: DeSerializersT);
  private initApi;
  get businessUserApplicationJobsApi(): BusinessUserApplicationJobsApi<DeSerializersT>;
  get businessUserAutoLockStatusApi(): BusinessUserAutoLockStatusApi<DeSerializersT>;
  get businessUserBusinessCatalogsApi(): BusinessUserBusinessCatalogsApi<DeSerializersT>;
  get businessUserBusinessRolesApi(): BusinessUserBusinessRolesApi<DeSerializersT>;
  get businessUserIamAppsApi(): BusinessUserIamAppsApi<DeSerializersT>;
  get businessUsersApi(): BusinessUsersApi<DeSerializersT>;
  get batch(): typeof batch;
  get changeset(): typeof changeset;
}
export {};
