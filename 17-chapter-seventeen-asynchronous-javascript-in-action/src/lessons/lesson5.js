// Chapter Seventeen
// 181. How does Javascript Handle Asynchronous Programming

console.log('I am Line One'); // Synchronous code

setTimeout(() => {
  console.log('I am Line Two');
}, 3000);

console.log('I am Line Three');

// expected output: (See the Chrome DevTools Console)
// I am Line One
// I am Line Three
// I am Line Two

// The JavaScript engine (V8) handles this asynchronous matter in a very nice system.
// Behind the Scene JavaScript engine uses four terms to be asynchronous:
/* Call Stack
Web API
Callback/Task Queue
Event Loop */

// Let's simulate the whole process graphically...
/* - Call Stack (It's a data structure like Stack) | It uses LIFO (Last In First Out) method
...
...
...
console.log(); // I am Line One
console.log(); // I am Line Three
setTimeout(); // I am Line Two
Main();

- Web API // setTimeout(() => {}) -> This setTimeout() is not a code of JavaScript. This code is providing Web API
...
...
...
setTimeout();

- Callback/Task Queue (It's a data structure like Queue) | FIFO (First In First Out)
...
...
...
setTimeout();

- Event Loop */