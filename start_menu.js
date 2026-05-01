function drawStartMenu() {
  ctx.fillStyle = '#FFF8DC';
  ctx.fillRect(320, 150, 640, 400);
  ctx.font = "30px Arial";
  ctx.fillStyle = "#000000";
  ctx.fillText("How To Play", 540, 180);

  // Line between "How To Play" and the rest
  ctx.strokeStyle = "#000000";
  ctx.beginPath();
  ctx.moveTo(320, 200);
  ctx.lineTo(960, 200);
  ctx.stroke();

  // Controls
  ctx.font = "24px Arial";
  ctx.fillText("Controls", 360, 245);
  ctx.font = "20px Arial";
  ctx.fillText("• ↑Up Arrow Button - Move Up.                   • P - Pause Game", 360, 285);
  ctx.fillText("• ↓Down Arrow Button - Move Down.          • R - Restart Game",  360, 315);

  // Object of the Game
  ctx.font = "24px Arial";
  ctx.fillText("Object of the Game", 360, 365);
  ctx.font = "20px Arial";
  ctx.fillText("• Your goal is to dodge the orange cars and blue pedestrians.", 360, 395);
  ctx.fillText("• The cars speed up the longer you survive.", 360, 425);
  ctx.fillText("• You have 4 lives and your score increases over time.", 360, 455);

  // Start Button
  ctx.fillStyle = "#000000";
  ctx.fillRect(540, 490, 200, 50);
  ctx.fillStyle = "#FFFFFF";
  ctx.font = "20px Arial";
  ctx.fillText("Press Enter to Start", 553, 523);

  window.addEventListener('keydown', (e) => {
    if (e.key === "Enter") animate();
    if 
});

       }
