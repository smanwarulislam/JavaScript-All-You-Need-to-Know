// Chapter Thirteen
// Multi-Level Inheritance in Javascript

// Prototype means parent

// Chrome DevTools Console
// expected output: (See the Chrome DevTools Console)

var arr = [];
console.log(arr);
// expected output: (See the Chrome DevTools Console)
/* -> []
  length: 0
  -> __proto__: Array(0) // Array prototype | Array class/object
    -> __proto__: Object */

var str = new String('str');
console.log(str);
// expected output: (See the Chrome DevTools Console)
/* -> String {"str"}
  -> __proto__: String
    -> __proto__: Object */

// Constructor function
function Person(name) { // Normal function pattern
  this.name = name;
}

var p1 = new Person('S M Anwarul Islam'); // p1 -> Object
console.log(p1);
// expected output: (See the Chrome DevTools Console)
/* -> Person {name: "S M Anwarul Islam"}
  -> __proto__: Object
    -> constructor: ƒ Person(name)
      -> __proto__: Object */