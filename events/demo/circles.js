var canvas = $('canvas');
var ctx = canvas[0].getContext('2d');
ctx.strokeStyle = '#385E15';

canvas.on('click', function (e) {

  var x = e.offsetX;
  var y = e.offsetY;

  ctx.beginPath();
  ctx.arc(x, y, 20, 0, Math.PI*2, true);
  ctx.stroke();

});
