// Chapter Eight
// How to Invoke a Function?

function functionName() {
  console.log('I am a Function');
}

function add() {
  var a = 10;
  var b = 20;
  console.log(a + b);
}

function sub() {
  var a = 50;
  var b = 20;
  console.log(a - b);
}

// functionName();
// expected output: I am a Function

// functionName();
// expected output: I am a Function

/* for (var i = 0; i < 10; i++) {
  functionName();
} */

// expected output:
/* I am a Function
I am a Function
I am a Function
I am a Function
I am a Function
I am a Function
I am a Function
I am a Function
I am a Function
I am a Function */

add();
// expected output: 30

sub();
// expected output: 30

console.log(add);
// using the Cmder console emulator
// expected output: [Function: add]

console.log(add());
// expected output:
/* 30
undefined */

var date = new Date();
date.getFullYear();

console.log(date);
// using the Cmder console emulator
// expected output: 2020-11-02T17:01:56.238Z

// using the Chrome DevTools Console
// expected output: Mon Nov 02 2020 23:01:19 GMT+0600 (Bangladesh Standard Time)