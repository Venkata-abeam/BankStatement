"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.yy1HousebanklistapiCds0001 = yy1HousebanklistapiCds0001;
/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const Yy1_HousebanklistapiApi_1 = require("./Yy1_HousebanklistapiApi");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const BatchRequest_1 = require("./BatchRequest");
function yy1HousebanklistapiCds0001(deSerializers = odata_v2_1.defaultDeSerializers) {
    return new Yy1HousebanklistapiCds0001((0, odata_v2_1.mergeDefaultDeSerializersWith)(deSerializers));
}
class Yy1HousebanklistapiCds0001 {
    constructor(deSerializers) {
        this.apis = {};
        this.deSerializers = deSerializers;
    }
    initApi(key, entityApi) {
        if (!this.apis[key]) {
            this.apis[key] = entityApi._privateFactory(this.deSerializers);
        }
        return this.apis[key];
    }
    get yy1_HousebanklistapiApi() {
        return this.initApi('yy1_HousebanklistapiApi', Yy1_HousebanklistapiApi_1.Yy1_HousebanklistapiApi);
    }
    get batch() {
        return BatchRequest_1.batch;
    }
    get changeset() {
        return BatchRequest_1.changeset;
    }
}
//# sourceMappingURL=service.js.map