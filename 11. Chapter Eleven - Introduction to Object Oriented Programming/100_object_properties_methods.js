// Chapter Eleven
// Object Properties and Methods Explanation

// object

// Example
// Person:
// Properties (Noun/Adjective)
/* Name
Status
Education
Body
Address */

// Methods (Verb)
/* Eat()
Walk()
Play()
Sing()
Dance() */

// rectangle
var rect = {
  width: 10, // Properties
  height: 20, // Properties
  calculateArea: function () { // Methods
    return this.width * this.height;
  },
  calculateRange: function () { // Methods
    return 2 * (this.width + this.height);
  }
};

var area = rect.calculateArea();
var range = rect.calculateRange();

console.log(area);
// expected output: 200

console.log(range);
// expected output: 60