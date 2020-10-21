// Chapter Six
// Insert, Remove, and Replace Methods

// Insert
var arr = [1, 2, 3, 4, 5, 6, 7, 8];

// Insert 9 to index 3

// arr[3] = 9;
// console.log(arr);
// expected output: [1, 2, 3, 9, 5, 6, 7, 8]

// arr.push(9);
// console.log(arr);
// expected output: [1, 2, 3, 4, 5, 6, 7, 8, 9]

// arr.unshift(9);
// console.log(arr);
// expected output: [9, 1, 2, 3, 4, 5, 6, 7, 8]

arr.splice(3, 0, 9);
console.log(arr);
// expected output: [1, 2, 3, 9, 4, 5, 6, 7, 8]

arr.splice(3, 0, 9, 10);
console.log(arr);
// expected output: [1, 2, 3, 9, 10, 4, 5, 6, 7, 8]

// Remove
var arr = [1, 2, 3, 4, 5, 6, 7, 8];

// arr[3] = undefined;
// console.log(arr);
// expected output: [1, 2, 3, undefined, 5, 6, 7, 8]

// arr.pop();
// console.log(arr);
// expected output: [1, 2, 3, 4, 5, 6, 7]

// arr.shift();
// console.log(arr);
// expected output: [2, 3, 4, 5, 6, 7, 8]

arr.splice(3, 1);
console.log(arr);
// expected output: [1, 2, 3, 5, 6, 7, 8]

// Replace/Update
var arr = [1, 2, 3, 4, 5, 6, 7, 8];

arr.splice(3, 1, 44);
console.log(arr);
// expected output: [1, 2, 3, 44, 5, 6, 7, 8]