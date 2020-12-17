// Chapter Twelve
// Private Properties in Javascript

// Constructor function/Constructor pattern/Class (as usual called Constructor function)
// Rectangle
var Rectangle = function (width, height) { // Rectangle (Constructor function)

  // Local variable
  var name = 'S M Anwarul Islam';

  this.width = width;
  this.height = height;
  /* this.position = {
    x: 56,
    y: -100
  }; */
  var position = {
    x: 56,
    y: -100
  };

  /* this.printProperties = function () {
    console.log('My Width is ' + this.width);
    console.log('My Height is ' + this.height);
  }; */
  var printProperties = function () { // This function is no longer included in the object
    // "this" means that it will refer to the window object | this.width will return undefined
    console.log('My Width is ' + this.width); // Solution: 'My Width is ' + width | Or, include the bind() method
    // "this" means that it will refer to the window object | this.height will return undefined
    console.log('My Height is ' + this.height); // Solution: 'My Height is ' + height | Or, include the bind() method
  }.bind(this);

  this.draw = function () {
    console.log('I am a rectangle');
    // this.printProperties();
    printProperties(); // Now printProperties is not included in the object
    // console.log(this);
    console.log('Position: X = ' + position.x + ', Y = ' + position.y); // Getting data from outside through closure
  };
};

// Rectangle 1
var rect1 = new Rectangle(45, 30); // object construction

// console.log(rect1.name);
// expected output: undefined

// rect1.draw();
// expected output: I am a rectangle
// expected output: My Width is undefined
// expected output: My Height is undefined
// expected output: Position: X = 56, Y = -100

rect1.draw();
// expected output: I am a rectangle
// expected output: My Width is 45
// expected output: My Height is 30
// expected output: Position: X = 56, Y = -100