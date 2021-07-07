function modifyArray(nums) {
  return nums.map((num) => !(num % 2) ? num * 2 : num * 3);
}

console.log(
  modifyArray([1, 2, 3, 4, 5])
);