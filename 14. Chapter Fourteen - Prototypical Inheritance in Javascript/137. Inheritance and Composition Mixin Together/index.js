// Chapter Fourteen
// Inheritance and Composition Mixin

// Mixin
function mixin(target, ...sources) { // ... -> rest operator in ES6
  Object.assign(target, ...sources); // ... -> the spread operator in ES6
}

var canWalk = { // Object
  walk: function () { // Method
    console.log('Walking...');
  }
};

var canEat = { // Object
  eat: function () { // Method
    console.log('Eating...');
  }
};

// Another object
var canSwim = { // Object
  swim: function () { // Method
    console.log('Swimming...');
  }
};

// A new method of an object in es6 [Object.assign()]
// var person = Object.assign({}, canWalk, canEat); // person -> Object
// person.name = 'S M Anwarul Islam';
// console.log(person);
// expected output: (See the Chrome DevTools Console)
// -> {walk: ƒ, eat: ƒ}

// expected output: (See the Chrome DevTools Console) | person.name
// -> {name: "S M Anwarul Islam", walk: ƒ, eat: ƒ}

// console.log(person.eat());
// expected output: (See the Chrome DevTools Console)
// Eating...

// Constructor function
function Person(name) {
  this.name = name;
}
// Object.assign(Person.prototype, canWalk, canEat);
mixin(Person.prototype, canWalk, canEat); // mixin(target, ...sources) | Person.prototype -> direct object

var person = new Person('S M Anwarul Islam'); // Instance/Object
console.log(person);
// expected output: (See the Chrome DevTools Console)
/* -> Person {name: "S M Anwarul Islam"}
  name: "S M Anwarul Islam"
  -> __proto__: Object
    -> eat: ƒ ()
    -> walk: ƒ ()
    -> constructor: ƒ Person(name)
    -> __proto__: Object */

// expected output: (See the Chrome DevTools Console) | mixin
/* -> Person {name: "S M Anwarul Islam"}
  name: "S M Anwarul Islam"
  -> __proto__: Object
    -> eat: ƒ ()
    -> walk: ƒ ()
    -> constructor: ƒ Person(name)
    -> __proto__: Object */

// Constructor for GoldFish
function GoldFish(name) {
  this.name = name;
}
mixin(GoldFish.prototype, canEat, canSwim); // mixin(target, ...sources)

var fish = new GoldFish('bla bla bla'); // Instance/Object
console.log(fish);
// expected output: (See the Chrome DevTools Console) | mixin
/* -> GoldFish {name: "bla bla bla"}
  name: "bla bla bla"
  -> __proto__: Object
  -> eat: ƒ ()
  -> swim: ƒ ()
  -> constructor: ƒ GoldFish(name)
  -> __proto__: Object */