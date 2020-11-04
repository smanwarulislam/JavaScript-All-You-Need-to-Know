// Chapter Eight
// Return Anything from a Function

function addAll() {
  var sum = 0;
  for (var i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }

  console.log(sum);
}

addAll(1, 2, 3);
// expected output: 6

addAll(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
// expected output: 55

var a = addAll(1, 2, 3);
var b = addAll(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

console.log(a, b);
// expected output: undefined undefined

function addAll2() {
  var sum2 = 0;
  for (var i = 0; i < arguments.length; i++) {
    sum2 += arguments[i];
  }

  return sum2; // return -> The output section of the function
}

var result = addAll2(1, 2, 3);
console.log(result);
// expected output: 6

// Note
// console.log
// using the Cmder console emulator

// node command (Cmder console emulator)
// > console.log('Hello')
// expected output:
/* Hello
undefined */

function person(name, email) {
  return {
    name: name,
    email: email
  };
}

var p1 = person('S M Anwarul Islam', 'engg.anwarbd@gmail.com');
console.log(p1);
// expected output: {name: "S M Anwarul Islam", email: "engg.anwarbd@gmail.com"}

function person(name, email) {
  return {
    name: name,
    email: email
  };
  console.log('I will never be shown'); // Unreachable code detected | Unreachable 'console' after 'return'
}

var p1 = person('S M Anwarul Islam', 'engg.anwarbd@gmail.com');
console.log(p1);
// expected output: {name: "S M Anwarul Islam", email: "engg.anwarbd@gmail.com"}