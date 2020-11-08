// Chapter Nine
// First Look at Closure in JavaScript

// First Look at Closure

var b = 10; // global variable/global scope

function a() { // function scope
  console.log(b);
}

a();
// expected output: 10

function a2() { // function scope
  var x = 5;
  
  return function () { // function scope
    console.log(x);
  };
}

var abe = a2();
console.dir(abe);
// using the Chrome DevTools Console
// expected output: -> ƒ anonymous()