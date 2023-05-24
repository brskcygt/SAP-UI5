sap.ui.define([
    "sap/ui/base/ManagedObject",
    "sap/ui/core/Fragment"
], function (ManagedObject, Fragment) {
    "use strict"

    return ManagedObject.extend("ns.developersdiarymodule.controller.HelloDialog", {
        constructor: function (oView) {
            this._oView = oView;
        },

        exit: function () {
            delete this._oView;
        },

        open: function () {
            var oView = this._oView;

            //create the dialog lazily
            if (!oView.byId("helloDialog")) {
                var oFragmentController = {
                    onCloseDialog: function () {
                        oView.byId("helloDialog").close();
                    }
                }

                //load asynchronous XML fragment
                Fragment.load({
                    id: oView.getId(),
                    name: "ns.developersdiarymodule.view.HelloDialog",
                    controller: oFragmentController
                }).then(function (oDialog) {
                    //connect the dialog to the root view of the component (models, lifecycle)
                    oView.addDependent(oDialog);
                    oDialog.open();
                })
            }

            else{
                oView.byId("helloDialog").open();
            }


        }
    })
})