
class Block {
  constructor(x, y, width, height, dx, dy) {
    this.x = 100;
    this.y = 100;
    this.width = 15;
    this.height = 15;
    this.dx = 10;
    this.dy = 2;
  }

  move(x, y) {

  }

  draw(context, color) {
    context.fillRect(this.x, this.y, this.width, this.height);
    context.fillStyle = color;
    return this;
  }


  

}



export default Block;