// Chapter Seventeen
// 190. Functionalities Came with Promise

// We will try to understand some of the Promises own API or Promises method by applying

// Creating a delay function or delay functionality
const delay = s => new Promise(resolve => setTimeout(resolve, s*1000));

delay(2).then(() => console.log('2 seconds delay'));
delay(1).then(() => console.log('1-second delay'));
delay(3).then(() => console.log('3 seconds delay'));
delay(2).then(() => console.log('2 seconds delay'));
delay(5).then(() => console.log('5 seconds delay'));

// expected output: (See the Chrome DevTools Console)
// 1-second delay
// 2 seconds delay
// 2 seconds delay
// 3 seconds delay
// 5 seconds delay

// Working with Promise API or Promise Method

// The Promise.resolve() method
// The Promise.reject() method
// The Promise.all() method
// The Promise.race() method

// Promise.resolve()
let p1 = Promise.resolve('Test');
console.log(p1);
// expected output: (See the Chrome DevTools Console)
/* -> Promise {<fulfilled>: "Test"}
  -> __proto__: Promise
    [[PromiseState]]: "fulfilled"
    [[PromiseResult]]: "Test" */

// Work with p1 promise
p1.then(v => console.log(v));
// expected output: (See the Chrome DevTools Console)
// Test

// Promise.reject()
let p2 = Promise.reject('Reject');
p2.catch(e => console.log(e));
// expected output: (See the Chrome DevTools Console)
// Reject

// Promise.all()
// Example
let p3 = Promise.resolve('One');
let p4 = Promise.resolve('Two');
let p5 = Promise.resolve('Three');

let promiseArr = [p3, p4, p5];

Promise.all(promiseArr)
  .then(arr => {
    console.log(arr);
  });

// expected output: (See the Chrome DevTools Console)
// -> (3) ["One", "Two", "Three"]

// Creating a promise using setTimeout()
let p6 = new Promise(resolve => {
  setTimeout(resolve, 5000, 'Four');
});

let p7 = new Promise(resolve => {
  setTimeout(resolve, 3000, 'Five');
});

let p8 = new Promise(resolve => {
  setTimeout(resolve, 4000, 'Six');
});

let promiseArr2 = [p6, p7, p8];

Promise.all(promiseArr2)
  .then(arr2 => console.log(arr2));

// expected output: (See the Chrome DevTools Console)  
// -> (3) ["Four", "Five", "Six"]

// Promise.race()
Promise.race(promiseArr2)
  .then(v2 => console.log(v2));

// expected output: (See the Chrome DevTools Console)
// Five