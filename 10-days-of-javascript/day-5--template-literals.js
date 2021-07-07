function sides(literals, ...expressions) {
  const a = expressions[0];
  const p = expressions[1];

  const s1 = (p + Math.sqrt(p**2 - 16 * a)) / 4;
  const s2 = (p - Math.sqrt(p**2 - 16 * a)) / 4;

  return [s1, s2].sort((a, b) => a - b);
}

console.log(
  sides(
    [ 'The area is: ', '.\nThe perimeter is: ', '.' ], 
    140, 48
  )
);
