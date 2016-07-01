/* */ 
var mkdirp = require('../index');
var path = require('path');
var test = require('tap').test;
var mockfs = require('mock-fs');
test('opts.fs sync', function(t) {
  t.plan(4);
  var x = Math.floor(Math.random() * Math.pow(16, 4)).toString(16);
  var y = Math.floor(Math.random() * Math.pow(16, 4)).toString(16);
  var z = Math.floor(Math.random() * Math.pow(16, 4)).toString(16);
  var file = '/beep/boop/' + [x, y, z].join('/');
  var xfs = mockfs.fs();
  mkdirp.sync(file, {
    fs: xfs,
    mode: 0755
  });
  xfs.exists(file, function(ex) {
    t.ok(ex, 'created file');
    xfs.stat(file, function(err, stat) {
      t.ifError(err);
      t.equal(stat.mode & 0777, 0755);
      t.ok(stat.isDirectory(), 'target not a directory');
    });
  });
});
