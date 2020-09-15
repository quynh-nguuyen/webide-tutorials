sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/Button",
	"sap/m/Bar",
	"sap/m/MessageToast"
], function(Controller, Button, Bar, MessageToast) {
	"use strict";

	return Controller.extend("test.test.controller.View1", {
		onInit: function() {

			var oRenderer = sap.ushell.Container.getRenderer("fiori2");

			// var rendererPromise = this._getRenderer();
			// /**
			//  * Add a footer with a button
			//  */
			// rendererPromise.then(function(oRenderer) {
			// oRenderer.setFooterControl("sap.m.Bar", {
			// 	id: "myFooter",
			// 	contentLeft: [new Button({
			// 		text: "Important Information",
			// 		press: function() {
			// 			MessageToast.show("This SAP Fiori Launchpad has been extended to improve your experience");
			// 		}
			// 	})]
			// });
			// });

			// /**
			//  * Add item to the header
			//  */
			// rendererPromise.then(function(oRenderer) {
				oRenderer.addHeaderItem({
					icon: "sap-icon://add",
					tooltip: "Add bookmark",
					press: function() {
						MessageToast.show("This SAP Fiori Launchpad has been extended to improve your experience");
					}
				}, true, true);
			// });
		}
	});
});