// Chapter Thirteen
// Prototype and Prototypical Inheritance

// The prototype in JavaScript is the parent class

// Chrome DevTools Console
// expected output: (See the Chrome DevTools Console)

var obj = {}; // Object literal
console.log(obj);
// expected output: (See the Chrome DevTools Console)
/* -> {}
-> __proto__: Object */

var obj2 = new Object(); // Object constructor
console.log(obj2);
// expected output: (See the Chrome DevTools Console)
/* -> {}
-> __proto__: Object */

obj.__proto__ === obj2.__proto__;
// expected output: true

Object.getPrototypeOf(obj);
// expected output:
// -> {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}

Object.getPrototypeOf(obj2);
// expected output:
// -> {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}

Object.getPrototypeOf(obj) === Object.getPrototypeOf(obj2);
// expected output: true