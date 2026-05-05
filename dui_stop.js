
function duiTime() {
    console.log("dui stop");
    duiActive = true;
    drawDuiScreen();
}

function drawDuiScreen() {
    gameRunning = !gameRunning;
    ctx.fillStyle = '#000000';
    ctx.fillRect(240, 100, 800, 550);
    // Game Over text
    ctx.font = "bold 95px Arial";
    ctx.textAlign = 'center';
    ctx.fillStyle = "#f31212";
    ctx.fillText("DUI CHECK", canvas.width / 2, 200);

    // button:
    ctx.font = "30px Arial";
    ctx.fillStyle = "#f31212";
    ctx.fillRect(800, 400, 100, 50)

    // High score:
    // ctx.font = "30px Arial";
    // ctx.fillStyle = "#f31212";
    // ctx.fillText("High Score: " + gameHighScore, canvas.width / 2, 420);

    // Start over message:
    ctx.font = "bold 50px Arial";
    ctx.fillStyle = "#f31212";
    ctx.fillText("Press R to Start Over", canvas.width / 2, 630);

    duiLoop();
}

function duiLoop(){
    if (duiActive) {
        // dui loop
    }

    requestAnimationFrame(duiLoop);
}