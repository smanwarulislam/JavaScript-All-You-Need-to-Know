// Chapter Four
// How to Use Do While Loop

// The do...while statement/loop
// Syntax
do {
  // code block to be executed
} while (condition);

// The while statement/loop
var isRunning = false;

while (isRunning) {
  console.log('I am Running');
}

// expected output: Did not give any output

// The do...while statement/loop
var isRunning = false;

do {
  console.log('I am Running');
} while (isRunning);

// expected output: I am Running