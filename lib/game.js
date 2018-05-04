import Bullet from './Bullet.js';
import index from './index.js';
import Segments from './Segments.js';
import Centipede from './Centipede.js';
import Player from './Player.js';

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
      segment.draw(this.context, 'rgba(100, 200, 10, 10)').move();
    })
    requestAnimationFrame(this.gameLoop);
  }

  
}


// window.requestAnimationFrame(this.gameLoop);
export default Game;

