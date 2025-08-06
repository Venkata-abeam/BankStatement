"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusinessUserBusinessRolesRequestBuilder = void 0;
/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v4_1 = require("@sap-cloud-sdk/odata-v4");
const BusinessUserBusinessRoles_1 = require("./BusinessUserBusinessRoles");
/**
 * Request builder class for operations supported on the {@link BusinessUserBusinessRoles} entity.
 */
class BusinessUserBusinessRolesRequestBuilder extends odata_v4_1.RequestBuilder {
    /**
     * Returns a request builder for querying all `BusinessUserBusinessRoles` entities.
     * @returns A request builder for creating requests to retrieve all `BusinessUserBusinessRoles` entities.
     */
    getAll() {
        return new odata_v4_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `BusinessUserBusinessRoles` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `BusinessUserBusinessRoles`.
     */
    create(entity) {
        return new odata_v4_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for retrieving one `BusinessUserBusinessRoles` entity based on its keys.
     * @param userId Key property. See {@link BusinessUserBusinessRoles.userId}.
     * @param businessRoleId Key property. See {@link BusinessUserBusinessRoles.businessRoleId}.
     * @returns A request builder for creating requests to retrieve one `BusinessUserBusinessRoles` entity based on its keys.
     */
    getByKey(userId, businessRoleId) {
        return new odata_v4_1.GetByKeyRequestBuilder(this.entityApi, {
            UserID: userId,
            BusinessRoleID: businessRoleId
        });
    }
    /**
     * Returns a request builder for updating an entity of type `BusinessUserBusinessRoles`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `BusinessUserBusinessRoles`.
     */
    update(entity) {
        return new odata_v4_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(userIdOrEntity, businessRoleId) {
        return new odata_v4_1.DeleteRequestBuilder(this.entityApi, userIdOrEntity instanceof BusinessUserBusinessRoles_1.BusinessUserBusinessRoles
            ? userIdOrEntity
            : {
                UserID: userIdOrEntity,
                BusinessRoleID: businessRoleId
            });
    }
}
exports.BusinessUserBusinessRolesRequestBuilder = BusinessUserBusinessRolesRequestBuilder;
//# sourceMappingURL=BusinessUserBusinessRolesRequestBuilder.js.map