System.register(["angular"], function (_export) {
  var angular, _createClass, _classCallCheck, CoreCtrl;

  return {
    setters: [function (_angular) {
      angular = _angular["default"];
    }],
    execute: function () {
      "use strict";

      _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      CoreCtrl = (function () {

        // called once when the class is instantiated

        function CoreCtrl($scope, $mdMedia, $stateParams, Config, chapter) {
          _classCallCheck(this, CoreCtrl);

          this.$scope = $scope;
          this.$scope.chapter = chapter;
          this.$mdMedia = $mdMedia;
          this.Config = Config;

          this.$scope.sections = ["00-introduction", "01-character-creation", "02-actions-attributes", "03-feats", "04-wealth-equipment", "05-banes-boons", "06-combat", "07-running-the-game", "08-rewards"];
        }

        _createClass(CoreCtrl, {
          getChapterIndex: {
            value: function getChapterIndex(chapter) {
              return this.$scope.sections.indexOf(chapter);
            }
          }
        });

        return CoreCtrl;
      })();

      _export("default", CoreCtrl);
    }
  };
});
//# sourceMappingURL=core.controller.js.map
