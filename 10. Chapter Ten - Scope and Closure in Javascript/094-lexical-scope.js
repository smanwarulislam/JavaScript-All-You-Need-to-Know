// Chapter Ten
// Lexical Scope in JavaScript

// Lexical Scope
/* When the JavaScript engine tokenized any one code then he defines what the scope will be. This is called lexical scope. */

var x = 55; // global scope | parent scope

function test() { // function scope | parent scope
  // var x = 45;
  // console.log(x);

  function nested() { // function scope | child scope
    // var y = 65;
    console.log(x);
  }

  // console.log(y);
  // expected output: Uncaught ReferenceError: y is not defined | Out of scope
  nested();
}

test();
// expected output: 55