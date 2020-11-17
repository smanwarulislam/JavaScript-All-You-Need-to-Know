// Chapter Nine
// Return a function from another function

// Example
function greet(msg) {
  function greetings(name) {
    return msg + ', ' + name + '!'; // msg -> Closure - The way the data will be stored is called closure
  }

  return greetings;
}

var gm = greet('Good Morning');
console.log(typeof gm);
// expected output: function

var gn = greet('Good Night');

var hello = greet('Hello');

var msg = gm('S M Anwarul Islam');

console.log(gn('Stack Learner'));
// expected output: Good Night, Stack Learner!

console.log(msg);
// expected output: Good Morning, S M Anwarul Islam!

console.log(hello('HM Nayem'));
// expected output: Hello, HM Nayem!

// Example
// Implementation of a function to calculate any of the power of the number
function base(b) { // b -> base
  /* function power(n) { // n -> original number
    var result = 1;

    for (var i = 0; i < b; i++) {
      result *= n;
    }

    return result;
  }

  return power; */

  return function (n) { // n -> original number
    var result = 1;

    for (var i = 0; i < b; i++) {
      result *= n;
    }

    return result;
  };
}

var base10 = base(10); // base(10) -> whose base is 10
console.log(typeof base10);
// expected output: function

console.log(base10(2)); // 2 to the power of 10 | 2^10 = 1024
// expected output: 1024

var base5 = base(5); // base(5) -> whose base is 5
console.log(base5(2)); // 2 to the power of 5 | 2^5 = 32
// expected output: 32

console.log(base5(3)); // 3 to the power of 5 | 3^5 = 243
// expected output: 243

console.log(base5(5)); // 5 to the power of 5 | 5^5 = 3125
// expected output: 3125