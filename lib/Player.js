import Block from './Block.js';
import Bullet from './Bullet.js';

function keyPressed() {};

class Player extends Block{
	constructor(x, y, width, height, dx, dy) {
		super();
    this.x = x;
    this.y = y;
    this.height = 35;
    this.width = 35;
		this.dx = 20;
		this.dy = 20; 
	}
}

export default Player;