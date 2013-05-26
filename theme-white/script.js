(function($) {
  var $window = $(window);

  $(function() {
    var $sidebar = $('.menubar');
    var elY = $sidebar.offset().top;

    $window.on('scroll.sidestick', function() {
      var scrollY = $window.scrollTop();
      $sidebar.toggleClass('fixed', (scrollY >= elY));
    });

    $window.trigger('scroll.sidestick');
  });
})(jQuery);
