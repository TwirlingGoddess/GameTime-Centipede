import Block from './Block.js';

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

	// if(keyCode === LEFT) {
	// 	this.x -= this.speed;
	// }

	// if (keyCode === RIGHT) {
	// 	this.x += this.speed;
	// }

	// if (keyCode === UP) {
	// 	this.y -= this.speed;
	// }

	// if (keyCode === DOWN) {
	// 	this.y += this.speed;
	// }

	// if (this.y > (window.innerHeight) * 0.7) {
	// 	this.y = (window.innerHeight) * 0.7;
	// }


}

//instance
// var player = new Player(100, 100, 5, 5);
// var player2 = new Player(150, 90, 5, 5)




export default Player;