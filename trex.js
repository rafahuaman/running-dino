const fs = require("fs");

const rex1 = fs.readFileSync("./rex1.txt").toString();
const rex2 = fs.readFileSync("./rex2.txt").toString();
const T_REX_HEIGHT = 19;
const SPRITES = [rex1, rex2];

function clearDino() {
  for (let i = 0; i < T_REX_HEIGHT; i++) {
    if (i !== 0) process.stdout.moveCursor(0, -1);
    process.stdout.clearLine(1);
  }
}

function dinoRun() {
  let currentSpriteIndex = 0;
  process.stdout.write("\r" + SPRITES[currentSpriteIndex]);

  return setInterval(function () {
    clearDino();
    process.stdout.write("\r" + SPRITES[currentSpriteIndex++]);
    currentSpriteIndex = currentSpriteIndex % SPRITES.length;
  }, 200);
}

dinoRun();
