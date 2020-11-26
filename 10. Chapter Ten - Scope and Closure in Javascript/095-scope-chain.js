// Chapter Ten
// Scope Chain in JavaScript

// Scope chain
// A variable that has access to a function acts as a chain. And the name of this chain is the scope chain.

// Test
// What data is in the scope of each function?/Who is in the scope of each function?
var a = 11;

function A() {
  var b = 12;

  function B() {
    var c = 23;
    console.log(c);
  }

  function C() {
    var d = 56;
    console.log(d);
  }

  console.log(b);

  D(b);
  B();
  C();
}

function D(n) {
  return n + a;
}

// Solution
// This is the scope of each function:
// A -> a, b, B(), C(), D()
// B -> a, b, c, B(), C(), D()
// C -> a, b, d, B(), C(), D()
// D -> a, n, A()