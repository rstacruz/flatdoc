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

 $(document).on('flatdoc:done', function() {
    $("h2, h3").scrollagent(function(cid, pid, currentElement, previousElement) {
      if (pid) {
       $("[href='#"+pid+"']").removeClass('active');
      }
      if (cid) {
       $("[href='#"+cid+"']").addClass('active');
      }
    });
  });

 // No one really needs the first section on the menu
 $(document).on('flatdoc:done', function() {
   $('ul.level-1 > li:first-child').remove();
 });
})(jQuery);
