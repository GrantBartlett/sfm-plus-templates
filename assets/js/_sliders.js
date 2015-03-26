/**
 * Image slider
 * @see flexslider in vendor
 */

var sliders = {}; // Hold all sliders

/**
 * Flex Slider Object
 * @param sliderID
 * @constructor
 */

$(function(){
    $('.flexslider').flexslider({
        animation: 'fade',
        touch: true,
        prevText: '',
        nextText: '',
        controlNav: false,
        smoothHeight: true
    });
});



