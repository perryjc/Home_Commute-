function drawStartMenu() {
  ctx.fillStyle = '#FFF8DC';
  ctx.fillRect(325, 50, 700, 500);
  ctx.font = "30px Arial";
  ctx.fillStyle = "#000000";
  ctx.fillText("How To Play", 575, 100);

  // Line between "How To Play" and the rest
  ctx.strokeStyle = "#000000";
  ctx.beginPath();
  ctx.moveTo(325, 125);
  ctx.lineTo(1025, 125);
  ctx.stroke();

  // Controls
  ctx.font = "24px Arial";
  ctx.fillText("Controls", 360, 150);
  ctx.font = "20px Arial";
  ctx.fillText("• ↑Up Arrow Button - Move Up.                   • P - Pause Game", 360, 190);
  ctx.fillText("• ↓Down Arrow Button - Move Down.          • R - Restart Game",  360, 220);

  // Object of the Game
  ctx.font = "24px Arial";
  ctx.fillText("Object of the Game", 360, 265);
  ctx.font = "20px Arial";
  ctx.fillText("• Your goal is to dodge the orange cars and blue pedestrians.", 360, 295);
  ctx.fillText("• The cars speed up the longer you survive.", 360, 325);
  ctx.fillText("• You have 4 lives and your score increases over time.", 360, 355);

  //Easy Dificulty
  ctx.fillStyle = "#000000";
  ctx.fillRect(330, 490, 200, 50);
  ctx.fillStyle = "#FFFFFF";
  ctx.font = "20px Arial";
  ctx.fillText("Press E for easy",353, 523);

  //Medium Dificulty
  ctx.fillStyle = "#000000";
  ctx.fillRect(565, 490, 200, 50);
  ctx.fillStyle = "#FFFFFF";
  ctx.font = "20px Arial";
  ctx.fillText("Press M for Medium", 575, 523);

  //Hard Dificulty
  ctx.fillStyle = "#000000";
  ctx.fillRect(800, 490, 200, 50);
  ctx.fillStyle = "#FFFFFF";
  ctx.font = "20px Arial";
  ctx.fillText("Press H for Hard", 825, 523);

  //Start Button
  ctx.fillStyle = "#000000";
  ctx.fillRect(565, 390, 200, 50);
  ctx.fillStyle = "#FFFFFF";
  ctx.font = "20px Arial";
  ctx.fillText("Press Enter to Start", 575, 423);

  
  window.addEventListener('keydown', (e) => {
    if (e.key == "Enter"){ 
      if (!gameRunning && !gameOver && !duiActive && !pauseMenuOpen) {
        gameRunning = true;
        animate(); 
      } else {
        empty(); 
      }
    }
  });
}

function empty() {
  console.log("Fuck You");
  // This is an empty function that does nothing. It is used as a placeholder for the "Start Game" to fix the enter issue.
}
