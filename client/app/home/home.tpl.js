System.register(["angular"],function(_export){var angular;return{setters:[function(_angular){angular=_angular["default"]}],execute:function(){"use strict";angular.module("app/home/home.tpl.html",[]).run(["$templateCache",function($templateCache){$templateCache.put("app/home/home.tpl.html",'<main-wrap layout-orientation="none" layout="column" flex="" layout-fill=""><md-content class="no-bg" layout-padding="lg" layout="column" flex=""><div ng-if="homeCtrl.$mdMedia(\'lg\') || homeCtrl.$mdMedia(\'gt-lg\')" class="responsive-shim"><br><br><br></div><h2 class="banner-logo">Open Legend | Open-source Role-playing Game <img src="/assets/img/open_legend_lg_logo.png" alt="Open Legend Logo"></h2><div ng-if="homeCtrl.$mdMedia(\'lg\') || homeCtrl.$mdMedia(\'gt-lg\')" class="responsive-shim"><br><br><br><br><br><br><br><br><br><br><br></div><div class="dark-bg" layout-padding="md" flex=""><h2 class="md-headline">Open Legend is currently in public beta, seeking playtest groups</h2><div class="tri-grid" flex="" layout="column" layout-gt-sm="row"><div layout-padding="sm" layout-wrap=""><div><a href="https://docs.google.com/document/d/1XDhMUCwyu4p8sNFN18jboK-KwpIx2sEEhiej9HWmoJ4/edit?usp=sharing" target="_blank"><img src="/assets/img/open_legend_get_started.jpg" alt=""></a></div></div><div layout-padding="sm" layout-wrap=""><div><a href="https://app.roll20.net/lfg/listing/37897/open-legend-playtest-series" target="_blank"><img src="/assets/img/open_legend_try_the_system.jpg" alt=""></a></div></div><div layout-padding="sm" layout-wrap=""><div><a href="https://github.com/openlegend/core-rules" target="_blank"><img src="/assets/img/open_legend_contribute.jpg" alt=""></a></div></div></div><br><br><br></div><br><br><br></md-content></main-wrap>')}])}}});