// Chapter Four
// Infinity For Loop in JavaScript

for (;;) {
  var randomNumber = Math.floor(Math.random() * (10 + 1));

  if (randomNumber === 9) {
    console.log('Winner Winner Chicken Dinner');
    break;
  } else {
    console.log('You have got ' + randomNumber);
  }
}

// expected output:
/* You have got 6
You have got 7
You have got 6
You have got 8
You have got 0
You have got 10
You have got 1
You have got 4
You have got 3
You have got 5
Winner Winner Chicken Dinner */

// expected output:
/* You have got 10
You have got 3
Winner Winner Chicken Dinner */

// expected output:
// Winner Winner Chicken Dinner