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