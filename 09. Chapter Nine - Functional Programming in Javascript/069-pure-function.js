// Chapter Nine
// What is Pure Function?

// What is Pure Function?
/* `It returns the same result if given the same arguments`
`It does not cause any observable side effects` */

// Pure function
function sqr(n) {
  return n * n;
}

console.log(sqr(2));
// expected output: 4

console.log(sqr(2));
// expected output: 4

console.log(sqr(2));
// expected output: 4

// It's not a pure function
// Example
var n2 = 10;

function change() {
  n2 = 100;
}

console.log(n2);
// expected output: 10

var n3 = 10;

function change2() {
  n3 = 100;
}

change2();
console.log(n3);
// expected output: 100

// It's not a pure function
// Example
var point = {
  x: 45,
  y: 30
};

function printPoint(point) {
  point.x = 100;
  point.y = 200;

  console.log(point);
}

printPoint(point);
// expected output: {x: 100, y: 200}

var point2 = {
  x2: 45,
  y2: 30
};

function printPoint2(point2) {
  point2.x2 = 100;
  point2.y2 = 200;

  console.log(point2);
}

printPoint2(point2);
// expected output: {x2: 100, y2: 200}

console.log(point2);
// expected output: {x2: 100, y2: 200}