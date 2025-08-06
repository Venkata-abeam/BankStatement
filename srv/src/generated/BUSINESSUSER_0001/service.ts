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
import { BigNumber } from 'bignumber.js';
import { Moment, Duration } from 'moment';
import {
  defaultDeSerializers,
  DeSerializers,
  DefaultDeSerializers,
  mergeDefaultDeSerializersWith,
  Time
} from '@sap-cloud-sdk/odata-v4';
import { batch, changeset } from './BatchRequest';

export function businessuser0001<
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
  deSerializers: Partial<
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
  > = defaultDeSerializers as any
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
> {
  return new Businessuser0001(mergeDefaultDeSerializersWith(deSerializers));
}
class Businessuser0001<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  private apis: Record<string, any> = {};
  private deSerializers: DeSerializersT;

  constructor(deSerializers: DeSerializersT) {
    this.deSerializers = deSerializers;
  }

  private initApi(key: string, entityApi: any): any {
    if (!this.apis[key]) {
      this.apis[key] = entityApi._privateFactory(this.deSerializers);
    }
    return this.apis[key];
  }

  get businessUserApplicationJobsApi(): BusinessUserApplicationJobsApi<DeSerializersT> {
    return this.initApi(
      'businessUserApplicationJobsApi',
      BusinessUserApplicationJobsApi
    );
  }

  get businessUserAutoLockStatusApi(): BusinessUserAutoLockStatusApi<DeSerializersT> {
    return this.initApi(
      'businessUserAutoLockStatusApi',
      BusinessUserAutoLockStatusApi
    );
  }

  get businessUserBusinessCatalogsApi(): BusinessUserBusinessCatalogsApi<DeSerializersT> {
    return this.initApi(
      'businessUserBusinessCatalogsApi',
      BusinessUserBusinessCatalogsApi
    );
  }

  get businessUserBusinessRolesApi(): BusinessUserBusinessRolesApi<DeSerializersT> {
    return this.initApi(
      'businessUserBusinessRolesApi',
      BusinessUserBusinessRolesApi
    );
  }

  get businessUserIamAppsApi(): BusinessUserIamAppsApi<DeSerializersT> {
    return this.initApi('businessUserIamAppsApi', BusinessUserIamAppsApi);
  }

  get businessUsersApi(): BusinessUsersApi<DeSerializersT> {
    const api = this.initApi('businessUsersApi', BusinessUsersApi);
    const linkedApis = [
      this.initApi(
        'businessUserApplicationJobsApi',
        BusinessUserApplicationJobsApi
      ),
      this.initApi(
        'businessUserBusinessCatalogsApi',
        BusinessUserBusinessCatalogsApi
      ),
      this.initApi(
        'businessUserBusinessRolesApi',
        BusinessUserBusinessRolesApi
      ),
      this.initApi('businessUserIamAppsApi', BusinessUserIamAppsApi)
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get batch(): typeof batch {
    return batch;
  }

  get changeset(): typeof changeset {
    return changeset;
  }
}
