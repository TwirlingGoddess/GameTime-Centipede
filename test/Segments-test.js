import {assert} from 'chai';
import Segments from '../lib/Segments.js';

describe ('Segments', function() {
  it('should have x, height, width, dx, and dy default values', function() {
    const segments = new Segments();
    assert.equal(segments.y, 20);
    assert.equal(segments.height, 15);
    assert.equal(segments.width, 15);
    assert.equal(segments.dx, 5);
    assert.equal(segments.dy, 5);
  })

  it('should take y, height, and width as arguments', function() { 
    const segments = new Segments(2)
    assert.equal(segments.x, 2);
  })

  it('should move to the right, then down the y-axis, and back to the left', function() {
    const segments = new Segments(5, 11);
    segments.dx = segments.x++;
    segments.dy = segments.y--;
    segments.move();
    assert.equal(segments.x, segments.dx);
    assert.equal(segments.y, segments.dy);
  })
  
})