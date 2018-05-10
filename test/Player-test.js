const chai = require ('chai');
const assert = chai.assert;
const player = require('../lib/Player.js');
require('locus');

describe ('Player', function() {

	it('should take x and y as arguments', function() {
		const player = new Player(15, 15);
		assert.equal(player.x, 15);
		assert.equal(player.y, 15);
	})

	it('should have default height, width, dx, and dy values', function() {
		const player = new Player();
		assert.equal(player.height, 35);
		assert.equal(player.width, 35);
		assert.equal(player.dx, 20);
		assert.equal(player.dy, 20);
	})

	it('should have a clip of bullets', function() {
		const player = new Player();
		assert.equal(player.bulletClipArray, [])
	})

	it('should be able to move', function() {
		const player = new Player(0, 0);
		player.move();
		assert.equal(player.x, 665)
		assert.equal(player.y, 665)
	})

	it('should be able to fire bullets', function() {
		const player = new Player();
		const bullets = new Bullet();
		player.fireBullets();
		assert.deepEqual(player.bulletClipArray.length, 1)
	})

})