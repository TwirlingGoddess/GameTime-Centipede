import Block from './Block.js';
import Segments from './Segments.js';


class Centipede {
  constructor(x, y) {

  }
// centipede property of bodyParts in a segArray. and 
// .move().draw() on each bodyPart in the array. // 
// in centipede class, pass in canvas width and height
// if (segArray[0] has x that is > than canvas then -dx)

bodyParts() {
  var centipede = segArray.push(Segments)
}

move(x, y) {
    this.x += this.dx;
    if (this.x > canvas.width || this.x < 0) {
      this.dx = -this.dx;
      drop();
    }
  }
}

// const segArray = [new Segments, new Segments];


export default Centipede;