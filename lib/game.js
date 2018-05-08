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
    this.score = 0;
    this.lives = 3;
  }

  bodyParts() {
    for (let i = 0; i < 10; i++) {
      this.centipede.segArray[i] = new Segments(i * 25, this.y , this.width, this.height);
      this.centipede.segArray.push(this.segments);
    }
  }

  levelUp() {
    for (let i = 0; i < 20; i++) {
      this.centipede.segArray[i] = new Segments(i * 25, this.y , this.width, this.height);
      this.centipede.segArray.push(this.segments);
    }
  }

  levelOut() {
    for (let i = 0; i < 40; i++) {
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
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.centipede.segArray.forEach(segment => {
      segment.draw(this.context, 'rgba(100, 300, 10, 10)', 'rgb(112, 12, 252)');
      segment.move();
      this.playerCollide();
      this.bulletCollide();
    })
    this.mushrooms.mushArray.forEach(mushroom => {
      mushroom.draw(this.context, 'rgba(300, 100, 10, 10)', 'rgb(240, 252, 12)');
    })
    this.bullets.bulletClipArray.forEach(bullet => {
      bullet.draw(this.context, 'rgba(255, 280, 0, 1)', 'rgb(253,14,205)');
      bullet.move();
    })
    this.player.draw(this.context, 'rgba(255, 0, 0, 1)', 'rgba(100, 300, 10, 10)');
    window.requestAnimationFrame(this.gameLoop);
  }

   move(direction) {
    if(direction === 'LEFT' && this.player.x > 0) {
      this.player.x -= this.player.dx;
    }
    if (direction === 'UP' && this.player.y > 0) {
      this.player.y -= this.player.dy;
    }
    if (direction === 'RIGHT' && this.player.x < 665) {
      this.player.x += this.player.dx;
    }
    if (direction === 'DOWN' && this.player.y < 665) {
      this.player.y += this.player.dy;
    }
  }

  playerCollide() {
    for(let i = 0; i < this.centipede.segArray.length; i++) {
      if ((this.centipede.segArray[i].x >= this.player.x) && (this.centipede.segArray[i].x <= this.player.x + this.player.width) && (this.centipede.segArray[i].y >= this.player.y) && (this.centipede.segArray[i].y <= (this.player.y + this.player.height))) {
        this.restartGame();
        alert('you just lost a life, buddy');
      }
    }
  }

  restartGame() {
    this.bodyParts();
    this.player = new Player(350, 600);
    this.updateLives();
  }

  bulletCollide() {
    for(let bulletCounter = 0; bulletCounter < this.bullets.bulletClipArray.length; bulletCounter++) {
      for(let i = 0; i < this.centipede.segArray.length; i++) {
        if ((this.centipede.segArray[i].x >= this.bullets.bulletClipArray[bulletCounter].x) && (this.centipede.segArray[i].x <= this.bullets.bulletClipArray[bulletCounter].x + this.bullets.bulletClipArray[bulletCounter].width) && (this.centipede.segArray[i].y >= this.bullets.bulletClipArray[bulletCounter].y) && (this.centipede.segArray[i].y <= (this.bullets.bulletClipArray[bulletCounter].y + this.bullets.bulletClipArray[bulletCounter].height))) {
          this.centipede.segArray.splice(i, 1);
          this.updateScore();
        }
      }
    }
  }

  updateScore() {
    let scoreOutput = document.querySelector('.score');
    this.score += 100;
    scoreOutput.innerText = this.score;
    if (this.score === 1000) {
      alert('KEEP IT UP!')
      this.levelUp();
    }
    if (this.score === 3000) {
      alert('YOU DO YOU BOO!')
      this.levelOut();
    }
    if (this.score === 7000) {
      alert('!!!!  YOU\'RE A ROCKSTAR WITH A NEW WORLD RECORD  !!!!');
      window.location.reload();
    }
  }

  updateLives() {
    let livesOutput = document.querySelector('.lives');
    this.lives--;
    livesOutput.innerText = this.lives;
    if (this.lives < 1) {
      alert('!!!  GAME OVER  !!!');
      window.location.reload();   
    }
  }

}


export default Game;

