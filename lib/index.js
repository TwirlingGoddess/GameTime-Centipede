import Game from './game.js';

const canvas = document.getElementById('game');
const context = canvas.getContext('2d');
const game = new Game(canvas, context, 700, 700);

canvas.addEventListener('click', startGame);

window.onkeydown = function playerMove(e) {
	switch (e.keyCode) {
		case 37:
			game.player.move('LEFT');
			break;
		case 38:
			game.player.move('UP');
			break;
		case 39:
			game.player.move('RIGHT');
			break;
		case 40:
			game.player.move('DOWN');
			break;
	  case 32:
	  	console.log('spacebar'); 
	  	game.createBullets();
	  	game.bullets.move();
	  	break
	}
};






function startGame(e) {
  e.preventDefault;
  game.bodyParts();
  game.createMushrooms();
  game.gameLoop();
}


