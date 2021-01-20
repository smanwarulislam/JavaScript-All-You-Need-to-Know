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

// Chapter Fifteen
// 153. How does For of Loop Work

// The for...of statement
for (let v of arr) { // v = value
  console.log(v);
}

// expected output: (See the Chrome DevTools Console)
/* 1
2
3 */

// String
// Since the string is iterable
for (let v of 'S M Anwarul Islam') {
  console.log(v);
}

// expected output: (See the Chrome DevTools Console)
/* S

M

A
n
w
a
r
u
l

I
s
l
a
m */

// Object
/* let obj = {
  a: 10,
  b: 20
};

for (let v of obj) {
  console.log(v);
} */

// expected output: (See the Chrome DevTools Console)
/* Uncaught TypeError: Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method. */

// Chapter Fifteen
// 154. What is Generator Function in ES6

let obj = {
  start: 1,
  end: 5,
  /* [Symbol.iterator]: function () { // [Symbol.iterator] -> Iterator interface implement
    let currentValue = this.start;
    const self = this;
    return {
      next() {
        return {
          done: currentValue > self.end,
          value: currentValue > self.end ? undefined : currentValue++
        };
      }
    };
  } */
  [Symbol.iterator]: function* () { // function* -> Generator
    let currentValue2 = this.start;
    while (currentValue2 <= this.end) {
      yield currentValue2++; // yield -> Keep doing pause
    }
  }
};

let iterate2 = obj[Symbol.iterator]();
console.log(iterate2.next());
// expected output: (See the Chrome DevTools Console)
// -> {done: false, value: 1}

console.log(iterate2.next());
// expected output: (See the Chrome DevTools Console)
// -> {done: false, value: 2}

console.log(iterate2.next());
// expected output: (See the Chrome DevTools Console)
// -> {done: false, value: 3}

console.log(iterate2.next());
// expected output: (See the Chrome DevTools Console)
// -> {done: false, value: 4}

console.log(iterate2.next());
// expected output: (See the Chrome DevTools Console)
// -> {done: false, value: 5}

console.log(iterate2.next());
// expected output: (See the Chrome DevTools Console)
// -> {done: true, value: undefined}

console.log(iterate2.next());
// expected output: (See the Chrome DevTools Console)
// -> {done: true, value: undefined}

function* generate() {
  yield 1; // yield -> pause
  yield 2; // yield -> pause
  yield 3; // yield -> pause
  // return undefined;
}

let it = generate(); // it for iterator
console.log(it);
// expected output: (See the Chrome DevTools Console)
// -> Generator {_invoke: ƒ}

console.log(it.next());
// expected output: (See the Chrome DevTools Console)
// -> {value: 1, done: false}

console.log(it.next());
// expected output: (See the Chrome DevTools Console)
// -> {value: 2, done: false}

console.log(it.next());
// expected output: (See the Chrome DevTools Console)
// -> {value: 3, done: false}

console.log(it.next());
// expected output: (See the Chrome DevTools Console)
// -> {value: undefined, done: true}

function* generate2(collection2) {
  for (let i = 0; i < collection2.length; i++) {
    yield collection2[i];
  }
}

let it2 = generate2(arr);
console.log(it2.next());
// expected output: (See the Chrome DevTools Console)
// -> {value: 1, done: false}

console.log(it2.next());
// expected output: (See the Chrome DevTools Console)
// -> {value: 2, done: false}

console.log(it2.next());
// expected output: (See the Chrome DevTools Console)
// -> {value: 3, done: false}

console.log(it2.next());
// expected output: (See the Chrome DevTools Console)
// -> {value: undefined, done: true}

const arr2 = [10, 22, 35];

function* generate3(collection3) {
  for (let i = 0; i < collection3.length; i++) {
    yield collection3[i];
  }
}

let it3 = generate3(arr2);
console.log(it3.next());
// expected output: (See the Chrome DevTools Console)
// -> {value: 10, done: false}

console.log(it3.next());
// expected output: (See the Chrome DevTools Console)
// -> {value: 22, done: false}

console.log(it3.next());
// expected output: (See the Chrome DevTools Console)
// -> {value: 35, done: false}

console.log(it3.next());
// expected output: (See the Chrome DevTools Console)
// -> {value: undefined, done: true}

// Chapter Fifteen
// 155. How to Create Custom Iterable Object

let obj2 = {
  start: 1,
  end: 5
};

// The for...of statement
/* for (let v of obj2) {
  console.log(v);
} */

// expected output: (See the Chrome DevTools Console)
/* -> bundle.js:9336 Uncaught TypeError: Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method. */

let obj3 = {
  start: 1,
  end: 5,
  [Symbol.iterator]: function () {
    let currentValue3 = this.start;
    const self2 = this;
    return {
      next() {
        return {
          done: currentValue3 > self2.end,
          // value: currentValue3++
          // Extra logic
          value: currentValue3 > self2.end ? undefined : currentValue3++
        };
      }
    };
  }
};

// The for...of statement
for (let v of obj3) {
  console.log(v);
}

// expected output: (See the Chrome DevTools Console)
/* 1
2
3
4
5 */

// Works as an iterator
let iterate3 = obj3[Symbol.iterator]();
console.log(iterate3.next());
// expected output: (See the Chrome DevTools Console)
// -> {done: false, value: 1}

console.log(iterate3.next());
// expected output: (See the Chrome DevTools Console)
// -> {done: false, value: 2}

console.log(iterate3.next());
// expected output: (See the Chrome DevTools Console)
// -> {done: false, value: 3}

console.log(iterate3.next());
// expected output: (See the Chrome DevTools Console)
// -> {done: false, value: 4}

console.log(iterate3.next());
// expected output: (See the Chrome DevTools Console)
// -> {done: false, value: 5}

console.log(iterate3.next());
// expected output: (See the Chrome DevTools Console)
// -> {done: true, value: undefined}

console.log(iterate3.next());
// expected output: (See the Chrome DevTools Console)
// -> {done: true, value: undefined}