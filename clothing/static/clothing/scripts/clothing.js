$(document).ready(function() {

    let $dropdown = $('.dropdown'),
        $window = $(window),
        $plusMinus = $('.plus-minus'),
        $sideCollapse = $('.side-collapse');

    // Dropdown Slide //
    $dropdown.on('show.bs.dropdown', function(e){
        $(this).find('.dropdown-menu').first().stop(true, true).slideDown(300);
    });

    $dropdown.on('hide.bs.dropdown', function(e){
        $(this).find('.dropdown-menu').first().stop(true, true).slideUp(200);
    });

    // Minus Plus Switch //
    $sideCollapse.on('show.bs.collapse', function () {
        $(this).prev().find('.plus-minus').html('&minus;');
    });

    $sideCollapse.on('hide.bs.collapse', function () {
        $(this).prev().find('.plus-minus').html('&plus;');
    });


    // Add responsiveness to detail side bar //
    $window.on('resize', function() {
        if ($window.width() > 992) {
            $plusMinus.html('&minus;');
            $sideCollapse.addClass('show');
        } else {
            $plusMinus.html('&plus;');
            $sideCollapse.removeClass('show');
        }
    });

    if ($window.width() > 992) {
        $plusMinus.html('&minus;');
        $sideCollapse.addClass('show');
    } else {
        $plusMinus.html('&plus;');
        $sideCollapse.removeClass('show');
    }

});