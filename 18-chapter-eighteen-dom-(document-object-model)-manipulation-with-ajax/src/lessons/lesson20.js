// Chapter Eighteen
// 214. How to Handle Form Data in DOM

// We will first select the form to work on the form
let form = document.getElementById('form');

form.addEventListener('submit', function (e) {
  // Calling this function will prevent the behavior that the default behavior browser was providing us related to this form | Page refresh will not happen
  e.preventDefault();
  // console.log('Clicked');
  // How do I see how many elements are in the form?
  // console.log(this.length);
  // The form does not have the forEach method. So how do I do traverses?
  /* this.forEach(el => {
    console.log(el);
  }); */
  // We try another way to see if we have these names or properties with this form
  /* console.log(this.elements[0]);
  console.log(this['email']); */
  let formData = {}; // I will collect the data inside this formData object
  [...this.elements].forEach(el => { // [...this.elements] -> It will provide us with an array of elements
    // console.log(el.type, el.name, el.value);
    if (el.type !== 'submit') {
      formData[el.name] = el.value;
    }
  });
  console.log(formData);
  // I can also reset the form
  this.reset();
});

// For e.preventDefault()
// expected output: (See the webpage output)
// (Page refresh will not happen)

// For console.log('Clicked')
// expected output: (See the Chrome DevTools Console)
// Clicked
// (2) Clicked
// (3) Clicked

// Now the job is to extract the data from inside this form

// For console.log(this.length)
// expected output: (See the Chrome DevTools Console)
// 5

// For this.forEach() {}
// expected output: (See the Chrome DevTools Console)
/* -> Uncaught TypeError: this.forEach is not a function
at HTMLFormElement.<anonymous> (lesson20.js:13) */

// We try another way to see if we have these names or properties with this form
// expected output: (See the Chrome DevTools Console)
{/* <input type="text" class="form-control" id="name" name="name" placeholder="Enter Your Name"></input>
<input type="email" class="form-control" id="email" name="email" placeholder="Enter Your Email"></input> */}

// For [...this.elements]..forEach() {console.log(el.type, el.name, el.value)}
// When everything on the form is empty
// expected output: (See the Chrome DevTools Console)
/* text name
email email
password password
select-one country Bangladesh
submit  Submit */

// For console.log(formData)
// When everything on the form is empty
// expected output: (See the Chrome DevTools Console)
/* -> {name: "", email: "", password: "", country: "Bangladesh"}
country: "Bangladesh"
email: ""
name: ""
password: ""
-> __proto__: Object */

// When the form is filled up
// expected output: (See the Chrome DevTools Console)
/* -> {name: "S M Anwarul Islam", email: "engg.anwarbd@gmail.com", password: "123456", country: "Bangladesh"}
country: "Bangladesh"
email: "engg.anwarbd@gmail.com"
name: "S M Anwarul Islam"
password: "123456"
-> __proto__: Object */

// I can also reset the form
// expected output: (See the Chrome DevTools Console)
/* -> {name: "S M Anwarul Islam", email: "engg.anwarbd@gmail.com", password: "123456", country: "Bangladesh"}
country: "Bangladesh"
email: "engg.anwarbd@gmail.com"
name: "S M Anwarul Islam"
password: "123456"
-> __proto__: Object */