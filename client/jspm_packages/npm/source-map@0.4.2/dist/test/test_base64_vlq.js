/* */ 
"format cjs";
/*
 * WARNING!
 *
 * Do not edit this file directly, it is built from the sources at
 * https://github.com/mozilla/source-map/
 */

Components.utils.import('resource://test/Utils.jsm');
/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */
define("test/source-map/test-base64-vlq", ["require", "exports", "module"], function (require, exports, module) {

  var base64VLQ = require('source-map/base64-vlq');

  exports['test normal encoding and decoding'] = function (assert, util) {
    var result = {};
    for (var i = -255; i < 256; i++) {
      var str = base64VLQ.encode(i);
      base64VLQ.decode(str, 0, result);
      assert.equal(result.value, i);
      assert.equal(result.rest, str.length);
    }
  };

});
function run_test() {
  runSourceMapTests('test/source-map/test-base64-vlq', do_throw);
}
