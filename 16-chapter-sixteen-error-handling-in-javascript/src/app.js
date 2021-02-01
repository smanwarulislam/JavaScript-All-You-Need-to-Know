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