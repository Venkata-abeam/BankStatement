"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusinessUserBusinessCatalogsRequestBuilder = void 0;
/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v4_1 = require("@sap-cloud-sdk/odata-v4");
const BusinessUserBusinessCatalogs_1 = require("./BusinessUserBusinessCatalogs");
/**
 * Request builder class for operations supported on the {@link BusinessUserBusinessCatalogs} entity.
 */
class BusinessUserBusinessCatalogsRequestBuilder extends odata_v4_1.RequestBuilder {
    /**
     * Returns a request builder for querying all `BusinessUserBusinessCatalogs` entities.
     * @returns A request builder for creating requests to retrieve all `BusinessUserBusinessCatalogs` entities.
     */
    getAll() {
        return new odata_v4_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `BusinessUserBusinessCatalogs` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `BusinessUserBusinessCatalogs`.
     */
    create(entity) {
        return new odata_v4_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for retrieving one `BusinessUserBusinessCatalogs` entity based on its keys.
     * @param userId Key property. See {@link BusinessUserBusinessCatalogs.userId}.
     * @param businessCatalogId Key property. See {@link BusinessUserBusinessCatalogs.businessCatalogId}.
     * @returns A request builder for creating requests to retrieve one `BusinessUserBusinessCatalogs` entity based on its keys.
     */
    getByKey(userId, businessCatalogId) {
        return new odata_v4_1.GetByKeyRequestBuilder(this.entityApi, {
            UserID: userId,
            BusinessCatalogID: businessCatalogId
        });
    }
    /**
     * Returns a request builder for updating an entity of type `BusinessUserBusinessCatalogs`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `BusinessUserBusinessCatalogs`.
     */
    update(entity) {
        return new odata_v4_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(userIdOrEntity, businessCatalogId) {
        return new odata_v4_1.DeleteRequestBuilder(this.entityApi, userIdOrEntity instanceof BusinessUserBusinessCatalogs_1.BusinessUserBusinessCatalogs
            ? userIdOrEntity
            : {
                UserID: userIdOrEntity,
                BusinessCatalogID: businessCatalogId
            });
    }
}
exports.BusinessUserBusinessCatalogsRequestBuilder = BusinessUserBusinessCatalogsRequestBuilder;
//# sourceMappingURL=BusinessUserBusinessCatalogsRequestBuilder.js.map