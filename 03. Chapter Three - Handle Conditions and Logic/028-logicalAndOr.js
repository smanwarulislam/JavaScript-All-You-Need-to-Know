// Chapter Three
// Some Shorthand with AND, OR Operator

// Shorthand with OR (||) Operator

// Using the if-else statement
var name = '';
var fullName = '';

if (name.length === 0) {
  fullName = 'S M Anwarul Islam';
} else {
  fullName = name;
}

console.log(fullName);
// expected output: S M Anwarul Islam

// Using shorthand OR (||) Operator
var name = '';

var fullName = name || 'S M Anwarul Islam';

console.log(fullName);
// expected output: S M Anwarul Islam

var name = 'MR. XYZ';

var fullName = name || 'S M Anwarul Islam';

console.log(fullName);
// expected output: MR. XYZ

// Shorthand with AND (&&) Operator

// Using the if-else statement
var isOk = true;

if (isOk) {
  console.log('Everything is OK');
}

// expected output: Everything is OK

// Using shorthand AND (&&) Operator
var isOk = true;

isOk && console.log('Everything is OK');

// expected output: Everything is OK

var isOk = false;

isOk && console.log('Everything is OK');

// expected output: Did not give any output