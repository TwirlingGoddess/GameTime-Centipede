const chai = require ('chai');
const assert = chai.assert;
const game = require('../lib/Game.js');
require('locus');

describe ('Game', function() {
	// it('should return true', function() {
	// 	assert.equal(true, true);
	// })

	// it('should take canvas and context as arguments', function() {
	// 	const game = new Game;
	// 	assert.equal(game.canvas, true);
	// 	assert.equal(game.context, true);
	// })

	// it('should have a gameLoop', function() {
	// 	const game = new Game;
	// 	assert.equal(game.gameLoop, true);
	// })

	it('should have default values', function() {
		const game = new Game;
		assert.equal(game.centipede, true);
		assert.equal(game.player, true);
		assert.equal(game.segments, true);
		assert.equal(game.mushrooms, true);
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

	// it('should create body segments', function() {
	// 	const game = new Game;
	// 	expect.
	// })

	
	//May need to centipede to do this.

	it('should push 10 segments into an array for the catepillar')
		assert.deepEqual(game.centipede.segArray)
	it('should push 20 segments into an array for the catepillar')
	it('should oush 40 segments into an array for the catepillar')

	it('should create new mushrooms')
	it('should create new bullets')


	it('shoud move left when left arrow is pressed')
	it('should move up when up arrow is pressed')
	it('should move right when right arrow is pressed')
	it('should move down when down arrow is pressed')

	it('should restart the game')

	it('should detect collision between the centipede and player')
  it('should detect collision between the bullet and centipede')

  it('should increase the score by 100 when each segment of caterpillar is shot')

  it('should decrease the number of lives remaining when the player dies')
})
