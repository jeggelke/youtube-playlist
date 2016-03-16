function loadPlayer() {
//build player area
var viewerContainer = document.createElement('div');
$(viewerContainer).addClass('viewer-container');
var videoContainer = document.createElement('div');
$(videoContainer).addClass('video-container');
var videoIframe = document.createElement('iframe');
$(videoIframe).attr('id', 'video-player');
$(videoIframe).attr('frameborder', 0);

var playlistSidebar = document.createElement('div');
$(playlistSidebar).addClass('playlist-sidebar');
var playlistHeading = document.createElement('div');
$(playlistHeading).addClass('playlist-heading');
$(playlistHeading).html('View More Videos');
$(playlistSidebar).append(playlistHeading);
$(playlistSidebar).append('<ul></ul>');
$(videoContainer).append(videoIframe);
$(viewerContainer).append(videoContainer);
$(viewerContainer).append(playlistSidebar);
$('.youtube-player-area').append(viewerContainer);

//calculate iframe size
var calculatedIframeWidth = ($('.viewer-container').outerWidth())*2/3;
var calculatedIframeHeight = calculatedIframeWidth * 9/16;
$(videoIframe).attr('width', calculatedIframeWidth);
$(videoIframe).attr('height', calculatedIframeHeight);

//create list of videos in playlist
  for(var i=0; i < videoInfo.length; i++) {
    var sessionContainer = document.createElement('li');
    var videoThumbnail = document.createElement('img');
    var sessionTitle = document.createElement('p');
    $(sessionTitle).html(videoInfo[i].title);
    $(sessionTitle).addClass('session-title');
    $(videoThumbnail).addClass('video-thumb');
    $(videoThumbnail).attr('src', videoInfo[i].thumb);
    $(videoThumbnail).attr('align', 'left');
    $(sessionContainer).addClass('session-container');
    $(sessionContainer).data('videoId', videoInfo[i].videoId);
    $(sessionContainer).append(sessionTitle);
    $(sessionContainer).prepend(videoThumbnail);
    $('.playlist-sidebar').children('ul').append(sessionContainer);
  }

  $('.session-container:first-child').addClass('current-video');
  var firstVideoUrl = "https://www.youtube.com/embed/" + videoInfo[0].videoId + "?list=" + PLAYLIST_ID;
  $('#video-player').attr('src', firstVideoUrl);



  $('.session-container').click(
    function(){
      //change iframe video
      var iframeUrl = "https://www.youtube.com/embed/" + $(this).data("videoId") + "?list=" + PLAYLIST_ID;
      $("#video-player").attr('src', iframeUrl);
      //change current video in sidebar
      $('.current-video').removeClass('current-video');
      $(this).addClass('current-video');
      //scroll to top of element
      var childNumber = $(this).index();
      var calculatedHeight = 0;
      for (var i = 0; i <= childNumber; i++){
        calculatedHeight += $('.session-container:nth-child(' + i + ')').outerHeight();
      }
      $('.playlist-sidebar').animate({
        scrollTop: calculatedHeight
      }, 1000);

    }
  );

//fix top video name
  $('.video-container').height($('#video-player').outerHeight());
  $('.playlist-sidebar').outerWidth($('.viewer-container').outerWidth() - $('.video-container').outerWidth());
  $('.playlist-sidebar ul').css('margin-top', $('.playlist-heading').outerHeight());
  $('.playlist-heading').outerWidth($('.playlist-sidebar').outerWidth() - 2);
  $('.playlist-sidebar').outerHeight($('.video-container').outerHeight());

$(window).resize(function(){
  $('.playlist-heading').outerWidth($('.playlist-sidebar').outerWidth() - 2);
});
}

// for use as standalone loader
function init(playlistId, apiKey){
   //make sure you change the api key as it will not work on other sites
     getPlaylistData(playlistId, apiKey, loadPlayer);
   }
