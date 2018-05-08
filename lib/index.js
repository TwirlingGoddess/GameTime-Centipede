import Game from './Game.js';

const canvas = document.getElementById('game');
const context = canvas.getContext('2d');
const game = new Game(canvas, context, 700, 700);

canvas.addEventListener('click', startGame);

window.onkeydown = function playerMove(e) {
	switch (e.keyCode) {
		case 37:
			game.move('LEFT');
			break;
		case 38:
			game.move('UP');
			break;
		case 39:
			game.move('RIGHT');
			break;
		case 40:
			game.move('DOWN');
			break;
	  case 32:
	  	game.createBullets();
	  	break;
	}

};

function startGame(e) {
  e.preventDefault;
  game.bodyParts();
  game.createMushrooms();
  game.gameLoop();
}

