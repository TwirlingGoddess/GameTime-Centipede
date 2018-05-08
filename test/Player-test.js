const chai = require ('chai');
const assert = chai.assert;
const player = require('../lib/Player.js');
require('locus');

describe ('Player', function() {
	it('should return true', function() {
		assert.equal(true, true);
	})

	it('should take x and y as arguments', function() {
		const player = new Player;
		assert.equal(player.x, 15);
		assert.equal(player.y, 15);
	})

	it('should have a default height and width', function() {
		const player = new Player;
		assert.equal(player.height, 35);
		assert.equal(player.width, 35);
	})

	it('should have default x and y velocities', function() {
		const player = new Player;
		assert.equal(player.dx, 20);
		assert.equal(player.dy, 20);
	})

})