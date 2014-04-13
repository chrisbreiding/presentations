var dragging = false;
var offsetX;
var offsetY;
var img = $('img');

img.on('mousedown', function (e) {
  dragging = true;

  offsetX = e.pageX - $(this).position().left;
  offsetY = e.pageY - $(this).position().top;
});

$('body').on('mousemove', function (e) {
  if (dragging) {
    e.preventDefault();

    img.css({
      top: e.pageY - offsetY,
      left: e.pageX - offsetX
    });
  }
});

img.on('mouseup mouseout', function () {
  dragging = false;
});
