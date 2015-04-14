/**
 * Youtube Video Autoplay
 * Controls all iFrame embeds on page and gives them an 'autoplay' feature.
 */

var players = {}; // All players on the page

$(function () {
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

/***
 * YouTube API call
 */
function onYouTubePlayerAPIReady() {
    $('iframe').each(function (event) {
        var iframeID = $(this).attr('id');
        players[iframeID] = new YT.Player(iframeID);
    });
}

/***
 * Play Video
 * @param iframeID
 */
function playYouTubeVideo(iframeID) {
    players[iframeID].playVideo();
    players[iframeID].mute();
}

/***
 * Pause Video
 * @param iframeID
 */
function pauseYouTubeVideo(iframeID) {
    players[iframeID].pauseVideo();
}