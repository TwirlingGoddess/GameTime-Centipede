const chai = require('chai');
const assert = chai.assert;
const Bullet = require('../lib/Bullet.js');
require('locus');

describe('Bullet', function() {
  it('should be a bullet', function() {
    const bullet = new Bullet();
    assert.equal(true, true);
  });

  it('should take x and y arguments', function() {
    const bullet = new Bullet(15, 15);
    assert.equal(bullet.x, 15);
    assert.equal(bullet.y, 15);
  });

    // eval(locus);
  it('should have a default height and width', function() {
    const bullet = new Bullet(3, 2);
    assert.equal(bullet.height, 3);
    assert.equal(bullet.width, 2);
  });

  it('should have default x and y velocities', function() {
    const bullet = new Bullet(2, 20);
    assert.equal(bullet.dx, 2);
    assert.equal(bullet.dy, 20);
  });

})