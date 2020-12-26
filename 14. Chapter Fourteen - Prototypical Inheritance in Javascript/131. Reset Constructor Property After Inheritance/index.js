// Chapter Fourteen
// Reset Constructor After Inheritance

// Shape -> Constructor function
function Shape() {

}

// Prototype
/* Shape.prototype = {
  common: function () { // Method
    console.log('I am Common Method');
  }
}; */

Shape.prototype.common = function () {
    console.log('I am Common Method');
};

// Square -> Constructor function
function Square(width) { // 1. Instance members/properties
  this.width = width;
}

// Object creation
// Square.prototype = Object.create(Shape.prototype); // This line can cause the inheritance
// Square.prototype = Object.create(Shape.prototype); // This line can cause the inheritance
Square.prototype = Object.create(Shape.prototype); // This line can cause the inheritance
Square.prototype.constructor = Square;

Square.prototype.draw = function () {
  console.log('Drawing');
};

// Prototype
/* Square.prototype = {
  test: function () {

  }
}; */

var shape = new Shape(); // Instance/Object

var sqr = new Square(45); // Instance/Object

// See the Chrome DevTools Console:

console.log(sqr);
// expected output: (See the Chrome DevTools Console)
/* -> Square {width: 45}
  -> __proto__: Object
    -> test: ƒ ()
    -> __proto__: Object */

// expected output: (See the Chrome DevTools Console)    
/* -> Square {width: 45}
  -> __proto__: Object
    -> draw: ƒ ()
    -> __proto__: Object
      -> common: ƒ ()
      -> __proto__: Object */

console.log(shape);
// expected output: (See the Chrome DevTools Console)
/* -> Shape {}
  -> __proto__: Object
    -> common: ƒ ()
    -> constructor: ƒ Shape() // constructor -> Property
    -> __proto__: Object */

console.log(new Shape.prototype.constructor());
// expected output: (See the Chrome DevTools Console)
/* -> Shape {}
  -> __proto__: Object
    -> common: ƒ ()
    -> constructor: ƒ Shape() // constructor -> Property
    -> __proto__: Object */

console.log(sqr);
// expected output: (See the Chrome DevTools Console)
/* -> Square {width: 45}
  -> __proto__: Object
    -> draw: ƒ ()
    -> constructor: ƒ Square(width) // constructor -> Property
    -> __proto__: Object */

console.log(new Square.prototype.constructor(47));
// expected output: (See the Chrome DevTools Console)
/* -> Square {width: 47}
  -> __proto__: Object
    -> draw: ƒ ()
    -> constructor: ƒ Square(width)
    -> __proto__: Object */

console.log(sqr);
// expected output: (See the Chrome DevTools Console)
/* -> Square {width: 45}
  -> __proto__: Shape
    -> draw: ƒ ()
    -> __proto__: Object
      -> common: ƒ ()
      -> constructor: ƒ Shape()
      -> __proto__: Object */

console.log(new Square.prototype.constructor());
// expected output: (See the Chrome DevTools Console)
/* -> Shape {}
  -> __proto__: Object
    -> common: ƒ ()
    -> constructor: ƒ Shape()
    -> __proto__: Object */

console.log(sqr);
// expected output: (See the Chrome DevTools Console)
/* -> Square {width: 45}
  -> __proto__: Shape
    -> draw: ƒ ()
    -> __proto__: Object
      -> common: ƒ ()
      -> constructor: ƒ Shape()
      -> __proto__: Object */

console.log(sqr);
// expected output: (See the Chrome DevTools Console)      
/* -> Square {width: 45}
  -> __proto__: Shape
    -> constructor: ƒ Square(width)
    -> draw: ƒ ()
    -> __proto__: Object
      -> common: ƒ ()
      -> constructor: ƒ Shape()
      -> __proto__: Object */

console.log(new Square.prototype.constructor(45));
// expected output: (See the Chrome DevTools Console)      
/* -> Square {width: 45}
  -> __proto__: Shape
    -> constructor: ƒ Square(width)
    -> draw: ƒ ()
    -> __proto__: Object
      -> common: ƒ ()
      -> constructor: ƒ Shape()
      -> __proto__: Object */