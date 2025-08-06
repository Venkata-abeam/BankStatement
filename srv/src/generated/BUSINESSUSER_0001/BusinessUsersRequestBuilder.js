"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusinessUsersRequestBuilder = void 0;
/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v4_1 = require("@sap-cloud-sdk/odata-v4");
const BusinessUsers_1 = require("./BusinessUsers");
/**
 * Request builder class for operations supported on the {@link BusinessUsers} entity.
 */
class BusinessUsersRequestBuilder extends odata_v4_1.RequestBuilder {
    /**
     * Returns a request builder for querying all `BusinessUsers` entities.
     * @returns A request builder for creating requests to retrieve all `BusinessUsers` entities.
     */
    getAll() {
        return new odata_v4_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `BusinessUsers` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `BusinessUsers`.
     */
    create(entity) {
        return new odata_v4_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for retrieving one `BusinessUsers` entity based on its keys.
     * @param userId Key property. See {@link BusinessUsers.userId}.
     * @returns A request builder for creating requests to retrieve one `BusinessUsers` entity based on its keys.
     */
    getByKey(userId) {
        return new odata_v4_1.GetByKeyRequestBuilder(this.entityApi, {
            UserID: userId
        });
    }
    /**
     * Returns a request builder for updating an entity of type `BusinessUsers`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `BusinessUsers`.
     */
    update(entity) {
        return new odata_v4_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(userIdOrEntity) {
        return new odata_v4_1.DeleteRequestBuilder(this.entityApi, userIdOrEntity instanceof BusinessUsers_1.BusinessUsers
            ? userIdOrEntity
            : { UserID: userIdOrEntity });
    }
}
exports.BusinessUsersRequestBuilder = BusinessUsersRequestBuilder;
//# sourceMappingURL=BusinessUsersRequestBuilder.js.map