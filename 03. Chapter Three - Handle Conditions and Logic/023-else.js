// Chapter Three
// How to Use Else Condition

var a = 10;
var b = 2;

if (a > b) {
  console.log('a is greater than b');
} else {
  console.log('b is greater than a');
}

// expected output: a is greater than b

var a = 10;
var b = 20;

if (a > b) {
  console.log('a is greater than b');
} else {
  console.log('b is greater than a');
}

// expected output: b is greater than a

// even or odd number
var n = 50;

if (n % 2 === 0) {
  console.log(n + ' is Even Number');
} else {
  console.log(n + ' is Odd Number');
}

// expected output: 50 is Even Number

var n = 51;

if (n % 2 === 0) {
  console.log(n + ' is Even Number');
} else {
  console.log(n + ' is Odd Number');
}

// expected output: 51 is Odd Number