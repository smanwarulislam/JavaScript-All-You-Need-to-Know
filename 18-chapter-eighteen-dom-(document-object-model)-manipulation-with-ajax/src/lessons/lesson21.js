// Chapter Eighteen
// 215. How to Validate Form Data in DOM

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
  // How to Validate Form Data in DOM
  let isValid = false; // At first, that value will be false
  let formData = {}; // I will collect the data inside this formData object
  [...this.elements].forEach(el => { // [...this.elements] -> It will provide us with an array of elements
    // console.log(el.type, el.name, el.value);
    if (el.type !== 'submit') {
      isValid = validator(el);
      if (isValid) {
        formData[el.name] = el.value;
      } else {
        el.classList.add('is-invalid');
        alert(`${el.name} is Required`);
      }
    }
  });
  if (isValid) {
    console.log(formData);
    // I can also reset the form
    this.reset();
  }
});

// How to Validate Form Data in DOM

// What can I do to verify?
function validator(el) { // el -> Based on the el we will return whether it is OK
  if (!el.value) {
    return false;
  }

  return true;
}

// Leaving everything in the form blank and clicking the submit button
// expected output: (Giving alert)
// name is Required
// email is Required
// password is Required
// expected output: (See the Chrome DevTools Console)
/* -> {country: "Bangladesh"}
country: "Bangladesh"
-> __proto__: Object */

// When the form is filled up
// expected output: (See the Chrome DevTools Console)
/* -> {name: "S M Anwarul Islam", email: "engg.anwarbd@gmail.com", password: "password123", country: "Bangladesh"}
country: "Bangladesh"
email: "engg.anwarbd@gmail.com"
name: "S M Anwarul Islam"
password: "password123"
-> __proto__: Object */

// When el.classList.add('is-invalid')
// Leaving everything in the form blank and clicking the submit button
// expected output: (Giving alert)
// name is Required
// email is Required
// password is Required
// expected output: (See the webpage output)
// (Showing validation error)
// expected output: (See the Chrome DevTools Console)
/* -> {country: "Bangladesh"}
country: "Bangladesh"
-> __proto__: Object */