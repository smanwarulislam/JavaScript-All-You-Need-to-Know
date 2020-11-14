// Chapter Nine
// Implement reduce() Method

var arr = [1, 2, 3, 4, 5];

// The sum of the array (arr)
var sum = arr.reduce(function (prev, curr) { // function (prev, curr) - prev -> It is also called an accumulator
  return prev + curr;
});

console.log(sum);
// expected output: 15

var sum = arr.reduce(function (prev, curr) { // function (prev, curr) - prev -> It is also called an accumulator
  return prev + curr;
}, 100); // 100 -> second parameter | 100 -> initial value

console.log(sum);
// expected output: 115

// The maximum value of the array (arr)
var max = arr.reduce(function (prev, curr) { // function (prev, curr) - prev -> It is also called an accumulator
  return Math.max(prev, curr);
}, 0);

console.log(max);
// expected output: 5

var arr2 = [1, 2, 45, 3, 4, 5];

var max = arr2.reduce(function (prev, curr) { // function (prev, curr) - prev -> It is also called an accumulator
  return Math.max(prev, curr);
}, 0);

console.log(max);
// expected output: 45

// Implementation of the reduce() method

// Implementation of the main function using a callback function
function myReduce(arr2, cb, acc) { // cb -> callback function | acc -> initializer or accumulator
  for (var i = 0; i < arr2.length; i++) {
    acc = cb(acc, arr2[i]); // acc -> first argument(original value) | arr2[i] -> second value/argument
  }

  return acc; // acc -> final result
}

// The sum of the array (arr2)
var sum2 = myReduce(arr2, function (prev, curr) {
  return prev + curr;
}, 0); // acc = 0 -> initial value or accumulator

// The maximum value of the array (arr2)
var max2 = myReduce(arr2, function (prev, curr) {
  return Math.max(prev, curr);
}, 0); // acc = 0 -> initial value or accumulator

// The minimum value of the array (arr2)
var min = myReduce(arr2, function (prev, curr) {
  return Math.min(prev, curr);
}, 0); // acc = 0 -> initial value or accumulator | first value/starting value = 0

console.log(sum2, max2, min);
// expected output: 60 45 0

// The minimum value of the array (arr2)
var min2 = myReduce(arr2, function (prev, curr) {
  return Math.min(prev, curr);
}, arr2[0]); // acc = 1 -> now initial value or accumulator

console.log(sum2, max2, min2);
// expected output: 60 45 1

var arr3 = [67, 1, 2, 45, 3, 4, 5];

// Implementation of the main function using a callback function
function myReduce(arr3, cb, acc) { // cb -> callback function | acc -> initializer or accumulator
  for (var i = 0; i < arr3.length; i++) {
    acc = cb(acc, arr3[i]); // acc -> first argument(original value) | arr3[i] -> second value/argument
  }

  return acc; // acc -> final result
}

// The sum of the array (arr3)
var sum3 = myReduce(arr3, function (prev, curr) {
  return prev + curr;
}, 0); // acc = 0 -> initial value or accumulator

// The maximum value of the array (arr3)
var max3 = myReduce(arr3, function (prev, curr) {
  return Math.max(prev, curr);
}, 0); // acc = 0 -> initial value or accumulator

// The minimum value of the array (arr3)
var min3 = myReduce(arr3, function (prev, curr) {
  return Math.min(prev, curr);
}, arr3[0]); // acc -> initial value or accumulator

console.log(sum3, max3, min3);
// expected output: 127 67 1