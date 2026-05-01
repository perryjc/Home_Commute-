function animate() {
  if (gameRunning) {
    gameScore += 1;
    carTimer += 1;
    pedestrianTimer += 1;
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
    if (pedestrianTimer > 300){
      SpawnPedestrian();
      pedestrianTimer = 0
      console.log("100 tick part worked");
    }

    enemies.forEach((enemy) => {
      enemy.update();
      enemy.draw(ctx);
    });
    enemies.forEach((pedestrian) => {
      pedestrian.update();
      pedestrian.draw(ctx);
      console.log("pedestrian draw and update worked");
    });

    checkCollisions();

    // Add something to Update the UI (score and lives) here:
    // uiFuction(); (art.js)

    // Debug shi:

    //console.log("Score:" + gameScore + " Lives:" + lives + " PlayerXY:" + "(" + player.x + "," + player.y + ")" + " Speed:" + gameSpeed);
  }

  requestAnimationFrame(animate);

}

// Start the game
// animate(); // don't call this here, it calls in start_menu.js when the user presses Enter to start the game.
drawStartMenu();
