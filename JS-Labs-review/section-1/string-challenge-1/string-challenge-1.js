function stripPuncutation(str) {
  var result = str.split(',').join('').split('.').join('').split(':').join('');
  return result;
}

function stringReverser(str) {
  var result = '';
  for (let i = str.length - 1; i > -1; i--) {
    result += str[i];
  }
  return result;
}

function truncate(sentence) {
  var result = sentence.substring(0, 15) + '...';
  return result;
}

function truncateByCount(sentence, count) {
  var result = sentence.substring(0, count) + '...';
  return result;
}

function capitalizeEveryOtherLetter(str) {
  var result = '';
  for (let i = 0; i < str.length; i++) {
    if (i % 2 === 0) {
      result += str[i].toUpperCase();
    }
    else if (i % 2 === 1) {
      result += str[i].toLowerCase();
    }
  }
  return result;
}
