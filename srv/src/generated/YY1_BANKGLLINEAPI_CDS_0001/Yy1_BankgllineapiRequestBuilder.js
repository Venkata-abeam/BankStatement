"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Yy1_BankgllineapiRequestBuilder = void 0;
/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * Request builder class for operations supported on the {@link Yy1_Bankgllineapi} entity.
 */
class Yy1_BankgllineapiRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for querying all `Yy1_Bankgllineapi` entities.
     * @returns A request builder for creating requests to retrieve all `Yy1_Bankgllineapi` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for retrieving one `Yy1_Bankgllineapi` entity based on its keys.
     * @param id Key property. See {@link Yy1_Bankgllineapi.id}.
     * @returns A request builder for creating requests to retrieve one `Yy1_Bankgllineapi` entity based on its keys.
     */
    getByKey(id) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            ID: id
        });
    }
}
exports.Yy1_BankgllineapiRequestBuilder = Yy1_BankgllineapiRequestBuilder;
//# sourceMappingURL=Yy1_BankgllineapiRequestBuilder.js.map