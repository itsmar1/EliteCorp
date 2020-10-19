$(function(){
    'use strict';
    // Adjust Slider Height
    var WinH = $(window).height();
    var Uph = $('.upper-bar').innerHeight();
    var NavH = $('.navbar').innerHeight();
    $('.slider .carousel-item').height( WinH - ( Uph + NavH ));

    // Featured Work
    $('.featured-work ul li').on('click', function(){
        $(this).addClass('active').siblings().removeClass('active');
        if ( $(this).data('class') === 'all' ){
            $('.shuffle-images .row .col-md').css('opacity', '1');
        }
        else {
            $('.shuffle-images .row .col-md').css('opacity', '.08');
            $($(this).data('class')).parent().css('opacity', '1');
        }
    })
});