$(function(){
    'use strict';
    // Adjust Slider Height
    var WinH = $(window).height();
    var Uph = $('.upper-bar').innerHeight();
    var NavH = $('.navbar').innerHeight();
    $('.slider .carousel-item').height( WinH - ( Uph + NavH ));
});