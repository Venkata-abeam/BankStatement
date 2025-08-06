"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusinessUserAutoLockStatusRequestBuilder = void 0;
/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v4_1 = require("@sap-cloud-sdk/odata-v4");
const BusinessUserAutoLockStatus_1 = require("./BusinessUserAutoLockStatus");
/**
 * Request builder class for operations supported on the {@link BusinessUserAutoLockStatus} entity.
 */
class BusinessUserAutoLockStatusRequestBuilder extends odata_v4_1.RequestBuilder {
    /**
     * Returns a request builder for querying all `BusinessUserAutoLockStatus` entities.
     * @returns A request builder for creating requests to retrieve all `BusinessUserAutoLockStatus` entities.
     */
    getAll() {
        return new odata_v4_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `BusinessUserAutoLockStatus` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `BusinessUserAutoLockStatus`.
     */
    create(entity) {
        return new odata_v4_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for retrieving one `BusinessUserAutoLockStatus` entity based on its keys.
     * @param businessUserAutoLockStatus Key property. See {@link BusinessUserAutoLockStatus.businessUserAutoLockStatus}.
     * @returns A request builder for creating requests to retrieve one `BusinessUserAutoLockStatus` entity based on its keys.
     */
    getByKey(businessUserAutoLockStatus) {
        return new odata_v4_1.GetByKeyRequestBuilder(this.entityApi, { BusinessUserAutoLockStatus: businessUserAutoLockStatus });
    }
    /**
     * Returns a request builder for updating an entity of type `BusinessUserAutoLockStatus`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `BusinessUserAutoLockStatus`.
     */
    update(entity) {
        return new odata_v4_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(businessUserAutoLockStatusOrEntity) {
        return new odata_v4_1.DeleteRequestBuilder(this.entityApi, businessUserAutoLockStatusOrEntity instanceof BusinessUserAutoLockStatus_1.BusinessUserAutoLockStatus
            ? businessUserAutoLockStatusOrEntity
            : { BusinessUserAutoLockStatus: businessUserAutoLockStatusOrEntity });
    }
}
exports.BusinessUserAutoLockStatusRequestBuilder = BusinessUserAutoLockStatusRequestBuilder;
//# sourceMappingURL=BusinessUserAutoLockStatusRequestBuilder.js.map