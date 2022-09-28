// Collect.js Library Introduction

// collect.js
// https://collect.js.org/

// ecrmnn/collect.js: Convenient and dependency free wrapper for working with arrays and objects - GitHub
// https://github.com/ecrmnn/collect.js

// collect.js
// https://collect.js.org/

// API

// all()
// The all method returns the underlying array or object represented by the collection:
collect([1, 2, 3]).all();

// [1, 2, 3]

collect({
  firstname: 'Darwin',
  lastname: 'Núñez',
}).all();

// {
//   firstname: 'Darwin',
//   lastname: 'Núñez',
// }

// average()
// Alias for the avg() method

// avg()
// The avg method returns the average of all items in the collection:
collect([1, 3, 3, 7]).avg();

// 3.5

// If the collection contains nested arrays or objects, you should pass a key to use for determining which values to calculate the average:
const collection = collect([
  {
    name: 'My story',
    pages: 176,
  },
  {
    name: 'Fantastic Beasts and Where to Find Them',
    pages: 1096,
  },
]);

collection.avg('pages');

// 636

// You may also define a callback function
const collection = collect([
  {
    name: 'My story',
    pages: 176,
  },
  {
    name: 'Fantastic Beasts and Where to Find Them',
    pages: 1096,
  },
]);

collection.avg(book => book.pages);

// 636

// count()
// The count method returns the total number of items in the collection:
const collection = collect([1, 2, 3, 4]);

collection.count();

// 4

// countBy()
// The countBy method counts the occurences of values in the collection. By default, the method counts the occurrences of every element:
const collection = collect([1, 2, 2, 2, 3]);

const counted = collection.countBy();

counted.all();

// {
//   1: 1,
//   2: 3,
//   3: 1,
// }

// However, you pass a callback to the countBy method to count all items by a custom value:
const collection = collect([
  'mohamed.salah@gmail.com',
  'darwin.nunez@yahoo.com',
  'roberto.firmino@gmail.com',
]);

const counted = collection.countBy(email => email.split('@')[1]);

counted.all();

// {
//   'gmail.com': 2,
//   'yahoo.com': 1,
// }