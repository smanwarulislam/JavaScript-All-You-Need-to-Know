// Chapter Nine
// What is currying in JavaScript

// Normal function
function add(a, b, c) {
  return a + b + c;
}

console.log(add(41, 52, 63));
// expected output: 156

// The currying version of the normal function (add)
function currying(a2) {
  return function (b2) {
    return function (c2) {
      return a2 + b2 + c2;
    };
  };
}

var result = currying(5)(10)(15);
console.log(result);
// expected output: 30