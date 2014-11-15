// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
var mute = false;
var home = false;
var sliderIndex = 0;
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
var sliderElements = $("#slider").find('ul').children().length;
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

  $('.video').tubular({videoId: 'Ubg6lRQyhNM', mute: true}); 

  $('#btn-home').click(function(e) {
    e.preventDefault();
    if (!home) {
      $('#tubular-container').addClass("disappear")
      //$("#btn-home").addClass("upper-nav").removeClass("lower-nav");
      //$('body').addClass("scrollable").removeClass("non-scrollable");
      home = !home;
    } else {
      //$("#btn-home").addClass("lower-nav").removeClass("upper-nav");;
      $('#tubular-container').removeClass("disappear");
      //$('body').addClass("non-scrollable").removeClass("scrollable");
      home = !home;
    }
  });

  $('#btn-play').click(function() {
    if ($('#btn-play').hasClass("tubular-play")) {
      $('#btn-play').addClass("tubular-pause").removeClass("tubular-play");
      $("#btn-play a").html("PLAY");
    } else {
      $('#btn-play').addClass("tubular-play").removeClass("tubular-pause");
      $("#btn-play a").html("PAUSE");
    } 
  });



  $('#btn-mute').click(function() {

    if (mute) {
      $("#btn-mute a").html("MUTE"); 
      mute = !mute;
    } else {
      $("#btn-mute a").html("UNMUTE");
      mute = !mute;
    }
  });

  $(".slider a").css("width", "300%");

  $('#btn-left').click(function(e){
    e.preventDefault();
    if (sliderIndex < sliderElements - 1) {
      sliderIndex += 1;
      $('#btn-right').removeClass("disappear");
      $('#slider').css("transform", "translateX(" + (sliderIndex *-100)/sliderElements +"%)" );
      if (sliderIndex >= sliderElements -1) {
        $('#btn-left').addClass("disappear");

      } else {
        $('#btn-left').removeClass("disappear");
      }
    } else {
      return;
    }
  });

  $('#btn-right a').click(function(e){
    e.preventDefault();
    if (sliderIndex > 0) {
      sliderIndex -= 1;
      $('#btn-left').removeClass("disappear");
      $('#slider').css("transform", "translateX(" + (sliderIndex *-100)/sliderElements +"%)" );
      if (sliderIndex <= 0) {
        $('#btn-right').addClass("disappear");
      } else {
        $('#btn-right').removeClass("disappear");
      }
    } else {
      return;
    }
  });
});
