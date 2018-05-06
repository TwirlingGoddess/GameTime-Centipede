import Block from './Block.js';

function keyPressed() {

}

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

	move(direction) {
		if(direction === 'LEFT') {
			this.x -= this.dx;
		}

		if (direction === 'UP') {
			this.y -= this.dy;
		}

		if (direction === 'RIGHT') {
			this.x += this.dx;
		}

		if (direction === 'DOWN') {
			this.y += this.dy;
		}
	}
}



export default Player;