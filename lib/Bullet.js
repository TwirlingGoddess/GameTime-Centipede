import Block from './Block.js';
import Game from './game.js';  

class Bullet extends Block {
  constructor(x, y, width, height, dx, dy) {
    super();
    // this.x = game.player.x + game.player.width/2;
    this.x = 350;
    // this.y = game.player.y;
    this.y = 550;
    this.height = 10;
    this.width = 20;
    this.dx = 2;
    this.dy = 5;
    this.bulletArray = [];
  }

  move(y, dy) {
    this.y -= this.dy;
  }

  
  }
// }

export default Bullet;


