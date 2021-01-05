import '../styles/index.scss';

// import { sum, sub  } from './math';

// console.log('Hello Webpack 4');

// console.log(sum(10, 20));
// console.log(sub(10, 20));

// Chapter Fifteen
// 139. Setup Your Environment for ES6

// alert('Yes, I have done everything perfectly.');

// Chapter Fifteen
// 140. How to Use Template String

var s = `asdfghjkl

qwertyuiop

lkjhgfdsa
    zxcvbnm  mnbvcxz`;

console.log(s);
// expected output: (See the Chrome DevTools Console)
/* asdfghjkl

qwertyuiop

lkjhgfdsa
    zxcvbnm  mnbvcxz */

var s2 = `    zxcvbnm

asdfghjkl

lkjhgfdsa
    qwertyuiop poiuytrewq    `; 

console.log(s2.trim());
// expected output: (See the Chrome DevTools Console)
/* zxcvbnm

asdfghjkl

lkjhgfdsa
    qwertyuiop poiuytrewq */

var age = 25;
var name = 'S M Anwarul Islam';

console.log('My name is ' + name + ' and I am ' + age + ' years old');
// expected output: (See the Chrome DevTools Console)
// My name is S M Anwarul Islam and I am 25 years old

console.log(`My name is ${name} and I am ${age} years old`);
// expected output: (See the Chrome DevTools Console)
// My name is S M Anwarul Islam and I am 25 years old

console.log(`My name is ${name} and I am ${age} years old. I am ${age < 18 ? 'not': ''}adult`);
// expected output: (See the Chrome DevTools Console)
// My name is S M Anwarul Islam and I am 25 years old. I am adult

var age2 = 15;
var name2 = 'S M Raju';

console.log(`My name is ${name2} and I am ${age2} years old. I am ${age2 < 18 ? 'not ': ''}adult`);
// expected output: (See the Chrome DevTools Console)
// My name is S M Raju and I am 15 years old. I am not adult

// String Methods
console.log(name2.padStart(15));
// expected output: (See the Chrome DevTools Console)
      //  S M Raju

console.log(name2.padStart(15, '*'));
// expected output: (See the Chrome DevTools Console)
// *******S M Raju

console.log(name2.padEnd(15, 'a'));
// expected output: (See the Chrome DevTools Console)
// S M Rajuaaaaaaa

console.log('S'.repeat(10));
// expected output: (See the Chrome DevTools Console)
// SSSSSSSSSS

// Chapter Fifteen
// 141. Let vs Const vs Var - What is the Difference

// var vs let vs const
// const a = 10;
// a = 100;

// console.log(a);
// expected output: (See the Chrome DevTools Console)
// "a" is read-only

let a = 10;
a = 100;

console.log(a);
// expected output: (See the Chrome DevTools Console)
// 100

if (true) {
  var a2 = 10;
}

console.log(a2);
// expected output: (See the Chrome DevTools Console)
// 10

for (var i = 0; i < 5; i++) {

}

console.log(i);
// expected output: (See the Chrome DevTools Console)
// 5

if (true) {
  let a3 = 10;
}

// console.log(a3);
// expected output: (See the Chrome DevTools Console)
// Uncaught ReferenceError: a3 is not defined

for (let i2 = 0; i2 < 5; i2++) {

}

// console.log(i2);
// expected output: (See the Chrome DevTools Console)
// Uncaught ReferenceError: i2 is not defined

{
  let iAmLet = 'I am let';
}

// console.log(iAmLet);
// expected output: (See the Chrome DevTools Console)
// Uncaught ReferenceError: iAmLet is not defined

// IIFE (Immediately Invoked Function Expression)
(function () {
  var abc = 'ABC';
  console.log(abc);
})();

// expected output: (See the Chrome DevTools Console)
// ABC (index.js:150)

// console.log(abc);
// expected output: (See the Chrome DevTools Console)
// Uncaught ReferenceError: abc is not defined (index.js:156)

// Chapter Fifteen
// 142. New Arrow Function Syntax in ES6

// Function declaration
/* function add(a, b) {
  return a + b;
} */

// Function expression
/* let sum = function (a, b) {
  return a + b;
}; */

// Arrow function/Arrow function expressions
let add = (a, b) => a + b; // implicit return
console.log(add(45, 50));
// expected output: (See the Chrome DevTools Console)
// 95

