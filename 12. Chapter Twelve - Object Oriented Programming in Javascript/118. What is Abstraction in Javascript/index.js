// Chapter Twelve
// What is Abstraction in Javascript

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

// Rectangle 1
var rect1 = new Rectangle(45, 30); // object construction