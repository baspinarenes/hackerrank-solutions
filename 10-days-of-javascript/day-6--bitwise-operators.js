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

console.log(
  getMaxLessThanK(5, 2)
);