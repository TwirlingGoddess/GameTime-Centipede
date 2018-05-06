import Block from './Block.js';
import Player from './Player.js'

class Bullet extends Block {
  constructor(x, y, width, height, dx, dy) {
    super();
    this.x = 500;
    this.y = 500;
    this.height = 10;
    this.width = 20;
    this.dx = 2;
    this.dy = 5;
    this.bulletClipArray = [];
  }
  
  move() {
     this.y -= this.dy;
  }
}

export default Bullet;


