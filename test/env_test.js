describe("jsdom", function() {
  var $;

  beforeEach(function(done) {
    require('./env')(function(errors, _window) {
      $ = _window.jQuery;
      done();
    });
  });

  it("environment should work", function() {
    $('body').append('<a id="aaa">hello</a>');
    $('a#aaa').text().should.equal('hello');
  });
});

