const PI = Math.PI;
//readLine() metodu HackerRank'in fonksiyonudur.
let radius = Number(readLine())

let areaOfCircle = PI * Math.pow(radius, 2);
let perimeterOfCircle = 2 * PI * radius;

console.log(areaOfCircle);
console.log(perimeterOfCircle);