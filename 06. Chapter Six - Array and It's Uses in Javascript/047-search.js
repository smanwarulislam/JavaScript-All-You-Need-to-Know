// Chapter Six
// How to Search Anything from an Array

// Search Data

var arr = [3, 7, 2, 6, 8, 4, 55, 9, 89, 27];

var find = 10;
var isFound = false;

/* for (var i = 0; i < arr.length; i++) {
  if (arr[i] === find) {
    console.log('Data Found at Index ' + i);
    break;
  }
} */

// expected output: The console log does not give any output

/* for (var i = 0; i < arr.length; i++) {
  if (arr[i] === find) {
    console.log('Data Found at Index ' + i);
    break;
  } else {
    console.log('Data Not Found');
  }
} */

// expected output:
/* Data Not Found
Data Not Found
Data Not Found
Data Not Found
Data Not Found
Data Not Found
Data Not Found
Data Not Found
Data Not Found
Data Not Found */

for (var i = 0; i < arr.length; i++) {
  if (arr[i] === find) {
    console.log('Data Found at Index ' + i);
    isFound = true;
    break;
  }
}

if (!isFound) {
  console.log('Data Not Found');
}

// expected output: Data Not Found

var arr = [3, 7, 2, 6, 8, 4, 55, 9, 89, 27];

var find = 7;
var isFound = false;

for (var i = 0; i < arr.length; i++) {
  if (arr[i] === find) {
    console.log('Data Found at Index ' + i);
    isFound = true;
    break;
  }
}

if (!isFound) {
  console.log('Data Not Found');
}

// expected output: Data Found at Index 1

var arr = [3, 7, 2, 6, 8, 4, 55, 9, 89, 27];

var find = 55;
var isFound = false;

for (var i = 0; i < arr.length; i++) {
  if (arr[i] === find) {
    console.log('Data Found at Index ' + i);
    isFound = true;
    break;
  }
}

if (!isFound) {
  console.log('Data Not Found');
}

// expected output: Data Found at Index 6

var arr = [3, 7, 2, 6, 8, 4, 55, 9, 89, 27];

var find = 555;
var isFound = false;

for (var i = 0; i < arr.length; i++) {
  if (arr[i] === find) {
    console.log('Data Found at Index ' + i);
    isFound = true;
    break;
  }
}

if (!isFound) {
  console.log('Data Not Found');
}

// expected output: Data Not Found