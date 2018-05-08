const chai = require ('chai');
const assert = chai.assert;
const block = require('../lib/Block.js');
require('locus');

describe ('Block', function() {
	it('should return true', function() {
		assert.equal(true, true);
	})

	it('should take x and y as arguments', function() {
		const block = new Block(15, 15);
		assert.equal(block.x, 15);
		assert.equal(block.y, 15);
	})

	it('should have a default height and width', function() {
		const block = new Block();
		assert.equal(block.height, 13);
		assert.equal(block.width, 13);
	})

	it('should have default x and y velocities as arguments', function() {
		const block = new Block();
		assert.equal(block.dx, 14);
		assert.equal(block.dy, 4);
	})	

})
