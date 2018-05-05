import Block from './Block.js';

class Mushroom extends Block{
constructor(x, y, width, height, dx, dy) {
    super( width, height, dx, dy);
    this.x = (Math.random() * 700);
    this.y = this.x + 10;
  }
}

// when mush created in index.js
// var mushroom = new Mushroom(x, y) ;
  // mushroom.draw(context, 'rgba()');
// 
export default Mushroom;