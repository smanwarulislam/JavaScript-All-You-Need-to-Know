// Chapter Thirteen
// What is Property Descriptor

var person = { // Object literal
  name: 'S M Raju' // name -> Property
};

console.log(person);
// expected output: (See the Chrome DevTools Console)
/* -> {name: "S M Raju"}
  -> __proto__: Object */

// See the Chrome DevTools Console:  
person.toString();
// expected output: (See the Chrome DevTools Console)
// "[object Object]"

// The for...in statement
for (var i in person) {
  console.log(i);
}

// expected output: name

console.log(Object.keys(person));
// expected output: -> ["name"]

// Property descriptor of person object
// A property descriptor is basically an object
var descriptor = Object.getOwnPropertyDescriptor(person, 'name');
console.log(descriptor);
// expected output: (See the Chrome DevTools Console)
/* -> {value: "S M Raju", writable: true, enumerable: true, configurable: true}
  -> __proto__: Object */

// The descriptor of toString()
var baseObj = Object.getPrototypeOf(person); // Person's prototype
console.log(baseObj);
// expected output: (See the Chrome DevTools Console)
// -> {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}

var descriptor2 = Object.getOwnPropertyDescriptor(baseObj, 'toString');
console.log(descriptor2);
// expected output: (See the Chrome DevTools Console)
/* -> {writable: true, enumerable: false, configurable: true, value: ƒ}
  -> __proto__: Object */

// Creating some property descriptors for the person object
Object.defineProperty(person, 'name', {
  enumerable: false,
  writable: false,
  configurable: false,
  value: 'S M Anwarul Islam'
});

// Chrome DevTools Console
// expected output: (See the Chrome DevTools Console)
console.log(person);
// expected output:
/* -> {name: "S M Raju"}
  -> __proto__: Object */

console.log(Object.keys(person));
// expected output:
// -> [] // enumerable: false

// The for...in statement
for (var i in person) {
  console.log(i);
}

// expected output:
// undefined

person.name = 'S M Anwarul Islam';
console.log(person); // writable: false
// expected output:
/* -> {name: "S M Raju"}
  -> __proto__: Object */

console.log(delete person.name);
// expected output:
// false // configurable: false

console.log(person); // Before value: 'S M Anwarul Islam'
// expected output:
/* -> {name: "S M Raju"}
  -> __proto__: Object */

console.log(person);
// expected output:
/* -> {name: "S M Anwarul Islam"}
  -> __proto__: Object */