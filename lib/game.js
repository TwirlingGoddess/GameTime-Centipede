const Bullet = require('./Bullet.js');
const Index = require('./index.js');
const Segments = require('./Segments.js');
const Centipede = require('./Centipede.js');

class Game {
  constructor(canvas, context) {
    this.canvas = canvas;
    this.context = context;
    this.gameLoop = this.gameLoop.bind(this);
    this.segArray = [new Segments, new Segments];
  }



  gameLoop() {
  // check if the thingy got to the edge of the canvas, and if so
  // then set isGameOver to true.
  // if(isGameOver) {
  //   // display final score and replay button
  // } else {
  //   requestAnimationFrame(gameLoop);
  // }
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.segArray.forEach(insect => {
      insect.move().draw(this.context, 'rgba(100, 200, 10, 10)');
    })
    requestAnimationFrame(this.gameLoop);
    }

}

module.exports = Game;
// window.requestAnimationFrame(this.gameLoop);