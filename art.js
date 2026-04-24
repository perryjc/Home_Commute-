
//variables

//xs

// top line
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

// bottom line
let x14 = 0;
let x15 = 100;
let x16 = 200;
let x17 = 300;
let x18 = 400;
let x19 = 500;
let x20 = 600;
let x21 = 700;
let x22 = 800;
let x23 = 900;
let x24 = 1000;
let x25 = 1100;
let x26 = 1200;

//ys
let y1 = 550; // bottom line
let y0 = 200; // top line

// z hearts
let z1 = '#ff0000';
let z2 = '#ff0000';
let z3 = '#ff0000';
let z4 = '#ff0000';


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

// starting speed of the lines

// top lines
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

// bottom lines
  x14 += gameScore /100;
  x15 += gameScore /100;
  x16 += gameScore /100;
  x17 += gameScore /100;
  x18 += gameScore /100;
  x19 += gameScore /100;
  x20 += gameScore /100;
  x21 += gameScore /100;
  x22 += gameScore /100;
  x23 += gameScore /100;
  x24 += gameScore /100;
  x25 += gameScore /100;
  x26 += gameScore /100;

// code for when lines goes off the screen, top line
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

  //code when the lines goes off the screen, bottom line

  if (x14 > 1280) {
    x14 = 0;
  }
  if (x15 > 1280) {
    x15 = 0;
  }
  if (x16 > 1280) {
    x16 = 0;
  }
  if (x17 > 1280) {
    x17 = 0;
  }
  if (x18 > 1280) {
    x18 = 0;
  }
  if (x19 > 1280) {
    x19 = 0;
  }
  if (x20 > 1280) {
    x20 = 0;
  }
  if (x21 > 1280) {
    x21 = 0;
  }
  if (x22 > 1280) {
    x22 = 0;
  }
  if (x23 > 1280) {
    x23 = 0;
  }
  if (x24 > 1280) {
    x24 = 0;
  }
  if (x25 > 1280) {
    x25 = 0;
  }
  if (x26 > 1280) {
    x26 = 0;
  }

  //line 2
  ctx.fillRect(x14, y1, 50, 10);
  ctx.fillRect(x15, y1, 50, 10);
  ctx.fillRect(x16, y1, 50, 10);
  ctx.fillRect(x17, y1, 50, 10);
  ctx.fillRect(x18, y1, 50, 10);
  ctx.fillRect(x19, y1, 50, 10);
  ctx.fillRect(x20, y1, 50, 10);
  ctx.fillRect(x21, y1, 50, 10);
  ctx.fillRect(x22, y1, 50, 10);
  ctx.fillRect(x23, y1, 50, 10);
  ctx.fillRect(x24, y1, 50, 10);
  ctx.fillRect(x25, y1, 50, 10);
  ctx.fillRect(x26, y1, 50, 10);


// Draw hearts, "score" and "lives"

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
ctx.lineWidth = 2;

ctx.beginPath();
ctx.fillStyle = z1;
ctx.moveTo(330, 5);
ctx.lineTo(350, 15);
ctx.lineTo(370, 5);
ctx.lineTo(380, 20);
ctx.lineTo(350, 45);
ctx.lineTo(320, 20);
ctx.lineTo(330, 5);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = z2;
ctx.moveTo(400, 5);
ctx.lineTo(420, 15);
ctx.lineTo(440, 5);
ctx.lineTo(450, 20);
ctx.lineTo(420, 45);
ctx.lineTo(390, 20);
ctx.lineTo(400, 5);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = z3;
ctx.moveTo(470, 5);
ctx.lineTo(490, 15);
ctx.lineTo(510, 5);
ctx.lineTo(520, 20);
ctx.lineTo(490, 45);
ctx.lineTo(460, 20);
ctx.lineTo(470, 5);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = z4;
ctx.moveTo(540, 5);
ctx.lineTo(560, 15);
ctx.lineTo(580, 5);
ctx.lineTo(590, 20);
ctx.lineTo(560, 45);
ctx.lineTo(530, 20);
ctx.lineTo(540, 5);
ctx.fill();

if (lives == 3) {
  z4 = '#000000';
}
if (lives == 2) {
  z3 = '#000000';
}
if (lives == 1) {
  z2 = '#000000';
}
if (lives == 0) {
  z1 = '#000000';
}

// Score
ctx.strokeStyle = '#ff0000';
ctx.lineWidth = 2;

// S
ctx.beginPath();
ctx.moveTo(900, 5);
ctx.lineTo(940, 5);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(900, 5);
ctx.lineTo(900, 25);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(900, 25);
ctx.lineTo(940, 25);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(940, 25);
ctx.lineTo(940, 45);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(900, 45);
ctx.lineTo(940, 45);
ctx.stroke();

// C
ctx.beginPath();
ctx.moveTo(950, 5);
ctx.lineTo(990, 5);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(950, 5);
ctx.lineTo(950, 45);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(950, 45);
ctx.lineTo(990, 45);
ctx.stroke();

// O
ctx.beginPath();
ctx.moveTo(1000, 5);
ctx.lineTo(1040, 5);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(1000, 5);
ctx.lineTo(1000, 45);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(1000, 45);
ctx.lineTo(1040, 45);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(1040, 5);
ctx.lineTo(1040, 45);
ctx.stroke();

// R
ctx.beginPath();
ctx.moveTo(1050, 5);
ctx.lineTo(1090, 5);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(1050, 5);
ctx.lineTo(1050, 45);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(1050, 25);
ctx.lineTo(1090, 25);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(1090, 5);
ctx.lineTo(1090, 25);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(1050, 25);
ctx.lineTo(1090, 45);
ctx.stroke();

// E
ctx.beginPath();
ctx.moveTo(1100, 5);
ctx.lineTo(1100, 45);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(1100, 5);
ctx.lineTo(1140, 5);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(1100, 25);
ctx.lineTo(1130, 25);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(1100, 45);
ctx.lineTo(1140, 45);
ctx.stroke();

// counter
ctx.font = '40px Arial';
ctx.fillStyle = '#ffffff';
ctx.fillText(gameScore, 1150, 40);
}



function drawBackground() {
  ctx.fillStyle = '#3c4245'
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#4a90e2';
}
