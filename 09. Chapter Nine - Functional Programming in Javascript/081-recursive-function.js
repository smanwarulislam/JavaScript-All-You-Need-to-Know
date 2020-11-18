// Chapter Nine
// What is a recursive function?

// Example
// Print the console log 10 times on the screen with recursion (using a recursive function)
function sayHi(n) {
  if (n === 0) {
    return;
  }
  console.log(n + ' time: ' + 'Hi, I am Calling');
  sayHi(n - 1); // recursive call
}

sayHi(10);
// expected output:
/* 10 time: Hi, I am Calling
9 time: Hi, I am Calling
8 time: Hi, I am Calling
7 time: Hi, I am Calling
6 time: Hi, I am Calling
5 time: Hi, I am Calling
4 time: Hi, I am Calling
3 time: Hi, I am Calling
2 time: Hi, I am Calling
1 time: Hi, I am Calling */

// Example
// The sum of the numbers from 1 to 5 using the recursive function
function sum(n) {
  /* if (n === 0) {
    return 0;
  } */
  
  if (n === 1) {
    return 1;
  }
  
  return n + sum(n - 1); // sum(n - 1) -> recursive call
}

console.log(sum(5));
// expected output: 15

// Example
// Find factorial of 5
function factorial(n) {
  if (n === 1) {
    return 1;
  }

  return n * factorial(n - 1); // factorial(n - 1) -> recursive call
}

console.log(factorial(5));
// expected output: 120

// Example
// The sum of array elements using recursive functions
var arr = [1, 2, 3, 4, 5];

function sumOfArray(arr, lastIndex) {
  if (lastIndex < 0) {
    return 0;
  }

  return arr[lastIndex] + sumOfArray(arr, lastIndex - 1); // sumOfArray(arr, lastIndex - 1) -> recursive call
}

console.log(sumOfArray(arr, arr.length - 1));
// expected output: 15