// Chapter Twelve
// Create Class Using Factory pattern

// Object literal

// Rectangle 1
/* var rect = {
  width: 100, // width -> Property
  height: 50, // height -> Property

  draw: function () { // Method
    console.log('I am a rectangle');
    this.printProperties();
    console.log(this);
  },
  
  printProperties: function () { // Method
    console.log('My Width is ' + this.width);
    console.log('My Height is ' + this.height);
  }
}; */

// Rectangle 2
/* var rect2 = {
  width: 10, // width -> Property
  height: 5, // height -> Property

  draw: function () { // Method
    console.log('I am a rectangle');
    this.printProperties();
    console.log(this);
  },
  
  printProperties: function () { // Method
    console.log('My Width is ' + this.width);
    console.log('My Height is ' + this.height);
  }
}; */

// Rectangle 3
/* var rect3 = {
  width: 105, // width -> Property
  height: 504, // height -> Property

  draw: function () { // Method
    console.log('I am a rectangle');
    this.printProperties();
    console.log(this);
  },
  
  printProperties: function () { // Method
    console.log('My Width is ' + this.width);
    console.log('My Height is ' + this.height);
  }
}; */

// Factory pattern

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