sap.ui.define([
    "sap/ui/core/UIComponent",
    "bankstatement/model/models"
], (UIComponent, models) => {
    "use strict";

    return UIComponent.extend("bankstatement.Component", {
        metadata: {
            manifest: "json",
            interfaces: [
                "sap.ui.core.IAsyncContentCreation"
            ]
        },

        async init() {
            // call the base component's init function
            UIComponent.prototype.init.apply(this, arguments);

            // set the device model
            this.setModel(models.createDeviceModel(), "device");

            // enable routing
            this.getRouter().initialize();
        },
        _getCompanyCodes: async function (oCCodeModel, oFilter) {
            return new Promise((resolve, reject) => {
                oCCodeModel.read("/CompanyCodeVH", {
                    filters: [oFilter],
                    urlParameters: { "$top": 999999 },
                    success: function (response) {
                        resolve(response.results);
                    }.bind(this),
                    error: function (error) {
                        reject(error);
                    }.bind(this)
                });
            });
        },
    });
});