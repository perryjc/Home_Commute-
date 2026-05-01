
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
  ctx.fillRect(x14, y0, 50, 10);
  ctx.fillRect(x15, y0, 50, 10);
  ctx.fillRect(x16, y0, 50, 10);
  ctx.fillRect(x17, y0, 50, 10);
  ctx.fillRect(x18, y0, 50, 10);
  ctx.fillRect(x19, y0, 50, 10);
  ctx.fillRect(x20, y0, 50, 10);
  ctx.fillRect(x21, y0, 50, 10);
  ctx.fillRect(x22, y0, 50, 10);
  ctx.fillRect(x23, y0, 50, 10);
  ctx.fillRect(x24, y0, 50, 10);
  ctx.fillRect(x25, y0, 50, 10);
  ctx.fillRect(x26, y0, 50, 10);

// starting speed of the lines

// top lines
  x1 -= gameSpeed;
  x2 -= gameSpeed;
  x3 -= gameSpeed;
  x4 -= gameSpeed;
  x5 -= gameSpeed;
  x6 -= gameSpeed ;
  x7 -= gameSpeed ;
  x8 -= gameSpeed ;
  x9 -= gameSpeed ;
  x10 -= gameSpeed ;
  x11 -= gameSpeed ;
  x12 -= gameSpeed ;
  x13 -= gameSpeed ;

// bottom lines
  x14 += gameSpeed ;
  x15 += gameSpeed ;
  x16 += gameSpeed ;
  x17 += gameSpeed ;
  x18 += gameSpeed ;
  x19 += gameSpeed ;
  x20 += gameSpeed ;
  x21 += gameSpeed ;
  x22 += gameSpeed ;
  x23 += gameSpeed ;
  x24 += gameSpeed ;
  x25 += gameSpeed;
  x26 += gameSpeed;

// code for when lines goes off the screen, top line
  if (x1 < -50) {
    x1 = 1250;
  }
  if (x2 < -50) {
    x2 = 1250;
  }
  if (x3 < -50) {
    x3 = 1250;
  }
  if (x4 < -50) {
    x4 = 1250;
  }
  if (x5 < -50) {
    x5 = 1250;
  }
  if (x6 < -50) {
    x6 = 1250;
  }
  if (x7 < -50) {
    x7 = 1250;
  }
  if (x8 < -50) {
    x8 = 1250;
  }
  if (x9 < -50) {
    x9 = 1250;
  }
  if (x10 < -50) {
    x10 = 1250;
  }
  if (x11 < -50) {
    x11 = 1250;
  }
  if (x12 < -50) {
    x12 = 1250;
  }
  if (x13 < -50) {
    x13 = 1250;
  }

  //code when the lines goes off the screen, bottom line

  if (x14 > 1280) {
    x14 = -50;
  }
  if (x15 > 1280) {
    x15 = -50;
  }
  if (x16 > 1280) {
    x16 = -50;
  }
  if (x17 > 1280) {
    x17 = -50;
  }
  if (x18 > 1280) {
    x18 = -50;
  }
  if (x19 > 1280) {
    x19 = -50;
  }
  if (x20 > 1280) {
    x20 = -50;
  }
  if (x21 > 1280) {
    x21 = -50;
  }
  if (x22 > 1280) {
    x22 = -50;
  }
  if (x23 > 1280) {
    x23 = -50;
  }
  if (x24 > 1280) {
    x24 = -50;
  }
  if (x25 > 1280) {
    x25 = -50;
  }
  if (x26 > 1280) {
    x26 = -50;
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
  


// Draw hearts, "score" and "lives"

//Lives

// L
ctx.font = '50px Nunito Sans';
ctx.fillStyle = '#ff0000';
ctx.fillText("Lives:", 25, 40);


// Hearts
ctx.lineWidth = 2;

ctx.beginPath();
ctx.fillStyle = z1;
ctx.moveTo(170, 5);
ctx.lineTo(190, 15);
ctx.lineTo(210, 5);
ctx.lineTo(220, 20);
ctx.lineTo(190, 45);
ctx.lineTo(160, 20);
ctx.lineTo(170, 5);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = z2;
ctx.moveTo(240, 5);
ctx.lineTo(260, 15);
ctx.lineTo(280, 5);
ctx.lineTo(290, 20);
ctx.lineTo(260, 45);
ctx.lineTo(230, 20);
ctx.lineTo(240, 5);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = z3;
ctx.moveTo(310, 5);
ctx.lineTo(330, 15);
ctx.lineTo(350, 5);
ctx.lineTo(360, 20);
ctx.lineTo(330, 45);
ctx.lineTo(300, 20);
ctx.lineTo(310, 5);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = z4;
ctx.moveTo(380, 5);
ctx.lineTo(400, 15);
ctx.lineTo(420, 5);
ctx.lineTo(430, 20);
ctx.lineTo(400, 45);
ctx.lineTo(370, 20);
ctx.lineTo(380, 5);
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

if (lives == 4) {
  z1 = '#ff0000';
  z2 = '#ff0000';
  z3 = '#ff0000';
  z4 = '#ff0000';
}

// Score
ctx.font = '50px Nunito Sans';
ctx.fillStyle = '#ff0000';
ctx.fillText("Score:", 975, 40);

// counter
ctx.font = '40px Nunito Sans';
ctx.fillStyle = '#ffffff';
ctx.fillText(gameScore, 1130, 40);




}



function drawBackground() {
  ctx.fillStyle = '#3c4245'
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#4a90e2';
}

function explosion() {
  if (lives == 3) {
    ctx.fillStyle = '#ff0000';
    ctx.beginPath();
    ctx.arc(player.x + player.width / 2, player.y + player.height / 2, 50, 0, Math.PI * 2);
    ctx.fill();
    
  }

  if (lives == 2) {
    ctx.fillStyle = '#ff0000';
    ctx.beginPath();
    ctx.arc(player.x + player.width / 2, player.y + player.height / 2, 70, 0, Math.PI * 2);
    ctx.fill();
  }

  if (lives == 1) {
    ctx.fillStyle = '#ff0000';
    ctx.beginPath();
    ctx.arc(player.x + player.width / 2, player.y + player.height / 2, 90, 0, Math.PI * 2);
    ctx.fill();
  }

  if (lives == 0) {
    ctx.fillStyle = '#ff0000';
    ctx.beginPath();
    ctx.arc(player.x + player.width / 2, player.y + player.height / 2, 110, 0, Math.PI * 2);
    ctx.fill();
  }
}
