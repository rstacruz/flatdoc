(function($) {
  var $window = $(window);
  var $document = $(document);

 /*
  * Scrollspy.
  */

 $document.on('flatdoc:done', function() {
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

 $document.on('flatdoc:done', function() {
   $('ul.level-1 > li:first-child').remove();
 });

 /*
  * Anchor jump links.
  */

 $document.on('flatdoc:done', function() {
   $('.menu a').anchorjump();
 });

 /*
  * Title card.
  */

  $(function() {
    var $card = $('.title-card');
    if (!$card.length) return;

    var $header = $('.header');
    var headerHeight = $header.length ? $header.outerHeight() : 0;

    $window
      .on('resize.title-card', function() {
        var windowWidth = $window.width();

        if (windowWidth < 480) {
          $card.css('height', '');
        } else {
          var height = $window.height();
          $card.css('height', height - headerHeight);
        }
      })
      .trigger('resize.title-card');
  });

  /*
   * Sidebar stick.
   */

  $(function() {
    var $sidebar = $('.menubar');
    var elY;

    $window
      .on('resize.sidestick', function() {
        elY = $sidebar.offset().top;
        $window.trigger('scroll.sidestick');
      })
      .on('scroll.sidestick', function() {
        var scrollY = $window.scrollTop();
        $sidebar.toggleClass('fixed', (scrollY >= elY));
      })
      .trigger('resize.sidestick');
  });

})(jQuery);
