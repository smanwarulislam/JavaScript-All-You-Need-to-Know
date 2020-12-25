// Chapter Fourteen
// First Prototypical Inheritance

// Shape -> Constructor function
function Shape() {

}

// Prototype
Shape.prototype = {
  common: function () { // Method
    console.log('I am Common Method');
  }
};

// Square -> Constructor function
function Square(width) { // 1. Instance members/properties
  this.width = width;
}

// Object creation
Square.prototype = Object.create(Shape.prototype);

Square.prototype.draw = function () {
  console.log('Drawing');
};

// Prototype
/* Square.prototype = { // 2. Prototype members/methods
  draw: function () { // Method
    console.log('Drawing');
  },
  // common: function () { // Method
  //   console.log('I am Common Method');
  // }
}; */

// var s1 = new Square(45); // Object
// console.log(s1);
// expected output: (See the Chrome DevTools Console)
/* -> Square {width: 45}
  -> __proto__: Object
    -> common: ƒ ()
    -> draw: ƒ ()
    -> __proto__: Object */

// var shape = new Shape(); // Instance/Object
// console.log(shape);
// expected output: (See the Chrome DevTools Console)
/* -> Shape {}
  -> __proto__: Object
    -> common: ƒ ()
    -> __proto__: Object */

// var sqr = new Square(45); // Instance/Object
// console.log(sqr);
// expected output: (See the Chrome DevTools Console)
/* -> Square {width: 45}
  -> __proto__: Object
    -> draw: ƒ ()
    -> __proto__: Object */

// Chain:
// shape -> Shape -> Object
// sqr -> Square -> Object

// Need to maintain this chain/relationship:
// sqr -> Square -> Shape -> Object

var shape = new Shape(); // Instance/Object
console.log(shape);
// expected output: (See the Chrome DevTools Console)
/* -> Shape {}
  -> __proto__: Object
    -> common: ƒ ()
    -> __proto__: Object */

var sqr = new Square(45); // Instance/Object
console.log(sqr);
/* expected output: (See the Chrome DevTools Console) | We have included this chain/relationship: sqr -> Square -> Shape -> Object */
/* -> Square {width: 45}
  -> __proto__: Object
    -> draw: ƒ ()
    -> __proto__: Object
      -> common: ƒ ()
      -> __proto__: Object */

console.log(sqr.common());
// expected output: (See the Chrome DevTools Console)
// I am Common Method

// Circle -> Constructor function
function Circle() {

}

// Object creation
Circle.prototype = Object.create(Shape.prototype);

var circle = new Circle(); // Instance/Object
console.log(circle);
// expected output: (See the Chrome DevTools Console)
/* -> Circle {}
  -> __proto__: Object
    -> __proto__: Object
      -> common: ƒ ()
      -> __proto__: Object */

console.log(circle.common());
// expected output: (See the Chrome DevTools Console)
// I am Common Method