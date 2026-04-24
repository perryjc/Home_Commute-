function gameOver(){
    gameRunning = !gameRunning;
    if (gameScore >= gameHighScore) {
        localStorage.setItem('newHighScore', gameScore);
    } else {
        console.log("did not score higher")
    }
    ctx.fillStyle = '#000000';
    ctx.fillRect(320, 150, 640, 400);
    // Game Over text
    ctx.font = "95px Arial";
    ctx.textAlign = 'center';
    ctx.fillStyle = "#f31212";
    ctx.fillText("GAME OVER", canvas.width / 2, 250);

    // score:
    ctx.font = "30px Arial";
    ctx.fillStyle = "#f31212";
    ctx.fillText("Score: " + gameScore, canvas.width / 2, 350);

    // High score:
    ctx.font = "30px Arial";
    ctx.fillStyle = "#f31212";
    ctx.fillText("High Score: " + gameHighScore, canvas.width / 2, 400);

    // Start over message:
    ctx.font = "50px Arial";
    ctx.fillStyle = "#f31212";
    ctx.fillText("Press R to Start Over", canvas.width / 2, 530);
}