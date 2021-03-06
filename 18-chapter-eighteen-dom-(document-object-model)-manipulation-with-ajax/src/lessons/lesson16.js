// Chapter Eighteen
// 210. Understanding Event Delegation in DOM Manipulation

let btn = document.getElementById('btn');

// console.dir(btn);
// expected output: (See the Chrome DevTools Console)
// -> button#btn.btn.btn-success

// It is a kind of event handling
/* btn.onclick = function (e) {
  console.log(e);
}; */

// expected output: (See the Chrome DevTools Console)
// -> PointerEvent {isTrusted: true, pointerId: 1, width: 1, height: 1, pressure: 0, …}

// We can do another type of event handling without handling the above event
// Note: In case of event handler/DOM Manipulation normal function should be used instead of arrow function
/* btn.addEventListener('click', function (e) {
  alert('I have Clicked');
}); */

// expected output: (See the webpage output)
// I have Clicked

let box = document.getElementById('box');
box.addEventListener('mousemove', function (e) {
  // console.log(e);
  /* document.getElementById('x-value').innerHTML = e.clientX;
  document.getElementById('y-value').innerHTML = e.clientY; */
  document.getElementById('x-value').innerHTML = e.offsetX;
  document.getElementById('y-value').innerHTML = e.offsetY;

  if (e.offsetX === 50 && e.offsetY) {
    alert('(50, 50)');
  }
});

// For console.log(e)
// expected output: (See the Chrome DevTools Console)
// -> MouseEvent {isTrusted: true, screenX: 954, screenY: 432, clientX: 954, clientY: 361, …}
// -> ...

/* For
document.getElementById('x-value').innerHTML = e.clientX;
document.getElementById('y-value').innerHTML = e.clientY; */
// expected output: (See the webpage output)
// (119, 295)
// ...
// ...
// ...

/* For
document.getElementById('x-value').innerHTML = e.offsetX;
document.getElementById('y-value').innerHTML = e.offsetY; */
// expected output: (See the webpage output)
// (0, 0)
// (1, 0)
// ...

// For if () {}
// expected output: (See the webpage output)
// (50, 50)

// Add a new item to the list by clicking the Add Me button
let list = document.getElementById('list');

btn.addEventListener('click', function (e) {
  // console.log('Clicked');

  // let item = list.lastChild.cloneNode(true);
  let item = list.lastElementChild.cloneNode(true);
  item.innerHTML = 'Newly Created Item';
  list.appendChild(item);
});

// For console.log('Clicked')
// expected output: (See the Chrome DevTools Console)
// Clicked

// expected output: (See the webpage output)
// Newly Created Item

// Understanding Event Delegation in DOM Manipulation

// Event Delegation Problem
/* [...list.children].forEach(li => {
  li.onclick = function (e) {
    // console.log(e.target);
    e.target.remove();
  };
}); */

// For console.log(e.target)
// expected output: (See the Chrome DevTools Console) | (The li that I clicked has moved here)
{/* <li class="list-group-item" id="list-item-one">One</li> */}
{/* <li class="list-group-item">Three</li> */}

// For e.target.remove()
// expected output: (See the webpage output)

// List items One, Two, Three are being removed but Newly Created Item is not being removed! What does this mean?

// Now all that needs to be done is to solve this problem
// This is the solution of Event Delegation
list.addEventListener('click', function (e) {
  // console.log(this.contains(e.target));
  if (this.contains(e.target)) {
    e.target.remove();
  }
});

// For console.log(this.contains(e.target))
// expected output: (See the Chrome DevTools Console) | (The list item of One and a Newly Created Item has been clicked)
// true
// true

// For e.target.remove()
// expected output: (See the webpage output)