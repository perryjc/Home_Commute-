const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

//Defineing Objects
//car is the enemy
const LANES = [100, 250, 450, 650]; // Y-coordinates for the Lanes
//random pedestrian lane
let min = 10;
let max = 1270;
const NumberOfLanes = 100
const PEDESTRIANLANES = Array.from({ length: NumberOfLanes }, () => 
    Math.floor(Math.random() * (max - min + 1)) + min
);

let gameRunning = false;
let duiActive = false;
let duiClicks = 0;
let duiTimer = 0;
let duiSeconds = 0;
let duiRemaining = 0;
let gameSpeed = 3;
let gameScore = 0;
let soberclicks = 0;
let savedHighScore = localStorage.getItem('newHighScore') || '0';
let gameHighScore = parseInt(savedHighScore); // High score As iniger
let lives = 4;
let rightPressed = false; // smooth movement
let leftPressed = false;
let explosionTimer = 0; 
