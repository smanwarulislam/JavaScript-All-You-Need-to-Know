// Chapter Three
// How to Use Else If Condition

var a = 20;
var b = 20;

if (a > b) {
  console.log('a is greater than b');
} else if (a < b) {
  console.log('b is greater than a');
} else {
  console.log('They Both are Same');
}

// expected output: They Both are Same

var a = 2;
var b = 20;

if (a > b) {
  console.log('a is greater than b');
} else if (a < b) {
  console.log('b is greater than a');
} else {
  console.log('They Both are Same');
}

// expected output: b is greater than a

// even or odd number
var n = 0;

if (n === 0) {
  console.log(n + ' is zero');
} else if (n % 2 === 0) {
  console.log(n + ' is Even Number');
} else {
  console.log(n + ' is Odd Number');
}

// expected output: 0 is zero

var n = 1;

if (n === 0) {
  console.log(n + ' is zero');
} else if (n % 2 === 0) {
  console.log(n + ' is Even Number');
} else {
  console.log(n + ' is Odd Number');
}

// expected output: 1 is Odd Number