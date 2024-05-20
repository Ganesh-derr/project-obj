/*global QUnit*/

sap.ui.define([
	"sap/ui/test/opaQunit",
	"sap/ui/test/Opa5",
	"sap/ui/test/actions/Press",
	"sap/ui/test/matchers/PropertyStrictEquals",
	"./pages/App",
	"./pages/View1",
	
	
], function (opaTest,Opa5,Press,PropertyStrictEquals) {
	"use strict";

	QUnit.module("Navigation Journey");


	var oArrangements = new Opa5({
		iStartMyApp: function(){

			return this.iStartMyAppInAFrame("index.html");
		}
		
	})

	var oActions =  new Opa5({
		iPressOnTheButton: function(){
			return this.waitFor({
				viewName: "View1",
				id:"ButtonId",
				actions:new Press(),
				errorMessage: "did not find the button"
			})
		}
	})


	var oAssertions = new Opa5({
		theButtonShouldHaveDifferenttext: function(){
			return this.waitFor({
				viewName: "View1",
				id: "ButtonId",
				matchers: new PropertyStrictEquals({
					name: "text",
					value: "Button text has changed"
				}),
				success: function(event){
					Opa5.assert.ok(true, "The button text changed to "+ event.getText())
				},
				errorMessage: "Button text did not changed"
			})
		}
	})
	
	Opa5.extendConfig({
		arrangeMents : oArrangements,
		actions: oActions,
		assertions: oAssertions,
		viewNamespace: "view"
	})

	opaTest("Should see the initial page of the app", function (Given, When, Then) {
		// Arrangements
		Given.iStartMyApp();

		// Actions

		When.iPressOnTheButton();

		// Assertions
		// Then.onTheAppPage.iShouldSeeTheApp();
      	// Then.onTheViewPage.iShouldSeeThePageView();

		//Cleanup
		// Then.iTeardownMyApp();
		Then.theButtonShouldHaveDifferenttext();
	
	});

	


});
