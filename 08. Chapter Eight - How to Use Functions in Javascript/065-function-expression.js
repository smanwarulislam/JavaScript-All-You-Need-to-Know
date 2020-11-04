// Chapter Eight
// What is Function Expression?

// General function statement
function add(a, b) {
  return a + b;
}

// function expression
var addition = function add2(a2, b2) {
  return a2 + b2;
};

addition(10, 40);

var addition2 = function (a3, b3) { // anonymous function
  return a3 + b3;
};

addition2(10, 40);

// Example
setTimeout(function () {
  console.log('I will call after 5 seconds');
}, 5000);

// expected output: I will call after 5 seconds

var another = addition2;
console.log(another);
// expected output:
/* [Function: addition2]
I will call after 5 seconds */

var another = addition2;
console.log(another(7, 8));
// expected output:
/* 15
I will call after 5 seconds */