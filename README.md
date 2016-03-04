# Youtube Playlist

This can be used to show all of the videos in a YouTube playlist. You can get the playlist id from the url in YouTube. To learn more about YouTube API Keys, go to the <a href="https://console.developers.google.com">Google Developers Console</a>.

## Usage
After including `loadPlayer.js`, `getYoutubeInfo.js`, `master.css`, and the JQuery library on a page, all you have to do is include
``` html
<div class="youtube-player-area"></div>
```

somewhere in the body and

```html
  <script type="text/javascript">
  init(PLAYLIST_ID, API_KEY);
  </script>
```

below the body.

### Obtaining PLAYLIST_ID

PLAYLIST_ID can be obtained from the `list` query string in the playlist URL. Let's look at this URL as an example:

`https://www.youtube.com/watch?v=vrM4gjrEtJI&list=FL04-eiQs7M77hYa0xQ_D-Vw`

There are 2 query strings in the url, `v` (for video id) and `list` (for playlist id). These 2 query strings are separated by `&`. To get the video id, we would want anything after `v=` up until the `&`. In this case, `vrM4gjrEtJI`is the video id. Same thing goes for the playlist id. In this specific instance, there is no third query string, so we want anything after `list=`. The PLAYLIST_ID for this one is `FL04-eiQs7M77hYa0xQ_D-Vw`. Again, if there had been a third query string, we would have selected anything after `list=` and before `&`.

### Obtaining API_KEY

You will need to create an API_KEY in the Google Developers Console. Visit [their site](https://developers.google.com/) for more information.

## Dependencies
- JQuery Library
- Google Developers Account

## Examples
[Basic Playlist](http://jeggelke.github.io/youtube-playlist/)

[Playlist Checker](http://jeggelke.github.io/youtube-playlist/playlist-switcher.html) - You will need to include your own API_KEY for this to work.
