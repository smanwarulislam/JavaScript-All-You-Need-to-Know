// Chapter Five
// String Literal vs Constructor

var str = 'Something'; // String Literal
var str2 = String('Something'); // String Constructor

console.log(str2);
// expected output: Something

var n = 10;
var str3 = n;

console.log(str3);
// expected output: 10 (number)

var n = 10;
var str4 = n + '';

console.log(str4);
// expected output: 10 (string)

var n = 10;
var str5 = n.toString();

console.log(str5);
// expected output: 10 (string)

var n = 10;
var str6 = String(n);

console.log(str6);
// expected output: 10 (string)

var n = 10;
var str7 = new String(n);

console.log(str7);
// using the Cmder console emulator
// expected output: [String: '10']

// using the Chrome DevTools Console
// expected output: String {"10"}

var n = 10;
var str8 = new String(n);

console.log(str8.toString());
// expected output: 10 (string)

var n = 10;
var str9 = String(n);

console.log(str9);
// expected output: 10 (string)