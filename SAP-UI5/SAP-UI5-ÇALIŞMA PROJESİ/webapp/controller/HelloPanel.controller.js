sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/core/Fragment",
    "sap/ui/core/syncStyleClass"
], function(Controller, MessageToast, Fragment,syncStyleClass){
    "use strict";
    return Controller.extend("sap.ui.demo.walkthrough.controller.HelloPanel",{
        onShowHello: function(){
            var oBundle = this.getView().getModel("i18n").getResourceBundle();
            var sRecipient = this.getView().getModel().getProperty("/recipient/name");
            var sMsg = oBundle.getText("helloMsg", [sRecipient]);

            MessageToast.show(sMsg);
        },

        onOpenDialog: function(){
            if(!this.pDialog){
                this.pDialog = this.loadFragment({
                    name:"sap.ui.demo.walkthrough.view.HelloDialog"
                }).then(function(oDialog){
                    syncStyleClass(this.getOwnerComponent().getContentDensityClass(), this.getView(), oDialog);
                    return oDialog;
                }.bind(this));
            }

            this.pDialog.then(function(oDialog){
                oDialog.open();
            });
        },

        onCloseDialog: function(){
            this.byId("helloDialog").close();
        }
    }) 
})