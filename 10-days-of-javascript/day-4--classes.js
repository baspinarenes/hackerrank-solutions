class Polygon {
  constructor(sideLenghths) {
    this.sideLenghth = sideLenghths;
  }

  perimeter() {
    return this.sideLenghth.reduce((total, current) => total + current);
  }
}

let triangle = new Polygon([3, 4, 5]);
console.log(triangle.perimeter())