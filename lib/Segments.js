import Block from './Block.js';

class Segments extends Block{
  constructor(x, y, width, height, dx, dy) {
    super(x, y, width, height, dx, dy);
    this.y = 20;
    this.dx = 1;
    this.dy = 1;
  }

  move(x, y) {
    this.x += this.dx;
    if (this.x > 700 || this.x < 0) {
      this.y = this.y + 15;
      this.dx = -this.dx;
    }
    if (this.y > 700) {
      this.y = 12;
      this.x = 0;
    }
  }
}


// centipede property of bodyParts in a segArray. and 
// .move().draw() on each bodyPart in the array. // 
// in centipede class, pass in canvas width and height
// if (segArray[0] has x that is > than canvas then -dx)

export default Segments;