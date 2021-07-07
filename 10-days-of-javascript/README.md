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

### Let and Const

```js
const PI = Math.PI;
let radius = Number(readLine())

let areaOfCircle = PI * Math.pow(radius, 2);
let perimeterOfCircle = 2 * PI * radius;

console.log(areaOfCircle);
console.log(perimeterOfCircle);
```

## Day 2

### Conditional Statements: If-Else

```js
function getGrade(score) {
  let grade;
  
  if (25 < score) {
    grade = "A";
  } else if (20 < score) {
    grade = "B";
  } else if (15 < score) {
    grade = "C";
  } else if (10 < score) {
    grade = "D";
  } else if (5 < score) {
    grade = "E";
  } else {
    grade = "F"; 
  }
  
  return grade;
}

// hackerrank tarafından eklenen kodlar
console.log(
  getGrade(22)
);
```

### Conditional Statements: Switch

```js
function getLetter(s) {
  const firstLetter = s.toLowerCase().charAt(0);

  switch (firstLetter) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u": {
      return "A";
    }
    case "b":
    case "c":
    case "d":
    case "f":
    case "g": {
      return "B";
    }
    case "h":
    case "j":
    case "k":
    case "l":
    case "m": {
      return "C";
    }
    default: {
      return "D";
    }
  }
}

// hackerrank tarafından eklenen kodlar
console.log(
  getLetter('Enes')
);
```

### Loops

```js
function vowelsAndConsonants(s) {
  const vowels = ['a','e','i','o','u'];
  const letters = s.split('');

  const vowelsInWord = letters.filter((letter) => {
    return vowels.includes(letter);
  });

  const consonantsInWord = letters.filter((letter) => {
    return !vowels.includes(letter);
  });

  [...vowelsInWord, ...consonantsInWord].forEach((letter) => {
    console.log(letter);
  });
}

// hackerrank tarafından eklenen kodlar
vowelsAndConsonants("javascriptloops");
```

## Day 3

### Arrays

```js
function getSecondLargest(nums) {
  const sortedNums = [...nums].sort((a, b) => b - a);

  return sortedNums.find((num) => num !== sortedNums[0]);
}

// hackerrank tarafından eklenen kodlar
console.log(
  getSecondLargest([2, 3, 6, 6, 5])
);
```

### Try, Catch and Finally

```js
function reverseString(s) {
  try {
    const reversed = s.split('').reverse().join('');
    console.log(reversed)
  } catch (error) {
    console.log(error.message);
    console.log(s);
  }
}

// hackerrank tarafından eklenen kodlar
reverseString(Number(1234));
```

### Throw

```js
function isPositive(a) {
  if (a > 0) {
    return "YES";
  } else if (a === 0) {
    throw new Error('Zero Error');
  } else {
    throw new Error('Negative Error');
  }
}

// hackerrank tarafından eklenen kodlar
try {
  console.log(isPositive(-5));
} catch (error) {
  console.log(error.message);
}
```

## Day 4

### Create a Rectangle Object

```js
function Rectangle(a, b) {
  this.length = a;
  this.width = b;
  this.perimeter = 2 * (a + b);
  this.area = a * b;
}

// hackerrank tarafından eklenen kodlar
const rectangle = new Rectangle(4, 5);
console.log(rectangle.length)
console.log(rectangle.width)
console.log(rectangle.perimeter)
console.log(rectangle.area)
```

### Count Objects

```js
function getCount(objects) {
  let count = objects.reduce((total, currentValue) => {
    return currentValue.x === currentValue.y ? ++total : total
  }, 0);
  
  return count;
}

// hackerrank tarafından eklenen kodlar
const objects = [
  {x: 1, y: 1},
  {x: 2, y: 3},
  {x: 3, y: 3},
  {x: 3, y: 4},
  {x: 4, y: 5}
];

getCount(objects);
```

### Classes

```js
class Polygon {
  constructor(sideLengths) {
    this.sideLengths = sideLengths;
  }

  perimeter() {
    return this.sideLengths.reduce((total, current) => total + current);
  }
}

// hackerrank tarafından eklenen kodlar
let triangle = new Polygon([3, 4, 5]);
console.log(triangle.perimeter())
```

## Day 5

### Inheritance

```js
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

// hackerrank tarafından eklenen kodlar
const sqr = new Square(5);
console.log(sqr.area())
```

### Template Literals

```js
function sides(literals, ...expressions) {
  const a = expressions[0];
  const p = expressions[1];

  const s1 = (p + Math.sqrt(p**2 - 16 * a)) / 4;
  const s2 = (p - Math.sqrt(p**2 - 16 * a)) / 4;

  return [s1, s2].sort((a, b) => a - b);
}

// hackerrank tarafından eklenen kodlar
console.log(
  sides(
    [ 'The area is: ', '.\nThe perimeter is: ', '.' ], 
    140, 48
  )
);
```

### Arrow Functions

```js
function modifyArray(nums) {
  return nums.map((num) => !(num % 2) ? num * 2 : num * 3);
}

// hackerrank tarafından eklenen kodlar
console.log(
  modifyArray([1, 2, 3, 4, 5])
);
```

### Bitwise Operators

```js
function getMaxLessThanK(n, k) {
  let maxValue= 0;
  
  for (let i = 1; i <= n; i++) {
    for (let j = i + 1; j <= n ; j++) {
      let bitwiseResult = i & j;

      if (bitwiseResult < k && bitwiseResult > maxValue) {
        maxValue = bitwiseResult;
      }
    }
  }
  
  return maxValue;
}

// hackerrank tarafından eklenen kodlar
console.log(
  getMaxLessThanK(5, 2)
);
```