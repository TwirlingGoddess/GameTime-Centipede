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
    this.centipede = new Centipede;
    this.player = new Player;
    this.segments = new Segments; 
    this.mushrooms = new Mushroom;
  }

  bodyParts() {
    for (let i = 0; i < 10; i++) {
      this.centipede.segArray[i] = new Segments(i * 25, this.y , this.width, this.height);
      this.centipede.segArray.push(this.segments);
    }
  }

  createMushrooms() {
    for(let i = 0; i < 35; i++) {
      // if (this.mushrooms.mushArray.length < 1) {
        this.mushrooms.mushArray.push(new Mushroom)
      // }
    }
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
    this.centipede.segArray.forEach(segment => {
      segment.draw(this.context, 'rgba(100, 300, 10, 10)');
      console.log('hi')
      segment.move();
    })
    this.mushrooms.mushArray.forEach(mushroom => {
      mushroom.draw(this.context, 'rgba(300, 100, 10, 10)');
    })
    this.player.draw(this.context, 'rgba(255, 0, 0, 1)');
    window.requestAnimationFrame(this.gameLoop);
  }
   
  
}


export default Game;

