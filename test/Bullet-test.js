const chai = require('chai');
const assert = chai.assert;
const bullet = require('../lib/Bullet.js');
require('locus');

describe('Bullet', function() {
  
  it('should be a bullet', function() {
    const bullet = new Bullet;
    assert.equal(true, true);
  });

  it('should take default values', function() {
    const bullet = new Bullet;
    assert.equal(bullet.x, 15);
    assert.equal(bullet.y, 15);
    assert.equal(bullet.height, 8);
    assert.equal(bullet.width, 8);
    assert.equal(bullet.dx, 7);
    assert.equal(bullet.dy, 3);
  });

  it('should have a clip of bullets', function() {
    const bullet = new Bullet;
    assert.equal(bullet.bulletClipArray, [])
  })

})