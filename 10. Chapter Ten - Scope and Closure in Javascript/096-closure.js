// Chapter Ten
// Again Look at Closure

/* The closure is when a function is able to remember and access it's lexical scope even when that function executing outside its lexical scope */

// Point to be noted:
// a function is able to remember and access it's lexical scope
// when that function executing outside its lexical scope

// a function is able to remember and access it's lexical scope
function test() {
  var msg = 'I am learning Lexical Scope and Closure'; // parent scope/upper scope

  function sayMsg() { // function scope
    console.log(msg); // a function is able to remember and access it's lexical scope
  }

  sayMsg(); // function calls from its lexical scope
}

test();
// expected output: I am learning Lexical Scope and Closure

// when that function executing outside its lexical scope
function test2() {
  var msg2 = 'I am also learning Lexical Scope and Closure'; // parent scope/upper scope

  return function () { // function scope
    console.log(msg2); // a function is able to remember and access it's lexical scope
  };
}

var sayMsg2 = test2();
// console.log(sayMsg2); // outside the scope/global scope
// using the Cmder console emulator
// expected output: [Function]

sayMsg2(); // function calls from the global scope/outside scope | outside its lexical scope
// expected output: I am also learning Lexical Scope and Closure