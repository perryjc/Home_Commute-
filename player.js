//move the player
function keyDownHandler(e) {
  if (e.key === "Down" || e.key === "ArrowDown") {
    downPressed = true;
  } else if (e.key === "Up" || e.key === "ArrowUp") {
    upPressed = true;
  }
}

function keyUpHandler(e) {
  if (e.key === "Down" || e.key === "ArrowDown") {
    downPressed = false;
  } else if (e.key === "Up" || e.key === "ArrowUp") {
    downPressed = false;
  }
}

document.addEventListener("keydown", keyDownHandler);
document.addEventListener("keyup", keyUpHandler);

//the player
            ctx.fillStyle = "green"
            ctx.fillRect(100, 600,70,30);

            ctx.fillStyle = "green"
            ctx.fillRect(90, 595,40,40);

            ctx.fillStyle = "green"
            ctx.fillRect(170, 595,40,40);