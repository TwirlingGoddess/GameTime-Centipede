import {assert} from 'chai';
import Block from '../lib/Block.js';
require('locus');

describe ('Block', function() {

	it('should take x and y as arguments', function() {
		const block = new Block(25, 53);
		assert.equal(block.x, 25);
		assert.equal(block.y, 53);
	})

	it('should have default height and width values', function() {
		const block = new Block();
		assert.equal(block.height, 15);
		assert.equal(block.width, 15);
	})	

})
