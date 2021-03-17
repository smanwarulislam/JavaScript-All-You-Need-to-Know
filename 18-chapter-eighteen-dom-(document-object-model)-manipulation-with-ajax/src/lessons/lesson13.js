// Chapter Eighteen
// 207. How to Deal with Attributes in DOM Manipulation

// Represents the li tag in another way
let li = createElement('li', 'list-group-item', 'Four');
li.setAttribute('title', 'I am the Fourth Item');

let list = document.getElementById('list');
list.appendChild(li);

function createElement(tagName, className, innerHTML) {
  // Create tags
  let tag = document.createElement(tagName);
  tag.className = className || '';
  tag.innerHTML = innerHTML || '';

  return tag;
}

// expected output: (See the webpage output)
// Four

// at a time to append many children, we can create a function
function append(parent, children) {
  children.forEach(child => parent.appendChild(child));
}

// Update and Remove element

// Update any element
let firstChild = list.firstElementChild;
// console.log(firstChild);
// expected output: (See the Chrome DevTools Console)
{/* <li class="list-group-item" id="list-item-one">One</li> */}

setTimeout(() => {
  firstChild.innerHTML = firstChild.innerHTML + ' (Modified)';
  // background-color change
  // firstChild.style.backgroundColor = 'pale-green'; // (Not working)
  // background change
  firstChild.style.background = 'black'; // expected output: (See the webpage output) - (background is black)
  firstChild.classList.add('text-success'); // expected output: (See the webpage output) - One (Modified)
}, 5000);

// expected output: (See the webpage output)
// One (Modified)

// list.style.backgroundColor = 'pale-green'; // (Not working)

// Remove any element
/* setTimeout(() => {
  list.lastChild.remove();
}, 3000); */

// expected output: (See the webpage output)
// Four | (Removed Four from the list element)

// Clone Node

// I will clone the last li of the li item
// let lastListItem = list.lastElementChild.cloneNode(); // cloneNode () cannot clone deeply
/* let lastListItem = list.lastElementChild.cloneNode(true); // If you want to clone deeply
list.appendChild(lastListItem); */

// expected output: (See the webpage output) | cloneNode() -> cloneNode () cannot clone deeply
// (Just an empty list item will come)

// expected output: (See the webpage output) | cloneNode(true) -> If you want to clone deeply
// Four

// Change the value of the last li item
let lastListItem = list.lastElementChild.cloneNode(true);
lastListItem.innerHTML = 'Five'; // Change the value of the last li item
list.appendChild(lastListItem);

// expected output: (See the webpage output)
// Five

// How to Deal with Attributes in DOM Manipulation

// What are the attributes of the li element?
// There are many ways to look at the attributes of the li element

// The system of getting the attribute (list)
// We can get attributes in these ways
console.log(list.attributes);
// expected output: (See the Chrome DevTools Console)
/* -> NamedNodeMap {0: class, 1: id, class: class, id: id, length: 2}
  -> 0: class
  -> 1: id
     length: 2
  -> class: class
  -> id: id
  -> __proto__: NamedNodeMap */

console.log(list.getAttributeNames());
// expected output: (See the Chrome DevTools Console)
/* -> (2) ["class", "id"]
  0: "class"
  1: "id"
  length: 2
-> __proto__: Array(0) */

console.log(list.getAttributeNode('class'));
// expected output: (See the Chrome DevTools Console)
// class="list-group my-5"

console.log(list.getAttribute('id'));
// expected output: (See the Chrome DevTools Console)
// list

// The way we work
console.log(list.id);
// expected output: (See the Chrome DevTools Console)
// list

console.log(list.className);
// expected output: (See the Chrome DevTools Console)
// list-group my-5

console.log(list.classList);
// expected output: (See the Chrome DevTools Console)
/* -> DOMTokenList(2) ["list-group", "my-5", value: "list-group my-5"]
  0: "list-group"
  1: "my-5"
  length: 2
  value: "list-group my-5"
  -> __proto__: DOMTokenList */

// How can we create attributes?
// lastListItem.id = 'last-item';
// expected output: (See the Chrome DevTools Elements)
{/* <li class="list-group-item" title="I am the Fourth Item" id="last-item">Five</li> */}

// lastListItem.setAttribute('id', 'last-item');
// expected output: (See the Chrome DevTools Elements)
{/* <li class="list-group-item" title="I am the Fourth Item" id="last-item">Five</li> */}

let attribute = document.createAttribute('title');
attribute.value = 'I am Title';

lastListItem.setAttributeNode(attribute);
// expected output: (See the Chrome DevTools Elements)
{/* <li class="list-group-item" title="I am Title">Five</li> */}