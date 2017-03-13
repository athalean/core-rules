System.register(["angular"], function (_export) {
  var angular;
  return {
    setters: [function (_angular) {
      angular = _angular["default"];
    }],
    execute: function () {
      "use strict";

      angular.module("app/core/03-feats-toc.tpl.html", []).run(["$templateCache", function ($templateCache) {
        $templateCache.put("app/core/03-feats-toc.tpl.html", "<div id=\"toc\"><ul><li><a href=\"#chapter-3-feats\">Chapter 3: Feats</a><ul><li><a href=\"#acquiring-feats\">Acquiring Feats</a></li><li><a href=\"#reading-a-feat-description\">Reading a Feat Description</a></li></ul></li></ul></div>");
      }]);
    }
  };
});