// Chapter Seventeen
// 186. Callback Not Always Mean Asynchronous

/* Callback's two works:
1. One is,
Passing another function in the form of an argument inside a function. There he will do certain things.
2. And another is,
Callback also handles asynchronous tasks. */

/* Today we will see that,
- What changes in behavior if we normally pass callback in the form of arguments within a function
- And what changes if we pass callback inside the asynchronous function */

// - What changes in behavior if we normally pass callback in the form of arguments within a function
let arr = [1, 2, 3, 4];

let sqrArr = arr.map(v => v * v);

console.log(sqrArr);
// expected output: (See the Chrome DevTools Console)
// -> (4) [1, 4, 9, 16]

// - And what changes if we pass callback inside the asynchronous function
function asyncMap(arr, cb) {
  return arr.map(v => {
    setTimeout(cb, 0); // Calling setTimeout() became asynchronous | 0 -> Asynchronous flavor as value is therefore 0
  });
}

let qbArr = asyncMap(arr, v => v * v * v); // cb -> v => v * v * v -> That is our callback

console.log(qbArr);
// expected output: (See the Chrome DevTools Console)
// -> (4) [undefined, undefined, undefined, undefined]

// So if you want to use this asyncMap() function properly then you have to do it
function asyncMap2(arr, cb2) {
  return arr.map(v2 => {
    setTimeout(cb2, 0); // Calling setTimeout() became asynchronous | 0 -> Asynchronous flavor as value is therefore 0
  });
}

let qbArr2 = asyncMap2(arr, v2 => {
  console.log(v2);
});

console.log(qbArr2);

// expected output: (See the Chrome DevTools Console)
// (4 times) undefined | lesson10.js:44

// (4) [undefined, undefined, undefined, undefined] | lesson10.js:47

// (4 times) undefined | lesson10.js:44
// Solution
function asyncMap3(arr, cb3) {
  return arr.map(v3 => {
    // This is one of the ways to solve it (Using bind())
    // setTimeout(cb3.bind(null, v3), 0);
    // The second solution being
    setTimeout(() => cb3(v3));
  });
}

let qbArr3 = asyncMap3(arr, v3 => {
  console.log(v3);
});

console.log(qbArr3);

// expected output: (See the Chrome DevTools Console) | lesson10.js:66
/* 1
2
3
4 */

// (4) [undefined, undefined, undefined, undefined] | lesson10.js:69