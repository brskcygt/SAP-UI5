sap.ui.require([
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/mvc/XMLView",
    "sap/ui/model/resource/ResourceModel"
], function (JSONModel,XMLView,ResourceModel) {
	"use strict";

	// Attach an anonymous function to the SAPUI5 'init' event
	sap.ui.getCore().attachInit(function () {

        var oProductModel = new JSONModel();
        oProductModel.loadData("./model/Products.json");
        sap.ui.getCore().setModel(oProductModel,"products");

        var oModel = new JSONModel({
            firstName: "Barış",
            lastName: "Koçyiğit",
            enabled: true,
            address:{
                street:"30.Sokak",
                city:"İstanbul",
                zip:"34200",
                country:"Türkiye"
            },
            salesAmount:1500,
            priceThreshold:20,
            currencyCode:"TRY"
           
        });

        // oModel.setDefaultBindingMode(BindingMode.OneWay);

        sap.ui.getCore().setModel(oModel);

        var oResourceModel = new ResourceModel({
            bundleName:"sap.ui.demo.walkthrough.i18n.i18n",
            supportedLocales:["","de"],
            fallbackLocale:""
        });

        sap.ui.getCore().setModel(oResourceModel, "i18n");


		var oView = new XMLView({
            viewName:"sap.ui.demo.walkthrough.view.Test1"
        });

        sap.ui.getCore().getMessageManager().registerObject(oView, true);

        oView.placeAt("content");
	});
});