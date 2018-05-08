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
  gameLoop();
}

function gameLoop() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    game.centipede.segArray.forEach(segment => {
      segment.draw(context, 'rgba(100, 300, 10, 10)', 'rgb(112, 12, 252)');
      segment.move();
      game.playerCollide();
      game.bulletCollide();
    })
    game.mushrooms.mushArray.forEach(mushroom => {
      mushroom.draw(context, 'rgba(300, 100, 10, 10)', 'rgb(240, 252, 12)');
    })
    game.bullets.bulletClipArray.forEach(bullet => {
      bullet.draw(context, 'rgba(255, 280, 0, 1)', 'rgb(253,14,205)');
      bullet.move();
    })
    game.player.draw(context, 'rgba(255, 0, 0, 1)', 'rgba(100, 300, 10, 10)');
    window.requestAnimationFrame(gameLoop());
  }

