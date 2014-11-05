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


$(function(){
  $(window).scroll(function(){
    var winTop = $(window).scrollTop();
    if(winTop >= 1){
      $("#nav-1").addClass("upper-nav");
      $("#nav-3").addClass("upper-nav");
      //console.log("Above 30");
    }else{
      $("#nav-1").removeClass("upper-nav");
      $("#nav-3").removeClass("upper-nav");
      //console.log("Below 30");
    }//if-else
  });//win func.
});//ready func.