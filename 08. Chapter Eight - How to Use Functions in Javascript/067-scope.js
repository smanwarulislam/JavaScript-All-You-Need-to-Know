// Chapter Eight
// What is Function Scoping?

var a = 'abc'; // global variable/global scope

if (true) {
  console.log(a);
}

// expected output: abc

if (true) {
  if (true) {
    var b = 'I am B';
  }
}

console.log(b);
// expected output: I am B

// Example
function x() {
  function y() {
    var a = 10; // function scope
    console.log(a);
  }

  y();
}

x();
// expected output: 10

function x2() {
  function y2() {
    var a = 10; // function scope
    console.log(a); // 10
  }
  console.log(a); // abc

  y2();
}

x2();
// expected output:
/* abc
10 */

function x3() {
  var a = 20; // function scope

  function y3() {
    var a = 10; // function scope
    console.log(a); // 10
  }
  console.log(a); // 20

  y3();
}

x3();
// expected output:
/* 20
10 */

function x4() {
  var a = 20; // function scope

  function y4() {
    // var a = 10; // function scope
    console.log(a); // 20
  }
  console.log(a); // 20

  y4();
}

x4();
// expected output:
/* 20
20 */

function x5() {
  // var a = 20; // function scope

  function y5() {
    // var a = 10; // function scope
    console.log(a); // abc
  }
  console.log(a); // abc

  y5();
}

x5();
// expected output:
/* abc
abc */

// Example
function test(n) {

  function a() {
    return n % 3 === 0;
  }

  function b() {
    return n % 5 === 0;
  }

  if (a() && b()) {
    console.log(n + ' is divisible by both 3 and 5');
  } else {
    console.log('Not a valid number');
  }
}

test(10);
// expected output: Not a valid number

function test(n) {

  function a() {
    return n % 3 === 0;
  }

  function b() {
    return n % 5 === 0;
  }

  if (a() && b()) {
    console.log(n + ' is divisible by both 3 and 5');
  } else {
    console.log('Not a valid number');
  }
}

test(15);
// expected output: 15 is divisible by both 3 and 5