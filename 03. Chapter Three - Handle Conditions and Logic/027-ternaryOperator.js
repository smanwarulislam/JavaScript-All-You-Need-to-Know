// Chapter Three
// How to Use Ternary Operator

var n = 10;
var str = '';

// Using the if-else statement
if (n % 2 === 0) {
  str = 'even';
} else {
  str = 'odd';
}

console.log(str);
// expected output: even

var n = 11;
var str = '';

// Using the if-else statement
if (n % 2 === 0) {
  str = 'even';
} else {
  str = 'odd';
}

console.log(str);
// expected output: odd

// Using the conditional (ternary) operator
var result = (n % 2 === 0) ? 'even' : 'odd';

console.log(result);
// expected output: odd

// condition ? true side : false side
// variableName = (condition) ? true side : false side