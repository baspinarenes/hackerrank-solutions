function getCount(objects) {
  let count = objects.reduce((total, currentValue) => {
    return currentValue.x === currentValue.y ? ++total : total
  }, 0);

  return count;
}

const objects = [
  {x: 1, y: 1},
  {x: 2, y: 3},
  {x: 3, y: 3},
  {x: 3, y: 4},
  {x: 4, y: 5}
];

getCount(objects);