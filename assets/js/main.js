jQuery(document).ready(function($){

    $('.wptheme-gallery').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.wptheme-gallery-nav'
    });
    $('.wptheme-gallery-nav').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.wptheme-gallery',
        focusOnSelect: true,
        arrows: true,
        prevArrow: '<svg width="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>',
        nextArrow: '<svg width="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"/></svg>'
    });

});