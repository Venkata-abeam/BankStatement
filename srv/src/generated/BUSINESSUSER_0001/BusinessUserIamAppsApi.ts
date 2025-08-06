/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BusinessUserIamApps } from './BusinessUserIamApps';
import { BusinessUserIamAppsRequestBuilder } from './BusinessUserIamAppsRequestBuilder';
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
export class BusinessUserIamAppsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<BusinessUserIamApps<DeSerializersT>, DeSerializersT>
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
  ): BusinessUserIamAppsApi<DeSerializersT> {
    return new BusinessUserIamAppsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = BusinessUserIamApps;

  requestBuilder(): BusinessUserIamAppsRequestBuilder<DeSerializersT> {
    return new BusinessUserIamAppsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    BusinessUserIamApps<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<BusinessUserIamApps<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    BusinessUserIamApps<DeSerializersT>,
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
    typeof BusinessUserIamApps,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        BusinessUserIamApps,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    USER_ID: OrderableEdmTypeField<
      BusinessUserIamApps<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    APP_ID: OrderableEdmTypeField<
      BusinessUserIamApps<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    APP_TYPE: OrderableEdmTypeField<
      BusinessUserIamApps<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ALL_FIELDS: AllFields<BusinessUserIamApps<DeSerializers>>;
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
         * Static representation of the {@link appId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        APP_ID: fieldBuilder.buildEdmTypeField('AppID', 'Edm.String', false),
        /**
         * Static representation of the {@link appType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        APP_TYPE: fieldBuilder.buildEdmTypeField(
          'AppType',
          'Edm.String',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', BusinessUserIamApps)
      };
    }

    return this._schema;
  }
}
