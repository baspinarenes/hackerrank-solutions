class Rectangle {
  constructor(w, h) {
    this.w = w;
    this.h = h;
  }
}

Rectangle.prototype.area = function() {
  return this.w * this.h;
};

class Square extends Rectangle {
  constructor(s) {
    super(s, s);
  }
}

const sqr = new Square(5);
console.log(sqr.area())