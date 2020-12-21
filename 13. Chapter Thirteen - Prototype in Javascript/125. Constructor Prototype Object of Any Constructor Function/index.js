// Chapter Thirteen
// Constructor Prototype of any Object

function Person(name) { // Person -> Constructor/Constructor function
  this.name = name;
}

Person.prototype.PI = 3.1416;

var p1 = new Person('S M Anwarul Islam'); // p1 -> Object | Person() -> Person constructor
var p2 = new Person('Raju');

// A simple way to bring out his prototype from an object
console.log(Object.getPrototypeOf(p1));
// expected output: (See the Chrome DevTools Console)
/* -> {constructor: ƒ}
  -> constructor: ƒ Person(name)
  -> __proto__: Object */

// Person.prototype.PI = 3.1416;
// expected output: (See the Chrome DevTools Console)
// -> {PI: 3.1416, constructor: ƒ}

// This prototype can be found in another way
// p1.__proto__; // Deprecation

// Another way is to get a prototype of an object
console.log(Person.prototype); // prototype -> Property
// expected output: (See the Chrome DevTools Console)
/* -> {constructor: ƒ}
  -> constructor: ƒ Person(name)
  -> __proto__: Object */

// Person.prototype.PI = 3.1416;
// expected output: (See the Chrome DevTools Console)
// -> {PI: 3.1416, constructor: ƒ}  

console.log(Object.getPrototypeOf(p1) === Person.prototype);
// expected output: (See the Chrome DevTools Console)
// true

console.log(p1);
// expected output: (See the Chrome DevTools Console)
// -> Person {name: "S M Anwarul Islam"}

console.log(p2);
// expected output: (See the Chrome DevTools Console)
// -> Person {name: "Raju"}

var a = {};
console.log(a);
// expected output: (See the Chrome DevTools Console)
/* -> {}
  -> __proto__: Object */

var arr = [];
console.log(arr);
// expected output: (See the Chrome DevTools Console)
/* -> []
  length: 0
  -> __proto__: Array(0)
    -> __proto__: Object */

// See the Chrome DevTools Console:
console.log(arr.__proto__);
// expected output: (See the Chrome DevTools Console)
// [constructor: ƒ, concat: ƒ, copyWithin: ƒ, fill: ƒ, find: ƒ, …]

// Now I will make some changes to the original array
console.log(Array.prototype.myMethod = function () {});
// expected output: (See the Chrome DevTools Console)
// ƒ () {}

console.log(arr);
// expected output: (See the Chrome DevTools Console)
/* -> []
  length: 0
  -> __proto__: Array(0)
    -> myMethod: ƒ ()
    -> __proto__: Object */

var another = [];
console.log(another);
// expected output: (See the Chrome DevTools Console)
/* -> []
  length: 0
  -> __proto__: Array(0)
    -> myMethod: ƒ ()
    -> __proto__: Object */