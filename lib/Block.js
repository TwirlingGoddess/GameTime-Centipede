class Block {
  constructor(x, y, canvasWidth) {
    this.x = x;
    this.y = y;
    this.width = 13;
    this.height = 13;
    this.dx = 14;
    this.dy = 4;
  }

  draw(context) {
    context.fillRect(this.x, this.y, this.width, this.height);
    return this;
  }

  move(x, y) {
    }
  }


  }  
}

module.exports = Block;