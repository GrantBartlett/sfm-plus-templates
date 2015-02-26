$(function() {

    /**
     * Load images when viewport
     * @see jquery.lazyload in vendor
     */

    $("img.lazy").show().lazyload({
        effect: "fadeIn"
    });

});