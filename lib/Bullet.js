import Block from './Block.js';
import Game from './Game.js';

class Bullet extends Block {
  constructor(x, y, width, height, dx, dy) {
    super();
    // this.x = game.player.x + game.player.width/2;
    this.x = x;
    // this.y = game.player.y;
    this.y = y;
    this.height = 10;
    this.width = 2;
    this.dx = 2;
    this.dy = 50;
    // this.bulletArray = [];
  }

  // move(direction) {
  //   if(direction === 'FIRE') {
  //   this.y += this.dy;
  //   }
  }
// }

export default Bullet;