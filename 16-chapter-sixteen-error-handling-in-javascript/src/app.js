// Chapter Sixteen
// 170. Errors in Javascript - How to Handle

// Error

// let n = 10;

/* if (n > 5) {
  throw new Error('n is greater than 5');
} */

// expected output: (See the Chrome DevTools Console)
/* -> Uncaught Error: n is greater than 5
at Object../src/app.js (app.js:9) */

// Error types:
// EvalError
// InternalError

// RangeError

// Uses the Chrome DevTools console
// Number.MAX_VALUE;
// 1.7976931348623157e+308

// let n2 = 2.7976931348623157e+608;

// console.log(n2);
// expected output: (See the Chrome DevTools Console)
// Infinity

// let n3 = 2.7976931348623157e+608;

/* if (n3 > Number.MAX_VALUE) {
  throw new RangeError('The number is too long');
} */

// expected output: (See the Chrome DevTools Console)
/* -> Uncaught RangeError: The number is too long
at Object../src/app.js (app.js:35) */

// let n4 = 56;

/* if (n4 > 50) {
  throw new RangeError('n4 is greater than 50');
} */

// expected output: (See the Chrome DevTools Console)
/* -> Uncaught RangeError: n4 is greater than 50
at Object../src/app.js (app.js:45) */

// ReferenceError

// console.log(a);
// expected output: (See the Chrome DevTools Console)
/* -> Uncaught ReferenceError: a is not defined
at Object../src/app.js (app.js:54) */

// SyntaxError

// console.log(a2;
// expected output: (See the Chrome DevTools Console)
// Webpack error message
/* -> Uncaught Error: Module build failed (from ./node_modules/babel-loader/lib/index.js):
SyntaxError: G:\GitHub\repositories\JavaScript-All-You-Need-to-Know\16-chapter-sixteen-error-handling-in-javascript\src\app.js: Unexpected token, expected "," (61:14) */

// Chapter Sixteen
// 171. Error Handling with If Else Condition Check [Logical Errors]

let n5 = Number.parseInt('45');
console.log(n5);
// expected output: (See the Chrome DevTools Console)
// 45

let n6 = Number.parseInt('45.456');
console.log(n6);
// expected output: (See the Chrome DevTools Console)
// 45

let n7 = Number.parseInt('dsfdsfsdfdsf');
console.log(n7);
// expected output: (See the Chrome DevTools Console)
// NaN

let n8 = Number.parseInt({});
console.log(n8);
// expected output: (See the Chrome DevTools Console)
// NaN

let n9 = Number.parseInt([]);
console.log(n9);
// expected output: (See the Chrome DevTools Console)
// NaN

// Error handling with if...else (if/else Statement)
// The easiest way to handle any kind of error is using if...else (if/else Statement)

function changeToInt(v) {
  let result = Number.parseInt(v);

  if (result === NaN) {
    console.log('Please provide a value that is able to convert in Integer');
    return; // If there is nothing with the return statement, there is no problem, he will return 'undefined'
  }

  return result;
}

let result = changeToInt('86.26');
console.log(result);
// expected output: (See the Chrome DevTools Console)
// 86

function changeToInt2(v2) {
  let result2 = Number.parseInt(v2);

  if (result2 === NaN) {
    console.log('Please provide a value that is able to convert in Integer');
    return; // If there is nothing with the return statement, there is no problem, he will return 'undefined'
  }

  return result2;
}

let result2 = changeToInt2('86.26dfghjds');
console.log(result2);
// expected output: (See the Chrome DevTools Console)
// 86

function changeToInt3(v3) {
  let result3 = Number.parseInt(v3);
  // console.log(result3); // expected output: NaN | app.js:131

  if (result3 === NaN) { // Note: NaN === NaN -> false
    console.log('Please provide a value that is able to convert in Integer');
    return; // If there is nothing with the return statement, there is no problem, he will return 'undefined'
  }

  return result3;
}

let result3 = changeToInt3('sdfgfdsdfsfd86.26dfghjds');
console.log(result3);
// expected output: (See the Chrome DevTools Console) | app.js:142
// NaN

// expected output: (See the Chrome DevTools Console) | app.js:131
// NaN

// Note:
// Uses the Chrome DevTools console
NaN === NaN;
// expected output:
// false

undefined === undefined;
// expected output:
// true

function changeToInt4(v4) {
  let result4 = Number.parseInt(v4);
  // console.log(result4); // expected output: NaN

  if (!result4) {
    console.log('Please provide a value that is able to convert in Integer');
    return; // If there is nothing with the return statement, there is no problem, he will return 'undefined'
  }

  return result4;
}

let result4 = changeToInt4('sdfgfdsdfsfd86.26dfghjds');
console.log(result4);
// expected output: (See the Chrome DevTools Console) | app.js:172
// undefined

// expected output: (See the Chrome DevTools Console) | app.js:164
// Please provide a value that is able to convert in Integer

function changeToInt5(v5) {
  let result5 = Number.parseInt(v5);

  if (!result5) {
    return 'Please provide a value that is able to convert in Integer';
  }

  return result5;
}

let result5 = changeToInt5('sdfgfdsdfsfd86.26dfghjds');
console.log(result5);
// expected output: (See the Chrome DevTools Console)
// Please provide a value that is able to convert in Integer

function changeToInt6(v6) {
  let result6 = Number.parseInt(v6);

  if (!result6) {
    return 'Please provide a value that is able to convert in Integer';
  }

  return result6;
}

let result6 = changeToInt6('85.96');
console.log(result6);
// expected output: (See the Chrome DevTools Console)
// 85