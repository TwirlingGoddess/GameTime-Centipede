import Segments from './Segments.js';

class Centipede extends Segments{
  constructor(x, y, width, height, dx, dy, segArray) {
    super(x, y, width, height, dx, dy);
    this.segArray = [];
  }
// centipede property of bodyParts in a segArray. and 
// .move().draw() on each bodyPart in the array. // 
// in centipede class, pass in canvas width and height
// if (segArray[0] has x that is > than canvas then -dx)


}

// const segArray = [new Segments, new Segments];


export default Centipede;