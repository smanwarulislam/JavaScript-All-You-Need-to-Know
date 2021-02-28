// Chapter Eighteen
// 202. How to Loop Through HTML Collections

// Select the list items/Select the li tags
let listItem = document.getElementsByTagName('li');
console.log(listItem); // The li tag will return the HTML collection which is an array-like data structure
// expected output: (See the Chrome DevTools Console)
/* -> HTMLCollection(3) [li.list-group-item, li.list-group-item, li.list-group-item, list-item-one: li.list-group-item]
  -> 0: li.list-group-item
  -> 1: li.list-group-item
  -> 2: li.list-group-item
     length: 3
  -> list-item-one: li.list-group-item
  -> __proto__: HTMLCollection */

// I want to run forEach() method/loop using this data structure
// I want to change the innerHTML (inner text) inside each element by running the forEach() method/loop
/* listItem.forEach((li, index) => {
  let text = li.innerHTML;
  li.innerHTML = `(${index + 1}) ${text}`;
}); */

// expected output: (See the Chrome DevTools Console)
/* -> Uncaught TypeError: listItem.forEach is not a function
at Object../src/lessons/lesson8.js (lesson8.js:18) */

// listItem is an array-like data structure. But not an array. Since it is not an array, we cannot apply array methods here.
// But we can convert this listItem to the array if we want.
// How can I do that? We have 3 ways to do that.

// 1. At first, we can convert this listItem to an array using Array.from() method
let listItems = Array.from(listItem);
// console.log(listItems);
// expected output: (See the Chrome DevTools Console)
/* -> (3) [li.list-group-item, li.list-group-item, li.list-group-item]
  -> 0: li.list-group-item
  -> 1: li.list-group-item
  -> 2: li.list-group-item
     length: 3
  -> __proto__: Array(0) */

// This means that we can now run the forEach() method on top of this Array
/* listItems.forEach((li, index) => {
  let text = li.innerHTML;
  li.innerHTML = `(${index + 1}) ${text}`;
}); */

// expected output: (See the Chrome DevTools Console)
// (There is no output on the console but the output has come on the web page)
/* (1) One
(2) Two
(3) Three */

// 2. I can do it in another way (The slice() method - Array.prototype.slice())
let listItems2 = Array.prototype.slice.apply(listItem);

/* listItems2.forEach((li, index2) => {
  let text2 = li.innerHTML;
  li.innerHTML = `(${index2 + 1}) ${text2}`;
}); */

// expected output: (See the Chrome DevTools Console)
// (There is no output on the console but the output has come on the web page) | (Same output)
/* (1) One
(2) Two
(3) Three */

// 3. The easiest way. This system applies to ES6. Spread operator - Spread syntax (...)
let listItems3 = [...listItem];

listItems3.forEach((li, index3) => {
  let text3 = li.innerHTML;
  li.innerHTML = `(${index3 + 1}) ${text3}`;
});

// expected output: (See the Chrome DevTools Console)
// (There is no output on the console but the output has come on the web page) | (Same output)
/* (1) One
(2) Two
(3) Three */