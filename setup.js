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

//if (!gameRunning && gameScore <= 5)

// "p" to pause
// "r" to reset (only if game is paused)
function handleKeyDown(e){
    if(e.key === 'p' || e.key === 'P') {
        gameRunning = !gameRunning;
        drawPauseBackground(); // Pause_menu.js
    }
    if(e.key === 'r' || e.key === 'R') {
        if(!gameRunning) {
            location.reload();
        } else {
            console.log("Pause game first");
        }
    }

}

document.addEventListener('keydown', handleKeyDown);