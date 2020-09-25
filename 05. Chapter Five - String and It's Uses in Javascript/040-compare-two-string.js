// Chapter Five
// Compare Two String

// String Comparison
var a = 'abc';
var b = 'bcd';

console.log(a === b);
// expected output: false

var a = 'abc';
var b = 'bcd';

console.log(a > b);
// expected output: false

var a = 'abc';
var b = 'bcd';

console.log(a < b);
// expected output: true

// JavaScript uses a Lexicographic system to compare to string

// Lexical order z, y, x, ..., a, Z, Y, X, ..., B, A

console.log('z' > 'Z');
// expected output: true

console.log('a' > 'Z');
// expected output: true

var a = 'abc';
var b = 'acd';

console.log(a < b);
// expected output: true

var a = 'aaaaaaZ';
var b = 'aaaaaaz';

console.log(a > b);
// expected output: false

console.log('001' == 1);
// expected output: true