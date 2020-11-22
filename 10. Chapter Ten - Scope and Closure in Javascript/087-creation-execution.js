// Chapter Ten
// Creation and Execution of an Execution Context

// Execution Context

/* Any execution context basically happens in two phases:
Phase 1: Creational Phase
Phase 2: Executional Phase */

function a() {
  b();
  console.log('I am Function A');
}

function b() {
  d();
  console.log('I am Function B');
}

function c() {
  console.log('I am Function C');
}

function d() {
  c();
  console.log('I am Function D');
}

var x; // variable declaration | Creational Phase
x = 100; // variable definition/defining a variable/assigning a value to a variable | Executional Phase
a();
console.log('I am Global'); // global context/stack

// expected output:
/* I am Function C
I am Function D
I am Function B
I am Function A
I am Global */

// Execution Context
/* Phase 1: Creational Phase - variable declaration, function declaration, the scope chain maintain
Phase 2: Executional Phase - executable code, logical code */