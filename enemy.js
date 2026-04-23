const enemies = [];
let carTimer = 0;

class Enemy {
    constructor(lane, speed, direction) {
        this.width = 60;
        this.height = 30;
        this.lane = lane;
        this.y = LANES[lane];
        this.speed = speed;
        this.direction = direction; // 1 for right, -1 for left
        
        // Spawn off-screen based on direction
        this.x = (direction === 1) ? -this.width : canvas.width + this.width;
    }

    update() {
        this.x += this.speed * this.direction;
    }

    draw(ctx) {
        ctx.fillStyle = "orange";
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}

function spawnTraffic() {
    const randomLane = Math.floor(Math.random() * LANES.length);
    // Lanes 0 & 1 move left (-1), Lanes 2 & 3 move right (1)
    const direction = (randomLane < 2) ? -1 : 1; 
    const speed = Math.random() * 2 + gameSpeed;
    
    enemies.push(new Enemy(randomLane, speed, direction));
}