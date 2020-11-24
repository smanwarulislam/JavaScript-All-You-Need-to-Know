// Chapter Ten
// Let's Look at Hoisting

// Problem
// What's going on here?

var a = 100;

// newPrint(a); // function call | Solution: Uncaught TypeError: newPrint is not a function | It's a big part of hoisting

print(10); // function call

var newPrint = print;
newPrint(45);

function print(a) { // function declaration
  console.log(a);
}

print(a); // function call

// Solution
// Here's what's happening

// Phase 1: Creational Phase
// a = undefined
// newPrint = undefined
// print = reference

// Phase 2: Executional Phase
// a = 100
// newPrint = reference

// expected output:
/* 10
45
100 */