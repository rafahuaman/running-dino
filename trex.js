const fs = require("fs");

const rex1 = fs.readFileSync("./rex1.txt").toString();
const rex2 = fs.readFileSync("./rex2.txt").toString();
const T_REX_HEIGHT = 19;

function clearDino() {
  for (let i = 0; i < T_REX_HEIGHT; i++) {
    if (i !== 0) process.stdout.moveCursor(0, -1);
    process.stdout.clearLine(1);
  }
}

function dinoRun() {
  const sprites = [rex1, rex2];
  let currentSpriteIndex = 0;

  process.stdout.write("\r" + rex1);

  return setInterval(function () {
    clearDino();
    process.stdout.write("\r" + sprites[currentSpriteIndex++]);
    currentSpriteIndex = currentSpriteIndex % sprites.length;
  }, 200);
}

dinoRun();
