// Math.js Library Introduction

// math.js | an extensive math library for JavaScript and Node.js
// https://mathjs.org/

// An extensive math library for JavaScript and Node.js - GitHub
// https://github.com/josdejong/mathjs

// math.js | an extensive math library for JavaScript and Node.js
// https://mathjs.org/

// An extensive math library for JavaScript and Node.js
// Math.js is an extensive math library for JavaScript and Node.js. It features a flexible expression parser with support for symbolic computation, comes with a large set of built-in functions and constants, and offers an integrated solution to work with different data types like numbers, big numbers, complex numbers, fractions, units, and matrices. Powerful and easy to use.

// Features
/* - Supports numbers, big numbers, complex numbers, fractions, units, strings, arrays, and matrices.
- Is compatible with JavaScript’s built-in Math library.
- Contains a flexible expression parser.
- Does symbolic computation.
- Comes with a large set of built-in functions and constants.
- Can be used as a command line application as well.
- Runs on any JavaScript engine.
- Is easily extensible.
- Open source. */

// An extensive math library for JavaScript and Node.js - GitHub
// https://github.com/josdejong/mathjs

// Math.js is an extensive math library for JavaScript and Node.js. It features a flexible expression parser with support for symbolic computation, comes with a large set of built-in functions and constants, and offers an integrated solution to work with different data types like numbers, big numbers, complex numbers, fractions, units, and matrices. Powerful and easy to use.

// https://mathjs.org/

// Home
// https://mathjs.org/index.html

// Download
// https://mathjs.org/download.html

// Get started
// https://mathjs.org/docs/getting_started.html

// Next
/* To learn more about math.js, check out the available documentation and examples:
- Documentation
- Examples */

// Docs
// https://mathjs.org/docs/index.html

// Documentation

/* Math.js is an extensive math library for JavaScript and Node.js. It features a flexible expression parser with support for symbolic computation, comes with a large set of built-in functions and constants, and offers an integrated solution to work with different data types like numbers, big numbers, complex numbers, fractions, units, and matrices.
Math.js can be used in the browser, in node.js and in any JavaScript engine. */

// Documentation

// Core
/* - Configuration
- Chaining
- Extension
- Serialization */

// Expressions
/* - Parsing and evaluation
- Syntax
- Expression trees
- Algebra
- Customization
- Security */

// Data Types
/* - Numbers
- BigNumbers
- Fractions
- Complex Numbers
- Matrices
- Units */

// Reference
/* - Classes
- Functions
- Constants */

// Custom bundling

// Command Line Interface

// History

// Expressions
// - Parsing and evaluation

// Evaluate
// Math.js comes with a function math.evaluate to evaluate expressions.

// The following code demonstrates how to evaluate expressions.
// evaluate expressions
math.evaluate('sqrt(3^2 + 4^2)');        // 5
math.evaluate('sqrt(-4)');               // 2i
math.evaluate('2 inch to cm');           // 5.08 cm
math.evaluate('cos(45 deg)');            // 0.7071067811865476

// Data Types
// - Fractions

/* For calculations with fractions, math.js supports a Fraction data type.
Fraction support is powered by fraction.js.
Unlike numbers and BigNumbers, fractions can store numbers with infinitely repeating decimals, for example 1/3 = 0.3333333..., which can be represented as 0.(3), or 2/7 which can be represented as 0.(285714). */

// Usage

// A Fraction can be created using the function fraction:
math.fraction('1/3');   // Fraction, 1/3
math.fraction(2, 3);    // Fraction, 2/3
math.fraction('0.(3)'); // Fraction, 1/3

// And can be used in functions like add and multiply like:
math.add(math.fraction('1/3'), math.fraction('1/6'));      // Fraction, 1/2
math.multiply(math.fraction('1/4'), math.fraction('1/2')); // Fraction, 1/8

// Conversion

// Fractions can be converted to numbers and vice versa using the functions number and fraction. When converting a Fraction to a number, precision may be lost when the value cannot represented in 16 digits.
// converting numbers and fractions
const a = math.number(0.3);                       // number, 0.3
const b = math.fraction(a);                       // Fraction, 3/10
const c = math.number(b);                         // number, 0.3

// Data Types
// - Matrices

/* Math.js supports multi dimensional matrices and arrays.
Matrices can be created, manipulated, and used in calculations.
Both regular JavaScript arrays as well as the matrix type implemented by math.js can be used interchangeably in all relevant math.js functions.
math.js supports both dense and sparse matrices. */

// Data Types
// - Complex Numbers

// Math.js supports the creation, manipulation, and calculations with complex numbers. Support of complex numbers is powered by the library complex.js.

// Usage

// A complex number is created using the function math.complex.

// Syntax:
math.complex({re: Number, im: Number}); : Complex