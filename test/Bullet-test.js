const chai = require('chai');
const assert = chai.assert;
const bullet = require('../lib/Bullet.js');
require('locus');

describe('Bullet', function() {
  it('should take default x and y values', function () {
    assert.equal(bullet.x, 15);
    assert.equal(bullet.y, 15);
  })
  
  it('should have default height, width, dx, and dy values', function() {
    const bullet = new Bullet();
    assert.equal(bullet.height, 8);
    assert.equal(bullet.width, 8);
    assert.equal(bullet.dx, 7);
    assert.equal(bullet.dy, 3);
  });

  it('should have a clip of bullets', function() {
    const bullet = new Bullet();
    assert.equal(bullet.bulletClipArray, [])
  })

  it('should be able to move up when fired', function() {
    const bullet = new Bullet(0, 3)
    bullet.move();
    assert.equal(bullet.y, 0)
  }) 

})