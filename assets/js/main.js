(function($) {
	//Scroll to top of screen upon reload. Need this for parallax effect to work effectively.
	window.onbeforeunload = function() {
		window.scrollTo(0, 0);
	}

	//Get original offset of about section.
    var about = $('#about-link').offset().top;

	skel.breakpoints({
		wide: '(min-width: 961px) and (max-width: 1880px)',
		normal: '(min-width: 961px) and (max-width: 1620px)',
		narrow: '(min-width: 961px) and (max-width: 1320px)',
		narrower: '(max-width: 960px)',
		mobile: '(max-width: 736px)'
	});

	$(function() {

		var	$window = $(window),
			$body = $('body');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				$body.removeClass('is-loading');
			});

		// CSS polyfills (IE<9).
			if (skel.vars.IEVersion < 9)
				$(':last-child').addClass('last-child');

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// Prioritize "important" elements on mobile.
			skel.on('+mobile -mobile', function() {
				$.prioritize(
					'.important\\28 mobile\\29',
					skel.breakpoint('mobile').active
				);
			});

		// Scrolly links.
			$('.scrolly').scrolly();

		// Nav.
			var $nav_a = $('#nav a');

			// Scrolly-fy links.
				$nav_a
					.scrolly()
					.on('click', function(e) {

						var t = $(this),
							href = t.attr('href');

						if (href[0] != '#')
							return;

						e.preventDefault();

						// Clear active and lock scrollzer until scrolling has stopped
							$nav_a
								.removeClass('active')
								.addClass('scrollzer-locked');
					});

			// Initialize scrollzer.
				var ids = [];

				$nav_a.each(function() {

					var href = $(this).attr('href');

					if (href[0] != '#')
						return;

					ids.push(href.substring(1));

				});

				$.scrollzer(ids, { pad: 200, lastHack: true });

		// Header (narrower + mobile).

			// Toggle.
				$(
					'<div id="headerToggle">' +
						'<a href="#header" class="toggle"></a>' +
					'</div>'
				)
					.appendTo($body);

			// Header.
				$('#header')
					.panel({
						delay: 500,
						hideOnClick: true,
						hideOnSwipe: true,
						resetScroll: true,
						resetForms: true,
						side: 'left',
						target: $body,
						visibleClass: 'header-visible'
					});

			// Fix: Remove transitions on WP<10 (poor/buggy performance).
				if (skel.vars.os == 'wp' && skel.vars.osVersion < 10)
					$('#headerToggle, #header, #main')
						.css('transition', 'none');


		//Additional stuff.
        //Effects.
        $(window).bind('scroll', function() {
            var wScroll = $(this).scrollTop();
            $(window).scroll(function()
            {
                if(wScroll >= about) {
                    $(window).scroll(function() {
                        //Want background element to move down faster than middle element.
                        $('.image_1').css({
                            'transform': 'translate(0px, ' + (wScroll - about) / 20 + '%)'
                        });
                        $('.image_2').css({
                            'transform': 'translate(0px, ' + (wScroll - about) / 40 + '%)'
                        });
                    });
                }
                $('.image_5').css({
                    'transform': 'translate(0px, -'+ wScroll/18 +'%)'
                });
                $('.image_6').css({
                    'transform': 'translate(0px, -'+ wScroll/18 +'%)'
                });
                $('.image_7').css({
                    'transform': 'translate(0px, -'+ wScroll/18 +'%)'
                });
            });
        });

        $(window).scroll(function()
        {
            var wScroll = $(this).scrollTop();

            $('.image_4').css({
                'transform': 'rotate(' + wScroll/5 + 'deg)'
            });
        });
	});

})(jQuery);