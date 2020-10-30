// Chapter Seven
// Iterate Object Properties

var obj = {
  x: 40,
  y: 60,
  z: 75
};

console.log('x' in obj);
// expected output: true

console.log('p' in obj);
// expected output: false

// The for...in statement
for (var i in obj) {
  console.log(i);
  console.log(i + ': ' + obj[i]);
}

// expected output:
/* x 
x: 40
y
y: 60
z
z: 75 */