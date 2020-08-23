// Chapter Four
// What is Continue Statement

for (var i = 0; i < 10; i++) {
  if (i === 3 || i === 7) {
    continue;
  } else {
    console.log(i);
  }
}

// expected output:
/* 0
1
2
4
5
6
8
9 */