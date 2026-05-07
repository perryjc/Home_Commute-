
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

// x and y for the secret path
let secretX = 600;
let secretY = 400;

let upPressed = false;
let downPressed = false;


function drawLines() {
  //sidewalk
  /* ctx.fillStyle = '#D3D3D3';
  ctx.fillRect(0, 750, 1300, 50);

  ctx.strokeStyle = '#000000'
  ctx.beginPath();
  ctx.moveTo(50, 750);
  ctx.lineTo(50, 800);
  ctx.stroke();

  ctx.strokeStyle = '#000000'
  ctx.beginPath();
  ctx.moveTo(100, 750);
  ctx.lineTo(100, 800);
  ctx.stroke();

  ctx.strokeStyle = '#000000'
  ctx.beginPath();
  ctx.moveTo(150, 750);
  ctx.lineTo(150, 800);
  ctx.stroke();

  ctx.strokeStyle = '#000000'
  ctx.beginPath();
  ctx.moveTo(200, 750);
  ctx.lineTo(200, 800);
  ctx.stroke();

  ctx.strokeStyle = '#000000'
  ctx.beginPath();
  ctx.moveTo(250, 750);
  ctx.lineTo(250, 800);
  ctx.stroke();

  ctx.strokeStyle = '#000000'
  ctx.beginPath();
  ctx.moveTo(300, 750);
  ctx.lineTo(300, 800);
  ctx.stroke();

  ctx.strokeStyle = '#000000'
  ctx.beginPath();
  ctx.moveTo(350, 750);
  ctx.lineTo(350, 800);
  ctx.stroke();

  ctx.strokeStyle = '#000000'
  ctx.beginPath();
  ctx.moveTo(400, 750);
  ctx.lineTo(400, 800);
  ctx.stroke();

  ctx.strokeStyle = '#000000'
  ctx.beginPath();
  ctx.moveTo(450, 750);
  ctx.lineTo(450, 800);
  ctx.stroke();

  ctx.strokeStyle = '#000000'
  ctx.beginPath();
  ctx.moveTo(500, 750);
  ctx.lineTo(500, 800);
  ctx.stroke();

  ctx.strokeStyle = '#000000'
  ctx.beginPath();
  ctx.moveTo(550, 750);
  ctx.lineTo(550, 800);
  ctx.stroke();

  ctx.strokeStyle = '#000000'
  ctx.beginPath();
  ctx.moveTo(600, 750);
  ctx.lineTo(600, 800);
  ctx.stroke();

  ctx.strokeStyle = '#000000'
  ctx.beginPath();
  ctx.moveTo(650, 750);
  ctx.lineTo(650, 800);
  ctx.stroke();

  ctx.strokeStyle = '#000000'
  ctx.beginPath();
  ctx.moveTo(700, 750);
  ctx.lineTo(700, 800);
  ctx.stroke();

  ctx.strokeStyle = '#000000'
  ctx.beginPath();
  ctx.moveTo(750, 750);
  ctx.lineTo(750, 800);
  ctx.stroke();

  ctx.strokeStyle = '#000000'
  ctx.beginPath();
  ctx.moveTo(800, 750);
  ctx.lineTo(800, 800);
  ctx.stroke();

  ctx.strokeStyle = '#000000'
  ctx.beginPath();
  ctx.moveTo(850, 750);
  ctx.lineTo(850, 800);
  ctx.stroke();

  ctx.strokeStyle = '#000000'
  ctx.beginPath();
  ctx.moveTo(900, 750);
  ctx.lineTo(900, 800);
  ctx.stroke();

  ctx.strokeStyle = '#000000'
  ctx.beginPath();
  ctx.moveTo(950, 750);
  ctx.lineTo(950, 800);
  ctx.stroke();

  ctx.strokeStyle = '#000000'
  ctx.beginPath();
  ctx.moveTo(1000, 750);
  ctx.lineTo(1000, 800);
  ctx.stroke();

  ctx.strokeStyle = '#000000'
  ctx.beginPath();
  ctx.moveTo(1050, 750);
  ctx.lineTo(1050, 800);
  ctx.stroke();

  ctx.strokeStyle = '#000000'
  ctx.beginPath();
  ctx.moveTo(1100, 750);
  ctx.lineTo(1100, 800);
  ctx.stroke();

  ctx.strokeStyle = '#000000'
  ctx.beginPath();
  ctx.moveTo(1150, 750);
  ctx.lineTo(1150, 800);
  ctx.stroke();

  ctx.strokeStyle = '#000000'
  ctx.beginPath();
  ctx.moveTo(1200, 750);
  ctx.lineTo(1200, 800);
  ctx.stroke();

  ctx.strokeStyle = '#000000'
  ctx.beginPath();
  ctx.moveTo(1250, 750);
  ctx.lineTo(1250, 800);
  ctx.stroke(); */

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
  x13 += gameSpeed ;
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


  //code when the lines goes off the screen

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
  ctx.fillRect(x13, y1, 50, 10);
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

    // red circle around the player
    ctx.fillStyle = '#ff0000';
    ctx.beginPath();
    ctx.arc(player.x + player.width / 2, player.y + player.height / 2, 50, 0, Math.PI * 2);
    ctx.fill();

    //orange explosion
    ctx.fillStyle = '#ff8000';
    ctx.beginPath();
    ctx.arc(player.x + player.width / 2, player.y + player.height / 2, 30, 0, Math.PI * 2);
    ctx.fill();
    
    
  }

  if (lives == 2) {
    ctx.fillStyle = '#ff0000';
    ctx.beginPath();
    ctx.arc(player.x + player.width / 2, player.y + player.height / 2, 70, 0, Math.PI * 2);
    ctx.fill();

    //orange explosion
    ctx.fillStyle = '#ff8000';
    ctx.beginPath();
    ctx.arc(player.x + player.width / 2, player.y + player.height / 2, 50, 0, Math.PI * 2);
    ctx.fill();
  }

  if (lives == 1) {
    ctx.fillStyle = '#ff0000';
    ctx.beginPath();
    ctx.arc(player.x + player.width / 2, player.y + player.height / 2, 90, 0, Math.PI * 2);
    ctx.fill();

    //orange explosion
    ctx.fillStyle = '#ff8000';
    ctx.beginPath();
    ctx.arc(player.x + player.width / 2, player.y + player.height / 2, 70, 0, Math.PI * 2);
    ctx.fill();
  }

  if (lives == 0) {
    ctx.fillStyle = '#ff0000';
    ctx.beginPath();
    ctx.arc(player.x + player.width / 2, player.y + player.height / 2, 110, 0, Math.PI * 2);
    ctx.fill();

    //orange explosion
    ctx.fillStyle = '#ff8000';
    ctx.beginPath();
    ctx.arc(player.x + player.width / 2, player.y + player.height / 2, 90, 0, Math.PI * 2);
    ctx.fill();
  }
}
function secretPath () {
  let secretpath = false;
  ctx.fillStyle = '#ff0000';
  ctx.fillRect(1260, 230, 20, 100);

  if (player.x + player.width > 1260 && player.x < 1280 && player.y < 330 && player.y + player.height > 230) {
    ctx.fillStyle = '#3c4245';
    ctx.fillRect(0, 0, 1280, 800);
    secretpath = true;
    gameRunning = false;
  }

  //draw player model in secret path
  if (secretpath) {
    ctx.fillStyle = '#9000ff';
    ctx.fillRect(secretX, secretY, 30, 50);
  }

  // player movement in secret path
  if (secretpath) {
    if (leftPressed)  secretX -= 7;
    if (rightPressed) secretX += 7;
    if (upPressed) secretY -= 7;
    if (downPressed) secretY += 7;
  }

  // draw house 
  if (secretpath) {
    ctx.fillStyle = '#654321';
    ctx.fillRect(600, 500, 600, 300);
    ctx.fillStyle = '#000000';
    ctx.beginPath();
    ctx.moveTo(600, 500);
    ctx.lineTo(900, 300);
    ctx.lineTo(1200, 500);
    ctx.closePath();
    ctx.fill();
    // draw windows
    ctx.fillStyle = 'blue';
    ctx.fillRect(700, 600, 100, 100);
    ctx.fillRect(1000, 600, 100, 100);
    //draw door
    ctx.fillStyle = 'brown';
    ctx.fillRect(850, 650, 100, 150);
    //draw dooor knob
    ctx.fillStyle = 'yellow';
    ctx.beginPath();
    ctx.arc(930, 725, 10, 0, Math.PI * 2);
    ctx.fill();
    // draw car
    ctx.fillStyle = 'black';
    ctx.fillRect(200, 180, 25, 25);
    ctx.fillRect(200, 255, 25, 25);
    ctx.fillRect(295, 180, 25, 25);
    ctx.fillRect(295, 255, 25, 25);
    ctx.fillStyle = 'green';
    ctx.fillRect(200, 200, 120, 60);

    //draw pathway
    ctx.fillStyle = '#2b1d00';
    ctx.fillRect(300, 500, 200, 100);

  }
}