// Chapter Eighteen
// 203. How to Create DOM Elements

// Represents the li tag
// let li = document.createElement('li');
// console.log(li);
// expected output: (See the Chrome DevTools Console)
{/* <li></li> */}

// console.dir(li);
// expected output: (See the Chrome DevTools Console)
/* -> li
...
...
...
  -> __proto__: HTMLLIElement */

/* li.className = 'list-group-item';
li.setAttribute('title', 'I am the Fourth Item'); */
// console.log(li);
// expected output: (See the Chrome DevTools Console)
{/* <li class="list-group-item" title="I am the Fourth Item"></li> */}

// li.innerHTML = 'Four';

// Push the data (li) inside the list (webpage output)
/* let list = document.getElementById('list');
list.appendChild(li); */
// expected output: (See the webpage output)
// Four

// Represents the li tag in another way
let li2 = createElement('li', 'list-group-item', 'Four');
li2.setAttribute('title', 'I am the Fourth Item');

let list2 = document.getElementById('list');
list2.appendChild(li2);

// I can create ten more div, paragraphs using this function (createElement() {})
// Multiple paragraphs inside the div tag
function createElement(tagName, className, innerHTML) {
  // Create tags
  let tag = document.createElement(tagName);
  tag.className = className || '';
  tag.innerHTML = innerHTML || '';

  return tag;
}

// expected output: (See the webpage output) | (There is no change to the output)
// Four

// Make some paragraphs
let p1 = createElement('p', 'lead', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');

let p2 = createElement('p', 'lead', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');

// There will be two paragraphs inside the div
// Create div
let div = createElement('div');
append(div, [p1, p2]);
// console.log(div);
// expected output: (See the Chrome DevTools Console) | (The data has entered the virtual DOM correctly)
/* -> <div class="">
  -> <p class="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  -> <p class="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  </div> */

// at a time to append many children, we can create a function
function append(parent, children) {
  children.forEach(child => parent.appendChild(child));
}

// Now the job is to insert this data into our DOM (webpage output)
// document.getElementsByClassName('.container')[0].appendChild(div);

// expected output: (See the Chrome DevTools Console)
/* -> Uncaught TypeError: Cannot read property 'appendChild' of undefined
at Object../src/lessons/lesson9.js (lesson9.js:75) */

let container = document.getElementById('cont');
// console.log(cont);
// expected output: (See the Chrome DevTools Console)
// -> <div class="container" id="cont">...</div>

container.appendChild(div);
// expected output: (See the webpage output)
/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. */