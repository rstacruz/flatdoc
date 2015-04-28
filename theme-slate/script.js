/*
	The MIT License (MIT)

	Copyright (c) <2013> <Ren Aysha>

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in
	all copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	THE SOFTWARE.
*/

if ( typeof Object.create !== 'function' ) {
	Object.create = function( obj ) {
		function F() {}
		F.prototype = obj;
		return new F();
	};
}

(function( $, window, document, undefined ) {
	"use strict";

	var Anchorific = {
		init: function( options, elem ) {
			var self = this;

			self.elem = elem;
			self.$elem = $( elem );

			self.opt = $.extend( {},  this.opt, options );

      self.headers = self.$elem.find( 'h1, h2, h3' );

      // Fix bug #1
      if ( self.headers.length !== 0 ) {
        self.first = parseInt( self.headers.prop( 'nodeName' ).substring( 1 ), null );

        $( '#root-item li:has(a[href="#' + $(self.headers[0]).attr('id') + '"])' ).addClass( 'active' );
        $( '#root-item a[href="#' + $(self.headers[0]).attr('id') + '"]' ).addClass( 'current' );
      }

      if ( self.opt.spy ) {
        self.spy();
      }

      if ( self.opt.top ) {
        self.back();
      }
		},

		opt: {
			speed: 200, // speed of sliding back to top
			top: '.top', // back to top button or link class
			spy: true, // scroll spy
			spyOffset: !0 // specify heading offset for spy scrolling
		},

		back: function() {
			var self = this;

      $( self.opt.top ).on( 'click', function( e ) {
				e.preventDefault();

        $( 'body, html' ).animate({
					'scrollTop': 0
				}, self.opt.speed );
			});
		},

		top: function( that ) {
			var self = this, top = self.opt.top, back;

			if ( top !== false ) {
				back = ( $( that ).scrollTop() > 200 ) ? $( top ).fadeIn() : $( top ).fadeOut();
			}
		},

		spy: function() {
			var self = this, prevAhref, currAhref, current, list, top, prevList;

			$( window ).scroll( function( e ) {
				// show links back to top
				self.top( this );
				// get all the header on top of the viewport
				current = self.headers.map( function( e ) {
					if ( $( this ).offset().top !==0 &&  ( $( this ).offset().top - $( window ).scrollTop() ) < self.opt.spyOffset ) {
						return this;
					}
				});
				// get only the latest header on the viewport

				current = $( current ).eq( current.length - 1 );

				if ( current && current.length ) {
					// get all li tag that contains href of # ( all the parents )
					list = $( '#root-item  li:has(a[href="#' + current.attr( 'id' ) + '"])' );
          currAhref = $(list).find( 'a[href="#' + current.attr( 'id' ) + '"]' );

					if (list.length !==0) {
            if (prevList !== undefined) {
						  prevList.removeClass( 'active' );
            }
            list.addClass( 'active' );
            prevList = list;
					}
          if (currAhref.length !==0) {
            if (prevAhref !== undefined) {
              prevAhref.removeClass( 'current' );
            }
            currAhref.addClass( 'current' );
            prevAhref = currAhref;
          }
				}
			});
		}
	};

	$.fn.anchorific = function( options ) {
		return this.each(function() {
			if ( ! $.data( this, 'anchorific' ) ) {
				var anchor = Object.create( Anchorific );

				anchor.init( options, this );

				$.data( this, 'anchorific', anchor );
			}
		});
	};

})( jQuery, window, document );

// Flatdoc script
(function($) {
  var $window = $(window);
  var $document = $(document);

 $document.on('flatdoc:ready', function() {
   $('.content').anchorific() ;
 });

  /*
   * Sidebar stick.
   */

  $(function() {
    var $sidebar = $('.menubar');
		var $header = $('.header');

    $window
      .on('resize.sidestick', function() {
        $sidebar.removeClass('fixed');
        $window.trigger('scroll.sidestick');
      })
      .on('scroll.sidestick', function() {
        var scrollY = $window.scrollTop();
				var elTop = $header.offset().top+$header.height();
        $sidebar.toggleClass('fixed', (scrollY >= elTop));
      })
      .trigger('resize.sidestick');
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
})(jQuery);
