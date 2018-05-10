import Block from './Block.js';
import Bullet from './Bullet.js';

function keyPressed() {};

class Player extends Block{
	constructor(x, y) {
		super(x, y);
    this.height = 30;
    this.width = 30;
		this.dx = 25;
		this.dy = 25; 
    this.bulletClipArray = [];
	}

  move(direction) {
    if(direction === 'LEFT' && this.x > 0) {
      this.x -= this.dx;
    }
    if (direction === 'UP' && this.y > 0) {
      this.y -= this.dy;
    }
    if (direction === 'RIGHT' && this.x < 665) {
      this.x += this.dx;
    }
    if (direction === 'DOWN' && this.y < 665) {
      this.y += this.dy;
    }
  }

  fireBullets() {
    const bullet = new Bullet(this.x + this.width / 3, this.y);
    this.bulletClipArray.push(bullet);
  }
}

export default Player;