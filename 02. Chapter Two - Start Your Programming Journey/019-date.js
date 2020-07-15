// Chapter Two
// JavaScript Date Functions

var date = new Date();

console.log(date);
// using the Chrome DevTools Console
// expected output: Wed Jul 15 2020 21:38:48 GMT+0600 (Bangladesh Standard Time)

// using the Cmder console emulator
// expected output: 2020-07-15T15:40:26.477Z

console.log(date.toDateString());
// expected output: Wed Jul 15 2020

console.log(date.toTimeString());
// using the Cmder console emulator
// expected output: 22:00:51 GMT+0600 (Bangladesh Standard Time)

console.log(date.toLocaleString());
// using the Cmder console emulator
// expected output: 7/15/2020, 10:00:51 PM

console.log(date.getFullYear());
// expected output: 2020

console.log(date.getMonth());
// expected output: 6

console.log(date.getDate());
// expected output: 15

console.log(date.getHours());
// using the Cmder console emulator
// expected output: 22

console.log(date.getMinutes());
// using the Cmder console emulator
// expected output: 15

console.log(date.getSeconds());
// using the Cmder console emulator
// expected output: 28