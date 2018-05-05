import Block from './Block.js';

class Player extends Block{
	constructor(x, y, width, height, dx, dy) {
		this.x = 350;
		this.y = 350;
		this.width = 40;
		this.height = 40;
		this.dx = 4;
		this.dy = 4;

		this.update = function() {
			
		}
		}

	move(x, y) {
		if(keyCode === LEFT) {
			this.x -= this.dx;
		}

		if (keyCode === RIGHT) {
			this.x += this.dx;
		}

		if (keyCode === UP) {
			this.y -= this.dy;
		}

		if (keyCode === DOWN) {
			this.y += this.dy;
		}
	}

	draw() {
		console.log('hi');
		context.fillStyle = "magenta";
		context.fillRect(350, 350, this.width, this.height);
    
    return this;
  	
	}

}






//instance
// var player = new Player(100, 100, 5, 5);
// var player2 = new Player(150, 90, 5, 5)




export default Player;