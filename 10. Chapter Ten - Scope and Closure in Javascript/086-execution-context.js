// Chapter Ten
// JavaScript Execution Context

// Execution Context
/* There are two phases after any context is created:
- Creation of context
- Execution of that context */

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

var x = 100;
a();
console.log('I am Global'); // global context/stack

// expected output:
/* I am Function C
I am Function D
I am Function B
I am Function A
I am Global */

// Execution of C Function context (the function of c())
// Execution of D Function context (the function of d())
// Execution of B Function context (the function of b())
// Execution of A Function context (the function of a())
// Execution of the global context

// Stack data structure
/* The concept of a stack data structure:
Last in First out (LIFO) */