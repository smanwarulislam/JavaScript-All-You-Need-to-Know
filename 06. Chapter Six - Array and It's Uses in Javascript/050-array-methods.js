// Chapter Six
// Important Array Methods of JavaScript

var arr = [4, 5, 9, 6];

console.log(arr);
// expected output: [4, 5, 9, 6]

// The join() method
var arr2 = [4, 5, 9, 6];

console.log(arr2.join(' '));
// expected output: 4 5 9 6

var arr3 = [4, 5, 9, 6];

console.log(arr3.join(','));
// expected output: 4,5,9,6

var arr4 = [4, 5, 9, 6];

console.log(arr4.join(', '));
// expected output: 4, 5, 9, 6

var arr5 = [4, 5, 9, 6];

console.log(arr5.join(' | '));
// expected output: 4 | 5 | 9 | 6

// The fill() method
var arr6 = [4, 5, 9, 6];

arr6.fill(0);
console.log(arr6);
// expected output: [0, 0, 0, 0]

var arr7 = [4, 5, 9, 6];

arr7.fill(true);
console.log(arr7);
// expected output: [true, true, true, true]

// The concat() method
var arr8 = [4, 5, 9, 6];
var arr9 = [5, 10, 45, 23];

arr8.concat(arr9);
console.log(arr8);
// expected output: [4, 5, 9, 6]

var arr9 = [4, 5, 9, 6];
var arr10 = [5, 10, 45, 23];

var arr11 = arr9.concat(arr10);
console.log(arr11);
// expected output: [4, 5, 9, 6, 5, 10, 45, 23]

var arr12 = [4, 5, 9, 6];
var arr13 = [5, 10, 45, 23];

var arr14 = arr13.concat(arr12);
console.log(arr14);
// expected output: [5, 10, 45, 23, 4, 5, 9, 6]

// The Array.isArray() method
var arr15 = [4, 5, 9, 6];

console.log(Array.isArray(arr15));
// expected output: true

// The Array.from() static method
var arr16 = [4, 5, 9, 6];
var arr17 = Array.from(arr16);

console.log(arr17);
// expected output: [4, 5, 9, 6]

var arr18 = [4, 5, 9, 6];
var arr19 = arr18;

console.log(arr19);
// expected output: [4, 5, 9, 6]

// JavaScript: Array, mutability & immutability
var a = [1, 2];
var b = a;

b[0] = 5;

console.log(a);
// expected output: [5, 2]

var a2 = [1, 2];
var b2 = Array.from(a2);

b2[0] = 5;

console.log(a2);
console.log(b2);
// expected output:
/* [1, 2]
[5, 2] */