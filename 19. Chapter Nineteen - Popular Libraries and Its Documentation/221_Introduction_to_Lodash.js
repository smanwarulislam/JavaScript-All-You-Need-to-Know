// Lodash Library Introduction

// Lodash
// https://lodash.com/

// Lodash - Wikipedia
// https://en.wikipedia.org/wiki/Lodash

// Lodash - Wikipedia
// Lodash is a JavaScript library which provides utility functions for common programming tasks using the functional programming paradigm.

// jQuery
// The jQuery library is mainly used for DOM manipulation. Its main target is the DOM. That is website design.
// You cannot use jQuery for backend development, or mobile application development.

// Lodash
// But you can use Lodash for Node.js applications, front-end applications, and mobile application development.

// Lodash
// https://lodash.com/
// A modern JavaScript utility library delivering modularity, performance & extras.

/* Why Lodash?
Lodash makes JavaScript easier by taking the hassle out of working with arrays, numbers, objects, strings, etc.
Lodash’s modular methods are great for:
> Iterating arrays, objects, & strings
> Manipulating & testing values
> Creating composite functions */

// Documentation
// https://lodash.com/docs/4.17.15

/* Lodash’s modular methods:
“Array” Methods
“Collection” Methods
“Date” Methods
“Function” Methods
“Lang” Methods
“Math” Methods
“Number” Methods
“Object” Methods
“Seq” Methods
“String” Methods
“Util” Methods
Properties
Methods */

// The name of the main object of Lodash is underscore (_)

// By using the underscore dot (_.) we get all the functionality

// “Array” Methods

// The lodash method _.chunk
_.chunk(array, [size=1]);
// Creates an array of elements split into groups the length of size. If array can't be split evenly, the final chunk will be the remaining elements.

// Example

_.chunk(['a', 'b', 'c', 'd'], 2);
// => [['a', 'b'], ['c', 'd']]

_.chunk(['a', 'b', 'c', 'd'], 3);
// => [['a', 'b', 'c'], ['d']]

// The lodash method _.compact
_.compact(array);
// Creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are falsey.

// Example

_.compact([0, 1, false, 2, '', 3]);
// => [1, 2, 3]

// “Collection” Methods

// The lodash method _.countBy
_.countBy(collection, [iteratee=_.identity]);
// Creates an object composed of keys generated from the results of running each element of collection thru iteratee. The corresponding value of each key is the number of times the key was returned by iteratee. The iteratee is invoked with one argument: (value).

// Example

_.countBy([6.1, 4.2, 6.3], Math.floor);
// => { '4': 1, '6': 2 }

// The `_.property` iteratee shorthand.
_.countBy(['one', 'two', 'three'], 'length');
// => { '3': 2, '5': 1 }