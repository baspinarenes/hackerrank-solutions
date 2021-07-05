function factorial(number) {
  return [0, 1].includes(number) ? 1 : number * factorial(number - 1);
}

console.log(
  factorial(5)
);