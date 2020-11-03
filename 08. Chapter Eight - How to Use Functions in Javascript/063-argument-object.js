// Chapter Eight
// Argument Object of a Function

// Arguments and Parameters

// Add two numbers in function
function add(a, b) { // add(a, b) - a, b -> Parameters
  var result = a + b;
  console.log(result);
}

add(10, 20); // add(10, 20) - 10, 20 -> Arguments
// expected output: 30

add(7, 3); // add(7, 3) - 7, 3 -> Arguments
// expected output: 10

add(500, 700); // add(500, 700) - 500, 700 -> Arguments
// expected output: 1200

// The sum of the elements/numbers of each array
var arr1 = [1, 2, 3];
var arr2 = [5, 7, 9];
var arr3 = [9, 7, 1];

// The sum of the elements/numbers of each array using the function
// Solution
function sumOfArray(arr) { // arr -> Parameters
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  console.log(sum);
}

sumOfArray(arr1); // arr1 -> Arguments
// expected output: 6

sumOfArray(arr2); // arr2 -> Arguments
// expected output: 21

sumOfArray(arr3); // arr3 -> Arguments
// expected output: 17

// Argument Object

function test(a, b, c) {
  console.log(arguments); // arguments -> JavaScript Object
}

test();
// using the Cmder console emulator
// expected output: [Arguments] {}

// using the Chrome DevTools Console
// expected output: -> Arguments [callee: ƒ, Symbol(Symbol.iterator): ƒ]

function test(a, b, c) {
  console.log(JSON.stringify(arguments));
}

test();
// expected output: {}

function test(a, b, c) {
  console.log(JSON.stringify(arguments));
  console.log(typeof a);
}

test();
// expected output:
/* {}
undefined */

function test(a, b, c) {
  console.log(arguments);
}

test(10, 20, 30);
// using the Cmder console emulator
// expected output: [Arguments] { '0': 10, '1': 20, '2': 30 }

// using the Chrome DevTools Console
// expected output: -> Arguments(3) [10, 20, 30, callee: ƒ, Symbol(Symbol.iterator): ƒ]

function test(a, b, c) {
  for (var i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);
  }
}

test(10, 20, 30);  
// expected output:
/* 10
20
30 */

function test() {
  for (var i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);
  }
}

test(10, 20, 30);  
// expected output:
/* 10
20
30 */

function addAll() {
  var sum2 = 0;
  for (var i = 0; i < arguments.length; i++) {
    sum2 += arguments[i];
  }

  console.log(sum2);
}

addAll(1, 2, 3);
// expected output: 6

addAll(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
// expected output: 55