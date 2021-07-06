function vowelsAndConsonants(s) {
  const vowels = ['a','e','i','o','u'];
  const letters = s.split('');

  const vowelsInWord = letters.filter((letter) => {
    return vowels.includes(letter);
  });

  const consonantsInWord = letters.filter((letter) => {
    return !vowels.includes(letter);
  });

  [...vowelsInWord, ...consonantsInWord].forEach((letter) => {
    console.log(letter);
  });
}

// hackerrank tarafından eklenen kodlar
vowelsAndConsonants("javascriptloops");