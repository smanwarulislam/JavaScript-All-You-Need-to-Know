// Chapter Nine
// What is First-Class Function?

// First Class Function

function add(a, b) {
  return a + b;
}

// 1. A function can be stored in a variable
var sum = add;
console.log(sum(4, 5));
// expected output: 9

console.log(typeof sum);
// expected output: function

// 2. A function can be stored in an array
var arr = [];
arr.push(add);
console.log(arr);
// using the Cmder console emulator
// expected output: [ [Function: add] ]

// using the Chrome DevTools Console
// expected output: -> [ƒ]

console.log(arr[0](5, 3));
// expected output: 8

// 3. A function can be stored in an object
var obj = {
  sum2: add
};

console.log(obj);
// using the Cmder console emulator
// expected output: { sum2: [Function: add] }

// using the Chrome DevTools Console
// expected output: -> {sum2: ƒ}

console.log(obj.sum2(7, 9));
// expected output: 16

// 4. We can create function as need
setTimeout(function () {
  console.log('I have created...');
}, 1000);

// expected output: I have created...

// 5. We can pass a function as arguments

// 6. We can return functions from another function