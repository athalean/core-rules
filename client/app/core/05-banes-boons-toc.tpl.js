System.register(["angular"], function (_export) {
  var angular;
  return {
    setters: [function (_angular) {
      angular = _angular["default"];
    }],
    execute: function () {
      "use strict";

      angular.module("app/core/05-banes-boons-toc.tpl.html", []).run(["$templateCache", function ($templateCache) {
        $templateCache.put("app/core/05-banes-boons-toc.tpl.html", "<div id=\"toc\"><ul><li><a href=\"#chapter-5-banes-boons\">Chapter 5: Banes &amp; Boons</a><ul><li><a href=\"#telling-your-story-with-banes-and-boons\">Telling Your Story with Banes and Boons</a><ul><li><a href=\"#with-great-power-comes-great-responsibility\">With Great Power Comes Great Responsibility</a></li></ul></li><li><a href=\"#invoking-banes-and-boons\">Invoking Banes and Boons</a></li><li><a href=\"#reading-a-bane-description\">Reading a Bane Description</a></li><li><a href=\"#reading-a-boon-description\">Reading a Boon Description</a></li></ul></li></ul></div>");
      }]);
    }
  };
});