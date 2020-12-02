// Chapter Eleven
// What is Class in Object-Oriented Programming

// Class is just a factory to create multiple objects without code duplication.

// Rectangle (object)
var rect = {
  width: 10, // Properties
  height: 20, // Properties
  calculateArea: function () { // Methods
    return this.width * this.height;
  },
  calculateRange: function () { // Methods
    return 2 * (this.width + this.height);
  }
};

var area = rect.calculateArea();
var range = rect.calculateRange();

console.log(area);
// expected output: 200

console.log(range);
// expected output: 60

// Object-Oriented theory's main principle:
// DRY = Don't Repeat Yourself

// Class
class Rect {
  constructor(width2, height2) {
    this.width2 = width2;
    this.height2 = height2;
  }
  calculateArea2() {
    return this.width2 * this.height2;
  }
  calculateRange2() {
    return 2 * (this.width2 + this.height2);
  }
}

var rect2 = new Rect(10, 20);
var rect3 = new Rect(70, 46);
var rect4 = new Rect(7, 6);

console.log(rect2.width2);
// expected output: 10

console.log(rect2.height2);
// expected output: 20

console.log(rect2.calculateArea2());
// expected output: 200

console.log(rect2.calculateRange2());
// expected output: 60

// Class is just a template of an object.