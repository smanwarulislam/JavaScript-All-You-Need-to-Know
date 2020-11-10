// Chapter Nine
// What is the Callback Function?

function sample(a, b) {
  var c = a + b;
  var d = a - b;

  var result = sum(c, d); // function call of the function sum(a, b)
  // console.log(result);
  return result;
}

function sum(a, b) {
  return a + b; // var sum = c + d;
}

console.log(sample(5, 8));
// expected output: 10

// summation, subtraction, multiplication, and division using callback function
function sample2(a2, b2, cb) { // cb -> callback function
  var c2 = a2 + b2;
  var d2 = a2 - b2;

  var result2 = cb(c2, d2); // function call/invoke of the callback function cb
  return result2;
}

function sum2(a2, b2) {
  return a2 + b2; // var sum2 = c2 + d2;
}

// addition/summation
var result3 = sample2(5, 8, sum2);
console.log(result3);
// expected output: 10

// subtraction
var result4 = sample2(5, 8, function (c2, d2) {
  // console.log(c2, d2);
  // expected output: 13 -3
  return c2 - d2;
});

console.log(result4);
// expected output: 16

// multiplication
var result5 = sample2(5, 8, function (c2, d2) {
  return c2 * d2;
});

console.log(result5);
// expected output: -39

// division
var result6 = sample2(5, 8, function (c2, d2) {
  return c2 / d2;
});

console.log(result6);
// expected output: -4.333333333333333