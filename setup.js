const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

//Defineing Objects
//car is the enemy
const LANES = [100, 250, 450, 650]; // Y-coordinates for the Lanes
const PEDESTRIANLANES = [600, 800, 1000, 1200] // x coords for lanes
let gameRunning = true;
let gameSpeed = 3;
let gameScore = 0;
let savedHighScore = localStorage.getItem('newHighScore') || '0';
let gameHighScore = parseInt(savedHighScore); // High score As iniger
let lives = 4;
let rightPressed = false; // smooth movement
let leftPressed = false;

//function gameOver() {
//    gameRunning = false;
//    alert("GAME OVER. SCORE:" + gameScore);
//    location.reload(); // Restarts the game
//}

//if (!gameRunning && gameScore <= 5)
