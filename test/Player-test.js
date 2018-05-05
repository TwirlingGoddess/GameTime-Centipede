const chai = require ('chai');
const assert = chai.assert;
const Block = require('../lib/Player.js');
require('locus');

describe ('Player', function() {
	it('should return true', function() {
		assert.equal(true, true);
	})

	it('should take x and y as arguments', function() {
		var player = new Player(15, 15);
		assert.equal(player.x, 15);
		assert.equal(player.y, 15);
	})

	it('should have a default height and width', function() {
		var player = new Player();
		assert.equal(player.height, 13);
		assert.equal(player.width, 13);
	})

	it('should have default x and y velocities', function() {
		var block = new Player();
		assert.equal(player.dx, 14);
		assert.equal(player.dy, 4);
	})

}