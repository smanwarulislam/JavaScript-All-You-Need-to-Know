// Chapter Ten
// Nested Scope in JavaScript

var x = 55; // global scope | parent scope

function test() { // function scope | parent scope
  var x = 45;
  console.log(x);

  function nested() { // function scope | child scope
    var y = 65;
    console.log(x);
  }

  console.log(y); // expected output: Uncaught ReferenceError: y is not defined | Out of scope
  nested();
}

test();
// expected output: 45

var x2 = 55; // global scope | parent scope

function test2() { // function scope | parent scope
  var x2 = 45;
  // console.log(x2);

  function nested2() { // function scope | child scope
    // var y2 = 65;
    console.log(x2);
  }

  // console.log(y2); // expected output: Uncaught ReferenceError: y2 is not defined | Out of scope
  nested2();
}

test2();
// expected output: 45

var x3 = 55; // global scope | parent scope

function test3() { // function scope | parent scope
  // var x3 = 45;
  // console.log(x3);

  function nested3() { // function scope | child scope
    // var y3 = 65;
    console.log(x3);
  }

  // console.log(y3); // expected output: Uncaught ReferenceError: y3 is not defined | Out of scope
  nested3();
}

test3();
// expected output: 55