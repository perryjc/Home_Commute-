function drawPauseBackground() {
  ctx.fillStyle = '#FFEFD5'
  ctx.fillRect(320, 150, 640, 400);
  ctx.font = "30px Arial"
  //Line between "Pause" and the rest
  ctx.strokeStyle = "#000000";
  ctx.beginPath();
  ctx.moveTo(320,200);
  ctx.lineTo(960,200);
  ctx.stroke();
    //Pause text
  ctx.fillStyle = "#000000";
  ctx.fillText("Pause", 590, 180);

    //Score text
  ctx.fillStyle = "#000000";
  ctx.fillText("Score", 400, 250);
    //High Score text
  ctx.fillStyle = "#000000";
  ctx.fillText("High Score", 400, 300);
    //Lives text
  ctx.fillStyle = "#000000";
  ctx.fillText("Lives", 400, 350);  
    //Resume text
  ctx.fillStyle = "#000000";
  ctx.fillText("Press P to Resume", 400, 480);
    //Start Over text
  ctx.fillStyle = "#000000";
  ctx.fillText("Press R to Start Over", 400, 530);

    //Score numbers
  ctx.fillStyle = "#000000";
  ctx.fillText(gameScore, 550, 250);
    //High Score numbers
  ctx.fillStyle = "#000000";
  ctx.fillText(gameHighScore, 580, 300);
    //Lives Numbers
  ctx.fillStyle = "#000000";
  ctx.fillText(lives, 490, 350);  
}