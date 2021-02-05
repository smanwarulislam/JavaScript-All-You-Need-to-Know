// Chapter Seventeen
// 178. Asynchronous Programming in Action (Simulate Using Java & Javascript)

// Synchronous Programming

/* console.log('I am Line One');
console.log('I am Line Two');
console.log('I am Line Three');
console.log('I am Line Four');
console.log('I am Line Five'); */

// expected output: (See the Chrome DevTools Console)
/* I am Line One
I am Line Two
I am Line Three
I am Line Four
I am Line Five */

// Asynchronous Programming

// The setTimeout() method
// window.setTimeout();
// global.setTimeout();

// setTimeout();
/* setTimeout(() => {
  console.log('I have done');
}, 5000); */

// expected output: (See the Chrome DevTools Console) | Output after 5 seconds
// I have done

console.log('I am Line One'); // Just Synchronous -> It is a Synchronous function

setTimeout(() => { // setTimeout() is an Asynchronous function
  console.log('I am Line Two');
}, 3000);

setTimeout(() => { // setTimeout() is an Asynchronous function
  console.log('I am Line Three');
}, 0);

console.log('I am Line Four'); // It is a Synchronous function

setTimeout(() => { // setTimeout() is an Asynchronous function
  console.log('I am Line Five');
}, 1000);

// expected output: (See the Chrome DevTools Console)
// I am Line One
// I am Line Four
// I am Line Three
// I am Line Five
// I am Line Two