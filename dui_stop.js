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
    // Game Over text
    ctx.font = "bold 95px Arial";
    ctx.textAlign = 'center';
    ctx.fillStyle = "#f31212";
    ctx.fillText("DUI CHECK", canvas.width / 2, 200);

    // button:
    // ctx.font = "30px Arial";
    // ctx.fillStyle = "#f31212";
    // ctx.fillRect(800, 400, 100, 50);

    // Click counter
    ctx.font = "bold 50px Arial";
    ctx.fillStyle = "#f31212";
    ctx.fillText(duiClicks, 700, 450);

    // timer text
    ctx.font = "bold 50px Arial";
    ctx.fillStyle = "#f31212";
    ctx.fillText("TIME LEFT", 400, 350);

    // timer
    ctx.font = "bold 50px Arial";
    ctx.fillStyle = "#f31212";
    ctx.fillText("0:0" + duiRemaining, 400, 450);

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
            quickTimeActive = false
            // Put in function to see win or loose
        } else {
            quickTimeActive = true
            // keep going
        }
    }

    requestAnimationFrame(duiLoop);
}