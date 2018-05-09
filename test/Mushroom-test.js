const chai = require('chai');
const assert = chai.assert;
const mushroom = require('../lib/Mushroom.js');
require('locus');

describe('Mushroom', function() {
  it('should be a mushroom', function() {
    assert.equal(true, true);
  });

  it('should have default x and y values', function() {
  	const mushroom = new Mushroom();
  	assert.equal(mushroom.x, Math.floor((Math.random() * 690)));
 		assert.equal(mushroom.y, Math.floor((Math.random() * 570)));
  })

  it('should have an empty array of mushrooms', function() {
  	const mushroom = new Mushroom();
  	assert.equal(mushroom.mushArray, []);
  })

});
