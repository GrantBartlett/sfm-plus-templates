$(function() {

    /**
     * Bootstrap tooltips
     */

    $('[data-toggle="tooltip"]').tooltip();

    /**
     * Load images when viewport
     * @see jquery.lazyload in vendor
     */

    $("img.lazy").show().lazyload({
        effect: "fadeIn"
    });


    /**
     * Load images when ready, use packery to create masonry layout
     * @type {*|jQuery}
     */

    var $container = $('#container').imagesLoaded(function () {
        // initialize Packery after all images have loaded
        $container.packery({
            itemSelector: '.col-md-4'

        });
    });


    /**
     * Image slider
     * @see flexslider in vendor
     */

    $('.flexslider').flexslider({
        animation: "slide",

    });


    /**
     * NavBar - fixed position on scroll
     */

    // Initial nav height

    $(window).scroll(function () {
        var navBar = $(".navbar"),
            height = navBar.height(),
            scrollTop = $(window).scrollTop();

        if ( scrollTop > height * 2) {
            navBar.addClass('navbar-fixed-top');
        }
    });

});