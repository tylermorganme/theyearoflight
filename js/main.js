// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
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
      if(winTop >= 10){
        $("#nav-1").addClass("lower-nav");
        $("#nav-3").addClass("lower-nav");
        $("nav").addClass("sticky-nav");
      }else{
        $("#nav-1").removeClass("lower-nav");
        $("#nav-3").removeClass("lower-nav");
        $("nav").removeClass("sticky-nav");
      }//if-else
      console.log(winTop);
    });//win func.
  });//ready func.

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

  $('.video').tubular({videoId: 'Ubg6lRQyhNM'}); 

  $('.play-pause').click(function() {
    if ($('.play-pause').hasClass("tubular-play")) {
      $('.play-pause').addClass("tubular-pause").removeClass("tubular-play");
      $('#tubular-container').addClass("disappear")
      $("#nav-2").addClass("upper-nav");
      $("#nav-2").removeClass("lower-nav");
      $("#nav-2 a").html("Play");
      
    } else {
      $('.play-pause').addClass("tubular-play").removeClass("tubular-pause");
      $("#nav-2").addClass("lower-nav");
      $("#nav-2").removeClass("upper-nav");
      $('#tubular-container').removeClass("disappear")
      $("#nav-2 a").html("Pause");
    }
  });
});