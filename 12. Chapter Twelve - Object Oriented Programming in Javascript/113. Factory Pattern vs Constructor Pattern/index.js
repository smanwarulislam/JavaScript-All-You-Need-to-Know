// Chapter Twelve
// Which to Use: Constructor vs Factory

// Factory function/Factory pattern/Class (as usual called Factory function)
// Rectangle
var createRect = function (width, height) {
  return {
    width: width,
    height: height,
  
    draw: function () {
      console.log('I am a rectangle');
      this.printProperties();
      console.log(this);
    },
    
    printProperties: function () {
      console.log('My Width is ' + this.width);
      console.log('My Height is ' + this.height);
    }
  };
};

// Rectangle 1
var rect1 = createRect(10, 8);
rect1.draw();
// expected output: I am a rectangle
// expected output: My Width is 10
// expected output: My Height is 8
// expected output: -> {width: 10, height: 8, draw: ƒ, printProperties: ƒ}

// Rectangle 2
var rect2 = createRect(40, 30);
rect2.draw();
// expected output: I am a rectangle
// expected output: My Width is 40
// expected output: My Height is 30
// expected output: -> {width: 40, height: 30, draw: ƒ, printProperties: ƒ}

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

var rect3 = new Rectangle(10, 8); // object construction
rect3.draw();
// expected output: I am a rectangle
// expected output: My Width is 10
// expected output: My Height is 8
// expected output: -> Rectangle {width: 10, height: 8, draw: ƒ, printProperties: ƒ}