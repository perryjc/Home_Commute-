// just grabbed from the astroid game
let playerTimer = 0;
let carTimer = 0;
let gameRunning = true;

function animate() {
  if(gameRunning){
    playerTimer += 1;
    carTimer += 1;

    // Update positions
    // orbitShips();
    // moveJunk()
    
    // Draw everything
    drawBackground();
    //drawShipsAndJunk();

    //spawn new ships and junk
    if(carTimer == 200){
      addNewShip();
      shipTimer = 0;
    }

    if(junkTimer == 100){
      addNewJunk();
      junkTimer = 0;
    }

    //check collisions
    checkCollisions()
  }
  requestAnimationFrame(animate);
}

// Start the game
animate();
