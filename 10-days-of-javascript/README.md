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