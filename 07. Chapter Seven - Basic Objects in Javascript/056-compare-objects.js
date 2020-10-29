// Chapter Seven
// Comparing Two Objects

var obj1 = {
  a: 10,
  b: 20
};

var obj2 = {
  a: 10,
  b: 20
};

console.log(obj1 === obj2);
// expected output: false

if (obj1.a === obj2.a && obj1.b === obj2.b) {
  console.log(true);
} else {
  console.log(false);
}

// expected output: true

var obj1 = {
  a: 10,
  b: 20
};

var obj2 = {
  a: 10,
  b: 2
};

if (obj1.a === obj2.a && obj1.b === obj2.b) {
  console.log(true);
} else {
  console.log(false);
}

// expected output: false

// Tricks

var obj1 = {
  a: 10,
  b: 20
};

var obj2 = {
  a: 10,
  b: 20
};

console.log(obj1);
// expected output: {a: 10, b: 20}

console.log(JSON.stringify(obj1));
// expected output: {"a":10,"b":20}

var obj1 = {
  a: 10,
  b: 20
};

var obj2 = {
  a: 10,
  b: 20
};

if (obj1.a === obj2.a && obj1.b === obj2.b) {
  console.log(true);
} else {
  console.log(false);
}

// expected output: true

console.log(JSON.stringify(obj1) === JSON.stringify(obj2));
// expected output: true

var obj1 = {
  a: 10,
  b: 20
};

var obj2 = {
  a: 10,
  b: 2
};

if (obj1.a === obj2.a && obj1.b === obj2.b) {
  console.log(true);
} else {
  console.log(false);
}

// expected output: false

console.log(JSON.stringify(obj1) === JSON.stringify(obj2));
// expected output: false