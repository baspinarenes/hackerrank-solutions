function getSecondLargest(nums) {
  const sortedNums = [...nums].sort((a, b) => b - a);

  return sortedNums.find((num) => num !== sortedNums[0]);
}

console.log(
  getSecondLargest([2, 3, 6, 6, 5])
);