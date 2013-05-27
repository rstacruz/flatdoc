global.chai = require('chai');
global.assert = chai.assert;
chai.should();

global.getFile = function(filepath) {
  var path = require('path');
  var fs = require('fs');
  return fs.readFileSync(path.resolve(__dirname, '..', filepath)).toString();
};

var jsdom = require('jsdom');

module.exports = function(done) {
  jsdom.env({
    html: getFile('test/fixtures/context.html'),
    src: [
      getFile('support/vendor/jquery.js'),
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
