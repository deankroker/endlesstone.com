var productData = {
  "product_pk": "392kc83w217",
  "name": "Dean Legendary Guitar Series",
  "model": "DJK-1030",
  "manufacturer": "Dean",
  "average_price": "2489",
  "min_price": "1659",
  "max_price": "3499",
  "currency": "USD",
  "listings": [
    {
      "name": "Amazon.com",
      "average_price": "2489",
      "min_price": "1659",
      "max_price": "3499"
    },
    {
      "name": "Guitar Center",
      "average_price": "2489",
      "min_price": "1659",
      "max_price": "3499"
    }
  ]
}
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
  
  var isCodeVisible = false;
  
  $("#toggleBtn").change(function(){
    $("#timelineImage").css("display", (isCodeVisible ? "block" : "none"));
    $("#codeBlock").css("display", (isCodeVisible ? "none" : "inline-block"));
    $("#devLabel").html(isCodeVisible ? "OFF" : "ON");
    isCodeVisible = !isCodeVisible;
  })
  
  var prettyData = JSON.stringify(productData, undefined, 2);
  $("#productData").html("<pre>"+prettyData+"</pre>");
  
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