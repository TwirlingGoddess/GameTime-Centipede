import Block from './Block.js';

class Mushroom extends Block{
constructor(x, y, width, height, dx, dy, mushArray) {
    super(x, y, width, height, dx, dy);
    this.x = Math.floor((Math.random() * 690));
    this.y = Math.floor((Math.random() * 570));
    this.dx = 0;
    this.dy = 0;
    this.mushArray = [];
  }
}

// when mush created in index.js
// var mushroom = new Mushroom(x, y) ;
  // mushroom.draw(context, 'rgba()');
// 
export default Mushroom;