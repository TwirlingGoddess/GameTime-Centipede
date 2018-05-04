const Block = require('./Block.js');
const Game = require('./game.js');

class Segments extends Block{
  constructor(x, y, width, height, dx, dy) {
    super(x, y, width, height, dx, dy);
  }
}
// centipede property of bodyParts in a segArray. and 
// .move().draw() on each bodyPart in the array. // 
// in centipede class, pass in canvas width and height
// if (segArray[0] has x that is > than canvas then -dx)

module.exports = Segments;