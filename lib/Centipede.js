import Segments from './Segments.js';

class Centipede extends Segments{
  constructor(x, y) {
    this.x = segArray[0].x
    this.y = segArray[0].y

  }
// centipede property of bodyParts in a segArray. and 
// .move().draw() on each bodyPart in the array. // 
// in centipede class, pass in canvas width and height
// if (segArray[0] has x that is > than canvas then -dx)

bodyParts(Segments) {
  for (let i= 0; i < 10; i++) {
    var centipede = segArray.push(new Segments)
  }
}


}

// const segArray = [new Segments, new Segments];


export default Centipede;