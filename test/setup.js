process.stdout.write('Starting test environment');

global.getFile = function(filepath) {
  var path = require('path');
  var fs = require('fs');
  return fs.readFileSync(path.resolve(__dirname, '..', filepath)).toString();
};

global.chai = require('chai');
global.expect = chai.expect;
global.assert = chai.assert;
chai.should();
process.stdout.write('.');

// JSDOM API change issue: https://github.com/tmpvar/jsdom/issues/1820
var jsdom = require("jsdom/lib/old-api.js"); // jsdom >= 10.x
process.stdout.write('. OK\n');

module.exports = function(done) {
  jsdom.env({
    html: getFile('test/fixtures/context.html'),
    src: [
      getFile('support/vendor/jquery.js'),
      getFile('support/vendor/jquery-migrate-3.0.0.js'),
      getFile('flatdoc.js')
    ],
    done: function(errors, window) {
      global.window = window;
      global.$ = window.jQuery;
      global.Flatdoc = window.Flatdoc;
      done(errors);
    }
  });
};
