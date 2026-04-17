const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

//Defineing Objects
//car is the enemy
const cars = [];

const player = {
  type: "Fiat",
  model: "500",
  color: "white"
};

function addNewCar(){
    cars.push(
        {
            x: 800,
            y: Math.random()*800,
            dx: -1,
            dy: Math.random()*2-1,
            size: Math.random()*2 + 2,
            alive:true
        }
    )
}

function moveCars(){
    cars.forEach(j => {
        j.x += j.dx;
        j.y += j.dy;
    });
}