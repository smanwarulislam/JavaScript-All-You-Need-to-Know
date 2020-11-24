// Chapter Ten
// Function Declaration vs Expression

abc(); // function call
// expected output: I am Function

function abc() { // function declaration
  console.log('I am Function');
}

// newAbc(); // function call
// expected output: Uncaught TypeError: newAbc is not a function

var newAbc = function () { // function expression
  console.log('I am newAbc Function');
};

newAbc(); // function call
// expected output: I am newAbc Function

// Phase 1: Creational Phase
// abc = reference
// newAbc = undefined

// Phase 2: Executional Phase
// newAbc = anonymous function | newAbc() -> function call