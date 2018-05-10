import Bullet from './Bullet.js';
import Centipede from './Centipede.js';
import Player from './Player.js';
import Mushroom from './Mushroom.js';

class Game {
  constructor() {
    this.centipede = new Centipede();
    this.player = new Player(350, 600);
    this.mushrooms = new Mushroom();
    this.score = 0;
    this.lives = 3;
  }

  playerCollide() {
    for(let i = 0; i < this.centipede.segArray.length; i++) {
      let centipedeBody = this.centipede.segArray[i];
      if (centipedeBody.x >= this.player.x && 
        (centipedeBody.x <= this.player.x + this.player.width) && 
        (centipedeBody.y >= this.player.y) && 
        (centipedeBody.y <= this.player.y + this.player.height)) {
        this.restartGame();
        alert('you just lost a life, buddy');
      }
    }
  }

  mushroomCollide() {
    for(let mushroomCounter = 0; mushroomCounter < this.mushrooms.mushArray.length; mushroomCounter++) {
      for(let i = 0; i < this.centipede.segArray.length; i++) {
      let centipedeBody = this.centipede.segArray[i];
      let clipOfmushrooms = this.mushrooms.mushArray[mushroomCounter];
        if (centipedeBody.x >= clipOfmushrooms.x &&
          (centipedeBody.x <= clipOfmushrooms.x + clipOfmushrooms.width) &&
          (centipedeBody.y >= clipOfmushrooms.y - 10) &&
          (centipedeBody.y + centipedeBody.height <= clipOfmushrooms.y + clipOfmushrooms.height + 10)) {
          centipedeBody.dx = -centipedeBody.dx;
        }
      }
    }
  }  

  bulletCollide() {
    for(let bulletCounter = 0; bulletCounter < this.player.bulletClipArray.length; bulletCounter++) {
      for(let i = 0; i < this.centipede.segArray.length; i++) {
      let centipedeBody = this.centipede.segArray[i];
      let clipOfBullets = this.player.bulletClipArray[bulletCounter];
        if (centipedeBody.x >= clipOfBullets.x &&
          (centipedeBody.x <= clipOfBullets.x + clipOfBullets.width) &&
          (centipedeBody.y >= clipOfBullets.y) &&
          (centipedeBody.y <= clipOfBullets.y + clipOfBullets.height)) {
          this.centipede.segArray.splice(i, 1);
          this.updateScore();
        }
      }
    }
  }

  restartGame() {
    this.centipede.makeSelf(15);
    this.player = new Player(350, 600);
    this.updateLives();
  }

  updateScore() {
    this.score += 100;
    if (this.score === 1500) {
      alert('KEEP IT UP!')
      this.centipede.makeSelf(35);
    }
    if (this.score === 5000) {
      alert('YOU DO YOU BOO!')
      this.centipede.makeSelf(50);
    }
    if (this.score === 10000) {
      alert('!!!!  YOU\'RE A ROCKSTAR WITH A NEW WORLD RECORD  !!!!');
      window.location.reload();
    }
  }

  updateLives() {
    this.lives--;
    if (this.lives < 1) {
      alert('!!!  GAME OVER  !!!');
      window.location.reload();
    }
  }

}


export default Game;

