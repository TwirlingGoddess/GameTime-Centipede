import Block from './Block.js';
import Player from './Player.js'

class Bullet extends Player {
  constructor(x, y) {
    super(x, y);
    this.height = 8;
    this.width = 8;
    this.dx = 9;
    this.dy = 3;
  }
  
  move() {
     this.y -= this.dy;
  }
}

export default Bullet;


