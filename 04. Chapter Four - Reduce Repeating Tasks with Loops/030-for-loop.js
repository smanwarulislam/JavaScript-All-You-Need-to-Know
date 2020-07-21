// Chapter Four
// How to Use For Loop

/* console.log('S M Anwarul Islam');
console.log('S M Anwarul Islam');
console.log('S M Anwarul Islam');
console.log('S M Anwarul Islam');
...
console.log('S M Anwarul Islam'); */

for (var i = 0; i < 100; i++) {
  console.log('S M Anwarul Islam');
}

for (var i = 0; i < 100; i++) {
  console.log((i + 1) + ' S M Anwarul Islam');
}

for (var i = 0; i < 1000; i++) {
  console.log((i + 1) + ' S M Anwarul Islam');
}

for (var i = 999; i < 1000; i++) {
  console.log((i + 1) + ' S M Anwarul Islam');
}

// expected output: 1000 S M Anwarul Islam

for (var i = 990; i < 1000; i++) {
  console.log((i + 1) + ' S M Anwarul Islam');
}

// expected output:
/* 991 S M Anwarul Islam
992 S M Anwarul Islam
993 S M Anwarul Islam
994 S M Anwarul Islam
995 S M Anwarul Islam
996 S M Anwarul Islam
997 S M Anwarul Islam
998 S M Anwarul Islam
999 S M Anwarul Islam
1000 S M Anwarul Islam */

for (var i = 0; i < 1000; i += 100) {
  console.log((i + 1) + ' S M Anwarul Islam');
}

// expected output:
/* 1 S M Anwarul Islam
101 S M Anwarul Islam
201 S M Anwarul Islam
301 S M Anwarul Islam
401 S M Anwarul Islam
501 S M Anwarul Islam
601 S M Anwarul Islam
701 S M Anwarul Islam
801 S M Anwarul Islam
901 S M Anwarul Islam */

for (var i = 0; i < 1000; i += 100) {
  console.log(i + ' S M Anwarul Islam');
}

// expected output:
/* 0 S M Anwarul Islam
100 S M Anwarul Islam
200 S M Anwarul Islam
300 S M Anwarul Islam
400 S M Anwarul Islam
500 S M Anwarul Islam
600 S M Anwarul Islam
700 S M Anwarul Islam
800 S M Anwarul Islam
900 S M Anwarul Islam */

for (var i = 0; i < 1000; i -= 100) {
  console.log(i + ' S M Anwarul Islam');
}

for (var i = 0; i < 1000; i++) {
  console.log(i + ' S M Anwarul Islam');
}

// The for statement/loop
// Syntax
for (initialization; condition; final - expression) {
  // code block to be executed
}

// Print out numbers from 1 to 100
for (var i = 1; i <= 100; i++) {
  console.log(i);
}

// Print out odd numbers from 1 to 100
for (var i = 1; i <= 100; i++) {
  if (i % 2 === 1) {
    console.log(i);
  }
}

// Print out even numbers from 1 to 100
for (var i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// The sum of the numbers from 1 to 10

// wrong solution
for (var i = 1; i <= 10; i++) {
  var sum = 0;
  sum += i;
  console.log(sum);
}

// expected output:
/* 1
2
3
4
5
6
7
8
9
10 */

// original solution
var sum = 0;

for (var i = 1; i <= 10; i++) {
  sum += i;
  console.log(sum);
}

// expected output:
/* 1
3
6
10
15
21
28
36
45
55 */

// step by step original solution
var sum = 0;

for (var i = 1; i <= 10; i++) {
  console.log(sum + ' + ' + i + ' = ' + (sum + i));
  sum += i;
}

console.log('result = ' + sum);
// expected output:
/* 0 + 1 = 1
1 + 2 = 3
3 + 3 = 6
6 + 4 = 10
10 + 5 = 15
15 + 6 = 21
21 + 7 = 28
28 + 8 = 36
36 + 9 = 45
45 + 10 = 55
result = 55 */

// The sum of even numbers between numbers from 1 to 10
var sum = 0;

for (var i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(sum + ' + ' + i + ' = ' + (sum + i));
    sum += i;
  }
}

console.log('result = ' + sum);
// expected output:
/* 0 + 2 = 2
2 + 4 = 6
6 + 6 = 12
12 + 8 = 20
20 + 10 = 30
result = 30 */

// The sum of odd numbers between numbers from 1 to 10
var sum = 0;

for (var i = 1; i <= 10; i++) {
  if (i % 2 === 1) {
    console.log(sum + ' + ' + i + ' = ' + (sum + i));
    sum += i;
  }
}

console.log('result = ' + sum);
// expected output:
/* 0 + 1 = 1
1 + 3 = 4
4 + 5 = 9
9 + 7 = 16
16 + 9 = 25
result = 25 */