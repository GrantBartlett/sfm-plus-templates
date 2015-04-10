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

    $('.slick-slides').slick();
    var $container = $('#container').imagesLoaded(function () {
        // initialize Packery after all images have loaded

        $container.packery({
            itemSelector: '.col-md-4',
            columnWidth: '.col-md-4'
        });

    });

    /**
     * NavBar - fixed position on scroll
     */
    $(window).scroll(function () {
        var navBar = $(".navbar"),
            height = navBar.height(),
            scrollTop = $(window).scrollTop();

        if ( scrollTop > 2) {
            navBar.addClass('reduce');
        }else if( scrollTop < 2){
            navBar.removeClass('reduce');
        }
    });

    /**
     * Main Menu Toggle
     * @js-toggle-menu
     */
    var mainMenu = $("#js-toggle-menu");
    $(mainMenu).click('on', function () {
        // Do stuff to show main menu

        alert("Not yet available");

    });

    /**
     * Resizing window
     */
    $(window).resize(function(){
        $('.slick-slides').slick();
    });
});