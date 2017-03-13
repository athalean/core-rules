System.register(["angular"], function (_export) {
  var angular;
  return {
    setters: [function (_angular) {
      angular = _angular["default"];
    }],
    execute: function () {
      "use strict";

      angular.module("app/core/03-feats.tpl.html", []).run(["$templateCache", function ($templateCache) {
        $templateCache.put("app/core/03-feats.tpl.html", "<h1 id=\"chapter-3-feats\">Chapter 3: Feats</h1><p>In this chapter, you’ll find complete descriptions of all of the feats available to customize your character in Open Legend. Feats are used to define your character’s specializations, the actions, tasks, and abilities they excel at beyond all others. Some feats will enhance your major actions, such as by allowing you to multi-attack with reduced disadvantage, while others will grant you completely new powers, such as the ability to change your shape.</p><h2 id=\"acquiring-feats\">Acquiring Feats</h2><p>During your adventurers, the GM will award you Experience Points (or XP) for accomplishing quests and driving the story forward. Every time you gain XP, you also gain 1 feat point that can be used to purchase new feats just as you did during character creation. You do not have to spend these feat points when you gain them. You can feel free to save any unused feat points to be used at a later time.</p><h2 id=\"reading-a-feat-description\">Reading a Feat Description</h2><p>The full listing of feats is available in a searchable list <a href=\"http://www.openlegendrpg.com/feats\">here</a>.</p><p>Each feat description includes the following elements.</p><p><strong>Title.</strong> The name of the feat. Some feats contain multiple tiers, rising in power with each new tier. If a feat contains multiple tiers, these will be indicated in parentheses after the title (e.g., “Alternate Form (I - II)” ).</p><p><strong>Cost.</strong> This is the number of feat points required to purchase the feat. If the feat has multiple tiers, the cost is the same for each tier and must be paid every time the feat is purchased at a new tier <em>unless otherwise noted in the feat description</em>.</p><p><strong>Prerequisites.</strong> Many feats have specific requirements that must be met before a character can purchase the feat. Prerequisites may take the form of a minimum attribute score, another feat, or a special requirement. If a feat has multiple tiers with different prerequisites, the requirements for each tier are separated by a slash.</p><p><strong>Description.</strong> This entry simply provides a general idea of what the feat could look like in the story.</p><p><strong>Effect.</strong> This entry indicates the mechanical effects of the feat on the rules of the game.</p>");
      }]);
    }
  };
});