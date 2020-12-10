// Chapter Twelve
// new Keyword in JavaScript

// Constructor function/Constructor pattern/Class (as usual called Constructor function)

// Rectangle
var Rectangle = function (width, height) { // Rectangle (Constructor function)
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
};

/* var rect1 = new Rectangle(10, 8);
rect1.draw(); */
// expected output: I am a rectangle
// expected output: My Width is 10
// expected output: My Height is 8
// expected output: -> Rectangle {width: 10, height: 8, draw: ƒ, printProperties: ƒ}

// new keyword - create your own
// Works like default or built-in new keyword

function myNew(constructor) {
  // 1st step
  var obj = {};
  // 2nd step
  Object.setPrototypeOf(obj, constructor.prototype); // Handling or copying prototypes
  var argsArray = Array.prototype.slice.apply(arguments);
  constructor.apply(obj, argsArray.slice(1)); // slice(1) = From the 2nd arguments -> 1 (index number) | 1st argument -> constructor (index number 0)

  return obj;
}

var rect2 = myNew(Rectangle, 45, 30); // constructor -> Rectangle
rect2.draw();
// expected output: I am a rectangle
// expected output: My Width is 45
// expected output: My Height is 30
// expected output: -> Rectangle {width: 45, height: 30, draw: ƒ, printProperties: ƒ}