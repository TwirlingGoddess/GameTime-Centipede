import {assert} from 'chai';
import Mushroom from '../lib/Mushroom.js';

describe('Mushroom', function() {
  it('should take x and y values as arguments', function() {
  	const mushrooms = new Mushroom(225, 6);
  	assert.equal(mushrooms.x, 225);
 		assert.equal(mushrooms.y, 6);
  })

  it('should have an empty array of mushrooms', function() {
  	const mushrooms = new Mushroom();
  	assert.deepEqual(mushrooms.mushArray, []);
  })

  it('should create a batch of itself', function() {
    const mushrooms = new Mushroom();
    mushrooms.createMushrooms(10)
    assert.equal(mushrooms.mushArray.length, 10)
  })

});
