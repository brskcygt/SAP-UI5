sap.ui.define([
    "sap/ui/demo/walkthrough/localService/mockserver",
    "sap/ui/test/opaQunit",
    "./pages/App"
],function(mockserver){
    "use strict";

    QUnit.module("Navigation");

    opaTest("Should open the Hello dialog", function(Given, When, Then){
        mockserver.init();

        Given.iStartMyUIComponent({
            componentConfig: {
                name:"sap.ui.demo.walkthrough"
            }
        });

        When.onTheAppPage.iPressTheSayHelloWithDialogButton();

        Then.onTheAppPage.iShouldSeeTheHelloDialog();

        Then.iTeardownMyApp();
    })
})