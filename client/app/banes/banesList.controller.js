System.register(["angular","lodash","./banes.json!"],function(_export){var angular,banes,_createClass,_classCallCheck,BanesCtrl;return{setters:[function(_angular){angular=_angular["default"]},function(_lodash){},function(_banesJson){banes=_banesJson["default"]}],execute:function(){"use strict";_createClass=function(){function defineProperties(target,props){for(var key in props){var prop=props[key];prop.configurable=!0,prop.value&&(prop.writable=!0)}Object.defineProperties(target,props)}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_classCallCheck=function(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")},BanesCtrl=function(){function BanesCtrl($scope,$location,$mdMedia,Config,Link){var _this=this;_classCallCheck(this,BanesCtrl),this.$scope=$scope,this.$location=$location,this.$scope.$mdMedia=$mdMedia,this.Config=Config,this.Link=Link,this.powers=[],this.powers=banes,this.attackAttributes=[{name:"All"},{name:"Agility"},{name:"Alteration"},{name:"Creation"},{name:"Energy"},{name:"Entropy"},{name:"Influence"},{name:"Might"},{name:"Prescience"},{name:"Protection"}],this.selectedPowers=[],this.selectedAttributes=[{name:"All"}],this.searchQuery="",this.attackAttrSearchText="",this.powerLevelValue=0,this.powerAboveBelow="or Greater",_.isEmpty(this.$location.$$search)||(console.log("this.$location.$$search",this.$location.$$search),this.selectedAttributes=[],Object.keys(this.$location.$$search).forEach(function(val){_.find(_this.attackAttributes,{name:val})&&_this.selectedAttributes.push({name:val,power:_this.$location.$$search[val]})})),this.$scope.$watch("banesCtrl.selectedAttributes",function(newVal,oldVal){var removedItem=_.difference(oldVal,newVal);Array.isArray(removedItem)&&removedItem[0]&&removedItem[0].name&&_this.$location.search(removedItem[0].name,null)},!0)}return _createClass(BanesCtrl,{updateSearchTextModel:{value:function(val){this.attackAttrSearchText=val}},attackAttrSearchFilter:{value:function(){var _this=this;return function(item){return""===_this.attackAttrSearchText||item.name.toLowerCase().match(_this.attackAttrSearchText.toLowerCase())}.bind(this)}},textSearchFilter:{value:function(){var _this=this;return function(thisPower){var item=thisPower;if(""===_this.searchQuery&&_.includes(_this.selectedAttributes,"All"))return!0;var regex=new RegExp(_this.searchQuery,"gi"),show=!1,inAttackFilter=!0;if(show=item.name.match(regex)||item.description.match(regex)||item.effect.match(regex),_this.selectedAttributes.length>0){var inAttackFilter=!1;if(_.find(_this.selectedAttributes,{name:"All"}))inAttackFilter=!0;else var searchAttrs=angular.copy(_.without(_this.selectedAttributes,"All")),inAttackFilter=_.intersection(item.attackAttributes,_.map(searchAttrs,"name")).length>0}return show&&inAttackFilter}}},powerLevelFilter:{value:function(){var _this=this;return function(thisPower){var item=thisPower,powerAbove="or Greater"===_this.powerAboveBelow,include=!1;if(_.compact(_.map(_this.selectedAttributes,"power")).length>0)for(var i=0;i<=item.power.length;i++){var intersectAttackAttrs=_.intersection(item.attackAttributes,_.map(_this.selectedAttributes,"name"));if(intersectAttackAttrs.length>0)return powerAbove=!1,intersectAttackAttrs.forEach(function(attr){_this.$location.$$search[attr]>=item.power[0]&&(include=!0)}),include;powerAbove&&item.power[i]>=_this.powerLevelValue?include=!0:!powerAbove&&item.power[i]<=_this.powerLevelValue&&(include=!0)}else for(var i=0;i<=item.power.length;i++)powerAbove&&item.power[i]>=_this.powerLevelValue?include=!0:!powerAbove&&item.power[i]<=_this.powerLevelValue&&(include=!0);return include}}}}),BanesCtrl}(),_export("default",BanesCtrl)}}});