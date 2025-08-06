"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusinessUserApplicationJobsApi = void 0;
/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const BusinessUserApplicationJobs_1 = require("./BusinessUserApplicationJobs");
const BusinessUserApplicationJobsRequestBuilder_1 = require("./BusinessUserApplicationJobsRequestBuilder");
const odata_v4_1 = require("@sap-cloud-sdk/odata-v4");
class BusinessUserApplicationJobsApi {
    constructor(deSerializers = odata_v4_1.defaultDeSerializers) {
        this.entityConstructor = BusinessUserApplicationJobs_1.BusinessUserApplicationJobs;
        this.deSerializers = deSerializers;
    }
    /**
     * Do not use this method or the constructor directly.
     * Use the service function as described in the documentation to get an API instance.
     */
    static _privateFactory(deSerializers = odata_v4_1.defaultDeSerializers) {
        return new BusinessUserApplicationJobsApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {};
        return this;
    }
    requestBuilder() {
        return new BusinessUserApplicationJobsRequestBuilder_1.BusinessUserApplicationJobsRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v4_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v4_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v4_1.FieldBuilder(BusinessUserApplicationJobs_1.BusinessUserApplicationJobs, this.deSerializers);
        }
        return this._fieldBuilder;
    }
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
                APPLICATION_JOB: fieldBuilder.buildEdmTypeField('ApplicationJob', 'Edm.String', false),
                /**
                 * Static representation of the {@link applicationJobDescription} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                APPLICATION_JOB_DESCRIPTION: fieldBuilder.buildEdmTypeField('ApplicationJobDescription', 'Edm.String', false),
                /**
                 * Static representation of the {@link applicationJobTemplate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                APPLICATION_JOB_TEMPLATE: fieldBuilder.buildEdmTypeField('ApplicationJobTemplate', 'Edm.String', false),
                /**
                 * Static representation of the {@link applicationJobTemplateText} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                APPLICATION_JOB_TEMPLATE_TEXT: fieldBuilder.buildEdmTypeField('ApplicationJobTemplateText', 'Edm.String', false),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v4_1.AllFields('*', BusinessUserApplicationJobs_1.BusinessUserApplicationJobs)
            };
        }
        return this._schema;
    }
}
exports.BusinessUserApplicationJobsApi = BusinessUserApplicationJobsApi;
//# sourceMappingURL=BusinessUserApplicationJobsApi.js.map