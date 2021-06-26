// Chapter Eighteen
// 213. List Item and Input Element Event Handling

let list = document.getElementById('list');

// We will apply the event on this list element
/* list.addEventListener('dblclick', function (event) {
  console.log('Double Click Event');
});

list.addEventListener('click', function (e) {
  console.log('Click Event');
}); */

// expected output: (See the Chrome DevTools Console)
// Click Event // (One-click)
// (2) Click Event // (I clicked another)
// (3) Click Event // (I clicked another)
// (4) Click Event // (I clicked another)
/* (6) Click Event // (When I double-clicked) | (One)
Double Click Event */
/* (2) Click Event // (When I double-clicked)
Double Click Event */
/* (2) Click Event // (When I double-clicked)
Double Click Event */

// I will work with double click
// We will apply the event on this list element
list.addEventListener('dblclick', function (event) {
  if (this.contains(event.target)) {
    let innerText = event.target.innerText; // So that the data is not lost
    event.target.innerHTML = ''; // This is the event.target, empty the innerText of the target | Just empty string
    // To create an input box
    let inputBox = createInputBox(innerText); // The input box I created is an element node
    // We need to enter this node inside event.target
    event.target.appendChild(inputBox);

    // Now when we edit and press enter key it will bring back to our list
    inputBox.addEventListener('keypress', function (e) {
      if (e.key === 'Enter') {
        event.target.innerHTML = e.target.value;
      }
    });
  }
});

// expected output: (See the webpage output)
// (Whenever I double click, I see that the text inside is lost)

// Create an input box here instead of text
// A function to create input boxes
function createInputBox(value) { // value -> I will pass the value in the form of an argument
  let inp = document.createElement('input');
  inp.type = 'text';
  inp.className = 'form-control';
  inp.value = value;

  return inp;
}

// expected output: (See the webpage output) | (When I double-clicked)

// Now when we edit and press enter key it will bring back to our list

// expected output: (See the webpage output) | (When I double-clicked)
// (Edit the text and press an enter)