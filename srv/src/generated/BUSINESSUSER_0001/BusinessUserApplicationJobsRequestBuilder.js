"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusinessUserApplicationJobsRequestBuilder = void 0;
/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v4_1 = require("@sap-cloud-sdk/odata-v4");
const BusinessUserApplicationJobs_1 = require("./BusinessUserApplicationJobs");
/**
 * Request builder class for operations supported on the {@link BusinessUserApplicationJobs} entity.
 */
class BusinessUserApplicationJobsRequestBuilder extends odata_v4_1.RequestBuilder {
    /**
     * Returns a request builder for querying all `BusinessUserApplicationJobs` entities.
     * @returns A request builder for creating requests to retrieve all `BusinessUserApplicationJobs` entities.
     */
    getAll() {
        return new odata_v4_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `BusinessUserApplicationJobs` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `BusinessUserApplicationJobs`.
     */
    create(entity) {
        return new odata_v4_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for retrieving one `BusinessUserApplicationJobs` entity based on its keys.
     * @param userId Key property. See {@link BusinessUserApplicationJobs.userId}.
     * @param applicationJob Key property. See {@link BusinessUserApplicationJobs.applicationJob}.
     * @returns A request builder for creating requests to retrieve one `BusinessUserApplicationJobs` entity based on its keys.
     */
    getByKey(userId, applicationJob) {
        return new odata_v4_1.GetByKeyRequestBuilder(this.entityApi, {
            UserID: userId,
            ApplicationJob: applicationJob
        });
    }
    /**
     * Returns a request builder for updating an entity of type `BusinessUserApplicationJobs`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `BusinessUserApplicationJobs`.
     */
    update(entity) {
        return new odata_v4_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(userIdOrEntity, applicationJob) {
        return new odata_v4_1.DeleteRequestBuilder(this.entityApi, userIdOrEntity instanceof BusinessUserApplicationJobs_1.BusinessUserApplicationJobs
            ? userIdOrEntity
            : {
                UserID: userIdOrEntity,
                ApplicationJob: applicationJob
            });
    }
}
exports.BusinessUserApplicationJobsRequestBuilder = BusinessUserApplicationJobsRequestBuilder;
//# sourceMappingURL=BusinessUserApplicationJobsRequestBuilder.js.map