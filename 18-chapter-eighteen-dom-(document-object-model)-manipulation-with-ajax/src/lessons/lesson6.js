// Chapter Eighteen
// 200. What is The Difference Between Two Selectors (getElement vs Query Selector)

let li1 = document.getElementsByTagName('li'); // Element Node

let li2 = document.querySelectorAll('li'); // Node (Element, Comment, Text)

console.log(li1);
// expected output: (See the Chrome DevTools Console)
/* -> HTMLCollection(3) [li.list-group-item, li.list-group-item, li.list-group-item, list-item-one: li.list-group-item]
  -> 0: li.list-group-item
  -> 1: li.list-group-item
  -> 2: li.list-group-item
     length: 3
  -> list-item-one: li.list-group-item
  -> __proto__: HTMLCollection */

console.log(li2);
// expected output: (See the Chrome DevTools Console)
/* -> NodeList(3) [li.list-group-item, li.list-group-item, li.list-group-item]
  -> 0: li.list-group-item
  -> 1: li.list-group-item
  -> 2: li.list-group-item
     length: 3
  -> __proto__: NodeList */

// The constructors of these two (getElementsByTagName, querySelectorAll) are fully different.
// querySelector returns one type of data and getElementsBySomething returns another type of data.

console.log(li1.constructor.name);
// expected output: (See the Chrome DevTools Console)
// HTMLCollection

console.log(li2.constructor.name);
// expected output: (See the Chrome DevTools Console)
// NodeList

// Main Difference:
/* - document.getElementsBySomething -> HTMLCollection
- document.querySelector -> NodeList */

// There is another big difference:
/* document.getElementsBySomething
- It will always take live updates

document.querySelector
- It will not take live updates */

// What is the difference between Element and Node?

let ul = document.querySelector('ul'); // querySelector -> Anything can be used here. It does not matter.
console.log(ul.children);
// expected output: (See the Chrome DevTools Console)
/* -> HTMLCollection(3) [li.list-group-item, li.list-group-item, li.list-group-item, list-item-one: li.list-group-item]
  -> 0: li.list-group-item
  -> 1: li.list-group-item
  -> 2: li.list-group-item
     length: 3
  -> list-item-one: li.list-group-item
  -> __proto__: HTMLCollection */

console.log(ul.childNodes);
// expected output: (See the Chrome DevTools Console)
/* -> NodeList(7) [text, li.list-group-item, text, li.list-group-item, text, li.list-group-item, text]
  -> 0: text
    ...
    -> childNodes: NodeList []
       data: "↵      "
  -> 1: li.list-group-item
  -> 2: text
    ...
    -> childNodes: NodeList []
       data: "↵      "
  -> 3: li.list-group-item
  -> 4: text
    ...
    -> childNodes: NodeList []
       data: "↵      "
  -> 5: li.list-group-item
  -> 6: text
    ...
    -> childNodes: NodeList []
       data: "↵      "
     length: 7
  -> __proto__: NodeList */

// That means, Node means that any Node can be. And Element means the only Element. Just HTML Element.