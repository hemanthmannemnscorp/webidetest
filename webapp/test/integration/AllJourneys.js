/* global QUnit*/

sap.ui.define([
	"sap/ui/test/Opa5",
	"com/test/ztest/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"com/test/ztest/test/integration/pages/View1",
	"com/test/ztest/test/integration/navigationJourney"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "com.test.ztest.view.",
		autoWait: true
	});
});