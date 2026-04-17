//move the player

let y = 0;
let vy = 7;
let gravity = 1;

function move(){
    ctx.clearRect(0, 0, 1500,1500);

    if(y > 550 || y < 0){
        vy = vy *-1;
    }
        //the player
            ctx.fillStyle = "green"
            ctx.fillRect(100, 600,70,30);

            ctx.fillStyle = "green"
            ctx.fillRect(90, 595,40,40);

            ctx.fillStyle = "green"
            ctx.fillRect(170, 595,40,40);
    requestAnimationFrame(move);
}

move();

//event handler
function handleKeydown(e){
    console.log(e.key);
    if(e.key == "ArrowDown"){
        y = y + vy;
    }
    else if(e.key == "ArrowUp"){
        y = y - vy;
    }
}
document.addEventListener('keydown', handleKeydown);