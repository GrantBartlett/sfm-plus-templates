$(function () {

    var $slider = $(".flexslider");

    // Init Sliders
    $slider.flexslider({
        animation: "slide",
        useCSS: false,
        animationLoop: false,
        smoothHeight: false
    });


    /**
     * NavBar - fixed position on scroll
     */
    $(window).scroll(function () {
        var navBar = $(".navbar"),
            height = navBar.height(),
            scrollTop = $(window).scrollTop();

        if (scrollTop > 2) {
            navBar.addClass('reduce');
        } else if (scrollTop < 2) {
            navBar.removeClass('reduce');
        }
    });

});
