
 var Block = require('./Block.js');
var canvas = document.getElementById('game');
var context = canvas.getContext('2d');
canvas.width = window.innerWidth/2;
canvas.height = window.innerHeight;
var isGameOver = false;
var worm0 = new Block(160, 50, 13, 13);
var worm1 = new Block(145, 50, 13, 13);
var worm2 = new Block(130, 50, 13, 13);
var worm3 = new Block(115, 50, 13, 13);
var worm4 = new Block(100, 50, 13, 13);
var worm5 = new Block(85, 50, 13, 13);
var worm6 = new Block(60, 50, 13, 13);
var worm7 = new Block(45, 50, 13, 13);
var worm8 = new Block(30, 50, 13, 13);
var worm9 = new Block(15, 50, 13, 13);
var blockArray = [worm0, worm1, worm2, worm3, worm4, worm5, worm6, worm7, worm8, worm9];

function gameLoop() {
  // check if the thingy got to the edge of the canvas, and if so
  // then set isGameOver to true.
  // if(isGameOver) {
  //   // display final score and replay button
  // } else {
  //   requestAnimationFrame(gameLoop);
  // }
  context.clearRect(0, 0, canvas.width, canvas.height);
  blockArray.forEach(block => {
    block.move().draw(context);
  })
  requestAnimationFrame(gameLoop);
}



window.requestAnimationFrame(gameLoop);