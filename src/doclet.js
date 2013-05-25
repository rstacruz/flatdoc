/*! Doclet (http://ricostacruz.com/doclet)
 *  MIT licensed
 */
(function($) {
  var exports = this;

  var marked;

  /**
   * Doclet.
   */

  var Doclet = exports.Doclet = function(options) {
    this.initialize(options);
  };

  Doclet.prototype.root    = '[role~="doclet"]';
  Doclet.prototype.menu    = '[role~="doclet-menu"]';
  Doclet.prototype.title   = '[role~="doclet-title"]';
  Doclet.prototype.content = '[role~="doclet-content"]';

  Doclet.prototype.initialize = function(options) {
    $.extend(this, options);
  };

  /**
   * Loads the Markdown document (via the fetcher), parses it, and applies it
   * to the elements.
   */

  Doclet.prototype.run = function() {
    var doc = this;
    $(doc.root).trigger('doclet:loading');
    doc.fetcher(function(err, markdown) {
      var data = Doclet.parser.parse(markdown);
      doc.applyData(data, doc);
      $(doc.root).trigger('doclet:done');
    });
  };

  /**
   * Applies given doc data `data` to elements in object `elements`.
   */

  Doclet.prototype.applyData = function(data) {
    var elements = this;

    elements.el('title').html(data.title);
    elements.el('content').html(data.content.find('>*'));
  };

  /**
   * Fetches a given element from the DOM.
   *
   * Returns a jQuery object.
   * @api private
   */

  Doclet.prototype.el = function(aspect) {
    return $(this[aspect], this.root);
  };

  /**
   * Runs.
   */

  Doclet.run = function(options) {
    $(function() { (new Doclet(options)).run(); });
  };

  /**
   * File fetcher function.
   */

  Doclet.file = function(url) {
    return function(callback) {
      $.get(url, function(data) {
        callback(null, data);
      });
    };
  };

  Doclet.github = function(repo) {
    var url = 'https://api.github.com/repos/'+repo+'/readme';
  };

  /**
   * Parser module.
   * Parses a given markdown.
   *
   *   var data = Doclet.parser.parse('markdown source here');
   *   console.log(data);
   *   //=> { title: '..', content: '..', menu: '..' }
   */

  var Parser = Doclet.parser = {};

  /**
   * Parses a given Markdown document.
   * See `Parser` for more info.
   */
  Parser.parse = function(source) {
    marked = exports.marked;
    marked.setOptions({});

    var html = $("<div>" + marked(source));
    var h1 = html.find('h1').remove();
    var title = h1.text();
    return { title: title, content: html };
  };

  /**
   * Transformer.
   * Mangles HTML.
   */

  var Transformer = Doclet.transformer = {};

  /**
   * Adds sections.
   */

  Transformer.sectionize = function($content) {
  };

  /**
   * Returns menu data for a given HTML.
   *
   *   menu = Doclet.transformer.getMenu($content);
   *   menu == {
   *     items: [{
   *       section: "Getting started",
   *       items: [...]}, ...]}
   */

  Transformer.getMenu = function($content) {
  };
})(jQuery);
