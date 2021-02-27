// Chapter Eighteen
// 201. How to Traverse DOM Elements

// Traversing DOM Elements

// Select ul by id
let list = document.getElementById('list');
console.log(list);
// expected output: (See the Chrome DevTools Console)
/* -> <ul class="list-group my-5" id="list">
      <li class="list-group-item" name="list-item-one">One</li>
      <li class="list-group-item">Two</li>
      <li class="list-group-item">Three</li>
    </ul> */

// The parent element of this list (ul)
let parent = list.parentElement; // parentElement/parentNode will provide the same result
console.log(parent);
// expected output: (See the Chrome DevTools Console)
// -> <div class="container">...</div>

// The children of this list (ul)
let children = list.children;
console.log(children);
// expected output: (See the Chrome DevTools Console)
/* -> HTMLCollection(3) [li.list-group-item, li.list-group-item, li.list-group-item, list-item-one: li.list-group-item]
  -> 0: li.list-group-item
  -> 1: li.list-group-item
  -> 2: li.list-group-item
     length: 3
  -> list-item-one: li.list-group-item
  -> __proto__: HTMLCollection */

// The previous sibling of this list (ul)
console.log(list.previousSibling); // The previousSibling property returns Node element
// expected output: (See the Chrome DevTools Console)
/* -> #text
  ...
  -> childNodes: NodeList []
     data: "↵↵    " */

// The previousSibling property returns Node element.
// That's why we won't use previousSibling. We'll use previousElementSibling. Then HTML element or DOM element will return.

console.log(list.previousElementSibling);
// expected output: (See the Chrome DevTools Console)
{/* <h1 id="title" class="text-center my-3">DOM (Document Object Model) Manipulation with Ajax</h1> */}

// The next sibling of this list (ul)
console.log(list.nextElementSibling);
// expected output: (See the Chrome DevTools Console)
// null

// The first element of this list (ul) is li
let li = document.querySelector('li'); // I am using querySelector for this as if I want to take the first element of li
console.log(li.nextElementSibling);
// expected output: (See the Chrome DevTools Console)
{/* <li class="list-group-item">Two</li> */}

// From within this list (ul), first child and last child
console.log(list.firstElementChild);
// expected output: (See the Chrome DevTools Console)
{/* <li class="list-group-item" name="list-item-one">One</li> */}

console.log(list.lastElementChild);
// expected output: (See the Chrome DevTools Console)
{/* <li class="list-group-item">Three</li> */}