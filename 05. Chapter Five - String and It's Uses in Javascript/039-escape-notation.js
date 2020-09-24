// Chapter Five
// What is Escape Notation in JavaScript

// Escape Notation/Character
var str = "This is a 'String'";

console.log(str);
// expected output: This is a 'String'

var str2 = 'This is a \'String\'';

console.log(str2);
// expected output: This is a 'String'

var str3 = 'This is a String';

console.log(str3);
// expected output: This is a String

var str4 = 'This is a \nString';

console.log(str4);
// expected output:
/* This is a 
String */

var str5 = 'This is a \tString';

console.log(str5);
// expected output: This is a 	String

var str6 = 'This is a \\String';

console.log(str6);
// expected output: This is a \String

// Escape Notation/Character
// Carriage Return - \r
// Vertical Tab - \v
// Backspace - \b
// Form Feed - \f