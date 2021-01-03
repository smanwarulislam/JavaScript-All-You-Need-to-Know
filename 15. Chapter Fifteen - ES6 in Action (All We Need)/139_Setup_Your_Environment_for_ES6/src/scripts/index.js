import '../styles/index.scss';

// import { sum, sub  } from './math';

// console.log('Hello Webpack 4');

// console.log(sum(10, 20));
// console.log(sub(10, 20));

// Chapter Fifteen
// 139. Setup Your Environment for ES6

// alert('Yes, I have done everything perfectly.');

// Chapter Fifteen
// 140. How to Use Template String

var s = `asdfghjkl

qwertyuiop

lkjhgfdsa
    zxcvbnm  mnbvcxz`;

console.log(s);
// expected output: (See the Chrome DevTools Console)
/* asdfghjkl

qwertyuiop

lkjhgfdsa
    zxcvbnm  mnbvcxz */

var s2 = `    zxcvbnm

asdfghjkl

lkjhgfdsa
    qwertyuiop poiuytrewq    `; 

console.log(s2.trim());
// expected output: (See the Chrome DevTools Console)
/* zxcvbnm

asdfghjkl

lkjhgfdsa
    qwertyuiop poiuytrewq */

var age = 25;
var name = 'S M Anwarul Islam';

console.log('My name is ' + name + ' and I am ' + age + ' years old');
// expected output: (See the Chrome DevTools Console)
// My name is S M Anwarul Islam and I am 25 years old

console.log(`My name is ${name} and I am ${age} years old`);
// expected output: (See the Chrome DevTools Console)
// My name is S M Anwarul Islam and I am 25 years old

console.log(`My name is ${name} and I am ${age} years old. I am ${age < 18 ? 'not': ''}adult`);
// expected output: (See the Chrome DevTools Console)
// My name is S M Anwarul Islam and I am 25 years old. I am adult

var age2 = 15;
var name2 = 'S M Raju';

console.log(`My name is ${name2} and I am ${age2} years old. I am ${age2 < 18 ? 'not ': ''}adult`);
// expected output: (See the Chrome DevTools Console)
// My name is S M Raju and I am 15 years old. I am not adult

// String Methods
console.log(name2.padStart(15));
// expected output: (See the Chrome DevTools Console)
      //  S M Raju

console.log(name2.padStart(15, '*'));
// expected output: (See the Chrome DevTools Console)
// *******S M Raju

console.log(name2.padEnd(15, 'a'));
// expected output: (See the Chrome DevTools Console)
// S M Rajuaaaaaaa

console.log('S'.repeat(10));
// expected output: (See the Chrome DevTools Console)
// SSSSSSSSSS