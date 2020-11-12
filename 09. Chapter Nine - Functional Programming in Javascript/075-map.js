// Chapter Nine
// Implement map() Method

var arr = [1, 2, 3];

var sqrArr = arr.map(function (value) {
  return Math.random() * 100;
});

console.log(arr);
// expected output: [1, 2, 3]

console.log(sqrArr);
// expected output: [82.87647404364809, 10.18070034264522, 39.06390267537125]

// Square of the array (sqrArr)
var sqrArr = arr.map(function (value) {
  return value * value;
});

console.log(arr);
// expected output: [1, 2, 3]

console.log(sqrArr);
// expected output: [1, 4, 9]

// Implementation of the map() method
// Implementation of the map() method of general way
// Square of the array (arr)
function myMap(arr) {
  var newArr = [];

  for (var i = 0; i < arr.length; i++) {
    var temp = arr[i] * arr[i];
    newArr.push(temp);
  }

  return newArr;
}

console.log(myMap(arr));
// expected output: [1, 4, 9]

// Square of the array (arr)
var arr2 = [1, 2, 3, 4, 5];

function myMap2(arr2) {
  var newArr2 = [];

  for (var i = 0; i < arr2.length; i++) {
    var temp2 = arr2[i] * arr2[i];
    newArr2.push(temp2);
  }

  return newArr2;
}

console.log(myMap2(arr2));
// expected output: [1, 4, 9, 16, 25]

// Quebec of the array (arr2)
// Multiply each array element by 10 (arr2)

function myMap3(arr2, cb) {
  var newArr3 = [];

  for (var i = 0; i < arr2.length; i++) {
    var temp3 = cb(arr2[i], i, arr2);
    newArr3.push(temp3);
  }

  return newArr3;
}

// Quebec of the array (arr2)
var qb = myMap3(arr2, function (value) {
  return value * value * value;
});

// Multiply each array element by 10 (arr2)
var multiplyByTen = myMap3(arr2, function (value) {
  return value * 10;
});

console.log(arr2);
// expected output: [1, 2, 3, 4, 5]

console.log(qb);
// expected output: [1, 8, 27, 64, 125]

console.log(multiplyByTen);
// expected output: [10, 20, 30, 40, 50]