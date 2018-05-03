

class Player {
	constructor(x, y, size, speed) {
		this.x = x, 
		this.y = y, 
		this.size = size;
		this.speed = speed;
		this.update = function() {
			// ellipse(this.x, this.y, this.size, this.speed);
			ellipse(100,100, 50, 50);
		}
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
var player = new Player(100, 100, 5, 5);
// var player2 = new Player(150, 90, 5, 5)

draw = function() {
	 player.update();
}


module.exports = Player;