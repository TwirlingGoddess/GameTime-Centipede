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

	move(x, y, dx, dy) {
	}

	


}



//instance
// var player = new Player(100, 100, 5, 5);
// var player2 = new Player(150, 90, 5, 5)




export default Player;