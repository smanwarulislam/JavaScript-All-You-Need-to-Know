// Chapter Eighteen
// 211. Input Elements and Event Handling

let elementName = document.getElementById('elementName');
// console.log(elementName); // That is, the input element has been selected
// expected output: (See the Chrome DevTools Console)
{/* <input type="text" class="form-control" id="elementName" placeholder="Enter Name"></input> */}

// Now our job is to add an event with this input element
elementName.addEventListener('keypress', function (event) {
  // console.log(event);
  // When the Enter key will be pressed | key: "Enter"
  if (event.key === 'Enter') {
    // console.log(event.target.value); // event.target.value -> I will print out the value of event.target
    document.getElementById('show-name').innerHTML = `Your name is ${event.target.value}`;
    // When the data is printed out on the console, the input box is empty
    event.target.value = '';
  }
});

// For console.log(event)
// See the webpage
// What is Your Name?
// ___ (S M Anwarul Islam)

// expected output: (See the Chrome DevTools Console)

// See the webpage
// What is Your Name?
// ___ (S M Anwarul Islam) | // When the Enter key will be pressed

// expected output: (See the Chrome DevTools Console)
/* -> KeyboardEvent {isTrusted: true, key: "Enter", code: "Enter", location: 0, ctrlKey: false, …}
key: "Enter"
keyCode: 13 */

// For console.log(event.target.value)
// See the webpage
// What is Your Name?
// ___ (S M Anwarul Islam)

// expected output: (See the Chrome DevTools Console)
// S M Anwarul Islam

// When the data is printed out on the console, the input box is empty

// See the webpage
// What is Your Name?
// ___ (S M Anwarul Islam) | (Press an enter key)

// See the webpage
// What is Your Name?
// ___

// expected output: (See the Chrome DevTools Console)
// S M Anwarul Islam

// For document.getElementById('show-name').innerHTML = `Your name is ${event.target.value}`
// See the webpage
// What is Your Name?
// ___ (S M Anwarul Islam) | (Press an enter key)
// Your name is S M Anwarul Islam