function regexVar() {
  let re = /^(Mr|Mrs|Ms|Dr|Er)\.[a-zA-z]+$/;

  return re;
}

const re = regexVar();
const s = "Mrs.Y";
    
console.log(
  !!s.match(re)
);