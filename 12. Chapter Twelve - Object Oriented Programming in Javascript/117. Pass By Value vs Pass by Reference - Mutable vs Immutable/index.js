// Chapter Twelve
// Pass by Value vs Pass by Reference

// JavaScript has two types of data:

/* 1. Primitive data types
- String type
- Number type
- Boolean type
- Undefined type
- Null type

2. Object data types
- Object
- Function
- Arrays */

// Pass by Value vs Pass by Reference
// Call by Value vs Call by Reference

// Primitive data
var n = 10;

function change(n) {
  n = n + 100;
  console.log(n);
}

change(n);
// expected output: 110

console.log(n); // Pass by Value
// expected output: 10

// Object data
var obj = {
  a: 10,
  b: 20
};

function changeMe(obj) {
  obj.a = obj.a + 100;
  obj.b = obj.b + 100;
  console.log(obj);
}

changeMe(obj);
// expected output: -> {a: 110, b: 120}

console.log(obj); // Pass by Reference
// expected output: -> {a: 110, b: 120}

// Mutable vs Immutable
// JavaScript objects are Mutable objects.
// Any primitive data is an Immutable object.