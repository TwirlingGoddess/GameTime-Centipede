import {assert} from 'chai';
import Bullet from '../lib/Bullet.js';

describe('Bullet', function() {
  it('should take x and y arguments', function () {
    const bullet = new Bullet(1, 2);
    assert.equal(bullet.x, 1);
    assert.equal(bullet.y, 2);
  })
  
  it('should have default height, width, dx, and dy values', function() {
    const bullet = new Bullet();
    assert.equal(bullet.height, 8);
    assert.equal(bullet.width, 8);
    assert.equal(bullet.dx, 9);
    assert.equal(bullet.dy, 3);
  });

  it('should have a clip of bullets', function() {
    const bullet = new Bullet();
    assert.deepEqual(bullet.bulletClipArray, [])
  })

  it('should be able to move up when fired', function() {
    const bullet = new Bullet(0, 3)
    bullet.move();
    assert.equal(bullet.y, 0)
  }) 

})