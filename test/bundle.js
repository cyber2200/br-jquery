var test = require('tap').test,
    browserify = require('browserify'),
    jq = require('../');

test('bundle', function(t) {
  t.plan(4);
  var full = browserify().use(jq).bundle(),
      mini = browserify().use(jq.min).bundle();
  t.ok(mini.length > 10000, 'mini size sanity check');
  t.ok(full.length > 10000, 'full size sanity check');
  t.ok(full.length - mini.length > 10000, 'full is larger than mini');

  var quick = browserify({require: {jquery: '../'}}).bundle();
  t.ok(quick.length > 10000, 'quick bundle');
  t.end();
});
