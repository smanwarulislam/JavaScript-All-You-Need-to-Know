// Chapter Seven
// Object Built-in Methods

var obj = {
  x: 40,
  y: 60,
  z: 75
};

console.log(Object.keys(obj));
// expected output: ["x", "y", "z"]

console.log(Object.values(obj));
// expected output: [40, 60, 75]

console.log(Object.entries(obj));
// using the Cmder console emulator
// expected output: [ [ 'x', 40 ], [ 'y', 60 ], [ 'z', 75 ] ]

// using the Chrome DevTools Console
// expected output: [Array(2), Array(2), Array(2)]

// The Object.assign() method

// var obj2 = obj;
// obj2.x = 70;
// obj2.y = 100;

// console.log(obj);
// expected output: {x: 70, y: 100, z: 75}

// console.log(obj2);
// expected output: {x: 70, y: 100, z: 75}

var obj2 = Object.assign({}, obj);
obj2.x = 100;

console.log(obj);
// expected output: {x: 40, y: 60, z: 75}

console.log(obj2);
// expected output: {x: 100, y: 60, z: 75}