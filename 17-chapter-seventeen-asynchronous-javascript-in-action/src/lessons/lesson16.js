// Chapter Seventeen
// 192. Async Iterator in Action

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

console.log(iterate);
// expected output: (See the Chrome DevTools Console)
// -> {next: ƒ}

console.log(iterate.next()); // It will return the promise. Just promise. But it will not return the 'value' and whether it's 'done'.
// expected output: (See the Chrome DevTools Console)
/* -> Promise {<fulfilled>: {…}}
  -> __proto__: Promise
    [[PromiseState]]: "fulfilled"
  -> [[PromiseResult]]: Object */

// What can we do to handle that?
/* What can we do to handle async Iterator?
- Can generate async function */

// I'll make IIFE but it will be asynchronous
(async function () {
  // I want to log the value to the console
  // let v = await iterate.next(); // How can a promise be resolved? - By await inside the asynchronous function
  // console.log(v);
  // Shortcut
  console.log(await iterate.next());
  console.log(await iterate.next());
  console.log(await iterate.next());
  console.log(await iterate.next());
  console.log(await iterate.next());
})(); // () -> Calling the IIFE

// For console.log(v)
// expected output: (See the Chrome DevTools Console)
// -> {value: 1, done: false} | lesson16.js:48

// For console.log(await iterate.next())
// expected output: (See the Chrome DevTools Console)
/* -> {value: 1, done: false}
-> {value: 2, done: false}
-> {value: 3, done: false}
-> {value: 4, done: false}
-> {done: true} */