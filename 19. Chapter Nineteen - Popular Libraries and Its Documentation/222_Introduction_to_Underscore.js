// Underscore Library Introduction

// Underscore.js
// https://underscorejs.org/

// Underscore.js - Wikipedia
// https://en.wikipedia.org/wiki/Underscore.js

// Underscore.js - Wikipedia
/* Underscore.js is a JavaScript library which provides utility functions for common programming tasks. It is comparable to features provided by Prototype.js and the Ruby language, but opts for a functional programming design instead of extending object prototypes.
The documentation refers to Underscore.js as "the tie to go along with jQuery's tux, and Backbone.js' suspenders." Underscore.js was created by Jeremy Ashkenas, who is also known for Backbone.js and CoffeeScript. */

// Underscore.js
// https://underscorejs.org/
// Underscore is a JavaScript library that provides a whole mess of useful functional programming helpers without extending any built-in objects.

// GitHub Repository
// jashkenas/underscore: JavaScript's utility _ belt - GitHub
// https://github.com/jashkenas/underscore
// Underscore.js is a utility-belt library for JavaScript that provides support for the usual functional suspects (each, map, reduce, filter...) without extending any core JavaScript objects.

// Underscore.js (1.13.6)

/* Collection Functions (Arrays or Objects)
Array Functions
Function (uh, ahem) Functions
Object Functions
Utility Functions
Object-Oriented Style
Chaining */

// Array Functions

// first _.first(array, [n]) Aliases: head, take
// Returns the first element of an array. Passing n will return the first n elements of the array.

_.first([5, 4, 3, 2, 1]);
// => 5

// initial _.initial(array, [n])
// Returns everything but the last entry of the array. Especially useful on the arguments object. Pass n to exclude the last n elements from the result.

_.initial([5, 4, 3, 2, 1]);
// => [5, 4, 3, 2]

// last _.last(array, [n])
// Returns the last element of an array. Passing n will return the last n elements of the array.

_.last([5, 4, 3, 2, 1]);
// => 1

// rest _.rest(array, [index]) Aliases: tail, drop
// Returns the rest of the elements in an array. Pass an index to return the values of the array from that index onward.

_.rest([5, 4, 3, 2, 1]);
// => [4, 3, 2, 1]

// All you need to find out is (These three things):
/* - What does the function do?
- What should be passed as arguments to the function? And
- What does the function return? */