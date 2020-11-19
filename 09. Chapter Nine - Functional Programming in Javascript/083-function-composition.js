// Chapter Nine
// What is Function Composition?

function print(input) {
  console.log(input);
}

function multiplyByFive(n) {
  return n * 5;
}

function add(a, b) {
  return a + b;
}

print(multiplyByFive(add(3, 5)));
// expected output: 40