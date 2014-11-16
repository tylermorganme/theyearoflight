// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
var mute = false;
var home = false;
var sliderIndex = 0;
var galleryIndex = 0;
var galleryElement = '<div id ="[id]" style="background-image: url([url]); left: [left]; top: [top];"></div>'

var images = [
  {
    name: "image0",
    background: "'img/tyol1.jpg'",
    left: "25%",
    top: "15%"
  },
  {
    name: "image1",
    background: "'img/tyol2.jpg'",
    left: "30%",
    top: "30%"
  },
  {
    name: "image2",
    background: "'img/tyol3.jpg'",
    left: "50%",
    top: "25%"
  }
];

function setSliderNavVisibility(num, max) {
  console.log(num);
  if (num == 0) {
      $('#btn-right').addClass("disappear");
      $('#btn-left').removeClass("disappear");
  } else if (num == max) {
      $('#btn-right').removeClass("disappear");
      $('#btn-left').addClass("disappear");
  } else {
      $('#btn-right').removeClass("disappear");
      $('#btn-left').removeClass("disappear");
  }
}

$().ready(function() {
  var sliderElements = $("#slider-elements").children().length;
  
  for (var image in images) {
    $('#gallery').append(galleryElement.replace("[url]",images[image]["background"]).replace("[left]",images[image]["left"]).replace("[top]",images[image]["top"]).replace("[id]",images[image]["name"]));
  }
  
  var galleryElements = $("#gallery").children().length;
  
  $("#gallery").children().first().addClass("img-show");
  
  $("#slider").css("width", (sliderElements*100) + "%");

  function incrementGallery(){
    $("#image" + galleryIndex).toggleClass("img-show");
    if (galleryIndex + 1 > galleryElements -1) {
      galleryIndex = 0;
    } else {
      galleryIndex += 1;
    }
    setTimeout( function(){
    $("#image" + galleryIndex).toggleClass("img-show");
    },500)
     
  }

  var galleryTimer = setInterval(incrementGallery, 7000);

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

  $('#btn-home').click(function(e) {
    e.preventDefault();
    $('#slider').toggle();
    if (!home) {
      $('#tubular-container').addClass("disappear")
      //$("#btn-home").addClass("upper-nav").removeClass("lower-nav");
      //$('body').addClass("scrollable").removeClass("non-scrollable");
      home = !home;
      $('#btn-home a').html("VIDEO");
      setSliderNavVisibility(sliderIndex, sliderElements - 1);
    } else {
      //$("#btn-home").addClass("lower-nav").removeClass("upper-nav");;
      $('#tubular-container').removeClass("disappear");
      //$('body').addClass("non-scrollable").removeClass("scrollable");
      home = !home;
      $('#btn-right').addClass("disappear");
      $('#btn-left').addClass("disappear");
      $('#btn-home a').html("MORE");
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

  $('#btn-left').click(function(e){
    e.preventDefault();
    if (sliderIndex < sliderElements - 1) {
      sliderIndex += 1;
      $('#slider').css("transform", "translateX(" + (sliderIndex *-100)/sliderElements +"%)" );
      setSliderNavVisibility(sliderIndex, sliderElements - 1);
    } else {
      return;
    }
  });

  $('#btn-right a').click(function(e){
    e.preventDefault();
    if (sliderIndex > 0) {
      sliderIndex -= 1;
      $('#slider').css("transform", "translateX(" + (sliderIndex *-100)/sliderElements +"%)" );
      setSliderNavVisibility(sliderIndex, sliderElements - 1);
    } else {
      return;
    }
  });
});


