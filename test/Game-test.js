import {assert} from 'chai';
import Centipede from '../lib/Centipede.js';
import Mushroom from '../lib/Mushroom.js';
import Player from '../lib/Player.js';
import Game from '../lib/Game.js';
require('locus')

describe('Game', function() {
	it('should have default values', function() {
		const game = new Game();
		assert.instanceOf(game.centipede, Centipede);
		assert.instanceOf(game.player, Player);
		assert.instanceOf(game.mushrooms, Mushroom);
    assert.deepEqual(game.mushrooms.mushArray, []);
		assert.equal(game.score, 0);
		assert.equal(game.lives, 3);
	})

  it('should detect no collision between the centipede and player', function() {
    const game = new Game();
    game.playerCollide();
    assert.equal(game.lives, 3);
  })

  it('should detect collision between the centipede and player', function() {
    const game = new Game();
    game.centipede.makeSelf(1);
    (game.centipede.segArray[0].x = game.player.x);
    (game.centipede.segArray[0].y = game.player.y);
    game.playerCollide();
    assert.equal(game.lives, 2);
  })

  it('should detect no collision between the mushrooms and centipede', function() {
  	const game = new Game();
    const originalDx = game.centipede.segArray.dx;
    game.mushroomCollide();
    assert.equal(originalDx, game.centipede.segArray.dx);
  })

  it('should detect collision between the mushrooms and centipede', function() {
    const game = new Game();
    const centipede = new Centipede;
    game.centipede.makeSelf(1);
    game.mushrooms.createMushrooms(10);
    const originalDx = game.centipede.segArray.dx;
    (game.centipede.segArray[0].x = game.mushrooms.mushArray[0].x)
    (game.centipede.segArray[0].y = game.mushrooms.mushArray[0].y)
    game.mushroomCollide();
    assert.equal(originalDx, -game.centipede.segArray.dx);
  })

  it('should detect no collision between the bullet and centipede', function() {
    const game = new Game();
    const currentSegments = game.centipede.segArray.length
    game.bulletCollide();
    assert.equal(currentSegments, game.centipede.segArray.length);
  })

  it('should detect collision between the bullet and centipede', function() {
		const game = new Game();
    game.centipede.makeSelf(1);
    const currentSegments = game.centipede.segArray.length
    game.player.fireBullets();
    assert.equal(currentSegments, game.centipede.segArray.length);
    game.centipede.segArray[0].x = game.player.bulletClipArray[0].x;
    game.centipede.segArray[0].y = game.player.bulletClipArray[0].y;
		game.bulletCollide(currentSegments, game.centipede.segArray.length--);
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
  	assert.equal(game.lives, 2)
  })
})
