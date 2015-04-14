$(function(){

    // Init Facebook API
    // ---------------------------------
    window.fbAsyncInit = function () {
        FB.init({
            appId: '1494901577406443',
            xfbml: true,
            version: 'v2.3'
        });
    };

    (function (d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {
            return;
        }
        js = d.createElement(s);
        js.id = id;
        js.src = "//connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));


    // Init Twitter API
    // ---------------------------------
    window.twttr = (function (d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0],
            t = window.twttr || {};
        if (d.getElementById(id)) return t;
        js = d.createElement(s);
        js.id = id;
        js.src = "https://platform.twitter.com/widgets.js";
        fjs.parentNode.insertBefore(js, fjs);

        t._e = [];
        t.ready = function (f) {
            t._e.push(f);
        };

        return t;
    }(document, "script", "twitter-wjs"));


    // Meta Items - Share buttons
    // ---------------------------------
    var twitterShare = $('.twitter-share'),
        facebookShare = $('.facebook-share');

    $(twitterShare).click('on', function(e){
        e.preventDefault();
        shareContent($(this).closest('.box'), 'twitter'); // Pass container share was clicked in
    });

    $(facebookShare).click('on', function(e){
        e.preventDefault();
        shareContent($(this).closest('.box'), 'facebook'); // Pass container share was clicked in
    });
});


/**
 * shareContent(container)
 *
 * Takes content from box it was shared on. Useful because its listings.
 * @param container
 */
function shareContent(container, type){

    // Store raw values to later check if undefined/empty
    var postImg = $(container).find('.slick-slides').find('.post-thumb').find('img').attr('src'),
        vidImg = $(container).data('src');

    // Create object to neatly store titles, images, links.
    var shareInfo = {

        link: $(container).find('.entry-title').find('a').attr('href'),
        name: $(container).find('.entry-title').find('a').html(),
        image : (function checkImage() {

            if (postImg === undefined) {
                return 'https://img.youtube.com/vi/' + vidImg + '/hqdefault.jpg';
            } else if (!vidImg) {
                return postImg;
            } else {
                // @TODO: Specify default meta image
                return postImg;
            }

        })()
    };


    switch (type) {
        case 'facebook':
            // Insert object values into FB.ui feed dialogue
            FB.ui(
                {
                    method: 'feed',
                    name: shareInfo.name,
                    caption: shareInfo.name,
                    picture: shareInfo.image,
                    link: shareInfo.link
                },

                function (response) {
                    // @TODO: Catch errors, and/or say thanks on success!
                });
            break;
        default:
    }

}
