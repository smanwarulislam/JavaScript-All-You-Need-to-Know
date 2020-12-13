// Chapter Twelve
// Believe Me, Functions Are Object

// Constructor function/Constructor pattern/Class (as usual called Constructor function)
// Rectangle
/* var Rectangle = function (width, height) { // Rectangle (Constructor function)
  this.width = width;
  this.height = height;

  this.draw = function () {
    console.log('I am a rectangle');
    this.printProperties();
    console.log(this);
  };
  
  this.printProperties = function () {
    console.log('My Width is ' + this.width);
    console.log('My Height is ' + this.height);
  };
}; */

// Rectangle 1
/* var rect1 = new Rectangle(10, 8); // object construction
rect1.draw(); */
// expected output: I am a rectangle
// expected output: My Width is 10
// expected output: My Height is 8
// expected output: -> Rectangle {width: 10, height: 8, draw: ƒ, printProperties: ƒ}

// console.log(rect1.constructor);
// expected output: (See the Chrome DevTools Console)

function test() {
  console.log('Something');
}

console.log(test);
// expected output: (See the Chrome DevTools Console)

console.log(typeof test);
// expected output: function

console.log(test.constructor);
// expected output: ƒ Function() { [native code] }

console.log(test.name, test.length);
// expected output: test 0

// Rect
// new Function() -> new function construct
// `` -> es6 - Template literals (Template strings) - Template literals are enclosed by the backtick (` `)
var Rect = new Function('width', 'height', `this.width = width;
this.height = height;

this.draw = function () {
  console.log('I am a rectangle');
  this.printProperties();
  console.log(this);
};

this.printProperties = function () {
  console.log('My Width is ' + this.width);
  console.log('My Height is ' + this.height);
};`
);

// Rect 2
var rect2 = new Rect(4, 5);
console.log(rect2);
// expected output: -> {width: 4, height: 5, draw: ƒ, printProperties: ƒ}

rect2.draw();
// expected output: I am a rectangle
// expected output: My Width is 4
// expected output: My Height is 5
// expected output: -> {width: 4, height: 5, draw: ƒ, printProperties: ƒ}