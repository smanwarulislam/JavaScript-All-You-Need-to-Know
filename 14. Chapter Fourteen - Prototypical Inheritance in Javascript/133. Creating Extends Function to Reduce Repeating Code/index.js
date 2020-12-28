// Chapter Fourteen
// Creating Our Own Extends Function

function extend(Parent, Child) { // Parent, Child -> Constructor
  Child.prototype = Object.create(Parent.prototype); // Child -> Square, Circle | Parent -> Shape
  Child.prototype.constructor = Child;
}

// Shape -> Constructor function
function Shape(color) { // Parent function
  this.color = color; // Initialize
}

Shape.prototype.common = function () {
    console.log('I am Common Method');
};

// Square -> Constructor function
function Square(width, color) {
  Shape.call(this, color); // super for other object-oriented programming languages when making calls
  this.width = width;
}
extend(Shape, Square); // Parent -> Shape | Child -> Square

// Object creation
// Square.prototype = Object.create(Shape.prototype); // This line can cause the inheritance
// Square.prototype.constructor = Square; // Constructor is setting

Square.prototype.draw = function () {
  console.log('Drawing');
};

// var shape = new Shape(); // Instance/Object

var sqr = new Square(45, 'green'); // Instance/Object

// Chain:
// shape -> Shape -> Object
// sqr -> Square -> Object

// Need to maintain this chain/relationship:
// sqr -> Square -> Shape -> Object

// Circle -> Constructor function
function Circle(radius, color) {
  Shape.call(this, color); // super for other object-oriented programming languages when making calls
  this.radius = radius;
}
extend(Shape, Circle); // Parent -> Shape | Child -> Circle

// Object creation
// Circle.prototype = Object.create(Shape.prototype); // This line can cause the inheritance
// Circle.prototype.constructor = Circle; // Constructor is setting

// See the Chrome DevTools Console:

var c = new Circle(5, 'red'); // Instance/Object
console.log(c);
// expected output: (See the Chrome DevTools Console)
/* -> Circle {color: "red", radius: 5}
  color: "red"
  radius: 5
  -> __proto__: Shape */

console.log(sqr);
// expected output: (See the Chrome DevTools Console)
/* -> Square {color: "green", width: 45}
  color: "green"
  width: 45
  -> __proto__: Shape */

console.log(new Circle(10, 'red'));
// expected output: (See the Chrome DevTools Console)
/* -> Circle {color: "red", radius: 10}
  color: "red"
  radius: 10
  -> __proto__: Shape
    -> constructor: ƒ Circle(radius, color)
    -> __proto__: Object
      -> common: ƒ ()
      -> constructor: ƒ Shape(color)
      -> __proto__: Object */