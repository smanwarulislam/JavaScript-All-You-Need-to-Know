// Chapter Twelve
// What is "this" Keyword in JavaScript

// Rectangle
var rect = {
  width: 100, // width -> Property
  height: 50, // height -> Property

  draw: function () { // Method
    console.log('I am a rectangle');
    this.printProperties();
    // printProperties();
    // expected output: Uncaught ReferenceError: printProperties is not defined
    console.log(this);
    // expected output: -> {width: 100, height: 50, draw: ƒ, printProperties: ƒ}
  },
  
  printProperties: function () { // Method
    console.log('My Width is ' + this.width);
    console.log('My Height is ' + this.height);
  }
};

rect.draw();
// expected output: I am a rectangle
// expected output: My Width is 100
// expected output: My Height is 50

function myFunc() {
  console.log(this);
  rect.printProperties();
  // expected output: My Width is 100
  // expected output: My Height is 50
}

// myFunc();
// expected output: -> Window

new myFunc();
// expected output: -> myFunc {}

// another
var another = {
  width: 47,
  height: 56,
  print: rect.printProperties
};

console.log(another.print);
// expected output:
/* ƒ () { // Method
  console.log('My Width is ' + this.width);
  console.log('My Height is ' + this.height);
} */

another.print();
// expected output: My Width is 47
// expected output: My Height is 56