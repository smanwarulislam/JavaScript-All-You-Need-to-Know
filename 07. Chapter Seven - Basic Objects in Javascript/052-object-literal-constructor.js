// Chapter Seven
// Object Literal vs Constructor

// Object literal

// an object define/declare
var obj = {}; // an empty object
console.log(obj);
// expected output: {}

console.log(typeof obj); // an object define
// expected output: object

var obj2 = {};
obj2.x = 10;
console.log(obj2);
// expected output: {x: 10}

var point = {
  x: 10,
  y: 20
};

console.log(point);
// expected output: {x: 10, y: 20}

var point2 = {
  x2: 10,
  y2: 20
};

point2.y2 = 30;

console.log(point2);
// expected output: {x2: 10, y2: 30}

var point = {
  x: 10,
  y: 20
};

point.z = 30;

console.log(point);
// expected output: {x: 10, y: 20, z: 30}

// Object constructor

var obj3 = Object();
obj3.a = 10;
console.log(obj3);
// expected output: {a: 10}

var obj4 = new Object(); // Object constructor method/pattern
obj4.b = 20;
console.log(obj4);
// expected output: {b: 20}