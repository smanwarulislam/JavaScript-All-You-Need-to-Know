// Chapter Six
// How to Declare an Array

// Array literals
var arr = []; // an empty array

var arr2 = [1, 2, 3, 4, 5];
console.log(arr2);
// expected output: [1, 2, 3, 4, 5]

var arr3 = [1, 2, 3, 4, 5];
console.log(arr3[0]);
// expected output: 1

var arr4 = [1, 2, 3, 4, 5];
console.log(arr4[4]);
// expected output: 5

var arr5 = [1, 2, 3, 4, 5];
arr5[5] = 6;
console.log(arr5);
// expected output: [1, 2, 3, 4, 5, 6]

var arr6 = [1, 2, 3, 4, 5, 6];
arr6[10] = 11;
console.log(arr6);
// using the Cmder console emulator
// expected output: [ 1, 2, 3, 4, 5, 6, <4 empty items>, 11 ]

// using the Chrome DevTools Console
// expected output: [1, 2, 3, 4, 5, 6, empty × 4, 11]

console.log(arr6[7]);
// expected output: undefined

console.log(arr6.length);
// expected output: 11

var arr6 = [1, 2, 3, 4, 5, 6];
console.log(arr6.length);
// expected output: 6

arr6[2] = 22;
console.log(arr6);
// expected output: [1, 2, 22, 4, 5, 6]

// Array constructor
var arr7 = Array();
console.log(arr7);
// expected output: []

var arr8 = Array(1, 2, 3);
console.log(arr8);
// expected output: [1, 2, 3]