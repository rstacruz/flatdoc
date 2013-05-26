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

    // Mangle content
    Transformer.addIDs(html);
    var menu = Transformer.getMenu(html);

    return { title: title, content: html, menu: menu };
  };

  /**
   * Transformer.
   * Mangles HTML.
   */

  var Transformer = Flatdoc.transformer = {};

  /**
   * Adds sections.
   */

  Transformer.addIDs = function($content) {
    $content.find('h1, h2, h3').each(function() {
      var $el = $(this);
      var text = $el.text();
      var id = text.toLowerCase().match(/[a-z0-9]+/g).join('-');
      $el.attr('id', id);
    });
  };

  /**
   * Returns menu data for a given HTML.
   *
   *   menu = Flatdoc.transformer.getMenu($content);
   *   menu == {
   *     level: 0,
   *     items: [{
   *       section: "Getting started",
   *       level: 1,
   *       items: [...]}, ...]}
   */

  Transformer.getMenu = function($content) {
    var re = {items: [], id: '', level: 0};
    var cache = [re];

    $content.find('h1, h2, h3').each(function() {
      var $el = $(this);
      var level = +(this.nodeName.substr(1));

      var parent = cache[level-1];
      if (!parent) throw "Nesting problem, expected level " + (level-1);

      var obj = { section: $el.text(), items: [], level: level, id: $el.attr('id') };
      parent.items.push(obj);
      cache[level] = obj;
    });

    return re;
  };

  /**
   * Menu view. Renders menus
   */

  var MenuView = Flatdoc.menuView = function(menu) {
    var $el = $("<ul>");

    function process(node, $parent) {
      var id = node.id || 'root';

      var $li = $('<li>')
        .attr('id', id + '-item')
        .addClass('level-' + node.level)
        .appendTo($parent);

      if (node.section) {
        var $a = $('<a>')
          .html(node.section)
          .attr('id', id + '-link')
          .attr('href', '#' + node.id)
          .addClass('level-' + node.level)
          .appendTo($li);
      }

      if (node.items.length > 0) {
        var $ul = $('<ul>')
          .addClass('level-' + (node.level+1))
          .attr('id', id + '-list')
          .appendTo($li);

        node.items.forEach(function(item) {
          process(item, $ul);
        });
      }
    }

    process(menu, $el);
    return $el;
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
    elements.el('menu').html(MenuView(data.menu));
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
