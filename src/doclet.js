/*! Doclet (http://ricostacruz.com/doclet)
 *  MIT licensed
 */
(function($) {
  var exports = this;

  /**
   * Doclet.
   */
  exports.Doclet = (function() {
    var marked;

    function Doclet(options) {
      this.initialize(options);
    }

    Doclet.prototype.initialize = function(options) {
      this.$root = $("[role~='doclet']");
      this.$menu = $("[role~='doclet-menu']");
      this.$content = $("[role~='doclet-content']");
      $.extend(this, options);
    };

    Doclet.prototype.run = function() {
      var doc = this;
      doc.fetcher(function(err, data) {
        var html = doc.markdown(data);
        doc.$content.html(html);
        doc.$root.trigger('doclet:done');
      });
    };

    Doclet.prototype.markdown = function(source) {
      marked = exports.marked;
      marked.setOptions({});
      return marked(source);
    };

    /**
     * Runs.
     */
    Doclet.run = function(options) {
      $(function() {
        (new Doclet(options)).run();
      });
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

    return Doclet;
  })();
})(jQuery);
        
