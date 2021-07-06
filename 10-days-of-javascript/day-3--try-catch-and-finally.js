function reverseString(s) {
  try {
    const reversed = s.split('').reverse().join('');
    console.log(reversed)
  } catch (error) {
    console.log(error.message);
    console.log(s);
  }
}

reverseString(Number(1234));