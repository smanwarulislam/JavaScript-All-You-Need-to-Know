// Chapter Eight
// What is the Inner/nested Function?

function something(greet, name) {
  function sayHi() {
    console.log(greet, name); // console.log(greet + ' ' + name)
  }

  sayHi();
}

sayHi();
// expected output:
/* Uncaught ReferenceError: sayHi is not defined
at <anonymous>:12:1 */

function something(greet, name) {
  function sayHi() {
    console.log(greet, name); // console.log(greet + ' ' + name)
  }

  sayHi();
}

something('Good Morning', 'SM Anwarul Islam');
// expected output: Good Morning SM Anwarul Islam

// Example
function something2(greet2, name2) {
  function getFirstName() {
    if (name2) {
      return name2.split(' ')[0];
    }
  }

  var message = greet2 + ' ' + getFirstName();
  console.log(message);
}

something2('Good Morning', 'SM Anwarul Islam');
// expected output: Good Morning SM

function something3(greet3, name3) {
  function getFirstName2() {
    if (name3) {
      return name3.split(' ')[0];
    }
  }

  var message = greet3 + ' ' + getFirstName2();
  console.log(message);
}

something3('Good Morning', 'Anwarul Islam Raju');
// expected output: Good Morning Anwarul

function something4(greet4, name4) {
  function getFirstName3() {
    if (name4) {
      return name4.split(' ')[0];
    }
  }

  var message = greet4 + ' ' + getFirstName3();
  console.log(message);
}

something4('Good Morning');
// expected output: Good Morning undefined

function something5(greet5, name5) {
  function getFirstName4() {
    if (name5) {
      return name5.split(' ')[0];
    } else {
      return '';
    }
  }

  var message = greet5 + ' ' + getFirstName4();
  console.log(message);
}

something5('Good Morning');
// expected output: Good Morning