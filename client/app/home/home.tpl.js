System.register(["angular"], function (_export) {
  var angular;
  return {
    setters: [function (_angular) {
      angular = _angular["default"];
    }],
    execute: function () {
      "use strict";

      angular.module("app/home/home.tpl.html", []).run(["$templateCache", function ($templateCache) {
        $templateCache.put("app/home/home.tpl.html", "<main-wrap layout=\"column\" flex=\"\" layout-fill=\"\"><div layout=\"column\" flex=\"\" layout-fill=\"\"><md-content class=\"home-bg\" layout-padding=\"lg\" layout=\"column\" flex=\"\" layout-fill=\"\"><h2 class=\"banner-logo\">Open Legend | Open-source Role-playing Game <img src=\"/assets/img/open_legend_lg_logo.png\" alt=\"Open Legend Logo\"></h2><div show-gt-md=\"\" class=\"responsive-shim\"><br><br><br><br><br><br><br><br><br><br><br></div><md-content class=\"content-w-bg-img\" md-theme=\"dark\" layout-padding=\"md\" flex=\"\" layout-fill=\"\"><h2 class=\"md-headline\">Open Legend is currently in public beta, seeking playtest groups</h2><div class=\"tri-grid\" flex=\"\" layout=\"row\"><div flex=\"33\" layout-padding=\"sm\"><div><a href=\"https://docs.google.com/document/d/1XDhMUCwyu4p8sNFN18jboK-KwpIx2sEEhiej9HWmoJ4/edit?usp=sharing\" target=\"_blank\"><img src=\"/assets/img/open_legend_get_started.jpg\" alt=\"\"></a></div></div><div flex=\"33\" layout-padding=\"sm\"><div><a href=\"https://app.roll20.net/lfg/listing/37897/open-legend-playtest-series\" target=\"_blank\"><img src=\"/assets/img/open_legend_try_the_system.jpg\" alt=\"\"></a></div></div><div flex=\"33\" layout-padding=\"sm\"><div><a href=\"https://github.com/openlegend/core-rules\" target=\"_blank\"><img src=\"/assets/img/open_legend_contribute.jpg\" alt=\"\"></a></div></div></div></md-content></md-content></div></main-wrap>");
      }]);
    }
  };
});