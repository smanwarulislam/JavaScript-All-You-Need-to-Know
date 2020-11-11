// Chapter Nine
// Implement forEach() Method

var arr = [1, 2, 3, 4, 5];

arr.forEach(function (value, index, arr) {
  console.log(value, index, arr);
});

// expected output:
/* 1 0 -> (5) [1, 2, 3, 4, 5]
2 1 -> (5) [1, 2, 3, 4, 5]
3 2 -> (5) [1, 2, 3, 4, 5]
4 3 -> (5) [1, 2, 3, 4, 5]
5 4 -> (5) [1, 2, 3, 4, 5] */

// summation of the array (arr)
var sum = 0;

arr.forEach(function (value, index, arr) {
  sum += value;
});

console.log(sum);
// expected output: 15

// Implementation of the forEach() method
/* function forEach(arr) {
  for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

forEach(arr); */
// expected output:
/* 1
2
3
4
5 */

function forEach(arr, cb) {
  for (var i = 0; i < arr.length; i++) {
    cb(arr[i]);
  }
}

forEach(arr, function (value) {
  console.log(value);
});

// expected output:
/* 1
2
3
4
5 */

// summation of the array (arr)
// Implementation of the forEach() method
function forEach(arr, cb) { // Behind the scenes
  for (var i = 0; i < arr.length; i++) {
    cb(arr[i]);
  }
}

var sum2 = 0;

forEach(arr, function (value) {
  sum2 += value;
});

console.log(sum2);
// expected output: 15

// Get the value, index, and arr
function forEach(arr, cb) { // Behind the scenes
  for (var i = 0; i < arr.length; i++) {
    cb(arr[i], i, arr);
  }
}

forEach(arr, function (value, index, arr) {
  console.log(value, index, arr);
});

// expected output:
/* 1 0 -> (5) [1, 2, 3, 4, 5]
2 1 -> (5) [1, 2, 3, 4, 5]
3 2 -> (5) [1, 2, 3, 4, 5]
4 3 -> (5) [1, 2, 3, 4, 5]
5 4 -> (5) [1, 2, 3, 4, 5] */

// Adds 5 to each array element
forEach(arr, function (value, index, arr) {
  arr[index] = value + 5;
});

console.log(arr);
// expected output: [6, 7, 8, 9, 10]