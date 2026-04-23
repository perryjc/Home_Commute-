// at the molment the only way to fill terminal is running drawBackground() in constle

//variables
let x1 = 0;
let x2 = 100;
let x3 = 200;
let x4 = 300;
let x5 = 400;
let x6 = 500;
let x7 = 600;
let x8 = 700;
let x9 = 800;
let x10 = 900;
let x11 = 1000;
let x12 = 1100;
let x13 = 1200;

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
  ctx.fillRect(x1, 175, 50, 10);
  ctx.fillRect(x2, 175, 50, 10);
  ctx.fillRect(x3, 175, 50, 10);
  ctx.fillRect(x4, 175, 50, 10);
  ctx.fillRect(x5, 175, 50, 10);
  ctx.fillRect(x6, 175, 50, 10);
  ctx.fillRect(x7, 175, 50, 10);
  ctx.fillRect(x8, 175, 50, 10);
  ctx.fillRect(x9, 175, 50, 10);
  ctx.fillRect(x10, 175, 50, 10);
  ctx.fillRect(x11, 175, 50, 10);
  ctx.fillRect(x12, 175, 50, 10);
  ctx.fillRect(x13, 175, 50, 10);

  x1 -= gameScore /100;
  x2 -= gameScore /100;
  x3 -= gameScore /100;
  x4 -= gameScore /100;
  x5 -= gameScore /100;
  x6 -= gameScore /100;
  x7 -= gameScore /100;
  x8 -= gameScore /100;
  x9 -= gameScore /100;
  x10 -= gameScore /100;
  x11 -= gameScore /100;
  x12 -= gameScore /100;
  x13 -= gameScore /100;

  if (x1 < 0) {
    x1 = 1280;
  }
  if (x2 < 0) {
    x2 = 1280;
  }
  if (x3 < 0) {
    x3 = 1280;
  }
  if (x4 < 0) {
    x4 = 1280;
  }
  if (x5 < 0) {
    x5 = 1280;
  }
  if (x6 < 0) {
    x6 = 1280;
  }
  if (x7 < 0) {
    x7 = 1280;
  }
  if (x8 < 0) {
    x8 = 1280;
  }
  if (x9 < 0) {
    x9 = 1280;
  }
  if (x10 < 0) {
    x10 = 1280;
  }
  if (x11 < 0) {
    x11 = 1280;
  }
  if (x12 < 0) {
    x12 = 1280;
  }
  if (x13 < 0) {
    x13 = 1280;
  }

}

function drawBackground() {
  ctx.fillStyle = '#3c4245'
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#4a90e2';
}
