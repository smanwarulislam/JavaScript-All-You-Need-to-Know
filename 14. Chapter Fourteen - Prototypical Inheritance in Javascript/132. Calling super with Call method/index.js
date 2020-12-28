// Chapter Fourteen
// Calling Super with the Call Method

// Shape -> Constructor function
function Shape(color) { // Parent function
  this.color = color; // Initialize
}

Shape.prototype.common = function () {
    console.log('I am Common Method');
};

// Square -> Constructor function
function Square(width, color) {
  // Shape(color);
  // new Shape(color);
  Shape.call(this, color); // super for other object-oriented programming languages when making calls
  this.width = width;
}

// Object creation
Square.prototype = Object.create(Shape.prototype); // This line can cause the inheritance
Square.prototype.constructor = Square;

Square.prototype.draw = function () {
  console.log('Drawing');
};

// var shape = new Shape(); // Instance/Object

var sqr = new Square(45, 'green'); // Instance/Object

// See the Chrome DevTools Console:

console.log(sqr);
// expected output: (See the Chrome DevTools Console)
/* -> Square {width: 45}
  width: 45
  -> __proto__: Shape */

// expected output: (See the Chrome DevTools Console)
/* -> Square {width: 45}
  width: 45
  -> __proto__: Shape */

console.log(window.color);
// expected output: (See the Chrome DevTools Console)
// green

console.log(sqr);
// expected output: (See the Chrome DevTools Console)
/* -> Square {width: 45}
  width: 45
  -> __proto__: Shape */

// expected output: (See the Chrome DevTools Console)  
/* -> Square {color: "green", width: 45}
  color: "green"
  width: 45
  -> __proto__: Shape */