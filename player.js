class Player {
    constructor() {
        this.laneIndex = 1; // Start in the second lane
        this.x = 600; // Place holder, add side to side movement
        this.y = LANES[this.laneIndex];
        this.width = 60;
        this.height = 30;
        this.color = "green";
    }

    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
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
    if (e.key === "ArrowUp") player.moveUp();
    if (e.key === "ArrowDown") player.moveDown();
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
});