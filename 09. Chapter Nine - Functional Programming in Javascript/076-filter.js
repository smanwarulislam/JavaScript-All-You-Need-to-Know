// Chapter Nine
// Implement filter() Method

var arr = [4, 8, 1, 3, 5, 6, 4, 3, 9];

// An even number from the array (arr)
var filteredArr = arr.filter(function (value) {
  return value % 2 === 0;
});

console.log(filteredArr);
// expected output: [4, 8, 6, 4]

// An odd number from the array (arr)
var filteredArr = arr.filter(function (value) {
  return value % 2 === 1;
});

console.log(filteredArr);
// expected output: [1, 3, 5, 3, 9]

// Greater than 4 from the array (arr)
var filteredArr = arr.filter(function (value) {
  return value > 4;
});

console.log(filteredArr);
// expected output: [8, 5, 6, 9]

// Implementation of the filter() method
// Implementation of the filter() method of general way

// Implementation of the main function
// An even number from the array (arr)
function myFilter(arr) {
  var newArr = [];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) { // An even number from the array (arr)
      newArr.push(arr[i]);
    }
  }

  return newArr;
}

console.log(myFilter(arr));
// expected output: [4, 8, 6, 4]

// Implementation of the main function using a callback function
function myFilter2(arr, cb) { // cb -> callback function
  var newArr2 = [];

  for (var i = 0; i < arr.length; i++) {
    if (cb(arr[i], i, arr)) {
      newArr2.push(arr[i]);
    }
  }

  return newArr2;
}

// An odd number from the array (arr)
console.log(myFilter2(arr, function (value) {
  return value % 2 === 1;
}));

// expected output: [1, 3, 5, 3, 9]

// Greater than 4 from the array (arr)
console.log(myFilter2(arr, function (value) {
  return value > 4;
}));

// expected output: [8, 5, 6, 9]