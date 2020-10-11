// Chapter Five
// JavaScript Built-in String Methods

var a = 'I am';
var b = 'S M Anwarul Islam';

var c = a.concat(b);
console.log(c);
// expected output: I amS M Anwarul Islam

var x = 'I am';
var y = 'S M Anwarul Islam';

var z = x.concat(' ', y);
console.log(z);
// expected output: I am S M Anwarul Islam

var a = 'I am';
var b = 'S M Anwarul Islam';

var c = a.concat(' ', b);
var d = c.substr(9);
console.log(d);
// expected output: Anwarul Islam

var a = 'I am';
var b = 'S M Anwarul Islam';

var c = a.concat(' ', b);
var d = c.substr(9, 7);
console.log(d);
// expected output: Anwarul

var a = 'I am';
var b = 'S M Anwarul Islam';

var c = a.concat(' ', b);
var d = c.substr(5);
console.log(d);
// expected output: S M Anwarul Islam

var a = 'I am';
var b = 'S M Anwarul Islam';

var c = a.concat(' ', b);
console.log(c.charAt(5));
// expected output: S

var a = 'I am';
var b = 'S M Anwarul Islam';

var c = a.concat(' ', b);
console.log(c.charAt(0));
// expected output: I

var a = 'I am';
var b = 'S M Anwarul Islam';

var c = a.concat(' ', b);
console.log(c.startsWith('I'));
// expected output: true

var a = 'I am';
var b = 'S M Anwarul Islam';

var c = a.concat(' ', b);
console.log(c.startsWith('I am'));
// expected output: true

var a = 'I am';
var b = 'S M Anwarul Islam';

var c = a.concat(' ', b);
console.log(c.endsWith('Islam'));
// expected output: true

var a = 'I am';
var b = 'S M Anwarul Islam';

var c = a.concat(' ', b);
console.log(c.endsWith('Isl0123'));
// expected output: false

var a = 'I am';
console.log(a.toUpperCase());
// expected output: I AM

var b = 'S M Anwarul Islam';
console.log(b.toLowerCase());
// expected output: s m anwarul islam

console.log('     asdfghjkl     ');
// expected output:      asdfghjkl     

console.log('     asdfghjkl     '.trim());
// expected output: asdfghjkl

var a = 'I am';
var b = 'S M Anwarul Islam';

var c = a.concat(' ', b);
console.log(c.split(' '));
// expected output: ["I", "am", "S", "M", "Anwarul", "Islam"]