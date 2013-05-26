/*! Flatdoc (http://ricostacruz.com/flatdoc)
 *  MIT licensed
 */
(function($) {
  var exports = this;

  var marked;

  /**
   * Flatdoc.
   */

  var Flatdoc = exports.Flatdoc = {};

  /**
   * Runs.
   */

  Flatdoc.run = function(options) {
    $(function() { (new Flatdoc.runner(options)).run(); });
  };

  /**
   * File fetcher function.
   */

  Flatdoc.file = function(url) {
    return function(callback) {
      $.get(url, function(data) {
        callback(null, data);
      });
    };
  };

  Flatdoc.github = function(repo) {
    var url = 'https://api.github.com/repos/'+repo+'/readme';
  };

  /**
   * Parser module.
   * Parses a given markdown.
   *
   *   var data = Flatdoc.parser.parse('markdown source here');
   *   console.log(data);
   *   //=> { title: '..', content: '..', menu: '..' }
   */

  var Parser = Flatdoc.parser = {};

  /**
   * Parses a given Markdown document.
   * See `Parser` for more info.
   */
  Parser.parse = function(source) {
    marked = exports.marked;
    marked.setOptions({});

    var html = $("<div>" + marked(source));
    var h1 = html.find('h1').eq(0);
    var title = h1.text();
    return { title: title, content: html };
  };

  /**
   * Transformer.
   * Mangles HTML.
   */

  var Transformer = Flatdoc.transformer = {};

  /**
   * Adds sections.
   */

  Transformer.sectionize = function($content) {
  };

  /**
   * Returns menu data for a given HTML.
   *
   *   menu = Flatdoc.transformer.getMenu($content);
   *   menu == {
   *     items: [{
   *       section: "Getting started",
   *       items: [...]}, ...]}
   */

  Transformer.getMenu = function($content) {
  };

  /**
   * Runner.
   */
  var Runner = Flatdoc.runner = function(options) {
    this.initialize(options);
  };

  Runner.prototype.root    = '[role~="flatdoc"]';
  Runner.prototype.menu    = '[role~="flatdoc-menu"]';
  Runner.prototype.title   = '[role~="flatdoc-title"]';
  Runner.prototype.content = '[role~="flatdoc-content"]';

  Runner.prototype.initialize = function(options) {
    $.extend(this, options);
  };

  /**
   * Loads the Markdown document (via the fetcher), parses it, and applies it
   * to the elements.
   */

  Runner.prototype.run = function() {
    var doc = this;
    $(doc.root).trigger('flatdoc:loading');
    doc.fetcher(function(err, markdown) {
      var data = Flatdoc.parser.parse(markdown);
      doc.applyData(data, doc);
      $(doc.root).trigger('flatdoc:done');
    });
  };

  /**
   * Applies given doc data `data` to elements in object `elements`.
   */

  Runner.prototype.applyData = function(data) {
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

  Runner.prototype.el = function(aspect) {
    return $(this[aspect], this.root);
  };
})(jQuery);
