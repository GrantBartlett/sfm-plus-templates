$(function () {

    /**
     * Declare Packery Container and FlexSlider Selectors
     * @type {*|jQuery|HTMLElement}
     */

    var $container = $("#container"), $slider = $(".flexslider");

    // Init Sliders
    $slider.flexslider({animation: "slide", smoothHeight: true});

    // Init Packery Like this, according to docs
    var $container = $container.packery({
        itemSelector: '.col-md-4'
    });

    /**
     * Load images when ready, use packery to create masonry layout
     * @type {*|jQuery}
     */
    $container.imagesLoaded()
        .always(function (instance) {
            console.log('All images loaded');
            initPackery();
        }).done(function (instance) {
            console.log('All images successfully loaded');
            initPackery();
        }).fail(function () {
            console.log('all images loaded, at least one is broken');
            initPackery();
        }).progress(function (instance, image) {
            var result = image.isLoaded ? 'loaded' : 'broken';
            console.log('image is ' + result + ' for ' + image.img.src);
            initPackery();
        });

    /***
     * Init Packery Layout
     */
    function initPackery() {
        $container.imagesLoaded(function () {
            $container.packery({
                itemSelector: '.col-md-4'
            });
        });
    }
});