// Chapter Twelve
// Constructor Property in Any Object

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

console.log(rect1.constructor);
// expected output: (See the Chrome DevTools Console)

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

// Rectangle 2
var rect2 = new Rectangle(10, 8); // object construction
rect2.draw();
// expected output: I am a rectangle
// expected output: My Width is 10
// expected output: My Height is 8
// expected output: -> Rectangle {width: 10, height: 8, draw: ƒ, printProperties: ƒ}

console.log(rect2.constructor);
// expected output: (See the Chrome DevTools Console)

// var obj = {};
// var obj = new Object(); // new Object() -> constructor
// console.log(obj.constructor);
// expected output: -> ƒ Object() { [native code] }

var str = new String('str'); // new String('str') -> constructor | new String('str') -> constructor call
console.log(str.constructor);
// expected output: ƒ String() { [native code] }

console.log(str);
// expected output: -> String {"str"}

console.log('My String is ' + str); // 'My String is ' -> string literal | str -> string object
// expected output: My String is str