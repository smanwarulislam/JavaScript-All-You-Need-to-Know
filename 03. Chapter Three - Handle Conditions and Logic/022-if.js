// Chapter Three
// How to Use If Condition

var a = 10;
var b = 20;

// We have Learned Conditional Operator

// a > b true false

/* if (condition) {
  
} */

if (a > b) {
  console.log('a is greater than b');
}

// expected output: Did not give any output

var a = 100;
var b = 20;

if (a > b) {
  console.log('a is greater than b');
}

// expected output: a is greater than b

var a = 10;
var b = 20;

if (a > b) {
  console.log('a is greater than b');
}

if (a < b) {
  console.log('b is greater than a');
}

// expected output: b is greater than a

var a = 10;
var b = 2;

if (a > b) {
  console.log('a is greater than b');
}

if (a < b) {
  console.log('b is greater than a');
}

// expected output: a is greater than b

// even or odd number
var n = 5;

if (n % 2 === 0) {
  console.log(n + ' is Even Number');
}

if (n % 2 === 1) {
  console.log(n + ' is Odd Number');
}

// expected output: 5 is Odd Number

var n = 50;

if (n % 2 === 0) {
  console.log(n + ' is Even Number');
}

if (n % 2 === 1) {
  console.log(n + ' is Odd Number');
}

// expected output: 50 is Even Number