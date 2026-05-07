function checkCollisions() {
    for (let i = 0; i < enemies.length; i++) {
        let car = enemies[i];

        // We check if the player and the car overlap on both X and Y axes
        // Logic: Is the player's left side less than car's right side? 
        // AND is player's right side greater than car's left side? (etc.)
        if (player.x < car.x + car.width &&
            player.x + player.width > car.x &&
            player.y < car.y + car.height &&
            player.y + player.height > car.y) {
            
            // If we are here, a collision happened!
            handleHit(i); 
        }
    }
}

function Blood() {
    ctx.fillStyle = '#8e0a0a';
    ctx.beginPath();
    ctx.arc(player.x + player.width / 2, player.y + player.height / 2, 50, 0, Math.PI * 2);
    ctx.fill();
    console.log("blood spawned");
}

function handleHit(index) {
     let hitEnemy = enemies[index];
     if (hitEnemy.type === "pedestrian") {
        console.log("You hit a pedestrian!");
        Blood();
        blood = true
     }



    console.log("CRASH!");

    // Remove the dead car
    enemies.splice(index, 1);

    // Take away a life
    lives -= 1;

    // bump back
    player.x -= 20;
    
    explosionTimer = 50; 

    // slowdown the game after crash
    gameSpeed = gameSpeed / 3;

    // Check for Game Over
    if (lives <= 0) {
        gameOver();
    }
}