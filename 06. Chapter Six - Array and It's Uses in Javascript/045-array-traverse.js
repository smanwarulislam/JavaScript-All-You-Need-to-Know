// Chapter Six
// What is Array Traversing in JavaScript?

// Traverse an Array

var arr = [4, 5, 1, 6, 8, 9, 40];

// arr[0]
// arr[1]
// arr[2]
// arr[3]
// arr[arr.length - 1]

for (var i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// expected output:
/* 4
5
1
6
8
9
40 */

// Adds 2 to each array element
var arr = [4, 5, 1, 6, 8, 9, 40];

for (var i = 0; i < arr.length; i++) {
  arr[i] = arr[i] + 2;
}

console.log(arr);
// expected output: [6, 7, 3, 8, 10, 11, 42]

// The sum of the elements/numbers of the array
var arr = [4, 5, 1, 6, 8, 9, 40];

var sum = 0;

for (var i = 0; i < arr.length; i++) {
  sum += arr[i];
}

console.log(sum);
// expected output: 73

var arr = [4, 5, 1, 6, 8, 9, 40, 50];

var sum = 0;

for (var i = 0; i < arr.length; i++) {
  sum += arr[i];
}

console.log(sum);
// expected output: 123

// Even numbers in an array
var arr = [4, 5, 1, 6, 8, 9, 40];

for (var i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    console.log(arr[i]);
  }
}

// expected output:
/* 4
6
8
40 */

var arr = [4, 5, 1, 6, 8, 9, 40, 50];

for (var i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    console.log(arr[i]);
  }
}

// expected output:
/* 4
6
8
40
50 */

// Tasks

// Odd numbers in an array
var arr = [4, 5, 1, 6, 8, 9, 40];

for (var i = 0; i < arr.length; i++) {
  if (arr[i] % 2 !== 0) {
    console.log(arr[i]);
  }
}

// expected output:
/* 5
1
9 */

// The sum of even numbers in an array
var arr = [4, 5, 1, 6, 8, 9, 40];

var sum = 0;

for (var i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    sum += arr[i];
  }
}

console.log(sum);
// expected output: 58

// The sum of odd numbers in an array
var arr = [4, 5, 1, 6, 8, 9, 40];

var sum = 0;

for (var i = 0; i < arr.length; i++) {
  if (arr[i] % 2 !== 0) {
    sum += arr[i];
  }
}

console.log(sum);
// expected output: 15