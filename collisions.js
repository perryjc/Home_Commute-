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

function handleHit(index) {
    console.log("CRASH!");

    // Remove the dead car
    enemies.splice(index, 1);

    // Take away a life
    lives -= 1;

    // slowdown the game after crash (broken)
    gameSpeed = 3; 

    // Check for Game Over
    if (lives <= 0) {
        gameOver();
    }
}