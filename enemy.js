const enemies = [];
let carTimer = 0;

// faster over time
let SpeedTimer = 0


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

//faster over time (If Statements)
while (true){ //make this stop and reset when die
    if (SpeedTimer => 60){
        Enemy.speed = Enemy.speed + 3;
        SpeedTimer = 0;
    }
    else if (SpeedTimer <= 60){
        SpeedTimer = SpeedTimer + 3;
    }
}

function spawnTraffic() {
    const randomLane = Math.floor(Math.random() * LANES.length);
    // Lanes 0 & 1 move left (-1), Lanes 2 & 3 move right (1)
    const direction = (randomLane < 2) ? -1 : 1; 
    const speed = Math.random() * 2 + gameSpeed;
    
    enemies.push(new Enemy(randomLane, speed, direction));
}