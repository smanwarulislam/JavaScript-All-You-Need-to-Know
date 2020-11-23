// Chapter Ten
// Execution Context and Function

function abc() {
  console.log('I am Function');
}

abc(); // function call
// expected output: I am Function

abc2(); // function call

function abc2() {
  console.log('I am another Function');
}

abc2(); // function call
// expected output:
/* I am another Function
I am another Function */

// Phase 1: Creational Phase
// abc2 = reference

// Phase 2: Executional Phase
// abc2() -> function call