const Bullet = require('./Bullet.js');
const Index = require('./index.js');
const Segments = require('./Segments.js');
const Centipede = require('./Centipede.js');
const Player = require('./Player.js');

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
    this.segArray.forEach(segment => {
      segment.move().draw(this.context, 'rgba(100, 200, 10, 10)');
    })
    requestAnimationFrame(this.gameLoop);
    }

  move(x, y) {
    this.x += this.dx;
    if (this.x > canvas.width || this.x < 0) {
      this.dx = -this.dx;
      drop();
    }
  }

  draw(context, color) {
    context.fillRect(this.x, this.y, this.width, this.height);
    context.fillStyle = color;
    return this;
  }

  drop() {
    this.y = this.y + 15;
    if (this.y > canvas.height) {
      this.y = 12;
      return this;
    }
  }
}


// window.requestAnimationFrame(this.gameLoop);
module.exports = Game;

