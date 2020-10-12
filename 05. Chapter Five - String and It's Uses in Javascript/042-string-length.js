// Chapter Five
// How to Get Length of a String

var str = 'Some String';
console.log(str.charAt(0));
// expected output: S

var str = 'Some String';
console.log(str.charAt(3));
// expected output: e

var str = 'Some String';
console.log(str.charAt(11));
// expected output:
  // (an empty string)

var str = 'Some String';
console.log(str.charAt(12));
// expected output:
  // (an empty string)

var str = 'Some String';
var str2 = str.charAt(12);
console.log(str2);
// expected output:
  // (an empty string)

var str = 'Some String';
var str2 = str.charAt(12);
console.log(typeof str2);
// expected output: string

// Using the custom method
var str = 'Some String';

var length = 0;

while (true) {
  if (str.charAt(length) == '') {
    break;
  } else {
    length++;
  }
}

console.log(length);
// expected output: 11

var str = 'Some';

var length = 0;

while (true) {
  if (str.charAt(length) == '') {
    break;
  } else {
    length++;
  }
}

console.log(length);
// expected output: 4

var str = 'S M Anwarul Islam';

var length = 0;

while (true) {
  if (str.charAt(length) == '') {
    break;
  } else {
    length++;
  }
}

console.log(length);
// expected output: 17

// Using JavaScript built-in string method/function
var str = 'S M Anwarul Islam';
console.log(str.length);
// expected output: 17

console.log('somethingasdfghjkl'.length);
// expected output: 18