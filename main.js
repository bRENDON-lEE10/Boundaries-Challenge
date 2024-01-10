// Canvas Sandbox

// Canvas Setup
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

// Global Variables
let player = {
  x: 400,
  y: 300,
  w: 25,
  h: 25,
  speed: 5,
  color: "blue",
};

let player2 = {
  x: 400,
  y: 500,
  w: 25,
  h: 25,
  speed: 5,
  color: "green",
};

let wPressed = false;
let aPressed = false;
let sPressed = false;
let dPressed = false;

let leftPressed = false;
let rightPressed = false;
let upPressed = false;
let downPressed = false;

// Draw Functions
window.addEventListener("load", draw);

function draw() {
  // Logic
  if (rightPressed) {
    player.x += player.speed;
  } else if (leftPressed) {
    player.x += -player.speed;
  } else if (upPressed) {
    player.y += -player.speed;
  } else if (downPressed) {
    player.y += player.speed;
  }

  if (dPressed) {
    player.x += player.speed;
  } else if (aPressed) {
    player.x += -player.speed;
  } else if (wPressed) {
    player.y += -player.speed;
  } else if (downPressed) {
    player.y += player.speed;
  }

  // Drawing

  // Backround
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, cnv.width, cnv.height);

  // Draw Player
  ctx.fillStyle = player.color;
  ctx.fillRect(player.x, player.y, player.w, player.h);

  ctx.fillStyle = player2.color;
  ctx.fillRect(player2.x, player2.y, player2.w, player2.h);
  // Animation Loop
  requestAnimationFrame(draw);
}

// Event Stuff
document.addEventListener("keydown", keydownHandler);

function keydownHandler(e) {
  console.log(e.code);
  if (e.code === "ArrowLeft") {
    leftPressed = true;
  } else if (e.code === "ArrowRight") {
    rightPressed = true;
  } else if (e.code === "ArrowUp") {
    upPressed = true;
  } else if (e.code === "ArrowDown") {
    downPressed = true;
  }

  document.addEventListener("keydown", keydownHandler);
  function keydownHandler(e) {
    console.log(e.code);
    if (e.code === "keya") {
      aPressed = true;
    } else if (e.code === "keyd") {
      dPressed = true;
    } else if (e.code === "keyw") {
      wPressed = true;
    } else if (e.code === "keys") {
      sPressed = true;
    }
  }
}

document.addEventListener("keyup", keyupHandler);

function keyupHandler(e) {
  console.log(e.code);
  if (e.code === "ArrowLeft") {
    leftPressed = false;
  } else if (e.code === "ArrowRight") {
    rightPressed = false;
  } else if (e.code === "ArrowUp") {
    upPressed = false;
  } else if (e.code === "ArrowDown") {
    downPressed = false;
  }

  document.addEventListener("keyup", keyupHandler);
  function keyupHandler(e) {
    if (e.code === "keya") {
      aPressed = false;
    } else if (e.code === "keyd") {
      dPressed = false;
    } else if (e.code === "keyw") {
      wPressed = false;
    } else if (e.code === "keys") {
      sPressed = false;
    }
  }
}

