// Chapter Twelve
// How to Use Getter Setter in Javascript

// Constructor function/Constructor pattern/Class (as usual called Constructor function)
// Rectangle
var Rectangle = function (width, height) { // Rectangle (Constructor function)
  var position = { // position -> Property | position -> Private property
    x: 56,
    y: -100
  };

  this.width = width;
  this.height = height;

  var printProperties = function () { // This function is no longer included in the object
    // "this" means that it will refer to the window object | this.width will return undefined
    console.log('My Width is ' + this.width); // Solution: 'My Width is ' + width | Or, include the bind() method
    // "this" means that it will refer to the window object | this.height will return undefined
    console.log('My Height is ' + this.height); // Solution: 'My Height is ' + height | Or, include the bind() method
  }.bind(this);

  // Solution number 1:
  /* this.getPosition = function () { // Method
    return position;
  }; */

  this.draw = function () {
    console.log('I am a rectangle');
    // this.printProperties();
    printProperties(); // Now printProperties is not included in the object
    // console.log(this);
    console.log('Position: X = ' + position.x + ', Y = ' + position.y); // Getting data from outside through closure
  };

  // Solution number 2:
  // That is the way we can use to get our property (position)
  Object.defineProperty(this, 'position', {
    get: function () { // Method | Getter
      return position; // Closure
    },
    // The way we can use to set our property (position)
    set: function (value) { // Method | Setter
      position = value; // Since we have access to the position property | Closure
    }
  });
};

// Rectangle 1
var rect1 = new Rectangle(45, 30); // object construction
rect1.draw();
// expected output: I am a rectangle
// expected output: My Width is 45
// expected output: My Height is 30
// expected output: Position: X = 56, Y = -100

// Solution number 1:
// console.log(rect1.getPosition());
// expected output: -> {x: 56, y: -100}

// Solution number 2:
// The way we can use to set our property (position)
rect1.position = {
  x: 456,
  y: -123
};

// The way we can use to get our property (position)
console.log(rect1.position);
// expected output: -> {x: 56, y: -100}
// expected output: {x: 456, y: -123}