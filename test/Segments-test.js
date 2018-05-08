const chai = require ('chai');
const assert = chai.assert;
const segments = require('../lib/Segments.js');
require('locus');

describe ('Segments', function() {
  it('should return true', function() {
    assert.equal(true, true);
  })

  it('should have x and y default values', function() {
    const segments = new Segments;
    assert.equal(segments.x, 2);
    assert.equal(segments.y, 20);
  })

  it('should take height and width as arguments', function() {
    const segments = new Segments;
    assert.equal(segments.height, 13);
    assert.equal(segments.width, 13);
  })

  it('should have default x and y velocities', function() {
    const segments = new Segments;
    assert.equal(segments.dx, 5);
    assert.equal(segments.dy, 5);
  })