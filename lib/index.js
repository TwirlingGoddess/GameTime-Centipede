import Game from './Game.js';

const canvas = document.getElementById('game');
const context = canvas.getContext('2d');
const game = new Game(canvas, context, 700, 700);

canvas.addEventListener('click', startGame);

function startGame(e) {
  e.preventDefault;
  game.centipede.makeSelf(15);
  game.mushrooms.createMushrooms(25);
  updateAnimation();
}

function updateAnimation() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  drawToCanvasSegments();
  drawToCanvasMushrooms();
  drawToCanvasBullets();
  drawToCanvasPlayer();
  displayScore();
  requestAnimationFrame(updateAnimation);
}

function drawToCanvasSegments() {
  game.centipede.segArray.forEach(segment => {
    segment.draw(context, 'rgba(100, 300, 10, 10)', 'rgb(112, 12, 252)');
    segment.move();
  })
}

function drawToCanvasMushrooms() {
  game.mushrooms.mushArray.forEach(mushroom => {
    mushroom.draw(context, 'rgba(300, 100, 10, 10)', 'rgb(240, 252, 12)');
    game.mushroomCollide();
  })
}
    
function drawToCanvasBullets() {
  game.player.bulletClipArray.forEach(bullet => {
    bullet.draw(context, 'rgba(255, 280, 0, 1)', 'rgb(253,14,205)');
    bullet.move();
    game.bulletCollide();
  })
}

function drawToCanvasPlayer() {
  game.player.draw(context, 'rgba(255, 0, 0, 1)', 'rgba(300, 100, 10, 10)');
    game.playerCollide();
}
   
window.onkeydown = function playerMove(e) {
  e.preventDefault();
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
      game.player.fireBullets();
      break;
  }

};

function displayScore() {
  const scoreOutput = document.querySelector('.score');
  scoreOutput.innerText = game.score;
  const livesOutput = document.querySelector('.lives');
  livesOutput.innerText = game.lives;
}
