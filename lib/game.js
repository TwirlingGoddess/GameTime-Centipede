import Bullet from './Bullet.js';
import index from './index.js';
import Segments from './Segments.js';
import Centipede from './Centipede.js';
import Player from './Player.js';
import Mushroom from './Mushroom.js';

class Game {
  constructor(canvas, context) {
    this.canvas = canvas;
    this.context = context;
    this.gameLoop = this.gameLoop.bind(this);
    this.segArray = [ new Segments, new Segments, new Segments, new Segments];
    this.mushArray = [ new Mushroom, new Mushroom, new Mushroom, new Mushroom]
  }

  gameLoop(segment) {
  // check if the thingy got to the edge of the canvas, and if so
  // then set isGameOver to true.
  // if(isGameOver) {
  //   // display final score and replay button
  // } else {
  //   requestAnimationFrame(gameLoop);
  // }
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.mushArray.forEach(mushrooms => {
      mushrooms.draw(this.context, 'rgba(300, 100, 10, 10)');
    })
    this.segArray.forEach(segment => {
      segment.draw(this.context, 'rgba(100, 300, 10, 10)');
      console.log('hi')
      segment.move();
    })

    this.
    window.requestAnimationFrame(this.gameLoop);
  }

  
}


export default Game;

