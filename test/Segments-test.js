const chai = require ('chai');
const assert = chai.assert;
const Segments = require('../lib/Segments.js');
require('locus');

describe ('Segments', function() {
  it('should return true', function() {
    assert.equal(true, true);
  })

  it('should take x and y as arguments', function() {
    const segments = new Segments(15, 15);
    assert.equal(segments.x, 15);
    assert.equal(segments.y, 15);
  })

  it('should have a default height and width', function() {
    const segments = new Segments();
    assert.equal(segments.height, 13);
    assert.equal(segments.width, 13);
  })

  it('should have default x and y velocities', function() {
    const segments = new Segments();
    assert.equal(segments.dx, 14);
    assert.equal(segments.dy, 4);
  })