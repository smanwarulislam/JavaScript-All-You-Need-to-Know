// Chapter Nine
// sort(), every() & some() Method

// The sort() method
var arr = [4, 8, 1, 6, 7, 9, 4, 3, 5, 6, 8, 2, 1, 7];

arr.sort();
console.log(arr);
// expected output: [1, 1, 2, 3, 4, 4, 5, 6, 6, 7, 7, 8, 8, 9]

var persons = [
  {
    name: 'A',
    age: 24
  },
  {
    name: 'B',
    age: 19
  },
  {
    name: 'C',
    age: 26
  },
  {
    name: 'D',
    age: 21
  }
];

persons.sort();
console.log(persons);
// expected output:
/* [ { name: 'A', age: 24 },
  { name: 'B', age: 19 },
  { name: 'C', age: 26 },
  { name: 'D', age: 21 } ] */

var arr2 = [4, 8, 1, 6, 7, 9, -8, 0, -2, 4, 3, 5, 6, 8, 2, 1, 7, -4];

arr2.sort();
console.log(arr2);
// expected output: [-2, -4, -8, 0, 1, 1, 2, 3, 4, 4, 5, 6, 6, 7, 7, 8, 8, 9]

// For this reason, we need to take the help of the callback function

arr2.sort(function (a, b) { // callback function
  if (a > b) {
    return 1;
  } else if (a < b) {
    return -1;
  } else {
    return 0;
  }
});

console.log(arr2); // ascending order
// expected output: [-8, -4, -2, 0, 1, 1, 2, 3, 4, 4, 5, 6, 6, 7, 7, 8, 8, 9]

arr2.sort(function (a, b) { // callback function
  if (a > b) {
    return -1;
  } else if (a < b) {
    return 1;
  } else {
    return 0;
  }
});

console.log(arr2); // descending order
// expected output: [9, 8, 8, 7, 7, 6, 6, 5, 4, 4, 3, 2, 1, 1, 0, -2, -4, -8]

// Sorting persons arrays based on age
persons.sort(function (a, b) { // callback function | a, b -> object | a -> array element, b -> array element
  if (a.age > b.age) {
    return 1;
  } else if (a.age < b.age) {
    return -1;
  } else {
    return 0;
  }
});

console.log(persons);
// expected output:
/* [ { name: 'B', age: 19 },
  { name: 'D', age: 21 },
  { name: 'A', age: 24 },
  { name: 'C', age: 26 } ] */

// The every() method
var arr3 = [4, 8, 1, 6, 7, 9, 0, 4, 3, 5, 6, 8, 2, 1, 7];

var result1 = arr3.every(function (value) {
  return value % 2 === 0; // Will check if all the numbers are even numbers
});

console.log(result1);
// expected output: false

var result2 = arr3.every(function (value) {
  return value >= 0; // Will check if all the numbers are positive numbers
});

console.log(result2);
// expected output: true

var arr4 = [4, 8, 1, 6, 7, 9, 0, 4, 3, 5, 6, 8, 2, 1, 7, -1];

var result3 = arr4.every(function (value) {
  return value >= 0; // Will check if all the numbers are positive numbers
});

console.log(result3);
// expected output: false

// The some() method
var arr5 = [4, 8, 1, 6, 7, 9, 0, 4, 3, 5, 6, 8, 2, 1, 7, -1];

var result4 = arr5.some(function (value) {
  return value % 2 === 1; // Will check if there is at least one odd number
});

console.log(result4);
// expected output: true

var result5 = arr5.some(function (value) {
  return value < 0; // Will check if there is at least one negative number
});

console.log(result5);
// expected output: true

var arr6 = [4, 8, 1, 6, 7, 9, 0, 4, 3, 5, 6, 8, 2, 1, 7, 1];

var result6 = arr6.some(function (value) {
  return value < 0; // Will check if there is at least one negative number
});

console.log(result6);
// expected output: false