/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BusinessUserApplicationJobs } from './BusinessUserApplicationJobs';
import { BusinessUserApplicationJobsRequestBuilder } from './BusinessUserApplicationJobsRequestBuilder';
import {
  CustomField,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField
} from '@sap-cloud-sdk/odata-v4';
export declare class BusinessUserApplicationJobsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<BusinessUserApplicationJobs<DeSerializersT>, DeSerializersT>
{
  deSerializers: DeSerializersT;
  private constructor();
  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(
    deSerializers?: DeSerializersT
  ): BusinessUserApplicationJobsApi<DeSerializersT>;
  private navigationPropertyFields;
  _addNavigationProperties(linkedApis: []): this;
  entityConstructor: typeof BusinessUserApplicationJobs;
  requestBuilder(): BusinessUserApplicationJobsRequestBuilder<DeSerializersT>;
  entityBuilder(): EntityBuilderType<
    BusinessUserApplicationJobs<DeSerializersT>,
    DeSerializersT
  >;
  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable?: NullableT
  ): CustomField<
    BusinessUserApplicationJobs<DeSerializersT>,
    DeSerializersT,
    NullableT
  >;
  private _fieldBuilder?;
  get fieldBuilder(): FieldBuilder<
    typeof BusinessUserApplicationJobs,
    DeSerializersT
  >;
  private _schema?;
  get schema(): {
    USER_ID: OrderableEdmTypeField<
      BusinessUserApplicationJobs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    APPLICATION_JOB: OrderableEdmTypeField<
      BusinessUserApplicationJobs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    APPLICATION_JOB_DESCRIPTION: OrderableEdmTypeField<
      BusinessUserApplicationJobs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    APPLICATION_JOB_TEMPLATE: OrderableEdmTypeField<
      BusinessUserApplicationJobs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    APPLICATION_JOB_TEMPLATE_TEXT: OrderableEdmTypeField<
      BusinessUserApplicationJobs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ALL_FIELDS: AllFields<BusinessUserApplicationJobs<DeSerializers>>;
  };
}
