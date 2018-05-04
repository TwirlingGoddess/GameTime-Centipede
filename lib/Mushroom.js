const Block = require('./Block.js')

class Mushroom extends Block{
  constructor(x, y) {
    this.x = x * Math.random();
    this.y = y * Math.random();
  }

}

// when mush created in index.js
// var mushroom = new Mushroom(x, y) ;
  // mushroom.draw(context, 'rgba()');
// 
module.exports = Mushroom;