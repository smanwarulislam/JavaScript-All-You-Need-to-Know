// Chapter Ten
// How to use Closure and Loops?

for (var i = 1; i <= 5; i++) {
  setTimeout(function () { // Callback function | function scope
    console.log(i); // Closure | The ending value is going to 6
  }, 1000 * i);
}

// expected output:
/* 6
6
6
6
6 */

for (var i2 = 1; i2 <= 5; i2++) {
  (function (n) { // Immediately Invoked Function Expressions (IIFE) | function block/own scope/own execution context
    setTimeout(function () { // Callback function | function scope
      console.log(n); // Closure
    }, 1000 * n);
  })(i2); // () -> call of IIFE
}

// expected output:
/* 1
2
3
4
5 */