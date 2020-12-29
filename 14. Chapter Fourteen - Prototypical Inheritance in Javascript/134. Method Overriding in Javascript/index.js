// Chapter Fourteen
// Method Overriding in Javascript

function extend(Parent, Child) { // Parent, Child -> Constructor
  Child.prototype = Object.create(Parent.prototype); // Child -> Square, Circle | Parent -> Shape
  Child.prototype.constructor = Child;
}

// Shape -> Constructor function
function Shape(color) { // Parent function | Base class | Parent class
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

// Method override
// common method
Circle.prototype.common = function () {
  Shape.prototype.common.call(this); // common method call of the parent class
  console.log('I am Calling from Circle and I have Overridden');
};

// See the Chrome DevTools Console:

console.log(sqr.common());
// expected output: (See the Chrome DevTools Console)
// I am Common Method

var c = new Circle(5, 'red'); // Instance/Object

console.log(c.common());
// expected output: (See the Chrome DevTools Console)
// I am Common Method

var c2 = new Circle(4, 'Black'); // Instance/Object

console.log(c2.common());
// expected output: (See the Chrome DevTools Console)
// I am Calling from Circle and I have Overridden

console.log(sqr.common());
// expected output: (See the Chrome DevTools Console)
// I am Common Method

console.log(c.common());
// expected output: (See the Chrome DevTools Console)
// I am Common Method
// I am Calling from Circle and I have Overridden