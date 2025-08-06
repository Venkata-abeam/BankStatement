/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BusinessUserApplicationJobs } from './BusinessUserApplicationJobs';
import { BusinessUserApplicationJobsRequestBuilder } from './BusinessUserApplicationJobsRequestBuilder';
import {
  CustomField,
  defaultDeSerializers,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  entityBuilder,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField
} from '@sap-cloud-sdk/odata-v4';
export class BusinessUserApplicationJobsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<BusinessUserApplicationJobs<DeSerializersT>, DeSerializersT>
{
  public deSerializers: DeSerializersT;

  private constructor(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ) {
    this.deSerializers = deSerializers;
  }

  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  public static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ): BusinessUserApplicationJobsApi<DeSerializersT> {
    return new BusinessUserApplicationJobsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = BusinessUserApplicationJobs;

  requestBuilder(): BusinessUserApplicationJobsRequestBuilder<DeSerializersT> {
    return new BusinessUserApplicationJobsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    BusinessUserApplicationJobs<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      BusinessUserApplicationJobs<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    BusinessUserApplicationJobs<DeSerializersT>,
    DeSerializersT,
    NullableT
  > {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof BusinessUserApplicationJobs,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        BusinessUserApplicationJobs,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
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

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link userId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USER_ID: fieldBuilder.buildEdmTypeField('UserID', 'Edm.String', false),
        /**
         * Static representation of the {@link applicationJob} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        APPLICATION_JOB: fieldBuilder.buildEdmTypeField(
          'ApplicationJob',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link applicationJobDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        APPLICATION_JOB_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'ApplicationJobDescription',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link applicationJobTemplate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        APPLICATION_JOB_TEMPLATE: fieldBuilder.buildEdmTypeField(
          'ApplicationJobTemplate',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link applicationJobTemplateText} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        APPLICATION_JOB_TEMPLATE_TEXT: fieldBuilder.buildEdmTypeField(
          'ApplicationJobTemplateText',
          'Edm.String',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', BusinessUserApplicationJobs)
      };
    }

    return this._schema;
  }
}
