let x = 200;
let y = 400;
let KeyIsPressed = false;

let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

// Setup the canvvas and the graphic context
requestAnimationFrame(draw);
function draw() {
  // UPDATE ELEMENT ON CANVAS

  // Animate if any key is held down
  if (KeyIsPressed) {
    if (KeyDown == LEFT_ARROW) {
      x--;
    } else if (KeyDown == RIGHT_ARROW) {
      x++;
    }
    if (Keydown == UP_ARROW) {
      y--;
    } else if (KeyDown == DOWN_ARROW) {
      y++;
    }
  }

  // Draw Canvas
  ctx.fillStyle = "white";
  ctx.fillRect(x, y, 50, 50);

  ctx.fillStyle = "blue";
  ctx.fillRect(x, 50, 50, 50);

  ctx.fillStyle = "green";
  ctx.fillRect(y, 50, 50, 50);

  // REQUEST ANIMATION FRAME
  requestAnimationFrame(draw);
}

document.addEventListener("KeyDown", keydownHandler);
document.addEventListener("KeyUp", KeyUpHandler);

function keydownHandler() {
  KeyIsPressed = true;
}
function KeyUpHandler() {
  KeyIsPressed = false;
}
