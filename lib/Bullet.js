import Block from './Block.js';
import Player from './Player.js'

class Bullet extends Player {
  constructor(x, y, width, height, dx, dy) {
    super(x, y);
    this.height = 10;
    this.width = 20;
    this.dx = 7;
    this.dy = 7;
    this.bulletClipArray = [];
  }
  
  move() {
     this.y -= this.dy;
  }
}

export default Bullet;


