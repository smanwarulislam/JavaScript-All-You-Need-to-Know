// Chapter Twelve
// Create Class Using Constructor Pattern

// Constructor pattern

// Rectangle
var Rectangle = function (width, height) {
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

// Rectangle 1
/* var rect1 = Rectangle();
rect1.draw(); */
// expected output: Uncaught TypeError: Cannot read property 'draw' of undefined

var rect1 = new Rectangle(10, 8);
rect1.draw();
// expected output: I am a rectangle
// expected output: My Width is 10
// expected output: My Height is 8
// expected output: -> Rectangle {width: 10, height: 8, draw: ƒ, printProperties: ƒ}