//using node for console.log

//print reverse order of array

// let arr = [1, 2, 3, 4];
function printReverse(arr) {
  for (var i = arr.length - 1; i > -1; i--) {
    console.log(arr[i]);
    // return arr[i]
  }
}
// printReverse([6, 3, 9, 4, 5, 8]);

//is array uniform

function isUniform(arr) {
  let a = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== a) {
      console.log('false');
      return false;
    }
  }
  console.log('true');
  return true;
}

// isUniform([1,1,1,1,1]);


//sum of array

// function sumArray(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++){
//     sum = arr[i] + sum;
//   }
//   console.log(sum)
// };

function sumArray(arr) {
  let sum = 0;
  arr.forEach(function(el) {
    sum = el + sum;
  })
  console.log(sum);
}

// sumArray([1, 50, -27, 100]);


//return max element in array

// function max(arr) {
//   console.log(Math.max(...arr));
// };

function max(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  console.log(max);
}

// max([50, 60, 5]);


const movies = [
  {
    movie: 'Blazing Saddles',
    rating: '5/5',
    hasWatched: true
  },
  {
    movie: 'Space Balls',
    rating: '5/5',
    hasWatched: true
  },
  {
    movie: 'The Little Mermaid',
    rating: '2/5',
    hasWatched: false
  },
  {
    movie: 'The Legend of Donkey Kong',
    rating: '3/5',
    hasWatched: false
  },
  {
    movie: 'The Netflix story: Unofficial',
    rating: '4/5',
    hasWatched: false
  }
];

// console.log(movies[1].movie);

function movieDeets(arr) {
  arr.forEach(function(el, i) {
    let watched;
    if ( arr[i].hasWatched === true) {
      watched = 'You have watched ';
    }
    else {
      watched = 'You have not watched ';
    }
    console.log(watched + arr[i].movie + ' - ' + arr[i].rating + ' stars.');
  })
}

movieDeets(movies);
