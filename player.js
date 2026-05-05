class Player {
    constructor() {
        this.laneIndex = 1; // Start in the second lane
        this.x = 600;
        this.y = LANES[this.laneIndex];
        this.width = 60;
        this.height = 30;
        this.color = "green";
    }

    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
        /* if (rightPressed && this.x < canvas.width - this.width) {
            playerX += 7;
        } else if (leftPressed && this.x > 0) {
            playerX -= 7;
        } */
    }

    moveUp() {
        if (this.laneIndex > 0) {
            this.laneIndex--;
            this.y = LANES[this.laneIndex];
        }
    }

    moveDown() {
        if (this.laneIndex < LANES.length - 1) {
            this.laneIndex++;
            this.y = LANES[this.laneIndex];
        }
    }
}

const player = new Player();



// Input handling
// "p" to pause
// "r" to reset (only if game is paused)
window.addEventListener('keydown', (e) => {
    if (e.key === "ArrowUp") {
        if (gameRunning) player.moveUp();
        upPressed = true;
    }
    if (e.key === "ArrowDown") {
        if (gameRunning) player.moveDown();
        downPressed = true;
    }
    // prevent scrooling
    if (["ArrowUp", "ArrowDown", "Space"].includes(e.key)) {
        e.preventDefault();
    }
    if(e.key === 'p' || e.key === 'P') {
        if (lives <= 0) {
            console.log("you dead twin");
        } else {
            gameRunning = !gameRunning;
            drawPauseBackground(); // Pause_menu.js
        }
    }
    if(e.key === 'r' || e.key === 'R') {
        if(!gameRunning) {
            location.reload();
        } else {
            console.log("Pause game first");
        }
    }
    // Testing State based movement (smooth)
    if (e.key === "ArrowLeft")  leftPressed = true;
    if (e.key === "ArrowRight") rightPressed = true;
});
// detects when arrows are let go
window.addEventListener('keyup', (e) => {
    if (e.key === "ArrowLeft")  leftPressed = false;
    if (e.key === "ArrowRight") rightPressed = false;
    if (e.key === "ArrowUp") upPressed = false;
    if (e.key === "ArrowDown") downPressed = false;
});