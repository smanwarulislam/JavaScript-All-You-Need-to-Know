console.log('Hello ES6');
console.log('Hello Webpack 5');
console.log('Hello Babel 7');

// Chapter Fifteen
// 151. What is Iterator - Iterator Basic Idea

const arr = [1, 2, 3];

/* for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
} */

/* function createIterator(collection) { // Interface/function
  let i = 0;
  return {
    next() { // Method
      return {
        done: i >= collection.length,
        value: collection[i++]
      };
    }
  };
} */

// let iterate = createIterator(arr);
// console.log(iterate);
// expected output: (See the Chrome DevTools Console)
/* -> {next: ƒ}
  -> next: ƒ next() */

// console.log(iterate.next());
// expected output: (See the Chrome DevTools Console)
/* -> {done: false, value: 1}
  done: false
  value: 1 */

// console.log(iterate.next());
// expected output: (See the Chrome DevTools Console)
/* -> {done: false, value: 2}
  done: false
  value: 2 */

// console.dir(iterate.next);
// expected output: (See the Chrome DevTools Console)
/* -> ƒ next()
  -> [[Scopes]]: Scopes[3]
    -> 0: Closure (createIterator) {collection: Array(3), i: 2}
      -> collection: (3) [1, 2, 3]
        i: 2 */

// console.log(iterate.next());
// expected output: (See the Chrome DevTools Console)
/* -> {done: false, value: 3}
  done: false
  value: 3 */

// console.log(iterate.next());
// expected output: (See the Chrome DevTools Console)  
/* -> {done: true, value: undefined}
  done: true
  value: undefined */

// Chapter Fifteen  
// 152. Create Iterator with ES6 Symbol.Iterator Function

// console.log(arr[Symbol.iterator]); // The Symbol is a unique identifier
// expected output: (See the Chrome DevTools Console)
// ƒ values() { [native code] }

// console.log('str'[Symbol.iterator]);
// expected output: (See the Chrome DevTools Console)
// ƒ [Symbol.iterator]() { [native code] }

// In the case of arrays
let iterate = arr[Symbol.iterator](); // Symbol.iterator -> Already the interface is in an implementation state

console.log(iterate.next());
// expected output: (See the Chrome DevTools Console)
/* -> {value: 1, done: false}
  done: false
  value: 1 */

console.log(iterate.next());
// expected output: (See the Chrome DevTools Console)
/* -> {value: 2, done: false}
  done: false
  value: 2 */

console.log(iterate.next());
// expected output: (See the Chrome DevTools Console)
/* -> {value: 3, done: false}
  done: false
  value: 3 */

console.log(iterate.next());
// expected output: (See the Chrome DevTools Console)
/* -> value: undefined, done: true}
  done: true
  value: undefined */

// In the case of string
let str = 'TEXT';
let iterateText = str[Symbol.iterator]();

console.log(iterateText.next());
// expected output: (See the Chrome DevTools Console)
/* -> {value: "T", done: false}
  done: false
  value: "T" */

console.log(iterateText.next());
// expected output: (See the Chrome DevTools Console)
/* -> {value: "E", done: false}
  done: false
  value: "E" */

console.log(iterateText.next());
// expected output: (See the Chrome DevTools Console)
/* -> {value: "X", done: false}
  done: false
  value: "X" */

console.log(iterateText.next());
// expected output: (See the Chrome DevTools Console)
/* -> {value: "T", done: false}
  done: false
  value: "T" */

console.log(iterateText.next());
// expected output: (See the Chrome DevTools Console)
/* -> {value: undefined, done: true}
  done: true
  value: undefined */