let sqr = x => x * x;
console.log(sqr(5));
// expected output: (See the Chrome DevTools Console)
// 25

// Chapter Fifteen
// 143. Arrow Functions and This - What is the Benefit

// 'this' keyword:
// Browser - Window object
// Node.js - Global object

function testMe() { // The whole system is running on Babel (babel.js) - Babel is a JavaScript compiler
  console.log(this); // If 'this' run in strict mode ("use strict") -> return undefined
}

testMe();
// expected output: (See the Chrome DevTools Console)
// undefined

function my() { // The whole system is running on Babel (babel.js) - Babel is a JavaScript compiler
  console.log(this); // If 'this' run in strict mode ("use strict") -> return undefined
}

my();
// expected output: (See the Chrome DevTools Console)
// undefined

// Open and see the new Chrome DevTools Console
/* function my() {
  console.log(this);
}

my(); */
// expected output: (See the new Chrome DevTools Console)
// -> Window {window: Window, self: Window, document: document, name: "", location: Location, …}

let obj = {
  name: 'S M Anwarul Islam',
  print: function () {
    console.log(this);
  }
};

obj.print();
// expected output: (See the Chrome DevTools Console)
// -> {name: "S M Anwarul Islam", print: ƒ}

let obj2 = { // Babel, Webpack | strict mode ("use strict")
  name2: 'S M Anwarul Islam',
  print2: () => {
    console.log(this);
  }
};

obj2.print2();
// expected output: (See the Chrome DevTools Console)
// undefined

// Non-strict mode ("use strict")
// Open and see the new Chrome DevTools Console
/* let obj2 = {
  name2: 'S M Anwarul Islam',
  print2: () => {
    console.log(this);
  }
};

obj2.print2(); */
// expected output: (See the new Chrome DevTools Console)
// -> Window {window: Window, self: Window, document: document, name: "", location: Location, …}

function testMe2() {
  console.log(this);
}

testMe2.call({});
// expected output: (See the Chrome DevTools Console)
// -> {}

/* let obj3 = {
  name3: 'S M Anwarul Islam',
  print3: function () {
    setTimeout(function () {
      alert(`Hello, ${this.name3}`);
    }, 1000);
  }
};

obj3.print3(); */
// expected output: (See the Chrome DevTools Console)
// Hello, undefined

/* let obj3 = {
  name3: 'S M Anwarul Islam',
  print3: function () {
    console.log(this.name3);
    setTimeout(function () { // function () {} -> Normal function/Pure function
      alert(`Hello, ${this.name3}`);
    }, 1000);
  }
};

obj3.print3(); */
// expected output: (See the Chrome DevTools Console)
// S M Anwarul Islam
// Hello, undefined

/* let obj3 = {
  name3: 'S M Anwarul Islam',
  print3: function () {
    console.log(this.name3);
    setTimeout(function () {  // function () {} -> Normal function/Pure function
      console.log(this); // Window object
      alert(`Hello, ${this.name3}`);
    }, 1000);
  }
};

obj3.print3(); */
// expected output: (See the Chrome DevTools Console)
// S M Anwarul Islam
// -> Window {window: Window, self: Window, document: document, name: "", location: Location, …}
// Hello, undefined

let obj3 = {
  name3: 'S M Anwarul Islam',
  print3: function () {
    let self = this; // A solution between the two
    setTimeout(function () {
      console.log(`Hello, ${self.name3}`);
    }, 1000);
  }
};

obj3.print3();
// expected output: (See the Chrome DevTools Console)
// Hello, S M Anwarul Islam

let obj4 = {
  name4: 'S M Anwarul Islam',
  print4: function () {
    setTimeout(function () { // function () {} -> Normal function/Pure function
      console.log(`Hello, ${this.name4}`);
    }.bind(this), 1000); // This is another solution
  }
};

obj4.print4();
// expected output: (See the Chrome DevTools Console)
// Hello, S M Anwarul Islam

let obj5 = {
  name5: 'S M Anwarul Islam',
  print5: function () {
    setTimeout(() => {  // A better solution to use the arrow function
      console.log(this); // Refer to the parent object/this
      console.log(`Hello, ${this.name5}`); // Refer to the parent object/this
    }, 1000);
  }
};

obj5.print5();
// expected output: (See the Chrome DevTools Console)
// -> {name5: "S M Anwarul Islam", print5: ƒ}
// Hello, S M Anwarul Islam