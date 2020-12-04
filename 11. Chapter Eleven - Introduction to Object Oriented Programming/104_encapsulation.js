// Chapter Eleven
// Take a Look at Encapsulation in OOP

// What is Encapsulation?
/* Encapsulation is one of the fundamental concepts in object-oriented programming (OOP). It describes the idea of bundling data and methods that work on that data within one unit. */

// Rectangle (class)
class Rect {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  calculateArea() {
    return this.width * this.height;
  }
  calculateRange() {
    return 2 * (this.width + this.height);
  }
}

var rect = new Rect(10, 20);
var rect2 = new Rect(70, 46);
var rect3 = new Rect(7, 6);

// class
// class (Rect)
/* width
height
calculateArea()
calculateRange() */