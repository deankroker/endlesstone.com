$(document).ready(function(){ 
  AOS.init();
  $("#gallery").unitegallery({
    gallery_theme: "tiles",
    tiles_type:"justified"
  }); 
  
  $('#made-for-music').bind('inview', function(event, visible) {
    if(visible == true) {
      
    } else {
      $("#svg-holder").addClass("show-item");
      console.log("HERE");
    }
  });
  
  $(window).scroll(function() {
    console.log($(window).scrollTop());
    var topDivHeight = $("#made-for-music").height();
    var viewPortSize = $(window).height();

    var triggerAt = 1200;
    var triggerHeight = (topDivHeight - viewPortSize) + triggerAt;
    console.log(triggerHeight);
    if ($(window).scrollTop() >= triggerHeight) {
        console.log("SHOWING");
        $('#svg-holder').addClass("show-item");
        $(this).off("scroll");
    }
  })
}); 