function animate() {
  if (gameRunning) {
    gameScore += 1;
    carTimer += 1;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 1. Draw the Road/Background (handled in art.js)
    drawBackground(ctx); 

    // 2. Handle Player
    player.draw(ctx);

    // 3. add new car every 100 ticks
    if (carTimer > 100) {
      spawnTraffic();
      carTimer = 0;
    }

    enemies.forEach((enemy) => {
      enemy.update();
      enemy.draw(ctx);
    });

    checkCollisions();

    // 4. Add something to Update the UI (score and lives) here:
    // uiFuction(); (art.js)

    // Debug shi:
    console.log("Score:" + gameScore + " Lives:" + lives + " Speed:" + gameSpeed);
  }

  requestAnimationFrame(animate);

}

// Start the game
animate();