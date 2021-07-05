function getArea(length, width) {
  return length * width;
}

function getPerimeter(length, width) {
  return 2 * (length + width);
}

let length = 3;
let width = 4.5;

console.log(
  getArea(length, width)
);

console.log(
  getPerimeter(length, width)
);