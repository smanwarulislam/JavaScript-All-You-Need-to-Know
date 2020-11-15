// Chapter Nine
// Implement find() & findIndex() Method

var arr = [7, 4, 8, 6, 9, 2, 1, 70, 3];

// The find() method
// Find the element/number 9 of the array (arr)
var result = arr.find(function (value) {
  return value === 9;
});

console.log(result);
// expected output: 9

// The findIndex() method
// Find the index of element/number 9 of the array (arr)
var result2 = arr.findIndex(function (value) {
  return value === 9;
});

console.log(result2);
// expected output: 4

// Implementation of the find() method

// Implementation of the main function using a callback function
function myFind(arr, cb) { // cb -> callback function
  for (var i = 0; i < arr.length; i++) {
    if (cb(arr[i])) { // arr[i]) -> the value/element/number of the array (arr)
      return arr[i]; // find() method
    }
  }
}

// Find the element/number 9 of the array (arr)
var result3 = myFind(arr, function (value) {
  return value === 9;
});

console.log(result3);
// expected output: 9

// Implementation of the findIndex() method

// Implementation of the main function using a callback function
function myFind2(arr, cb) { // cb -> callback function
  for (var i = 0; i < arr.length; i++) {
    if (cb(arr[i])) { // arr[i]) -> the value/element/number of the array (arr)
      return i; // findIndex() method
    }
  }
}

// Find the index of element/number 9 of the array (arr)
var result4 = myFind2(arr, function (value) {
  return value === 9;
});

console.log(result4);
// expected output: 4