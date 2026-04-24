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
window.addEventListener('keydown', (e) => {
    if (e.key === "ArrowUp") player.moveUp();
    if (e.key === "ArrowDown") player.moveDown();
});