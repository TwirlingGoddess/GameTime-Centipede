const chai = require ('chai');
const assert = chai.assert;
const centipede = require('../lib/Centipede.js');
require('locus');

describe ('Centipede', function() {
	it('should have an array of segments', function() {
		const centipede = new Centipede();
		assert.equal(centipede.segArray, []);
	})

  it('should make itself', function() {
    const centipede = new Centipede();
    const segments = new Segments();
    centipede.makeSelf(5);
    assert.deepEqual(centipede.segArray.length , 5)
  })

})