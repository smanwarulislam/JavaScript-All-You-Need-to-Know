// Chapter Thirteen
// Instance vs Prototype Members

// 1. Instance properties/member
function Square(width) { // Square -> Constructor/Constructor function
  this.width = width; // 1. Instance properties/member

  /* this.draw = function () {
    console.log('Draw');
  }; */
}

// 2. Prototype members
Square.prototype = { // 2. Prototype members
  draw: function () { // draw -> Property name
    console.log('Draw');
  },
  toString: function () {
    return 'My width is = ' + this.width;
  }
};

var sqr1 = new Square(10); // Instance/Object
console.log(sqr1);
// expected output: (See the Chrome DevTools Console)
/* -> Square {width: 10, draw: ƒ}
  -> __proto__: Object */

// expected output: (See the Chrome DevTools Console) | Square.prototype
/* -> Square {width: 10}
  -> __proto__:
    -> draw: ƒ ()
      -> __proto__: Object */

var sqr2 = new Square(5); // Instance/Object
console.log(sqr2);
// expected output: (See the Chrome DevTools Console)
/* -> Square {width: 5, draw: ƒ}
  -> __proto__: Object */

// expected output: (See the Chrome DevTools Console) | Square.prototype
/* -> Square {width: 5}
  -> __proto__:
    -> draw: ƒ ()
      -> __proto__: Object */

// See the Chrome DevTools Console:      
console.log(sqr1.draw());
// expected output:
// Draw

console.log(sqr2.draw());
// expected output:
// Draw

// Method overwrite (toString())

console.log(sqr1.toString());
// expected output: (See the Chrome DevTools Console)
// [object Object] // Default implementation

// expected output: (See the Chrome DevTools Console)
// My width is = 10 // toString: function () {}

console.log(sqr2.toString());
// expected output: (See the Chrome DevTools Console)
// My width is = 5 // toString: function () {}

/* Any object can have two types of properties:
1. Instance properties/member
2. Prototype members */