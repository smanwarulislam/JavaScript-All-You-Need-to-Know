// Chapter Eighteen
// 204. Insert Created Element Using Adjacent Element

// What if I can insert any place, any data, any element?

// Represents the li tag in another way
let li = createElement('li', 'list-group-item', 'Four');
li.setAttribute('title', 'I am the Fourth Item');

let list = document.getElementById('list');
list.appendChild(li);

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
at Object../src/lessons/lesson10.js (lesson10.js:47) */

// let container = document.getElementById('cont');
// console.log(cont);
// expected output: (See the Chrome DevTools Console)
// -> <div class="container" id="cont">...</div>

// container.appendChild(div);
// expected output: (See the webpage output)
/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. */

// What if I can insert any place, any data, any element?
// Putting data (div) under the list element that we have

// list.insertAdjacentElement('beforebegin', div);
// expected output: (See the webpage output)

// expected output: (See the Chrome DevTools Elements tab)
/* -> <div class="">
  -> <p class="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  -> <p class="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  </div>

-> <ul class="list-group my-5" id="list">
<li class="list-group-item" name="list-item-one">One</li>
<li class="list-group-item">Two</li>
<li class="list-group-item">Three</li>
<li class="list-group-item" title="I am the Fourth Item">Four</li>
</ul> */

// list.insertAdjacentElement('afterbegin', div);
// expected output: (See the webpage output)

// expected output: (See the Chrome DevTools Elements tab)
/* -> <ul class="list-group my-5" id="list">
  -> <div class="">
    -> <p class="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    -> <p class="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
<li class="list-group-item" name="list-item-one">One</li>
<li class="list-group-item">Two</li>
<li class="list-group-item">Three</li>
<li class="list-group-item" title="I am the Fourth Item">Four</li>
</ul> */

// list.insertAdjacentElement('beforeend', div);
// expected output: (See the webpage output)

// expected output: (See the Chrome DevTools Elements tab)
/* -> <ul class="list-group my-5" id="list">
<li class="list-group-item" name="list-item-one">One</li>
<li class="list-group-item">Two</li>
<li class="list-group-item">Three</li>
<li class="list-group-item" title="I am the Fourth Item">Four</li>
-> <div class="">
  -> <p class="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  -> <p class="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  </div>
  </ul> */

list.insertAdjacentElement('afterend', div);
// expected output: (See the webpage output)

// expected output: (See the Chrome DevTools Elements tab)
/* -> <ul class="list-group my-5" id="list">
<li class="list-group-item" name="list-item-one">One</li>
<li class="list-group-item">Two</li>
<li class="list-group-item">Three</li>
<li class="list-group-item" title="I am the Fourth Item">Four</li>
</ul>

-> <div class="">
  -> <p class="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  -> <p class="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  </div> */