/**
 * Youtube Video API
 * Controls all iframe embeds on page and gives them an autoplay feature
 */

var players = {}; // All players on the page

/**
 * Auto Play Videos
 */

$(function(){
    $('.play-video').hover(
        function () {
            var iframeID = $(this).find('iframe').attr('id');
            playYouTubeVideo(iframeID);
        },
        function () {
            var iframeID = $(this).find('iframe').attr('id');
            pauseYouTubeVideo(iframeID);
        }
    );
});

function onYouTubePlayerAPIReady() {
    $('iframe').each(function (event) {
        var iframeID = $(this).attr('id');
        players[iframeID] = new YT.Player(iframeID);
    });
}

function playYouTubeVideo(iframeID) {
    players[iframeID].playVideo();
    players[iframeID].mute();
}

function pauseYouTubeVideo(iframeID) {
    players[iframeID].pauseVideo();
}

