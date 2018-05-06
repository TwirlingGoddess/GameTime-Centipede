import Block from './Block.js';
import Bullet from './Bullet.js';


function keyPressed() {};

class Player extends Block{
	constructor(x, y, width, height, dx, dy) {
		super();
    this.x = 350;
    this.y = 600;
    this.height = 45;
    this.width = 45;
		this.dx = 7;
		this.dy = 7;
	}

}


export default Player;