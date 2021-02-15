// Chapter Seventeen
// 188. What is Promise, Take a Look at It

// Promise making system

// Let's make a promise
// Since Promise is a constructor function
let p1 = new Promise((resolve, reject) => { // resolve, reject -> Each of these is functions

});
console.log(p1);
// expected output: (See the Chrome DevTools Console)
/* -> Promise {<pending>}
  -> __proto__: Promise
    [[PromiseState]]: "pending"
    [[PromiseResult]]: undefined */

// Let's make a promise
// Since Promise is a constructor function
let p2 = new Promise((resolve, reject) => { // resolve, reject -> Each of these is functions
  setTimeout(resolve, 5000, 'One'); // setTimeout() -> If you want to create asynchronous flavor we have setTimeout()
});
console.log(p2);
// expected output: (See the Chrome DevTools Console) | (Up to 5 seconds)
/* -> Promise {<pending>}
  -> __proto__: Promise
    [[PromiseState]]: "pending"
    [[PromiseResult]]: undefined */

// expected output: (See the Chrome DevTools Console) | (If you expand the promise object after 5 seconds)
/* -> Promise {<pending>}
  -> __proto__: Promise
    [[PromiseState]]: "fulfilled"
    [[PromiseResult]]: "One" */

// Let's make another promise
let p3 = new Promise((resolve, reject) => { // resolve, reject -> Each of these is functions
  setTimeout(resolve, 3000, 'Two'); // setTimeout() -> If you want to create asynchronous flavor we have setTimeout()
});
console.log(p3);
// expected output: (See the Chrome DevTools Console) | (If you expand the promise object after 3 seconds)
/* -> Promise {<pending>}
  -> __proto__: Promise
    [[PromiseState]]: "fulfilled"
    [[PromiseResult]]: "Two" */

// Let's see how to handle the promise or how to deal with the values inside the promise

p2.then((v) => { // then() -> If anything is 'resolve'
  console.log(v);
}).catch((e) => { // catch() -> If anything is 'reject' | catch() means to catch the error
  console.log(e); // expected output: We did not receive any rejection so no output
});

// expected output: (See the Chrome DevTools Console) | (After 5 seconds)
// One

p3.then((v) => {
  console.log(v);
});

// expected output: (See the Chrome DevTools Console) | (After 3 seconds) | (p3 will be printed out before p2)
// Two

// We need to understand what the use case of promise is

function getiPhone(isPassed) {
  // In that case, I can make a promise here
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isPassed) {
        resolve('I have got an iPhone');
      } else {
        reject(new Error('You have failed'));
      }
    }, 2000); // 2000 -> We took 2 seconds to explain the asynchronous idea
  });
}

// console.log(getiPhone(true));
// expected output: (See the Chrome DevTools Console)
/* -> Promise {<pending>}
  -> __proto__: Promise
    [[PromiseState]]: "fulfilled"
    [[PromiseResult]]: "I have got an iPhone" */

// console.log(getiPhone(false));
// expected output: (See the Chrome DevTools Console)
// -> Uncaught (in promise) You have failed | lesson12.js:74

/* -> Promise {<pending>} | lesson12.js:87
  -> __proto__: Promise
    [[PromiseState]]: "rejected"
    [[PromiseResult]]: "You have failed" */

// Now it is the turn of resolving this promise/How do we resolve this promise?
getiPhone(true)
  .then((res) => {
    console.log(res);
  })
  .catch((e) => {
    console.log(e.message);
  });

// expected output: (See the Chrome DevTools Console)  
// I have got an iPhone

getiPhone(false)
  .then((res) => {
    console.log(res);
  })
  .catch((e) => {
    // console.log(e);
    console.log(e.message);
  });

// For console.log(e)
// expected output: (See the Chrome DevTools Console)
/* Error: You have failed | lesson12.js:113
  at lesson12.js:74 */

// For console.log(e.message)
// You have failed