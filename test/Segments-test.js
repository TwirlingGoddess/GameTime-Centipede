const chai = require ('chai');
const assert = chai.assert;
const segments = require('../lib/Segments.js');
require('locus');

describe ('Segments', function() {

  it('should have x, y, height, width, dx, and dy default values', function() {
    const segments = new Segments();
    assert.equal(segments.x, 2);
    assert.equal(segments.y, 20);
    assert.equal(segments.height, 13);
    assert.equal(segments.width, 13);
    assert.equal(segments.dx, 5);
    assert.equal(segments.dy, 5);
  })

  it('should move to the right, then down the y-axis, and back to the left', function() {
    const segments = new Segment(0,0);
    segment.move();
    assert.equal(segments.x, 700);
    assert.equal(segments.y, 700)
  })
  
})