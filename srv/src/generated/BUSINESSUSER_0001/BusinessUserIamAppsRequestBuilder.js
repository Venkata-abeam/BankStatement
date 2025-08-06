"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusinessUserIamAppsRequestBuilder = void 0;
/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v4_1 = require("@sap-cloud-sdk/odata-v4");
const BusinessUserIamApps_1 = require("./BusinessUserIamApps");
/**
 * Request builder class for operations supported on the {@link BusinessUserIamApps} entity.
 */
class BusinessUserIamAppsRequestBuilder extends odata_v4_1.RequestBuilder {
    /**
     * Returns a request builder for querying all `BusinessUserIamApps` entities.
     * @returns A request builder for creating requests to retrieve all `BusinessUserIamApps` entities.
     */
    getAll() {
        return new odata_v4_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `BusinessUserIamApps` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `BusinessUserIamApps`.
     */
    create(entity) {
        return new odata_v4_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for retrieving one `BusinessUserIamApps` entity based on its keys.
     * @param userId Key property. See {@link BusinessUserIamApps.userId}.
     * @param appId Key property. See {@link BusinessUserIamApps.appId}.
     * @returns A request builder for creating requests to retrieve one `BusinessUserIamApps` entity based on its keys.
     */
    getByKey(userId, appId) {
        return new odata_v4_1.GetByKeyRequestBuilder(this.entityApi, {
            UserID: userId,
            AppID: appId
        });
    }
    /**
     * Returns a request builder for updating an entity of type `BusinessUserIamApps`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `BusinessUserIamApps`.
     */
    update(entity) {
        return new odata_v4_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(userIdOrEntity, appId) {
        return new odata_v4_1.DeleteRequestBuilder(this.entityApi, userIdOrEntity instanceof BusinessUserIamApps_1.BusinessUserIamApps
            ? userIdOrEntity
            : {
                UserID: userIdOrEntity,
                AppID: appId
            });
    }
}
exports.BusinessUserIamAppsRequestBuilder = BusinessUserIamAppsRequestBuilder;
//# sourceMappingURL=BusinessUserIamAppsRequestBuilder.js.map