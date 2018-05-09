const chai = require ('chai');
const assert = chai.assert;
const centipede = require('../lib/Centipede.js');
require('locus');

describe ('Centipede', function() {
	it('should have an array of segments', function() {
		const centipede = new Centipede();
		assert.equal(centipede.segArray, []);
	})

})