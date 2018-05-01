var Block = require('./Block.js');
var canvas = document.getElementById('game');
var context = canvas.getContext('2d');
var isGameOver = false;
var larry = new Block(50, 50, 10, 10);
var george = new Block(75, 75, 10, 10);
var blockArray = [larry, george];

function gameLoop() {
  // check if the thingy got to the edge of the canvas, and if so
  // then set isGameOver to true.
  if(isGameOver) {
    // display final score and replay button
  } else {
    requestAnimationFrame(gameLoop);
  }
  context.clearRect(0, 0, canvas.width, canvas.height);
  blockArray.forEach(block => {
    block.move().draw(context);
  })
  requestAnimationFrame(gameLoop);
}

window.requestAnimationFrame(gameLoop);