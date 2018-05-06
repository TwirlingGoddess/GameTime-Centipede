import Game from './game.js';

const canvas = document.getElementById('game');
const context = canvas.getContext('2d');
const game = new Game(canvas, context, 700, 700);

canvas.addEventListener('click', startGame);

window.onkeydown = function playerMove(e) {
	switch (e.keyCode) {
		case 37:
			game.moveLeft();
			break;
		case 38:
			game.moveUp();
			break;
		case 39:
			game.moveRight();
			break;
		case 40:
			game.moveDown();
			break;
	}
};

function startGame(e) {
  e.preventDefault;
  game.bodyParts();
  game.createMushrooms();
  game.gameLoop();
}


