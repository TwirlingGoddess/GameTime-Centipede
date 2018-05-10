import Block from './Block.js';

class Mushroom extends Block{
constructor(x, y, width, height) {
    super(x, y, width, height);
    this.mushArray = [];
  }

  createMushrooms(numMushrooms) {
    for (let i = 0; i < numMushrooms; i++) {
      this.mushArray[i] = new Mushroom(Math.floor((Math.random() * 690)), Math.floor((Math.random() * 570)));
    }
  }
}

export default Mushroom;