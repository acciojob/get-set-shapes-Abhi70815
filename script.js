class Rectangle {
  constructor(width, height) {
    this._width = width;
    this._height = height;
  }

  get width() {
    return this._width;
  }

  get height() {
    return this._height;
  }

  getArea() {
    return this.width * this.height;
  }
}

class Square extends Rectangle {
  constructor(side) {
    super(side, side); // Call the parent class constructor with side for both width and height
  }

  getPerimeter() {
    return 4 * this.width; // Since width is equal to height for a square, we can use either property
  }
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
