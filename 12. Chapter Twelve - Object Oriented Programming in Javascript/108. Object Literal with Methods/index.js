// Chapter Twelve
// Object Literal Syntax in JavaScript

// Rectangle
var rect = {
  width: 100, // width -> Property
  height: 50, // height -> Property

  draw: function () { // Method
    console.log('I am a rectangle');
    // console.log('My Width is ' + width);
    // expected output: Uncaught ReferenceError: width is not defined
    console.log('My Width is ' + this.width);
    console.log('My Height is ' + this.height);
  }
};

rect.draw();
// expected output: I am a rectangle
// expected output: My Width is 100
// expected output: My Height is 50

rect.height = 100;

rect.draw();
// expected output: I am a rectangle
// expected output: My Width is 100
// expected output: My Height is 100