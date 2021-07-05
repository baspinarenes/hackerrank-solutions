# 10 Days of JavaScript Problem Çözümleri

## Day 0

### Hello World

```js
function greeting(parameterVariable) {
  console.log('Hello, World!');
  console.log(parameterVariable);
}

// hackerrank tarafından eklenen kodlar
greeting('Welcome to 10 Days of JavaScript!');
```

### Data Types

```js
function performOperation(
  secondInteger, 
  secondDecimal, 
  secondString
) {
  const firstInteger = 4;
  const firstDecimal = 4.0;
  const firstString = 'HackerRank ';    

  console.log(firstInteger + Number(secondInteger));
  console.log(firstDecimal + Number(secondDecimal));
  console.log(firstString + secondString);
}

// hackerrank tarafından eklenen kodlar
performOperation(
  12, 
  4.32, 
  "is the best place to learn and practice coding!"
);
```

## Day 1

### Arithmetic Operators

```js
function getArea(length, width) {
  return length * width;
}

function getPerimeter(length, width) {
  return 2 * (length + width);
}

// hackerrank tarafından eklenen kodlar
let length = 3;
let width = 4.5;

console.log(
  getArea(length, width)
);

console.log(
  getPerimeter(length, width)
);
```

### Functions

```js
function factorial(number) {
  return [0, 1].includes(number) ? 1 : number * factorial(number - 1);
}

// hackerrank tarafından eklenen kodlar
console.log(
  factorial(5)
);
```