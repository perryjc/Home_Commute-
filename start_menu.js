function drawStartMenu() {
  ctx.fillStyle = '#FFF8DC';
  ctx.fillRect(320, 150, 640, 400);
  ctx.font = "30px Arial";
//Line between "How To Play" and the rest
  ctx.strokeStyle = "#000000";
  ctx.beginPath();
  ctx.moveTo(320,200);
  ctx.lineTo(960,200);
  ctx.stroke();
    //how to play
  ctx.fillStyle = "#000000";
  ctx.fillText("How To Play", 590, 180);
    //Controls
  ctx.fillStyle = "#000000";
  ctx.fillText("Controls", 400, 250); 
    //UP
  ctx.fillStyle = "#000000";
  ctx.fillText("Up Arrow Button", 300, 250); 
    //Down
  ctx.fillStyle = "#000000";
  ctx.fillText("Down Arrow Button", 200, 250);  
    //Object of the Game
  ctx.fillStyle = "#000000";
  ctx.fillText("Your goal is to dodge the orange cars. The speed of the cars also goes up the longer you survive.", 100, 250);  
  ctx.fillText("You have 4 lives, and your score goes up the longer you survive.", 100, 250);  
  ctx.fillText("The speed of the cars also goes up the longer you survive.", 100, 250)
      //Start Button
  ctx.fillStyle = "#000000";
  ctx.fillRect(500, 400, 200, 50);
  ctx.fillStyle = "#FFFFFF";
  ctx.font = "20px Arial";
  ctx.fillText("Press Enter to Start", 540, 435);
}