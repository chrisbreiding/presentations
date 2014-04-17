var canvas = $('canvas');
var ctx = canvas[0].getContext('2d');
var drawing = false

canvas.on('mousedown', function (e) {
  drawing = true;
  ctx.fillStyle = ctx.strokeStyle = '#385E15';
  ctx.beginPath();
  ctx.moveTo(e.offsetX, e.offsetY);
});

canvas.on('mousemove', function (e) {
  if (drawing) {
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
  }
});

canvas.on('mouseup mouseout', function () {
  ctx.closePath();
  ctx.fill();
  drawing = false;
});
