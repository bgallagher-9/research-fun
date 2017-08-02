function arrayReverser(arr) {
  var result = [];
  // result.push(arr[2], arr[1], arr[0])
  for (var i = arr.length-1; i > -1; i--) {
    result.push(arr[i]);
  }
  return result;
}

function sumArrayOfNumbers(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
  }
  return result;
}


function numbersOver10(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 10) {
      result.push(arr[i]);
    }
  }
  return result;
}

function numbersOverX(arr, num) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > num) {
      result.push(arr[i]);
    }
  }
  return result;
}

function stringsLongerThanFourLetters(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > 4) {
      result.push(arr[i]);
    }
  }
  return result;
}

function stringsLongerThanXLetters(arr, length) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > length) {
      result.push(arr[i]);
    }
  }
  return result;
}
