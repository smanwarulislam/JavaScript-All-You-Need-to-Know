// Chapter Eighteen
// 206. How to Clone Node Include Its Child Elements

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