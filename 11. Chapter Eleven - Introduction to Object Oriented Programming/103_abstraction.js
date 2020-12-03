// Chapter Eleven
// Take a Look at Abstraction in OOP

// What is Abstraction?
/* Abstraction is one of the key concepts of object-oriented programming (OOP) languages. Its main goal is to handle complexity by hiding unnecessary details from the user. That enables the user to implement more complex logic on top of the provided abstraction without understanding or even thinking about all the hidden complexity. */

// JavaScript Date Functions

var date = new Date();

console.log(date);
// using the Chrome DevTools Console
// expected output: Thu Dec 03 2020 23:01:19 GMT+0600 (Bangladesh Standard Time)

// using the Cmder console emulator
// expected output: 2020-12-03T17:00:29.969Z

console.log(date.getDate());
// expected output: 3

console.log(date.getHours());
// expected output: 23

console.log(date.getMinutes());
// using the Cmder console emulator
// expected output: 12

console.log(date.getSeconds());
// expected output: 19

// Example

// Music player
// Access granted:
/* Play
Next/Prev
Volume */

// Implementation:
// Hidden