// Chapter Eight
// Function Arguments and Parameters

// Input Processing Output

// Processing Output

function add() {
  var a = 10;
  var b = 20;
  console.log(a + b);
}

function sub() {
  var a = 50;
  var b = 20;
  console.log(a - b);
}

add();
// expected output: 30

add();
// expected output: 30

add();
// expected output: 30

add();
// expected output: 30

sub();
// expected output: 30

console.log(add());
// expected output:
/* 30
undefined */

// Input

// Add two numbers in function
function add2(a, b) {
  var result = a + b;
  console.log(result);
}

add2(10, 20);
// expected output: 30

add2(7, 3);
// expected output: 10

add2(500, 700);
// expected output: 1200

// Tasks
// Subtract two numbers in function
function sub2(a, b) {
  var result = a - b;
  console.log(result);
}

sub2(20, 10);
// expected output: 10

sub2(7, 3);
// expected output: 4

sub2(700, 500);
// expected output: 200

// The sum of the elements/numbers of each array
var arr1 = [1, 2, 3];
var arr2 = [5, 7, 9];
var arr3 = [9, 7, 1];

var sum1 = 0;
for (var i = 0; i < arr1.length; i++) {
  sum1 += arr1[i];
}

console.log(sum1);
// expected output: 6

var sum2 = 0;
for (var i = 0; i < arr2.length; i++) {
  sum2 += arr2[i];
}

console.log(sum2);
// expected output: 21

var sum3 = 0;
for (var i = 0; i < arr3.length; i++) {
  sum3 += arr3[i];
}

console.log(sum3);
// expected output: 17

// Challenge
// The sum of the elements/numbers of each array using the function

// Solution
function sumOfArray(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  console.log(sum);
}

sumOfArray(arr1);
// expected output: 6

sumOfArray(arr2);
// expected output: 21

sumOfArray(arr3);
// expected output: 17

var arr1 = [1, 2, 3];
var arr2 = [5, 7, 9, 10];
var arr3 = [9, 7, 1, 5, 7];

function sumOfArray(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  console.log(sum);
}

sumOfArray(arr1);
// expected output: 6

sumOfArray(arr2);
// expected output: 31

sumOfArray(arr3);
// expected output: 29