const enemies = [];
let carTimer = 0;
let pedestrianTimer = 0;

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
        //random color
        const randomCarColor = Math.floor(Math.random()*3)+1; //random number 1-3
        if (randomCarColor == 1){
            this.color = "orange";
        }
        else if (randomCarColor == 2){
            this.color = "#1b2192";
        }
        else if (randomCarColor == 3){
            this.color = "rgb(144, 22, 22)";
        }
    }

    update() {
        this.x += this.speed * this.direction;
    }

    draw(ctx) {
        ctx.fillStyle = this.color;
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

class Pedestrian {
    constructor(lane, speed, direction){
        this.width = 30;
        this.height = 40;
        this.lane = lane;
        this.x = PEDESTRIANLANES[lane];
        this.speed = speed;
        this.direction = direction; // 1 for right, -1 for left

        // Spawn off-screen based on direction
        this.y = (direction === 1) ? -this.width : canvas.width + this.width;
        //random color
        const randomColor = Math.floor(Math.random()*3)+1; //random number 1-3
        if (randomColor == 1){
            this.color = "#6e4e13";
        }
        else if (randomColor == 2){
            this.color = "#352609";
        }
        else if (randomColor == 3){
            this.color = "#f6e7ca";
        }
    }
    update() {
        this.y += this.speed * this.direction;
    }

    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}

function SpawnPedestrian(){
    const randomLaneP = Math.floor(Math.random() * PEDESTRIANLANES.length);
    const direction = (randomLaneP < 2) ? -1 : 1; 
    const speed = Math.random() * 2 + gameSpeed;
    
    enemies.push(new Pedestrian(randomLaneP, speed, direction));
    console.log("pedestrian spawned")
}