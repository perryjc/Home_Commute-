function animate() {
  if (gameRunning) {
    gameScore += 1;
    carTimer += 1;
    // make cars faster over time:
    gameSpeed += 0.01;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw the Background (art.js)
    drawBackground(ctx); 
    // smooth side to side
    if (leftPressed)  player.x -= 7;
    if (rightPressed) player.x += 7;

    // Draw Player
    player.draw(ctx);

    // Draw the lines (art.js) doesn't work when called
    drawLines(ctx);

    // Add new car every 100 ticks
    if (carTimer > 100) {
      spawnTraffic();
      carTimer = 0;
    }

    enemies.forEach((enemy) => {
      enemy.update();
      enemy.draw(ctx);
    });

    checkCollisions();

    // Add something to Update the UI (score and lives) here:
    // uiFuction(); (art.js)

    // Debug shi:
    console.log("Score:" + gameScore + " Lives:" + lives + " Speed:" + gameSpeed);
  }

  requestAnimationFrame(animate);

}

// Start the game
//animate();
drawStartMenu();
