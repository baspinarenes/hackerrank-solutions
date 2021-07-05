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

console.log(
  getGrade(22)
);