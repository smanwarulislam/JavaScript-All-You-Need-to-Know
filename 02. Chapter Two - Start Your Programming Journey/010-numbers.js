// Chapter Two
// All About Numbers in JS

// ********** NUMBERS **********

// JavaScript is Case Sensitive
// Meaning, var, and VAR or Var is not the same

var n = 1451;
var f = 3.14;

var nn = Number(45);

console.log(nn);
// expected output: 45

var nn = Number('45');

console.log(nn);
// expected output: 45

console.log(Number.parseFloat(nn));
// expected output: 45

var nn = Number('45.45');

console.log(Number.parseFloat(nn));
// expected output: 45.45

console.log(Number.parseInt(nn));
// expected output: 45

console.log(Number.MAX_VALUE);
// expected output: 1.7976931348623157e+308

console.log(Number.MIN_VALUE);
// expected output: 5e-324

// Data Types in JavaScript

// primitive
- Infinity
- NaN

// Infinity
console.log(1 / 0);
// expected output: Infinity

// NaN
console.log('abc' * 10);
// expected output: NaN