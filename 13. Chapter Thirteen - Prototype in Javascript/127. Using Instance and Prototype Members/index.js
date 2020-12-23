// Chapter Thirteen
// How to Use Instance and Prototype Members

function Square(width) { // 1. Instance members/properties
  this.width = width;
  this.getWidth = function () { // method
    console.log('Width is ' + this.width);
    // this.draw();
  };
}

Square.prototype = { // 2. Prototype members/methods
  draw: function () { // draw -> Property name
    this.getWidth();
    console.log('Draw');
  },
  toString: function () {
    return 'My width is = ' + this.width;
  }
};

var sqr1 = new Square(10); // Instance/Object
var sqr2 = new Square(5); // Instance/Object

console.log(sqr1.getWidth());
// expected output: (See the Chrome DevTools Console)
/* Width is 10
Draw */

console.log(sqr1.draw());
// expected output: (See the Chrome DevTools Console)
/* Width is 10
Draw */

console.log(sqr2.draw());
// expected output: (See the Chrome DevTools Console)
/* Width is 5
Draw */

// See the Chrome DevTools Console:      
console.log(sqr1);
// expected output:
// -> Square {width: 10, getWidth: ƒ}

console.log(sqr2);
// expected output:
// -> Square {width: 5, getWidth: ƒ}