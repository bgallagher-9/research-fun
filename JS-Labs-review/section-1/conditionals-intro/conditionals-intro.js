function describeLetter(char) {
  console.log(char);
  if (char === 'b' || char === 'c') {
    console.log(char);
    return "consonant";
  }
  else if (char === 'a') {
    console.log(char);
    return "vowel";
  }
  else if (char === '.') {
    console.log(char);
    return "punctuation";
  }
  else {
    return "something else";
  }
};

function identifyPerson(title, lastName) {
  if (title === 'Mr' && lastName === 'Anderson') {
    return 'The chosen one';
  }
  else {
    return 'Some random dude';
  }
}
