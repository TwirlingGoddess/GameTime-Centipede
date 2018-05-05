import Block from './Block.js';

class Mushroom extends Block{
constructor(x, y, width, height, dx, dy) {
    super(x, y, width, height, dx, dy);
    this.x = Math.floor((Math.random() * 700));
    this.y = Math.floor((Math.random() * 600));
    this.dx = 0;
    this.dy = 0;
  }
}

// when mush created in index.js
// var mushroom = new Mushroom(x, y) ;
  // mushroom.draw(context, 'rgba()');
// 
export default Mushroom;