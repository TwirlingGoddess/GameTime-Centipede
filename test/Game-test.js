const chai = require ('chai');
const assert = chai.assert;
const game = require('../lib/Game.js');
require('locus');

describe ('Game', function() {
	it('should have default values', function() {
		const game = new Game();
		assert.equal(game.centipede, true);
		assert.equal(game.player, true);
		assert.equal(game.mushrooms, true);
		assert.equal(game.score, 0);
		assert.equal(game.lives, 3);
	})

	it('should detect collision between the centipede and player', function() {
		const game = new Game();
		const player = new Player();
		const centipede = new Centipede();
		game.playerCollide();
		assert.deepequal(game.centipede.segArray[i].x >= game.player.x, true);
    assert.deepequal(game.centipede.segArray[i].x <= game.player.x + game.player.width, true);
    assert.deepequal(game.centipede.segArray[i].y >= game.player.y, true);
    assert.deepequal(game.centipede.segArray[i].y <= game.player.y + game.player.height, true);
	})

  it('should detect collision between the mushrooms and centipede', function() {
  	const game = new Game();
  	const mushrooms = new Mushrooms();
		const centipede = new Centipede();
  	game.mushroomCollide();
  	assert.deepequal(game.centipede.segArray[i].x >= game.mushrooms.mushArray[mushroomCounter].x, true)
    assert.deepequal(game.centipede.segArray[i].x <= game.mushrooms.mushArray[mushroomCounter].x + game.mushrooms.mushArray[mushroomCounter].width, true)
    assert.deepequal(game.centipede.segArray[i].y >= game.mushrooms.mushArray[mushroomCounter].y - 10, true)
    assert.deepequal(game.centipede.segArray[i].y + game.centipede.segArray[i].height <= game.mushrooms.mushArray[mushroomCounter].y + game.mushrooms.mushArray[mushroomCounter].height + 10, true)
  })

  it('should detect collision between the bullet and centipede', function() {
		const game = new Game();
		const bullet = new Bullet();
		const centipede = new Centipede();
		game.bulletCollide();
		assert.deepequal(game.centipede.segArray[i].x >= game.player.bulletClipArray[bulletCounter].x, true);
    assert.deepequal(game.centipede.segArray[i].x <= game.player.bulletClipArray[bulletCounter].x + game.player.bulletClipArray[bulletCounter].width, true);
    assert.deepequal(game.centipede.segArray[i].y >= game.player.bulletClipArray[bulletCounter].y, true);
    assert.deepequal(game.centipede.segArray[i].y <= game.player.bulletClipArray[bulletCounter].y + game.player.bulletClipArray[bulletCounter].height, true);
  })

	it('should restart the game', function() {
		const game = new Game();
		game.restartGame();
		assert.equal(game.centipede.segArray.length, 15);
	})

  it('should update the score', function() {
		const game = new Game();
  	game.updateScore();
  	assert.equal(game.score, 100);
  })

  it('should decrease the number of lives', function() {
		const game = new Game();
  	game.updateLives();
  	assert.equal(game.lives, 0)
  })
})
