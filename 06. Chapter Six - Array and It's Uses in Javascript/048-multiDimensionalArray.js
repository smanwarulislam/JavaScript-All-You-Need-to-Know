// Chapter Six
// What is a Multidimensional Array?

// Multi-Dimensional Array

// Two Dimensional Array/Multi-Dimensional Array
/* var arr = [
  [],
  [],
  []
]; */

// Three Dimensional Array/Multi-Dimensional Array
/* var arr2 = [
  [
    [],
    [],
    []
  ],
  [
    [],
    [],
    []
  ],
  [
    [],
    [],
    []
  ]
]; */

// Two Dimensional Array
var arr3 = [
  [78, 71, 80, 90],
  [80, 75, 90, 86],
  [71, 75, 79, 80]
];

console.log(arr3);
// using the Cmder console emulator
// expected output: [ [ 78, 71, 80, 90 ], [ 80, 75, 90, 86 ], [ 71, 75, 79, 80 ] ]

// using the Chrome DevTools Console
// expected output: [Array(4), Array(4), Array(4)]

console.log(arr3[0]);
console.log(arr3[1]);
console.log(arr3[2]);
// expected output:
/* [78, 71, 80, 90]
[80, 75, 90, 86]
[71, 75, 79, 80] */

console.log(arr3[0][0]);
console.log(arr3[1][1]);
console.log(arr3[2][2]);
// expected output:
/* 78
75
79 */

for (var i = 0; i < arr3.length; i++) {
  console.log(arr3[i]);
}

// expected output:
/* [78, 71, 80, 90]
[80, 75, 90, 86]
[71, 75, 79, 80] */

for (var i = 0; i < arr3.length; i++) {
  for (var j = 0; j < arr3[i].length; j++) {
    console.log('Element ' + i + ': ' + arr3[i][j]);
  }
}

// expected output:
/* Element 0: 78
Element 0: 71
Element 0: 80
Element 0: 90
Element 1: 80
Element 1: 75
Element 1: 90
Element 1: 86
Element 2: 71
Element 2: 75
Element 2: 79
Element 2: 80 */