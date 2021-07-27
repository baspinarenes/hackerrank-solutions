function regexVar() {
  let re = /^([aeiou]).+\1$/;

  return re;
}

const re = regexVar();
const s = "abcda";
    
console.log(
  re.test(s)
);