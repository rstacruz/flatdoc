describe("jsdom", function() {
  beforeEach(require('./env'));

  it("environment should work", function() {
    $('body').append('<a id="aaa">hello</a>');
    $('a#aaa').text().should.equal('hello');
  });
});

