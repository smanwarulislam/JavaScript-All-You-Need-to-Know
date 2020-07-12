// Chapter Two
// Type Conversion & Truthy Falsy Value

var str = '1000';
var n = 10;

console.log(str * n);
// expected output: 10000

console.log(str + n);
// expected output: "100010"

console.log(str);
// expected output: "1000"

console.log(Number(str));
// expected output: 1000

console.log(Number.parseInt(str));
// expected output: 1000

console.log(n.toString());
// expected output: "10"

console.log(Number(Infinity));
// expected output: Infinity

console.log(String(Infinity));
// expected output: "Infinity"

console.log(Boolean(Infinity));
// expected output: true

console.log(Boolean(-Infinity));
// expected output: true

// Falsy Values
''
0
null
undefined
NaN

console.log(Boolean(''));
// expected output: false

console.log(Boolean('asdfghjkl'));
// expected output: true

console.log(Boolean(null));
// expected output: false

console.log(Boolean(undefined));
// expected output: false

console.log(Boolean(0));
// expected output: false

console.log(Boolean(451));
// expected output: true

console.log(true);
// expected output: true

console.log(true.toString());
// expected output: "true"

// Constructor
String
Number
Boolean