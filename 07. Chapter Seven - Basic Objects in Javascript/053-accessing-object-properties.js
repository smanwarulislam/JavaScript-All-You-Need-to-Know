// Chapter Seven
// How to Access Object Properties

// Dot notation vs Bracket notation

// Dot Notation

var point = {
  x: 10,
  y: 20,
  z: 15
};

console.log(point.x);
// expected output: 10

console.log(point.y);
// expected output: 20

console.log(point.z);
// expected output: 15

console.log(point.x + point.z);
// expected output: 25

// Bracket Notation/Array Notation

console.log(point['x']);
// expected output: 10

console.log(point['y']);
// expected output: 20

console.log(point['z']);
// expected output: 15

var show = 'x';

console.log(point.show);
// expected output: undefined

console.log(point[show]);
// expected output: 10

var show2 = 'y';

console.log(point[show2]);
// expected output: 20

var show3 = 'z';

console.log(point[show3]);
// expected output: 15