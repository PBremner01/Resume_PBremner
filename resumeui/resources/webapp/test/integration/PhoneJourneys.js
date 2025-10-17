jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

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
		"resumedb/test/integration/NavigationJourneyPhone",
		"resumedb/test/integration/NotFoundJourneyPhone",
		"resumedb/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});