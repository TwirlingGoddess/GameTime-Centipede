import Segments from './Segments.js';

class Centipede{
  constructor(segArray) {
    this.segArray = [];
  }

  makeSelf(numSegments) {
    for (let i = 0; i < numSegments; i++) {
      this.segArray[i] = new Segments(i * 25);
    }
  }
}


export default Centipede;