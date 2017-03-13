System.register(["angular", "angular-material", "common/directives/mainwrap/mainwrap", "config/config", "./core.controller", "./core.tpl", "./core.css!", "./00-introduction-toc.tpl", "./01-character-creation-toc.tpl", "./02-actions-attributes-toc.tpl", "./03-feats-toc.tpl", "./04-wealth-equipment-toc.tpl", "./05-banes-boons-toc.tpl", "./06-combat-toc.tpl", "./07-running-the-game-toc.tpl", "./08-rewards-toc.tpl", "./00-introduction.tpl", "./01-character-creation.tpl", "./02-actions-attributes.tpl", "./03-feats.tpl", "./04-wealth-equipment.tpl", "./05-banes-boons.tpl", "./06-combat.tpl", "./07-running-the-game.tpl", "./08-rewards.tpl"], function (_export) {
  var angular, mainwrap, configService, CoreCtrl, coreModule;
  return {
    setters: [function (_angular) {
      angular = _angular["default"];
    }, function (_angularMaterial) {}, function (_commonDirectivesMainwrapMainwrap) {
      mainwrap = _commonDirectivesMainwrapMainwrap["default"];
    }, function (_configConfig) {
      configService = _configConfig["default"];
    }, function (_coreController) {
      CoreCtrl = _coreController["default"];
    }, function (_coreTpl) {}, function (_coreCss) {}, function (_introductionTocTpl) {}, function (_characterCreationTocTpl) {}, function (_actionsAttributesTocTpl) {}, function (_featsTocTpl) {}, function (_wealthEquipmentTocTpl) {}, function (_banesBoonsTocTpl) {}, function (_combatTocTpl) {}, function (_runningTheGameTocTpl) {}, function (_rewardsTocTpl) {}, function (_introductionTpl) {}, function (_characterCreationTpl) {}, function (_actionsAttributesTpl) {}, function (_featsTpl) {}, function (_wealthEquipmentTpl) {}, function (_banesBoonsTpl) {}, function (_combatTpl) {}, function (_runningTheGameTpl) {}, function (_rewardsTpl) {}],
    execute: function () {
      "use strict";

      coreModule = angular.module("core", [mainwrap.name, configService.name, "app/core/core.tpl.html", "app/core/00-introduction-toc.tpl.html", "app/core/01-character-creation-toc.tpl.html", "app/core/02-actions-attributes-toc.tpl.html", "app/core/03-feats-toc.tpl.html", "app/core/04-wealth-equipment-toc.tpl.html", "app/core/05-banes-boons-toc.tpl.html", "app/core/06-combat-toc.tpl.html", "app/core/07-running-the-game-toc.tpl.html", "app/core/08-rewards-toc.tpl.html", "app/core/00-introduction.tpl.html", "app/core/01-character-creation.tpl.html", "app/core/02-actions-attributes.tpl.html", "app/core/03-feats.tpl.html", "app/core/04-wealth-equipment.tpl.html", "app/core/05-banes-boons.tpl.html", "app/core/06-combat.tpl.html", "app/core/07-running-the-game.tpl.html", "app/core/08-rewards.tpl.html"]);

      coreModule.config(["$stateProvider", function ($stateProvider) {
        $stateProvider.state("core", {
          url: "/core-rules/:chapter",
          templateUrl: "app/core/core.tpl.html",
          controller: CoreCtrl,
          controllerAs: "coreCtrl",
          onEnter: ["$state", "chapter", function ($state, chapter) {
            if (_.isEmpty(chapter)) {
              $state.go("core", { chapter: "00-introduction" }, { reload: true });
            }
          }],
          resolve: {
            chapter: ["$stateParams", function ($stateParams) {
              return $stateParams.chapter;
            }]
          }
        });
      }]);

      _export("default", coreModule);
    }
  };
});
//# sourceMappingURL=core.js.map
