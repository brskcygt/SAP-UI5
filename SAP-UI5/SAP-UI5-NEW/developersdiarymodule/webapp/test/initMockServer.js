sap.ui.define([
    "../localService/mockserver"
],function(mockserver){
    "use strict";

    //initialise the mock server
    mockserver.init();

    //initialise the embedded component on the HTML page
    sap.ui.require(["sap/ui/core/ComponentSupport"])
})