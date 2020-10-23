// Chapter Six
// How to Reverse Array Elements?

// Reverse an array

// Example
// [1, 2, 3, 4, 5]
// [5, 4, 3, 2, 1]

// Problem
var arr = [1, 2, 3, 4, 5, 6, 7];

// Solution
// Implementation of logical way
for (var i = 0; i < (arr.length/2); i++) {
  var temp = arr[i];

  arr[i] = arr[arr.length - 1 - i];
  arr[arr.length - 1 - i] = temp;
}

console.log(arr);
// expected output: [7, 6, 5, 4, 3, 2, 1]

// Problem
var arr2 = [1, 2, 3, 4, 5, 6, 7, 8];

// Solution
// Implementation of logical way
for (var i = 0; i < (arr2.length/2); i++) {
  var temp = arr2[i];

  arr2[i] = arr2[arr2.length - 1 - i];
  arr2[arr2.length - 1 - i] = temp;
}

console.log(arr2);
// expected output: [8, 7, 6, 5, 4, 3, 2, 1]

// Problem
var arr3 = [1, 2, 3, 4, 5, 6, 7, 8];

// Solution
// Using the reverse method (built-in array method/function)
console.log(arr3.reverse());
// expected output: [8, 7, 6, 5, 4, 3, 2, 1]