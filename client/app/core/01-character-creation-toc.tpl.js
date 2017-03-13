System.register(["angular"], function (_export) {
  var angular;
  return {
    setters: [function (_angular) {
      angular = _angular["default"];
    }],
    execute: function () {
      "use strict";

      angular.module("app/core/01-character-creation-toc.tpl.html", []).run(["$templateCache", function ($templateCache) {
        $templateCache.put("app/core/01-character-creation-toc.tpl.html", "<div id=\"toc\"><ul><li><a href=\"#chapter-1-character-creation\">Chapter 1: Character Creation</a><ul><li><a href=\"#step-1-describe-your-character\">Step 1: Describe Your Character</a></li><li><a href=\"#step-2-choose-attributes\">Step 2: Choose Attributes</a><ul><li><a href=\"#quick-build\">Quick Build</a></li><li><a href=\"#custom-build\">Custom Build</a></li><li><a href=\"#archetype-build\">Archetype Build</a></li><li><a href=\"#record-attribute-dice\">Record Attribute Dice</a></li></ul></li><li><a href=\"#step-3-record-defenses-hit-points-and-speed\">Step 3: Record Defenses, Hit Points, and Speed</a></li><li><a href=\"#step-4-purchase-feats\">Step 4: Purchase Feats</a><ul><li><a href=\"#choose-your-feats\">Choose your feats</a></li></ul></li><li><a href=\"#step-5-choose-starting-equipment\">Step 5: Choose Starting Equipment</a></li><li><a href=\"#step-6-choose-perks-and-flaws\">Step 6: Choose Perks and Flaws</a><ul><li><a href=\"#activating-perks\">Activating Perks</a></li><li><a href=\"#activating-flaws\">Activating Flaws</a></li><li><a href=\"#gaining-perks-and-flaws\">Gaining Perks and Flaws</a></li><li><a href=\"#designing-your-own-perks-and-flaws\">Designing Your Own Perks and Flaws</a></li><li><a href=\"#perk-descriptions\">Perk Descriptions</a></li><li><a href=\"#flaw-description\">Flaw Description</a></li></ul></li><li><a href=\"#step-7-tell-your-story\">Step 7: Tell Your Story</a><ul><li><a href=\"#relax\">Relax</a></li><li><a href=\"#respect-the-gm\">Respect the GM</a></li><li><a href=\"#respect-the-other-players\">Respect the Other Players</a></li></ul></li><li><a href=\"#gaining-xp-and-leveling-up\">Gaining XP and Leveling Up</a><ul><li><a href=\"#feat-and-attribute-points\">Feat and Attribute Points</a></li><li><a href=\"#new-hit-points\">New Hit Points</a></li></ul></li><li><a href=\"#starting-beyond-first-level\">Starting Beyond First Level</a></li></ul></li></ul></div>");
      }]);
    }
  };
});