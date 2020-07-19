// Chapter Three
// Logical Operators in Details

// && || !

// Logical Operators Only Used When We have Two or More Conditions and Result Comes from both of Their Participation.

// &&

// A && B
// true && true = true
// true && false = false
// false && true = false
// false && false = false

// ||

// A || B
// true || true = true
// true || false = true
// false || true = true
// false || false = false

// &&
var a = 10;
var b = 20;
var c = 30;
var d = 40;

if (a > b && c > d) {
  console.log('a is greater than b and c is greater than d');
}

// expected output: Did not give any output

var a = 10;
var b = 20;
var c = 40;
var d = 30;

if (a > b && c > d) {
  console.log('a is greater than b and c is greater than d');
} else {
  console.log('At least one condition is false');
}

// expected output: At least one condition is false

var a = 30;
var b = 20;
var c = 40;
var d = 30;

if (a > b && c > d) {
  console.log('a is greater than b and c is greater than d');
} else {
  console.log('At least one condition is false');
}

// expected output: a is greater than b and c is greater than d

// ||
var a = 30;
var b = 20;
var c = 40;
var d = 30;

if (a > b || c > d) {
  console.log('a is greater than b or c is greater than d');
} else {
  console.log('At least one condition is false');
}

// expected output: a is greater than b or c is greater than d

var a = 10;
var b = 20;
var c = 40;
var d = 30;

if (a > b || c > d) {
  console.log('a is greater than b or c is greater than d');
} else {
  console.log('At least one condition is false');
}

// expected output: a is greater than b or c is greater than d

var a = 30;
var b = 20;
var c = 30;
var d = 40;

if (a > b || c > d) {
  console.log('a is greater than b or c is greater than d');
} else {
  console.log('At least one condition is false');
}

// expected output: a is greater than b or c is greater than d

var a = 10;
var b = 20;
var c = 30;
var d = 40;

if (a > b || c > d) {
  console.log('a is greater than b or c is greater than d');
} else {
  console.log('At least one condition is false');
}

// expected output: At least one condition is false

// !
var check = !(a > b);

console.log(check);
// expected output: true

var check = (a > b);

console.log(check);
// expected output: false

var check = !!(a > b);

console.log(check);
// expected output: false