function gameOver(){
    gameRunning = !gameRunning;
    gameOverHappened = true;
    ctx.fillStyle = '#000000';
    ctx.fillRect(320, 150, 640, 400);
    if (gameScore >= gameHighScore) {
        localStorage.setItem('newHighScore', gameScore);
        savedHighScore = localStorage.getItem('newHighScore')
        gameHighScore = parseInt(savedHighScore);
        // Draw New High score:
        ctx.font = "bold 30px Arial";
        ctx.textAlign = 'center';
        ctx.fillStyle = "#f31212";
        ctx.fillText("New High Score!", canvas.width / 2, 300);
    } else {
        console.log("did not score higher")
    }
    // Game Over text
    ctx.font = "bold 95px Arial";
    ctx.textAlign = 'center';
    ctx.fillStyle = "#f31212";
    ctx.fillText("GAME OVER", canvas.width / 2, 250);

    // score:
    ctx.font = "30px Arial";
    ctx.fillStyle = "#f31212";
    ctx.fillText("Score: " + gameScore, canvas.width / 2, 380);

    // High score:
    ctx.font = "30px Arial";
    ctx.fillStyle = "#f31212";
    ctx.fillText("High Score: " + gameHighScore, canvas.width / 2, 420);

    // Start over message:
    ctx.font = "bold 50px Arial";
    ctx.fillStyle = "#f31212";
    ctx.fillText("Press R to Start Over", canvas.width / 2, 530);
}