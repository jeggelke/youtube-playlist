$(function() {
//define playlistID
  var playlistID = 'PLvoZLdtBgik156Be63Md-uG7wFHX8VM4S';
//define videoInfo
  var videoInfo = [
    {'title':'Highlight Reel', 'videoId':'TUesNiDUJ8g'},
    {'title':'Welcome: Translating Momentum into Impact', 'videoId':'8WyWvWfhHWY'},
    {'title':'Plenary: The President&#39;s Task Force Report on 21st Century Policing', 'videoId':'tKrB7YW34io'},
    {'title':'Plenary: Exploring the Application of Responsivity to Mental Illness', 'videoId':'l60c7_pTe_Q'},
    {'title':'Tuesday Closing Remarks', 'videoId':'XOE1eqxo8xg'},
    {'title':'Welcome: Setting a National Agenda', 'videoId':'IXI7Qhi_zUA'},
    {'title':'Plenary: Taking Action Our Role in the Criminal Justice Reform Movement', 'videoId':'YZb0gtw5H1o'},
    {'title':'Plenary: Address by U S Attorney General Loretta E. Lynch', 'videoId':'MyY0DDgmbLA'},
    {'title':'Plenary: Address by Valerie B. Jarrett', 'videoId':'ysFqeBBy1Wc'},
    {'title':'Plenary: Unlikely Allies: Is Bipartisan Support a Moment or a Movement', 'videoId':'6_RQgDmt7h8'},
    {'title':'Plenary: Integrating Trauma Informed Responses for Youth and Adults in the Justice System', 'videoId':'FCU8ffxdSyw'},
    {'title':'Plenary: Working Collaboratively to Address Housing and Health Needs', 'videoId':'9JkHNXu8Pzk'},
    {'title':'Wednesday Closing Remarks', 'videoId':'VmTzlokr0Ic'},
    {'title':'Thursday Opening Remarks', 'videoId':'ndMlTmTmFec'},
    {'title':'Plenary: Address by Rep. Mark Walker', 'videoId':'xo4lgqycqhI'},
    {'title':'Plenary: Second Chances Reclaiming Lives, Rebuilding Communities', 'videoId':'sUH4_pbYPOs'},
    {'title':'Plenary: Building Local Support for Reentry and Recidivism Reduction', 'videoId':'Bf7BbukOJbY'},
    {'title':'Plenary: Forging Career and Educational Pathways for Successful Reentry', 'videoId':'7nx-qRzyvfI'},
    {'title':'Plenary: Address by Rep. Elijah Cummings', 'videoId':'Wawx_DCHgyA'},
    {'title':'Thursday Closing Remarks', 'videoId':'UnHbwSGu5No'}
  ];
//create list of videos in playlist
  for(var i=0; i < videoInfo.length; i++) {
    var sessionContainer = document.createElement('li');
    $(sessionContainer).addClass('session-container');
    $(sessionContainer).data('videoId', videoInfo[i].videoId);
    $(sessionContainer).html(videoInfo[i].title);
    $('.playlist-sidebar').children('ul').append(sessionContainer);
  }

  $('.session-container:first-child').addClass('current-video');



  $('.session-container').click(
    function(){
      //change iframe video
      var iframeUrl = "https://www.youtube.com/embed/" + $(this).data("videoId") + "?list=" + playlistID;
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
$(window).resize(function(){
  $('.playlist-heading').outerWidth($('.playlist-sidebar').outerWidth() - 2);
});
}); //end ready
