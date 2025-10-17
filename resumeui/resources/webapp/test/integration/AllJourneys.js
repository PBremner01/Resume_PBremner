jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 Subject in the list
// * All 3 Subject have at least one Subjects

sap.ui.require([
	"sap/ui/test/Opa5",
	"resumedb/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"resumedb/test/integration/pages/App",
	"resumedb/test/integration/pages/Browser",
	"resumedb/test/integration/pages/Master",
	"resumedb/test/integration/pages/Detail",
	"resumedb/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "resumedb.view."
	});

	sap.ui.require([
		"resumedb/test/integration/MasterJourney",
		"resumedb/test/integration/NavigationJourney",
		"resumedb/test/integration/NotFoundJourney",
		"resumedb/test/integration/BusyJourney",
		"resumedb/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});