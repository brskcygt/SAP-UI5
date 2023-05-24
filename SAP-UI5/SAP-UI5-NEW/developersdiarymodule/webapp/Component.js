sap.ui.define([
        "sap/ui/core/UIComponent",
        "sap/ui/Device",
        "ns/developersdiarymodule/model/models",
        "sap/ui/model/json/JSONModel",
        "sap/ui/model/resource/ResourceModel",
        "./controller/HelloDialog"
    ],
    function (UIComponent, Device, models,JSONModel,ResourceModel,HelloDialog) {
        "use strict";

        return UIComponent.extend("ns.developersdiarymodule.Component", {
            metadata: {
                manifest: "json"
            },

            /**
             * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
             * @public
             * @override
             */
            init: function () {
                // call the base component's init function
                UIComponent.prototype.init.apply(this, arguments);

                // enable routing
                this.getRouter().initialize();

                // set the device model
                this.setModel(models.createDeviceModel(), "device");

                var oData = {
                    recipient: {
                        name: "UI5"
                    }
                };
    
                var oModel = new JSONModel(oData);
                this.setModel(oModel);

                //set dialoıg
                this._helloDialog = new HelloDialog(this.getRootControl());
            },

            exit: function(){
                this._helloDialog.destroy();
                delete this._helloDialog;
            },

            openHelloDialog: function(){
                this._helloDialog.open();
            }
        });
    }
);