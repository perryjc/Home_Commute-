const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

//Defineing Objects
//car is the enemy
const LANES = [150, 250, 450, 550]; // Y-coordinates for the 4 lanes in your art
let gameRunning = true;
let gameSpeed = 3;
let gameScore = 0;
let lives = 4;

function gameOver() {
    gameRunning = false;
    alert("GAME OVER. SCORE:" + gameScore);
    location.reload(); // Restarts the game
}

// "p" to pause
function handleKeyDown(e){
    if(e.key === 'p' || e.key === 'P') {
        gameRunning = !gameRunning;
    }
}

document.addEventListener('keydown', handleKeyDown);