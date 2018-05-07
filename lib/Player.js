import Block from './Block.js';
import Bullet from './Bullet.js';


function keyPressed() {};

class Player extends Block{
	constructor(x, y, width, height, dx, dy) {
		super();
    this.x = x;
    this.y = y;
    this.height = 45;
    this.width = 45;
		this.dx = 10;
		this.dy = 10;
	}

}


export default Player;