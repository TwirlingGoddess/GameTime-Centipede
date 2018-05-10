import {assert} from 'chai';
import Segments from '../lib/Segments.js';
import Centipede from '../lib/Centipede.js';

describe ('Centipede', function() {
	it('should have an array of segments', function() {
		const centipede = new Centipede();
		assert.deepEqual(centipede.segArray, []);
	})

  it('should make itself', function() {
    const centipede = new Centipede();
    centipede.makeSelf(5);
    const segments = new Segments();
    assert.equal(centipede.segArray.length, 5);
    assert.instanceOf(centipede.segArray[3] , Segments);
  })

})