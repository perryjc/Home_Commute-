// at the molment the only way to fill terminal is running drawBackground() in constle

//variables

//xs
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

//ys
let y1 = 550;
let y0 = 200;


function drawLines() {
  ctx.strokeStyle = '#ffea00';
  ctx.lineWidth = 5;
  //yellow lines
  //middle lines
  //line 1
  ctx.beginPath();
  ctx.moveTo(0, 350);
  ctx.lineTo(1280, 350);
  ctx.stroke();

  //line 2 
  ctx.beginPath();
  ctx.moveTo(0, 375);
  ctx.lineTo(1280, 375);
  ctx.stroke();

  //line on bottom and top
  ctx.strokeStyle = '#ffea00';
  ctx.lineWidth = 3;
  //line 1
  ctx.beginPath();
  ctx.moveTo(0, 50);
  ctx.lineTo(1280, 50);
  ctx.stroke();

  //line 2
  ctx.beginPath();
  ctx.moveTo(0, 750);
  ctx.lineTo(1280, 750);
  ctx.stroke();
  

  // white lines on the road
  ctx.fillStyle = '#ffffff';

  //line 1
  ctx.fillRect(x1, y0, 50, 10);
  ctx.fillRect(x2, y0, 50, 10);
  ctx.fillRect(x3, y0, 50, 10);
  ctx.fillRect(x4, y0, 50, 10);
  ctx.fillRect(x5, y0, 50, 10);
  ctx.fillRect(x6, y0, 50, 10);
  ctx.fillRect(x7, y0, 50, 10);
  ctx.fillRect(x8, y0, 50, 10);
  ctx.fillRect(x9, y0, 50, 10);
  ctx.fillRect(x10, y0, 50, 10);
  ctx.fillRect(x11, y0, 50, 10);
  ctx.fillRect(x12, y0, 50, 10);
  ctx.fillRect(x13, y0, 50, 10);

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

  //line 2
  ctx.fillRect(x1, y1, 50, 10);
  ctx.fillRect(x2, y1, 50, 10);
  ctx.fillRect(x3, y1, 50, 10);
  ctx.fillRect(x4, y1, 50, 10);
  ctx.fillRect(x5, y1, 50, 10);
  ctx.fillRect(x6, y1, 50, 10);
  ctx.fillRect(x7, y1, 50, 10);
  ctx.fillRect(x8, y1, 50, 10);
  ctx.fillRect(x9, y1, 50, 10);
  ctx.fillRect(x10, y1, 50, 10);
  ctx.fillRect(x11, y1, 50, 10);
  ctx.fillRect(x12, y1, 50, 10);
  ctx.fillRect(x13, y1, 50, 10);

}

// Draw hearts

  

function drawBackground() {
  ctx.fillStyle = '#3c4245'
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#4a90e2';
}
