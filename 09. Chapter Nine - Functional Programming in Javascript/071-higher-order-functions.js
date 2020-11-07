// Chapter Nine
// What is Higher-Order Function?

// Higher-Order Functions

// 5. We can pass a function as arguments

// 6. We can return functions from another function

function add(a, b) {
  return a + b;
}

function manipulate(a, b, func) {
  var c = a + b;
  var d = a - b;

  function multiply() { // multiply(c, d) -> multiply() -> Closure
    var m = func(a, b);
    return c * d * m;
  }

  return multiply;
}

var multiply = manipulate(3, 4, add);
// console.log(multiply);
// using the Cmder console emulator
// expected output: [Function: multiply]

console.log(multiply());
// expected output: -49

// Another way to do
// Using the return function directly
function add(a, b) {
  return a + b;
}

function manipulate(a, b, func) {
  var c = a + b;
  var d = a - b;

return  function () {
    var m = func(a, b);
    return c * d * m;
  };
}

var multiply = manipulate(3, 4, add);
console.log(multiply());
// expected output: -49