// Chapter Four
// How to Use While Loop

// The while statement/loop
// Syntax
while (condition) {
  // code block to be executed
}

var i = 0;

while (i < 10) {
  console.log('S M Anwarul Islam');
  i++;
}

// expected output:
/* S M Anwarul Islam
S M Anwarul Islam
S M Anwarul Islam
S M Anwarul Islam
S M Anwarul Islam
S M Anwarul Islam
S M Anwarul Islam
S M Anwarul Islam
S M Anwarul Islam
S M Anwarul Islam */
// 9

var i = 0;

while (i < 10) {
  console.log(i + ' S M Anwarul Islam');
  i++;
}

// expected output:
/* 0 S M Anwarul Islam
1 S M Anwarul Islam
2 S M Anwarul Islam
3 S M Anwarul Islam
4 S M Anwarul Islam
5 S M Anwarul Islam
6 S M Anwarul Islam
7 S M Anwarul Islam
8 S M Anwarul Islam
9 S M Anwarul Islam */
// 9

var isRunning = true;

while (isRunning) {
  var randomNumber = Math.floor(Math.random() * (10 + 1));

  if (randomNumber === 9) {
    console.log('Winner Winner Chicken Dinner');
    isRunning = false;
  } else {
    console.log('You have got ' + randomNumber);
  }
}

// expected output:
/* You have got 0
You have got 5
You have got 0
You have got 3
Winner Winner Chicken Dinner */
// false

/* You have got 4
You have got 2
You have got 1
You have got 0
You have got 0
You have got 3
You have got 1
You have got 8
You have got 6
You have got 2
You have got 0
You have got 1
You have got 5
You have got 10
You have got 4
You have got 8
You have got 4
You have got 10
You have got 8
You have got 4
You have got 0
You have got 1
You have got 7
You have got 6
You have got 7
You have got 8
You have got 4
You have got 4
You have got 1
You have got 3
You have got 8
You have got 8
You have got 7
You have got 10
You have got 0
You have got 4
You have got 5
You have got 5
You have got 3
You have got 8
You have got 5
You have got 3
You have got 6
You have got 0
You have got 1
You have got 2
You have got 3
Winner Winner Chicken Dinner */
// false

/* You have got 10
You have got 0
You have got 6
You have got 1
You have got 7
You have got 7
You have got 10
You have got 5
Winner Winner Chicken Dinner */
// false

/* You have got 10
You have got 3
You have got 4
You have got 2
You have got 1
You have got 5
You have got 4
You have got 5
You have got 4
You have got 1
You have got 8
You have got 6
You have got 10
You have got 10
You have got 6
You have got 3
You have got 1
You have got 10
You have got 0
You have got 0
You have got 7
You have got 5
You have got 0
You have got 4
You have got 10
You have got 8
Winner Winner Chicken Dinner */
// false

/* You have got 7
You have got 7
You have got 8
You have got 3
You have got 3
You have got 8
Winner Winner Chicken Dinner */
// false

/* You have got 7
You have got 3
Winner Winner Chicken Dinner */
// false

/* You have got 0
You have got 3
You have got 8
You have got 4
You have got 1
You have got 1
You have got 8
You have got 1
You have got 4
You have got 5
You have got 3
You have got 3
You have got 8
You have got 4
You have got 2
You have got 7
You have got 2
Winner Winner Chicken Dinner */
// false

// Winner Winner Chicken Dinner
// false