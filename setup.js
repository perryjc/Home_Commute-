const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

//Defineing Objects
//car is the enemy
const LANES = [100, 250, 450, 650]; // Y-coordinates for the Lanes
const PEDESTRIANLANES = [800] // x coords for lanes
let gameRunning = true;
let gameSpeed = 3;
let gameScore = 0;
let savedHighScore = localStorage.getItem('newHighScore') || '0';
let gameHighScore = parseInt(savedHighScore); // High score As iniger
let lives = 4;

//function gameOver() {
//    gameRunning = false;
//    alert("GAME OVER. SCORE:" + gameScore);
//    location.reload(); // Restarts the game
//}

//if (!gameRunning && gameScore <= 5)

// "p" to pause
// "r" to reset (only if game is paused)
function handleKeyDown(e){
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

}

document.addEventListener('keydown', handleKeyDown);