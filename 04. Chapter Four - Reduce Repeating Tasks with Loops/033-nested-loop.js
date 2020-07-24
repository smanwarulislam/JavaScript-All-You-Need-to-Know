// Chapter Four
// What is Nested Loop

// Example 1

// Problem 1
1
1 2
1 2 3
1 2 3 4
1 2 3 4 5

// Practice 1
var n = 5;

for (var i = 1; i <= n; i++) {
  console.log(i);
}

// expected output:
1
2
3
4
5

// Practice 1
var n = 5;

for (var i = 1; i <= n; i++) {
  for (var j = 1; j <= i; j++) {
    console.log(j);
  }
}

// expected output:
1
1
2
1
2
3
1
2
3
4
1
2
3
4
5

// Solution 1
var n = 5;

for (var i = 1; i <= n; i++) {
  var result = '';

  for (var j = 1; j <= i; j++) {
    result += j + ' ';
  }
  console.log(result);
}

// expected output:
1      
1 2    
1 2 3  
1 2 3 4
1 2 3 4 5

// If the value of n is 10
var n = 10;

for (var i = 1; i <= n; i++) {
  var result = '';

  for (var j = 1; j <= i; j++) {
    result += j + ' ';
  }
  console.log(result);
}

// expected output:
1                 
1 2               
1 2 3             
1 2 3 4           
1 2 3 4 5         
1 2 3 4 5 6       
1 2 3 4 5 6 7     
1 2 3 4 5 6 7 8   
1 2 3 4 5 6 7 8 9
1 2 3 4 5 6 7 8 9 10

// Example 2

// Problem 2
* * * * *
* * * * *
* * * * *
* * * * *
* * * * *

// Solution 2
var n = 5;

for (var i = 1; i <= n; i++) {
  result = '';

  for (var j = 1; j <= n; j++) {
    result += '* ';
  }
  console.log(result);
}

// expected output:
* * * * *
* * * * *
* * * * *
* * * * *
* * * * *

// If the value of n is 10
var n = 10;

for (var i = 1; i <= n; i++) {
  result = '';

  for (var j = 1; j <= n; j++) {
    result += '* ';
  }
  console.log(result);
}

// expected output:
* * * * * * * * * *
* * * * * * * * * *
* * * * * * * * * *
* * * * * * * * * *
* * * * * * * * * *
* * * * * * * * * *
* * * * * * * * * *
* * * * * * * * * *
* * * * * * * * * *
* * * * * * * * * *

// If the value of n is 2
var n = 2;

for (var i = 1; i <= n; i++) {
  result = '';

  for (var j = 1; j <= n; j++) {
    result += '* ';
  }
  console.log(result);
}

// expected output:
* *
* *