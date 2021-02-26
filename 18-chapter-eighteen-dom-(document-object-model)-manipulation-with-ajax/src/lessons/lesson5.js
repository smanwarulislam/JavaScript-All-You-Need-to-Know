// Chapter Eighteen
// 199. Query Selectors in DOM Manipulation

// In Lesson 4 we saw 4 methods for selecting documents or elements
// Today I will see 2 more methods in Lesson 5

// Id, ClassName, TagName, Name

// - Id
// Select the HTML element by ID
let title = document.querySelector('#title');
console.log(title);
// expected output: (See the Chrome DevTools Console)
{/* <h1 id="title" class="text-center my-3">DOM (Document Object Model) Manipulation with Ajax</h1> */}

// - ClassName
// Select any element using the class name
let paragraph = document.querySelector('.lead');
console.log(paragraph);
// expected output: (See the Chrome DevTools Console)
// -> <p class="lead">...</p>

let paragraphs = document.querySelectorAll('.lead');
console.log(paragraphs);
// expected output: (See the Chrome DevTools Console)
/* -> NodeList(2) [p.lead, p.lead]
  -> 0: p.lead
  -> 1: p.lead
     length: 2
  -> __proto__: NodeList */

// - TagName
// Select the element using the tag name
let lists = document.querySelectorAll('li');
console.log(lists);
// expected output: (See the Chrome DevTools Console)
/* -> NodeList(3) [li.list-group-item, li.list-group-item, li.list-group-item]
  -> 0: li.list-group-item
  -> 1: li.list-group-item
  -> 2: li.list-group-item
     length: 3
  -> __proto__: NodeList */

// - Name
// Select the element using the name (The name is basically an attribute)
let listItemOne = document.querySelector('[name^="list-item-one"]');
console.log(listItemOne);
// expected output: (See the Chrome DevTools Console)
{/* <li class="list-group-item" name="list-item-one">One</li> */}