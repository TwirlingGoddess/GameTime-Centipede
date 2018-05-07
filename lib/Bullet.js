import Block from './Block.js';
import Player from './Player.js'

class Bullet extends Player {
  constructor(x, y, width, height, dx, dy) {
    super(x, y);
    this.height = 8;
    this.width = 8;
    this.dx = 7;
    this.dy = 3;
    this.bulletClipArray = [];
  }
  
  move() {
     this.y -= this.dy;
     return this.x;
  }
}

export default Bullet;


