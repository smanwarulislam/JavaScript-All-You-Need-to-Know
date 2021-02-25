// Chapter Eighteen
// 198. Basic Selectors in DOM Manipulation

console.dir(document.body);
// expected output: (See the Chrome DevTools Console)
/* -> body
...
...
...
  -> children: HTMLCollection(4) [div.container, script, script, script]
    -> 0: div.container
    ...
    ...
    ...
      -> children: HTMLCollection(4) [h1#title.text-center.my-3, p.lead, p.lead, ul.list-group.my-5, title: h1#title.text-center.my-3]
        -> 0: h1#title.text-center.my-3
        -> 1: p.lead
        -> 2: p.lead
        -> 3: ul.list-group.my-5
          length: 4
        -> title: h1#title.text-center.my-3
        -> __proto__: HTMLCollection */

// In Lesson 4 we will see what selectors are

// What does DOM API give us to select HTML or DOM elements?
// Id, ClassName, TagName, Name

// - Id
// Select the HTML element by ID
let title = document.getElementById('title');
console.log(title);
// expected output: (See the Chrome DevTools Console)
{/* <h1 id="title" class="text-center my-3">DOM (Document Object Model) Manipulation with Ajax</h1> */}

// - ClassName
// Select any element using the class name
let paragraphs = document.getElementsByClassName('lead');
console.log(paragraphs);
// expected output: (See the Chrome DevTools Console)
/* -> HTMLCollection(2) [p.lead, p.lead]
  -> 0: p.lead
  -> 1: p.lead
     length: 2
  -> __proto__: HTMLCollection */

// - TagName
// Select the element using the tag name
let lists = document.getElementsByTagName('li');
console.log(lists);
// expected output: (See the Chrome DevTools Console)
/* -> HTMLCollection(3) [li.list-group-item, li.list-group-item, li.list-group-item, list-item-one: li.list-group-item]
  -> 0: li.list-group-item
  -> 1: li.list-group-item
  -> 2: li.list-group-item
     length: 3
  -> list-item-one: li.list-group-item
  -> __proto__: HTMLCollection */

// - Name
// Select the element using the name
let listItemOne = document.getElementsByName('list-item-one');
console.log(listItemOne);
// expected output: (See the Chrome DevTools Console)
/* -> NodeList [li.list-group-item]
  -> 0: li.list-group-item
     length: 1
  -> __proto__: NodeList */