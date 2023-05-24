sap.ui.define([
	"sap/ui/core/library"
], function (coreLibrary) {
	"use strict";

	var ValueState = coreLibrary.ValueState;

	return {

		/**
		 * Rounds the number unit value to 2 digits
		 * @public
		 * @param {string} sValue the number string to be rounded
		 * @returns {string} sValue with 2 digits rounded
		 */
		numberUnit : function (sValue) {
			if (!sValue) {
				return "";
			}
			return parseFloat(sValue).toFixed(2);
		},

		quantityState: function(iValue){
			if(iValue === 0){
				return ValueState.Error;
			}
			else if(iValue <= 10){
				return ValueState.Warning;
			}
			else{
				return ValueState.Success;
			}
		}

	};

});