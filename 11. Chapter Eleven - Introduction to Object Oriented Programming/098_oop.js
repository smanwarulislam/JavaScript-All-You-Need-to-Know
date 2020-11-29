// Chapter Eleven
// Introduction to OOP (Object Oriented Programming)

// OOP: Object-Oriented Programming
/* Object-oriented programming (OOP) is a programming paradigm based on the concept of "objects", which can contain data and code: data in the form of fields (often known as attributes or properties), and code, in the form of procedures (often known as methods).
[Source - Wikipedia] */

// Example

// Procedural
// rectangle
var width = 10;
var height = 20;

function calculateArea(width, height) {
  return width * height;
}

function calculateRange(width, height) {
  return 2 * (width + height);
}

var area = calculateArea(width, height);
var range = calculateRange(width, height);

console.log(area);
// expected output: 200

console.log(range);
// expected output: 60

// Object-Oriented
// rectangle
var rect = {
  width2: 10,
  height2: 20,
  calculateArea2: function () {
    return this.width2 * this.height2;
  },
  calculateRange2: function () {
    return 2 * (this.width2 + this.height2);
  }
};

var area2 = rect.calculateArea2();
var range2 = rect.calculateRange2();

console.log(area2);
// expected output: 200

console.log(range2);
// expected output: 60