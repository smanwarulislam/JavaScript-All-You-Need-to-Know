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

// Chapter Sixteen
// 172. Error Handling with Try Catch Block [Runtime Errors]

function makeWords(text) {
  let str = text.trim();
  let words = str.split(' ');

  return words;
}

let words = makeWords('      I am S M Anwarul Islam      ');
console.log(words);
// expected output: (See the Chrome DevTools Console)
// -> (6) ["I", "am", "S", "M", "Anwarul", "Islam"]

function makeWords2(text2) {
  let str2 = text2.trim();
  let words2 = str2.split(' ');

  return words2;
}

/* let words2 = makeWords2(86);
console.log(words2); */
// expected output: (See the Chrome DevTools Console)
/* -> Uncaught TypeError: text2.trim is not a function
at makeWords2 (app.js:226)
at Object../src/app.js (app.js:232) */

// We will not be able to handle this error properly with if...else statement. We need something else.
// How will we handle any issue provided by the user?
// The easiest solution to handle this type of situation is the try-catch block

function makeWords3(text3) {
  try {
    let str3 = text3.trim();
    let words3 = str3.split(' ');

    return words3;
  } catch (e) {
    // console.log(e); // e -> Error object
    // console.dir(e);
    // console.log(e.message); // Custom handled error message
    console.log('Please provide a valid text');
  }
}

let words3 = makeWords3(86);
console.log(words3);
// expected output: (See the Chrome DevTools Console) | app.js:255
// undefined

// For console.log(e)
// expected output: (See the Chrome DevTools Console)
// This time the error was not shown in red color. Showed the error differently.
/* TypeError: text3.trim is not a function | app.js:250
at makeWords3 (app.js:245)
at Object../src/app.js (app.js:254) */

// For console.dir(e)
// expected output: (See the Chrome DevTools Console)
/* TypeError: text3.trim is not a function | app.js:251
->
at makeWords3 (http://localhost:9000/bundle.js:9543:22)
at Object../src/app.js (http://localhost:9000/bundle.js:9554:14)
at __webpack_require__ (http://localhost:9000/bundle.js:20081:32)
at http://localhost:9000/bundle.js:21064:11
at http://localhost:9000/bundle.js:21067:12
->
message: "text3.trim is not a function"
stack: "TypeError: text3.trim is not a function↵
-> __proto__: Error
  -> constructor: ƒ TypeError()
     message: ""
     name: "TypeError"
  -> __proto__: Object
    -> constructor: ƒ Error()
       message: ""
       name: "Error"
    -> toString: ƒ toString()       
    -> __proto__: Object */

// expected output: (See the Chrome DevTools Console) | app.js:256
// undefined

// For console.log(e.message)
// expected output: (See the Chrome DevTools Console)
// text3.trim is not a function | app.js:252

// expected output: (See the Chrome DevTools Console) | app.js:257
// undefined

// For console.log('Please provide a valid text')
// expected output: (See the Chrome DevTools Console)
// Please provide a valid text | app.js:253

// expected output: (See the Chrome DevTools Console) | app.js:258
// undefined