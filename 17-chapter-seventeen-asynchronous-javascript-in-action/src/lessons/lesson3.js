// Chapter Seventeen
// 179. How to Store Result Returned from Asynchronous Function

// Let's create an asynchronous function
function sayMyName(name) {
  let result; // Here the value of the result is 'undefined' before the call of setTimeout() function

  setTimeout(() => { // () => {} -> Callback function | setTimeout() -> Asynchronous function
    result = name;
    console.log('I have done...');
  }, 3000);

  return result; // The value of the result is 'undefined' before the call of setTimeout() function
}

let output = sayMyName('S M Anwarul Islam');
console.log(output);
// expected output: (See the Chrome DevTools Console)
// undefined | lesson3.js:17

// expected output: (See the Chrome DevTools Console) | After 3 seconds
// I have done... | lesson3.js:10

// Problem:
// Why is the result/output 'undefined'?

// Solution:
/* There is only one solution in this case
The operation has to be handled where there is an asynchronous task */

function sayMyName2(name2) {
  setTimeout(() => {
    console.log(name2); // Solution
  }, 3000);
}

let output2 = sayMyName2('S M Anwarul Islam');
console.log(output2);
// expected output: (See the Chrome DevTools Console)
// undefined | lesson3.js:38

// expected output: (See the Chrome DevTools Console)
// S M Anwarul Islam | lesson3.js:33