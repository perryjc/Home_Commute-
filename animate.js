function animate() {
  if (gameRunning) {
    gameScore += 1;
    carTimer += 1;
    // make cars faster over time:
    // gameSpeed += 0.1;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw the Background (art.js)
    drawBackground(ctx); 

    // Draw Player
    player.draw(ctx);

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
animate();