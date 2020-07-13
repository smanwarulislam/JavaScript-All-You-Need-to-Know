// Chapter Two
// All Kinds of Operators in JavaScript

// Arithmetic Operators
// + - * / % ++ --

// %
var a = 10;
var b = 3;

console.log(a % b);
// expected output: 1

var a = 11;
var b = 3;

console.log(a % b);
// expected output: 2

var a = 11;
var b = 6;

console.log(a % b);
// expected output: 5

// Increment
// Pre Increment
// Post Increment

var a = 11;
var b = 6;

// Pre Increment
// console.log(++a);
// expected output: 12

// Post Increment
console.log(a++); // a = a + 1
// expected output: 11

console.log(a);
// expected output: 12

// Decrement
// Pre Decrement
// Post Decrement

// Pre Decrement
// console.log(--b);
// expected output: 5

// Post Decrement
console.log(b--);
// expected output: 6

console.log(b);
// expected output: 5

// Assignment Operators

var a = 10;
var b = 20;

// a = a + b;
a += b;

console.log(a);
// expected output: 30

// a = a - b;
a -= b;

console.log(a);
// expected output: 10

// a = a * b;
a *= b;

console.log(a);
// expected output: 200

// a = a / b;
a /= b;

console.log(a);
// expected output: 10

// a = a % b;
a %= b;

console.log(a);
// expected output: 10

// Comparison Operators

var a = 10;
var b = 20;

console.log(a == b);
// expected output: false

var a = 20;
var b = 20;

console.log(a == b);
// expected output: true

var a = 10;
var b = 20;

console.log(a != b);
// expected output: true

console.log(a > b);
// expected output: false

console.log(a < b);
// expected output: true

console.log(a >= b);
// expected output: false

console.log(a <= b);
// expected output: true

a = 20;

console.log(a >= b);
// expected output: true

console.log(a <= b);
// expected output: true

var c = '50';
var d = 50;

console.log(c == d);
// expected output: true

console.log(c === d);
// expected output: false

console.log(c !== d);
// expected output: true

// Logical Operators

// &&
// ||
// !

// Bitwise Operators

// &
// |
// ~
// ^
// <<
// >>

// typeof Operator

console.log(typeof 10);
// expected output: number

console.log(typeof 'String');
// expected output: string