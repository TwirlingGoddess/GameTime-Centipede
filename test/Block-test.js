const chai = require ('chai');
const assert = chai.assert;
const Block = require('../lib/Block.js');

describe ('Block', function() {
	it('should return true', function() {
		assert.equal(true, true);
	})

	it('should have a default height and width', function() {
		var block = new Block();
		
		assert.equal(block.height, 13);
		assert.equal(block.width, 13);
	})

	it('should take x and y as arguments', function() {

	})

})
//Setup

//Execution

//Assertion