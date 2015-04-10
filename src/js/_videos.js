/**
 * Youtube Video API
 * Controls all iframe embeds on page and gives them an autoplay feature
 */

$(function(){

var players = {}; // All players on the page

var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

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


/**
 * Auto Play Videos
 */

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

})