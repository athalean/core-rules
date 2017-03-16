System.register(["lodash"],function(_export){return{setters:[function(_lodash){}],execute:function(){"use strict";_export("default",function(prereqs){function processAttrPrereq(val,key,suppressIteration){if("Feat"===key||"Other"===key)return"Feat"===val&&(val+=" feat "),val;var attrStrings=val.map(function(attr,x){var string="";if("Attribute"===key){var attrKey=Object.keys(attr)[0];string+=x===val.length-1?" "+(val.length>1?" or ":"")+attrKey+" "+attr[attrKey]:" "+attrKey}else"Feat"===key?string+=""+attr+" feat ":"Other "===key&&(string+=attr);return string});return attrStrings.join(",")}function processPrereqTier(prereq,key,index,suppressIteration){var prereqTiers="";return"any"===key?Object.keys(prereqs[prereq][key]).forEach(function(subKey,subKeyIndex){prereqTiers+=processAttrPrereq(prereqs[prereq][key][subKey],subKey,suppressIteration)}):prereqTiers+=processAttrPrereq(prereqs[prereq][key],key,suppressIteration),prereqTiers}var output="",uniquePrereqs=[],suppressIteration=!1;return Object.keys(prereqs).forEach(function(key){uniquePrereqs.push(prereqs[key])}),uniquePrereqs=_.uniqWith(uniquePrereqs,_.isEqual),Object.keys(prereqs).length>uniquePrereqs.length&&(suppressIteration=!0),Object.keys(prereqs).forEach(function(prereq,x){function processPrereq(key,i,localPrereqKeys){var output="";return 0===i&&(output+="<strong>Tier "+prereq.split("tier")[1]+"</strong>: "),localPrereqKeys.length>1&&0===i&&(output+="<ul>"),localPrereqKeys.length>1&&0===i&&(output+="<li>"),output+=processPrereqTier(prereq,key,i,suppressIteration),localPrereqKeys.length>1&&i>0&&(output+="</li>"),localPrereqKeys.length>1&&i===localPrereqKeys.length-1&&(output+="</ul>"),output}var prereqKeys=Object.keys(prereqs[prereq]),localPrereqKeys=prereqKeys;suppressIteration&&x>0||(output+="<ul>",prereqKeys.forEach(function(key,z){"Battlefield Defender"===_.get(prereqs,"tier1.Feat[0]")&&(console.log("localPrereqKeys",localPrereqKeys),console.log("key",key,"prereqs",prereqs)),output+="<li>"+processPrereq(key,z,localPrereqKeys)+"</li>"}),output+="</ul>")}),output})}}});