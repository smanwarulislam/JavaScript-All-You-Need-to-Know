// Chapter Twelve
// Understanding bind, call & apply

function myFunc() {
  console.log(this);
  console.log(this.a + this.b);
}

// myFunc();
// expected output: -> Window {window: Window, self: Window, document: document, name: "", location: Location, …}
// expected output: NaN

// The call() method
// The apply() method
// The bind() method

// call(), apply()
// bind()

function myFunc2() {
  console.log(this);
  console.log(this.a2 + this.b2);
}

// call()
myFunc2.call({});
// expected output: -> {}
// expected output: NaN

myFunc2();
// expected output: -> Window {window: Window, self: Window, document: document, name: "", location: Location, …}
// expected output: NaN

myFunc2.call({a2: 40, b2: 25});
// expected output: -> {a2: 40, b2: 25}
// expected output: 65

myFunc2.call({a2: 400, b2: 250});
// expected output: -> {a2: 400, b2: 250}
// expected output: 650

// apply()
myFunc2.apply({});
// expected output: -> {}
// expected output: NaN

function myFunc3(c, d) {
  console.log(this);
  console.log(this.a3 + this.b3 + c + d);
}

// call()
myFunc3.call({a3: 40, b3: 25});
// expected output: -> {a3: 40, b3: 25}
// expected output: NaN

myFunc3.call({a3: 40, b3: 25}, 10, 5);
// expected output: -> {a3: 40, b3: 25}
// expected output: 80

// apply()
myFunc3.apply({a3: 400, b3: 250});
// expected output: -> {a3: 400, b3: 250}
// expected output: NaN

// myFunc3.apply({a3: 400, b3: 250}, 10, 5);
// expected output: -> Uncaught TypeError: CreateListFromArrayLike called on non-object

myFunc3.apply({a3: 400, b3: 250}, [10, 5]);
// expected output: -> {a3: 400, b3: 250}
// expected output: 665

// bind()
myFunc3.bind({a3: 7, b3: 3}, 5, 5);
// expected output: (There is no output on the console)
// expected output: (There is no output on the console)

var testBind = myFunc3.bind({a3: 7, b3: 3}, 5, 5);
testBind();
// expected output: -> {a3: 7, b3: 3}
// expected output: 20

// or
var testBind = myFunc3.bind({a3: 7, b3: 3});
testBind(5, 7);
// expected output: -> {a3: 7, b3: 3}
// expected output: 22