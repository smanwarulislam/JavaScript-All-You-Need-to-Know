// Chapter Four
// What is Break Statement

// The while statement/loop

while (true) {
  var randomNumber = Math.floor(Math.random() * (10 + 1));

  if (randomNumber === 9) {
    console.log('Winner Winner Chicken Dinner');
    break;
  } else {
    console.log('You have got ' + randomNumber);
  }
}

// expected output:
/* You have got 3
You have got 4
You have got 10
You have got 0
You have got 1
You have got 4
You have got 0
Winner Winner Chicken Dinner */

// expected output:
/* You have got 8
You have got 4
You have got 4
You have got 10
You have got 1
You have got 0
You have got 0
Winner Winner Chicken Dinner */

// expected output:
/* You have got 8
You have got 5
You have got 4
You have got 8
You have got 8
You have got 6
Winner Winner Chicken Dinner */

// expected output:
// Winner Winner Chicken Dinner

// The for statement/loop

for (var i = 1; i < 10; i++) {
  if (i % 5 === 0) {
    break;
  } else {
    console.log(i);
  }
}

// expected output:
/* 1
2
3
4 */