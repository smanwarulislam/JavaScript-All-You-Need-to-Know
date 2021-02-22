// Chapter Seventeen
// 193. Async Iterator and For Await Of Loop

// The iterator is not asynchronous at all. The iterator is synchronous.
// Now we will see how to make that synchronous iterator into an asynchronous iterator

let asyncIterable = {
  [Symbol.asyncIterator]() {
    let i = 0;
    return {
      next() {
        if (i < 5) {
          return Promise.resolve({
            value: i++,
            done: false
          });
        } else {
          return Promise.resolve({
            done: true
          });
        }
      }
    };
  }
};

let iterate = asyncIterable[Symbol.asyncIterator]();

// console.log(iterate);
// expected output: (See the Chrome DevTools Console)
// -> {next: ƒ}

// console.log(iterate.next()); // It will return the promise. Just promise. But it will not return the 'value' and whether it's 'done'.
// expected output: (See the Chrome DevTools Console)
/* -> Promise {<fulfilled>: {…}}
  -> __proto__: Promise
    [[PromiseState]]: "fulfilled"
  -> [[PromiseResult]]: Object */

// I'll make IIFE but it will be asynchronous
/* (async function () {
  // I want to log the value to the console
  // let v = await iterate.next(); // How can a promise be resolved? - By await inside the asynchronous function
  // console.log(v);
  // Shortcut
  console.log(await iterate.next());
  console.log(await iterate.next());
  console.log(await iterate.next());
  console.log(await iterate.next());
  console.log(await iterate.next());
  console.log(await iterate.next());
})(); */ // () -> Calling the IIFE

// For console.log(v)
// expected output: (See the Chrome DevTools Console)
// -> {value: 0, done: false}

// For console.log(await iterate.next())
// expected output: (See the Chrome DevTools Console)
/* -> {value: 0, done: false}
-> {value: 1, done: false}
-> {value: 2, done: false}
-> {value: 3, done: false}
-> {value: 4, done: false}
-> {done: true} */

// Implementation of 'for await of' loop

// Note:
// 'await' is needed to handle the asynchronous task. To make an 'await' call, there must be a function that is asynchronous

// At first, take an IIFE
/* (async function () {
  for (let v of iterate) {
    console.log(v);
  }
})(); */

// expected output: (See the Chrome DevTools Console)
/* -> Uncaught (in promise) TypeError: Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method. */

// The reason for this problem (error) is that I have tried to run 'for of' loop on top of the 'iterate'

/* (async function () {
  for (let v of asyncIterable) {
    console.log(v);
  }
})(); */

// expected output: (See the Chrome DevTools Console)
/* -> Uncaught (in promise) TypeError: Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method. */

(async function () {
  for await (let v of asyncIterable) { // Since it is asynchronous so added the 'await' keyword 
    console.log(v);
  }
})();

// expected output: (See the Chrome DevTools Console)
/* 0
1
2
3
4 */

// Note:
// So we can represent any asynchronous iterator 'for await of' loop if we wish. Not the normal 'for of' loop. It takes the 'for await of' loop.