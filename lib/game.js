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
    this.player = new Player(350, 600);
    this.segments = new Segments; 
    this.mushrooms = new Mushroom;
    this.bullets = new Bullet;
  }

  bodyParts() {
    for (let i = 0; i < 10; i++) {
      this.centipede.segArray[i] = new Segments(i * 25, this.y , this.width, this.height);
      this.centipede.segArray.push(this.segments);
    }
  }

  createMushrooms() {
    for(let i = 0; i < 35; i++) {
      this.mushrooms.mushArray.push(new Mushroom)
    }
  }
  createBullets() {
    for(let i = 0; i < 3; i++) { 
      this.bullets.bulletClipArray.push(new Bullet((this.player.x + (this.player.width/4)), this.player.y));
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
      segment.move();
      this.playerCollide();
    })
    this.mushrooms.mushArray.forEach(mushroom => {
      mushroom.draw(this.context, 'rgba(300, 100, 10, 10)');
    })
    this.bullets.bulletClipArray.forEach(bullet => {
      bullet.draw(this.context, 'rgba(255, 280, 0, 1)');
      bullet.move();
    })
    this.player.draw(this.context, 'rgba(255, 0, 0, 1)');
    window.requestAnimationFrame(this.gameLoop);
  }

   move(direction) {
    if(direction === 'LEFT') {
      this.player.x -= this.player.dx;
    }

    if (direction === 'UP') {
      this.player.y -= this.player.dy;
    }

    if (direction === 'RIGHT') {
      this.player.x += this.player.dx;
    }

    if (direction === 'DOWN') {
      this.player.y += this.player.dy;
    }
  }

  playerCollide() {
    for(let i = 0; i < this.centipede.segArray.length; i++) {
      if ((this.centipede.segArray[i].x >= this.player.x) && (this.centipede.segArray[i].x <= this.player.x + this.player.width) && (this.centipede.segArray[i].y >= this.player.y) && (this.centipede.segArray[i].y <= (this.player.y + this.player.height))) {
        // window.location.reload();
        // text('you\'ve lost honey');
        this.restartGame();
      }
    }
  }

  restartGame() {
    alert('you just lost a life, buddy');
    this.bodyParts();
    this.player = new Player(350, 600);
  }
}


export default Game;

