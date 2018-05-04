import Game from './Game.js';

const canvas = document.getElementById('game');
const context = canvas.getContext('2d');
const game = new Game(canvas, context, 700, 700);

canvas.addEventListener('click', startGame);

function startGame(e) {
  e.preventDefault;
  
  game.gameLoop()
}