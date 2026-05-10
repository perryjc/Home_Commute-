// prevent buttons from working during dui stop bisides "space"
function duiTime() {
    console.log("dui stop");
    duiRemaining = 5; // How long player has to finish (sec)
    duiActive = true;
    quickTimeActive = true;
    gameRunning = !gameRunning;
    duiLoop();
}

function drawDuiScreen() {
    ctx.fillStyle = '#000000';
    ctx.fillRect(240, 100, 800, 550);
    // Dui check text
    ctx.font = "bold 95px Arial";
    ctx.textAlign = 'center';
    ctx.fillStyle = "#f31212";
    ctx.fillText("! DUI CHECK !", canvas.width / 2, 200);

    // Spam space text
    ctx.font = "bold 70px Arial";
    ctx.textAlign = 'center';
    ctx.fillStyle = "#f31212";
    ctx.fillText("CLICK SPACEBAR", canvas.width / 2, 280);

    // button:
    // ctx.font = "30px Arial";
    // ctx.fillStyle = "#f31212";
    // ctx.fillRect(800, 400, 100, 50);
    
    // Click counter text
    ctx.font = "bold 50px Arial";
    ctx.fillStyle = "#f31212";
    ctx.fillText("CLICKS:", 850, 450);

    // Click counter
    ctx.font = "bold 50px Arial";
    ctx.fillStyle = "#f31212";
    ctx.fillText(duiClicks, 850, 500);

    // timer text
    ctx.font = "bold 50px Arial";
    ctx.fillStyle = "#f31212";
    ctx.fillText("TIME LEFT:", 420, 450);

    // timer
    ctx.font = "bold 50px Arial";
    ctx.fillStyle = "#f31212";
    ctx.fillText("0:0" + duiRemaining, 420, 500);

    // High score:
    // ctx.font = "30px Arial";
    // ctx.fillStyle = "#f31212";
    // ctx.fillText("High Score: " + gameHighScore, canvas.width / 2, 420);

    // Start over message:
    ctx.font = "bold 50px Arial";
    ctx.fillStyle = "#f31212";
    ctx.fillText("Press R to Start Over", canvas.width / 2, 630);

}

function duiLoop(){
    if (duiActive) {
        duiTimer += 1;

        ctx.clearRect(240, 100, 800, 550);
        drawDuiScreen();

        if (duiTimer >= 60) {
            duiRemaining -= 1;
            duiTimer = 0;
        }

        if (duiRemaining <= 0) {
            quickTimeActive = false;
            duiActive = false;
            if (duiClicks >= 25) {
                gameRunning = true;
            } else {
                gameRunning = true;
                ctx.clearRect(240, 100, 800, 550);
                duiGameOver();
            }
            // Put in function to see win or loose
        } else {
            quickTimeActive = true
            // keep going
        }
    }

    requestAnimationFrame(duiLoop);
}

function duiGameOver(){
    gameRunning = !gameRunning;
    gameOverHappened = true;
    ctx.fillStyle = '#000000';
    ctx.fillRect(320, 150, 640, 400);
    ctx.font = "bold 30px Arial";
    ctx.textAlign = 'center';
    ctx.fillStyle = "#f31212";
    ctx.fillText("License Suspension :(", canvas.width / 2, 300);
    // Game Over text
    ctx.font = "bold 95px Arial";
    ctx.textAlign = 'center';
    ctx.fillStyle = "#f31212";
    ctx.fillText("GAME OVER", canvas.width / 2, 250);

    // score:
    ctx.font = "30px Arial";
    ctx.fillStyle = "#f31212";
    ctx.fillText("Score: " + gameScore, canvas.width / 2, 400);

    // High score:
    ctx.font = "30px Arial";
    ctx.fillStyle = "#f31212";
    ctx.fillText("High Score: " + gameHighScore, canvas.width / 2, 440);

    // Start over message:
    ctx.font = "bold 50px Arial";
    ctx.fillStyle = "#f31212";
    ctx.fillText("Press R to Start Over", canvas.width / 2, 530);
}