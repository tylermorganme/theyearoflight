// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
var mute = false;
function debounce(func, wait, immediate) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

$().ready(function() {

  $(function(){
    $(window).scroll(function(){
      var winTop = $(window).scrollTop();
      if(winTop >= 150){
        $("nav").addClass("sticky-nav");
      }else{
        $("nav").removeClass("sticky-nav");
      }//if-else
    });//win func.
  });//ready func.

  $('.video').tubular({videoId: 'Ubg6lRQyhNM', mute: false}); 

  $('.btn-play-pause').click(function() {
    if ($('.btn-play-pause').hasClass("tubular-play")) {
      $('.btn-play-pause').addClass("tubular-pause").removeClass("tubular-play");
      $('#tubular-container').addClass("disappear")
      $("#btn-home").addClass("upper-nav");
      $("#btn-home").removeClass("lower-nav");
      $("#btn-play a").html("PLAY");
      
    } else {
      $('.btn-play-pause').addClass("tubular-play").removeClass("tubular-pause");
      $("#btn-home").addClass("lower-nav");
      $("#btn-home").removeClass("upper-nav");
      $('#tubular-container').removeClass("disappear")
      $("#btn-play a").html("PAUSE");
    }
  });

    $('.btn-mute').click(function() {

    if (mute) {
      $("#btn-mute a").html("MUTE"); 
      mute = !mute;
    } else {
      $("#btn-mute a").html("UNMUTE");
      mute = !mute;
    }
  });
});