import {assert} from 'chai';
import Player from '../lib/Player.js';
import Bullet from '../lib/Bullet.js';

describe ('Player', function() {
	it('should take x and y as arguments', function() {
		const player = new Player(15, 15);
		assert.equal(player.x, 15);
		assert.equal(player.y, 15);
	})

	it('should have default height, width, dx, and dy values', function() {
		const player = new Player();
		assert.equal(player.height, 30);
		assert.equal(player.width, 30);
		assert.equal(player.dx, 25);
		assert.equal(player.dy, 25);
	})

	it('should have a clip of bullets', function() {
		const player = new Player();
		assert.deepEqual(player.bulletClipArray, [])
	})

	it('should be able to move', function() {
		const player = new Player();
		const currentVertSpeed = player.dx;
		const currentHoriSpeed = player.dy;
		player.move();
		assert.equal(currentVertSpeed, +player.dx);
		assert.equal(currentHoriSpeed, +player.dy);
	})

	it('should be able to fire bullets', function() {
		const player = new Player();
		const bullets = new Bullet();
		player.fireBullets();
		assert.deepEqual(player.bulletClipArray.length, 1)
	})

})