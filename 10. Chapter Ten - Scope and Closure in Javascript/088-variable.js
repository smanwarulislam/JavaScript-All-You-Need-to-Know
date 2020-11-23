// Chapter Ten
// Variable Object Creation

var a = 10;

var b; // variable declaration | Creational Phase

console.log(a); // execution | Executional Phase
// expected output: 10

console.log(b); // execution | Executional Phase
// expected output: undefined

b = 20;

console.log(b);
// expected output: 20

console.log(c); // execution | Executional Phase
// expected output: undefined

var c = 50;

console.log(c);
// expected output: 50

// Phase 1: Creational Phase
// a = undefined
// b = undefined
// c = undefined

// Phase 2: Executional Phase
// a = 10
// b = 20