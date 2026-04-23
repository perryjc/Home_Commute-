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

// z
let z = '#ff0000';


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


// Draw hearts

//Lives

// L
ctx.strokeStyle = '#ff0000';
ctx.lineWidth = 2;
ctx.beginPath();
ctx.moveTo(100, 5);
ctx.lineTo(100, 45);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(100, 45);
ctx.lineTo(140, 45);
ctx.stroke();

// I
ctx.beginPath();
ctx.moveTo(150, 5);
ctx.lineTo(150, 45);
ctx.stroke();

// V
ctx.beginPath();
ctx.moveTo(160, 5);
ctx.lineTo(170, 45);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(170, 45);
ctx.lineTo(180, 5);
ctx.stroke();

// E
ctx.beginPath();
ctx.moveTo(190, 5);
ctx.lineTo(190, 45);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(190, 5);
ctx.lineTo(230, 5);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(190, 25);
ctx.lineTo(220, 25);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(190, 45);
ctx.lineTo(230, 45);
ctx.stroke();

// S
ctx.beginPath();
ctx.moveTo(240, 5);
ctx.lineTo(280, 5);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(240, 5);
ctx.lineTo(240, 25);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(240, 25);
ctx.lineTo(280, 25);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(280, 25);
ctx.lineTo(280, 45);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(240, 45);
ctx.lineTo(280, 45);
ctx.stroke();

// Hearts
ctx.fillStyle = z;
ctx.lineWidth = 2;

ctx.beginPath();
ctx.moveTo(330, 5);
ctx.lineTo(350, 15);
ctx.lineTo(370, 5);
ctx.lineTo(380, 20);
ctx.lineTo(350, 45);
ctx.lineTo(320, 20);
ctx.lineTo(330, 5);
ctx.fill();

ctx.beginPath();
ctx.moveTo(400, 5);
ctx.lineTo(420, 15);
ctx.lineTo(440, 5);
ctx.lineTo(450, 20);
ctx.lineTo(420, 45);
ctx.lineTo(390, 20);
ctx.lineTo(400, 5);
ctx.fill();

ctx.beginPath();
ctx.moveTo(470, 5);
ctx.lineTo(490, 15);
ctx.lineTo(510, 5);
ctx.lineTo(520, 20);
ctx.lineTo(490, 45);
ctx.lineTo(460, 20);
ctx.lineTo(470, 5);
ctx.fill();

ctx.beginPath();
ctx.moveTo(540, 5);
ctx.lineTo(560, 15);
ctx.lineTo(580, 5);
ctx.lineTo(590, 20);
ctx.lineTo(560, 45);
ctx.lineTo(530, 20);
ctx.lineTo(540, 5);
ctx.fill();

if (lives == 3) {
  z = '#000000';
}
}

  

function drawBackground() {
  ctx.fillStyle = '#3c4245'
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#4a90e2';
}
