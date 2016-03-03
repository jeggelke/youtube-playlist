var PLAYLIST_ID, API_KEY, playlistTitle, channelTitle;
var videoInfo = [];
function getPlaylistData(playlistId, apiKey, _callback){
  videoInfo = [];
  var queryUrl = 'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=' + playlistId + '&key=' + apiKey;
  console.log(queryUrl);
  $.ajax({
    url: queryUrl,
    dataType: 'json'
  }).done(function(data){
    $(data.items).each(
      function(){
        var videoTitle = this.snippet.title;
        var videoId = this.snippet.resourceId.videoId;
        var videoThumb = this.snippet.thumbnails.medium.url;
        videoInfo.push({'title': videoTitle, 'videoId': videoId, 'thumb': videoThumb});
      }
    );
    _callback();
  });
}
