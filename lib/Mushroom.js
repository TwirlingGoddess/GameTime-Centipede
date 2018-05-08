import Block from './Block.js';

class Mushroom extends Block{
constructor(width, height) {
    super(width, height);
    this.x = Math.floor((Math.random() * 690));
    this.y = Math.floor((Math.random() * 570));
    this.mushArray = [];
  }
}

export default Mushroom;