// Chapter Seven
// Remove Object Properties

// Dot Notation

var point = {
  x: 10,
  y: 20,
  z: 15
};

point.x = 45;
console.log(point);
// expected output: {x: 45, y: 20, z: 15}

point.a = 16;
console.log(point);
// expected output: {x: 45, y: 20, z: 15, a: 16}

console.log(point.d);
// expected output: undefined

// Bracket Notation/Array Notation

point['y'] = 100;
console.log(point);
// expected output: {x: 45, y: 100, z: 15, a: 16}

var prop = 'z';
point[prop] = 55;

console.log(point);
// expected output: {x: 45, y: 100, z: 55, a: 16}

// Remove

point.a = undefined;
console.log(point);
// expected output: {x: 45, y: 100, z: 55, a: undefined}

delete point.a;
console.log(point);
// expected output: {x: 45, y: 100, z: 55}