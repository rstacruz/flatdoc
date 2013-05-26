(function($) {
  var $window = $(window);

  /*
   * Sidebar stick.
   */

  $(function() {
    var $sidebar = $('.menubar');
    var elY = $sidebar.offset().top;

    $window.on('scroll.sidestick', function() {
      var scrollY = $window.scrollTop();
      $sidebar.toggleClass('fixed', (scrollY >= elY));
    });

    $window.trigger('scroll.sidestick');
  });

 /*
  * Scrollspy.
  */

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

 /*
  * Remove the first section.
  * No one really needs the first section on the menu.
  */

 $(document).on('flatdoc:done', function() {
   $('ul.level-1 > li:first-child').remove();
 });

 /*
  * Anchor jump links.
  */

 $(document).on('flatdoc:done', function() {
   $('.menu a').anchorjump();
 });

})(jQuery);
