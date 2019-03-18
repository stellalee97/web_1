var Career = $(".Career");
console.log(circle[0].offsetHeight);
var Artwork = $(".Artwork");
console.log(circle[0].offsetHeight);

$( document ).on( "mousemove", function( event ) {
  var screenWidth = $( document ).width();
  var cursorX = event.pageX;
  var cursorY = event.pageY;
  $(".Career").css({
    "left": cursorX,
    "top": cursorY
  });
  $(".Artwork").css({
    "left": cursorX,
    "top": cursorY
  });
});

