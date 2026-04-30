
// variables
const dashWidth = 50;
const dashHeight = 10;
const dashSpacing = 100;
const roadEdgeRight = 1280;
const y1 = 550; // bottom line
const y0 = 200; // top line
let topLineOffset = 0;
let bottomLineOffset = 0;

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

  topLineOffset = (topLineOffset - gameSpeed) % dashSpacing;
  if (topLineOffset < 0) topLineOffset += dashSpacing;

  bottomLineOffset = (bottomLineOffset + gameSpeed) % dashSpacing;
  if (bottomLineOffset < 0) bottomLineOffset += dashSpacing;

  for (let x = topLineOffset - dashSpacing; x < roadEdgeRight; x += dashSpacing) {
    ctx.fillRect(x, y0, dashWidth, dashHeight);
  }
  for (let x = bottomLineOffset - dashSpacing; x < roadEdgeRight; x += dashSpacing) {
    ctx.fillRect(x, y1, dashWidth, dashHeight);
  }
  


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
