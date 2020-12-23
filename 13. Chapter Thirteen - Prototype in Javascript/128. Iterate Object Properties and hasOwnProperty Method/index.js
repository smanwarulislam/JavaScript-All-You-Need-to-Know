// Chapter Thirteen
// How to Iterate Over Object Properties

function Square(width) { // 1. Instance property/members | Square -> Constructor function
  this.width = width;
  this.getWidth = function () { // method
    console.log('Width is ' + this.width);
    // this.draw();
  };
}

Square.prototype = { // 2. Prototype property/members/methods | prototype -> Parent object
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

// Which object or whose property?
console.log(sqr1.hasOwnProperty('width'));
// expected output: (See the Chrome DevTools Console)
// true

console.log(sqr1.hasOwnProperty('getWidth'));
// expected output: (See the Chrome DevTools Console)
// true

console.log(sqr1.hasOwnProperty('draw'));
// expected output: (See the Chrome DevTools Console)
// false

// We can bring the keys of the object through the Object.keys() method
console.log(Object.keys(sqr1));
// expected output: (2) ["width", "getWidth"]

// There is another way to get properties that is for...in statement/loop
// Want to get the prototype of an object and all the members of the instance
for (var i in sqr1) {
  console.log(i);
}

// expected output:
/* width
getWidth
draw
toString */