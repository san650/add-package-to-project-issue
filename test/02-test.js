var fs = require('fs');
var assert = require('assert');
var AddonTestApp = require('ember-cli-addon-tests').AddonTestApp;

describe('02-test', function() {
  this.timeout(300000);

  var app;

  function assertPackage(packageName) {
    var packageJSON = fs.readFileSync(app.filePath('/package.json'), { encoding: 'utf-8' });
    assert.ok(packageJSON.indexOf(packageName) > 0, '"' + packageName + '" not found in package.json');
  }

  before(function() {
    app = new AddonTestApp();

    return app.create('second');
  });

  it('foo test', function() {
    assertPackage('ember-cli-mirage');
  });

  it('bar test', function() {
    assertPackage('ember-cli-mirage');
  });
});
