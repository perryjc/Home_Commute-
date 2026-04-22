// at the molment the only way to fill terminal is running drawBackground() in constle
function drawBackground() {
  ctx.fillStyle = '#3c4245'
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#4a90e2';
}

function drawLines() {
  ctx.strokeStyle = '#ffea00';
  ctx.lineWidth = 2;
  ctx.beginPath();
  LANES.forEach(laneY => {
    ctx.moveTo(0, laneY);
    ctx.lineTo(canvas.width, laneY);
  });
  ctx.stroke();
}

