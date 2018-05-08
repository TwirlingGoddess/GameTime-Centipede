const chai = require ('chai');
const assert = chai.assert;
const game = require('../lib/Game.js');
require('locus');

describe ('Game', function() {
	it('should return true', function() {
		assert.equal(true, true);
	})

	it('should take canvas and context as arguments', function() {
		const game = new Game;
		assert.equal(game.canvas, true);
		assert.equal(game.context, true);
	})

	it('should have a gameLoop', function() {
		const game = new Game;
		assert.equal(game.gameLoop, true);
	})

	it('should have a centipede', function() {
		const game = new Game;
		assert.equal(game.centipede, true);
	})

	it('should have a player', function() {
		const game = new Game;
		assert.equal(game.player, true);
	})

	it('should have segments', function() {
		const game = new Game;
		assert.equal(game.segments, true);
	})

	it('should have mushrooms', function() {
		const game = new Game;
		assert.equal(game.mushrooms, true);
	})

	it('should have bullets', function() {
		const game = new Game;
		assert.equal(game.bullets, true);
	})

	it('should keep score', function() {
		const game = new Game;
		assert.equal(game.score, 0);
	})

	it('should have lives', function() {
		const game = new Game;
		assert.equal(game.lives, 3);
	})

})
