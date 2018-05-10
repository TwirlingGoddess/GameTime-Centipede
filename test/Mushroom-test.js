const chai = require('chai');
const assert = chai.assert;
const mushrooms = require('../lib/Mushroom.js');
require('locus');

describe('Mushroom', function() {
  it('should have default x and y values', function() {
  	const mushrooms = new Mushroom();
  	assert.equal(mushrooms.x, Math.floor((Math.random() * 690)));
 		assert.equal(mushrooms.y, Math.floor((Math.random() * 570)));
  })

  it('should have an empty array of mushrooms', function() {
  	const mushrooms = new Mushroom();
  	assert.equal(mushrooms.mushArray, []);
  })

  it('should create a batch of itself', function() {
    const mushrooms = new Mushroom();
    mushrooms.createMushrooms(10)
    assert.deepEqual(mushrooms.mushArray.length, 10)
  })

});
