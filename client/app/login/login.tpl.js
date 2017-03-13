System.register(["angular"], function (_export) {
  var angular;
  return {
    setters: [function (_angular) {
      angular = _angular["default"];
    }],
    execute: function () {
      "use strict";

      angular.module("app/login/login.tpl.html", []).run(["$templateCache", function ($templateCache) {
        $templateCache.put("app/login/login.tpl.html", "<main-wrap layout=\"column\" flex=\"\" layout-fill=\"\"><div layout=\"vertical\" layout-fill=\"\"><md-content flex=\"\" layout-padding=\"lg\"><login-component></login-component></md-content></div></main-wrap>");
      }]);
    }
  };
});