// at the molment the only way to fill terminal is running drawBackground() in constle

//variables
let x1 = 175;
let x2 = 175;
let x3 = 175;
let x4 = 175;
let x5 = 175;
let x6 = 175;
let x7 = 175;
let x8 = 175;
let x9 = 175;
let x10 = 175;
let x11 = 175;
let x12 = 175;
let x13 = 175;

function drawLines() {
  ctx.strokeStyle = '#ffea00';
  ctx.lineWidth = 3;
  //line 1
  ctx.beginPath();
  ctx.moveTo(0, 350);
  ctx.lineTo(1280, 350);
  ctx.stroke();

  //line 2 
  ctx.beginPath();
  ctx.moveTo(0, 450);
  ctx.lineTo(1280, 450);
  ctx.stroke();
  

  // white lines on the road
  ctx.fillStyle = '#ffffff';

  //line 1
  ctx.fillRect(0, x1, 50, 10);
  ctx.fillRect(100, x2, 50, 10);
  ctx.fillRect(200, x3, 50, 10);
  ctx.fillRect(300, x4, 50, 10);
  ctx.fillRect(400, x5, 50, 10);
  ctx.fillRect(500, x6, 50, 10);
  ctx.fillRect(600, x7, 50, 10);
  ctx.fillRect(700, x8, 50, 10);
  ctx.fillRect(800, x9, 50, 10);
  ctx.fillRect(900, x10, 50, 10);
  ctx.fillRect(1000, x11, 50, 10);  
  ctx.fillRect(1100, x12, 50, 10);
  ctx.fillRect(1200, x13, 50, 10);

  
}

function drawBackground() {
  ctx.fillStyle = '#3c4245'
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#4a90e2';
}
