$(document).ready(function() {

    let $window = $(window),
        $slideLeft = $('.slide-left'),
        $slideRight = $('.slide-right'),
        $fadeIn = $('.fade-in'),
        $twist = $('.twist'),
        $navFixed = $('.navbar-fixed'),
        $navItems = $('.nav-items'),
        $burgerIcon = $('.burger-icon'),
        $progressBar = $('.progress-bar'),
        $clickJump = $('.click-jump'),
        $scrollColor = $('.scroll-color'),
        navTop = $navFixed.offset().top,
        pBarArray = [];

    /* Preset Elements
    --------------------------------------------------------- */
    $navFixed.before('<div></div>');

    /* Event Handlers
    --------------------------------------------------------- */
    // Toggle burger icon color & expand the navbar //
    $burgerIcon.click(function() {
        $navItems.toggleClass('nav-expand');
        $burgerIcon.toggleClass('burger-icon-change');
        $('.burger-layer').toggleClass('burger-layer-change');
    });

    // Jump to a page section when an item is clicked //
    $clickJump.children().each(function() {

        let $this = $(this),
            $jumpTarget = $($this.attr('data-target'));

        $this.click(function() {
            $window.scrollTop(($jumpTarget.offset().top) - $navFixed.height());
            $navItems.removeClass('nav-expand');
        });
    });

    $window.scroll(function() {

        let horiScroll = $window.scrollTop(),
            minus = $navFixed.height();

        // Apply Animations //
        animateOnScrolledTo($slideLeft, 'slide-left-animation');
        animateOnScrolledTo($slideRight, 'slide-right-animation');
        animateOnScrolledTo($fadeIn, 'fade-in-animation');
        animateOnScrolledTo($twist, 'twist-animation');
        fixedNavbar($navFixed, horiScroll);
        animateOnScrolledTo($progressBar, 'width');

        // Change the color of scrollColor children when scrolled to //
        $scrollColor.children('[data-target]').each(function(i) {

            if (i === 0) {
                minus = 0;
            } else {
                minus = $navFixed.height();
            }

            let $this = $(this),
                $scrollTarget = $($this.attr('data-target')),
                sectionTop = $scrollTarget.offset().top - minus,
                sectionBottom = sectionTop + $scrollTarget.outerHeight(),
                pageBottom = $(document).height() - $window.height();

            if (horiScroll >= sectionTop && horiScroll < sectionBottom) {
                $this.css('color', '#EF3E55');
            } else if (horiScroll >= pageBottom){
                $scrollColor.children('[data-target]').css('color', 'white');
                $scrollColor.children('[data-target]').last().css('color', '#EF3E55');
            } else {
                $this.css('color', 'white');
            }
        });
    });

    $window.trigger('scroll');

    /* Functions
    --------------------------------------------------------- */
    function animateOnScrolledTo(elem, animation) {

        elem.each(function() {

            let $this = $(this),
                horiScroll = $window.scrollTop(),
                elementOffset = $this.offset().top - horiScroll,
                animatePos = $window.height() * 0.6;

            if (elementOffset < animatePos && !(elem === $progressBar)) {
               $this.addClass(animation);
            } else if (elementOffset < animatePos && elem === $progressBar) {
                $progressBar.each(function(i) {
                    if (isNotInArray(i, pBarArray)) {
                        let $this = $(this);
                        $this.delay(2000).animate({'width': $this.attr('data-percent') + '%'});
                        pBarArray.push(i);
                    }
                });
            }
        });
    }

    function fixedNavbar(nav, horiScroll) {

        if (horiScroll >= navTop) {
            nav.addClass('fixed');
            nav.prev().css('margin-bottom', nav.height() + 'px');
        } else {
            nav.removeClass('fixed');
            nav.prev().css('margin-bottom', '0');
        }
    }

    function isNotInArray(index, array) {
        return !(array.indexOf(index) > -1);
    }
});