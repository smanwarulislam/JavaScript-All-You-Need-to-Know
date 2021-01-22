console.log('Hello ES6');
console.log('Hello Webpack 5');
console.log('Hello Babel 7');

// Chapter Fifteen
// 151. What is Iterator - Iterator Basic Idea

const arr = [1, 2, 3];

/* for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
} */

/* function createIterator(collection) { // Interface/function
  let i = 0;
  return {
    next() { // Method
      return {
        done: i >= collection.length,
        value: collection[i++]
      };
    }
  };
} */

// let iterate = createIterator(arr);
// console.log(iterate);
// expected output: (See the Chrome DevTools Console)
/* -> {next: ƒ}
  -> next: ƒ next() */

// console.log(iterate.next());
// expected output: (See the Chrome DevTools Console)
/* -> {done: false, value: 1}
  done: false
  value: 1 */

// console.log(iterate.next());
// expected output: (See the Chrome DevTools Console)
/* -> {done: false, value: 2}
  done: false
  value: 2 */

// console.dir(iterate.next);
// expected output: (See the Chrome DevTools Console)
/* -> ƒ next()
  -> [[Scopes]]: Scopes[3]
    -> 0: Closure (createIterator) {collection: Array(3), i: 2}
      -> collection: (3) [1, 2, 3]
        i: 2 */

// console.log(iterate.next());
// expected output: (See the Chrome DevTools Console)
/* -> {done: false, value: 3}
  done: false
  value: 3 */

// console.log(iterate.next());
// expected output: (See the Chrome DevTools Console)  
/* -> {done: true, value: undefined}
  done: true
  value: undefined */

// Chapter Fifteen
// 152. Create Iterator with ES6 Symbol.Iterator Function

// console.log(arr[Symbol.iterator]); // The Symbol is a unique identifier
// expected output: (See the Chrome DevTools Console)
// ƒ values() { [native code] }

// console.log('str'[Symbol.iterator]);
// expected output: (See the Chrome DevTools Console)
// ƒ [Symbol.iterator]() { [native code] }

// In the case of arrays
let iterate = arr[Symbol.iterator](); // Symbol.iterator -> Already the interface is in an implementation state

console.log(iterate.next());
// expected output: (See the Chrome DevTools Console)
/* -> {value: 1, done: false}
  done: false
  value: 1 */

console.log(iterate.next());
// expected output: (See the Chrome DevTools Console)
/* -> {value: 2, done: false}
  done: false
  value: 2 */

console.log(iterate.next());
// expected output: (See the Chrome DevTools Console)
/* -> {value: 3, done: false}
  done: false
  value: 3 */

console.log(iterate.next());
// expected output: (See the Chrome DevTools Console)
/* -> value: undefined, done: true}
  done: true
  value: undefined */

// In the case of string
let str = 'TEXT';
let iterateText = str[Symbol.iterator]();

console.log(iterateText.next());
// expected output: (See the Chrome DevTools Console)
/* -> {value: "T", done: false}
  done: false
  value: "T" */

console.log(iterateText.next());
// expected output: (See the Chrome DevTools Console)
/* -> {value: "E", done: false}
  done: false
  value: "E" */

console.log(iterateText.next());
// expected output: (See the Chrome DevTools Console)
/* -> {value: "X", done: false}
  done: false
  value: "X" */

console.log(iterateText.next());
// expected output: (See the Chrome DevTools Console)
/* -> {value: "T", done: false}
  done: false
  value: "T" */

console.log(iterateText.next());
// expected output: (See the Chrome DevTools Console)
/* -> {value: undefined, done: true}
  done: true
  value: undefined */

// Chapter Fifteen
// 153. How does For of Loop Work

// The for...of statement
for (let v of arr) { // v = value
  console.log(v);
}

// expected output: (See the Chrome DevTools Console)
/* 1
2
3 */

// String
// Since the string is iterable
for (let v of 'S M Anwarul Islam') {
  console.log(v);
}

// expected output: (See the Chrome DevTools Console)
/* S

M

A
n
w
a
r
u
l

I
s
l
a
m */

// Object
/* let obj = {
  a: 10,
  b: 20
};

for (let v of obj) {
  console.log(v);
} */

// expected output: (See the Chrome DevTools Console)
/* Uncaught TypeError: Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method. */

// Chapter Fifteen
// 154. What is Generator Function in ES6

let obj = {
  start: 1,
  end: 5,
  /* [Symbol.iterator]: function () { // [Symbol.iterator] -> Iterator interface implement
    let currentValue = this.start;
    const self = this;
    return {
      next() {
        return {
          done: currentValue > self.end,
          value: currentValue > self.end ? undefined : currentValue++
        };
      }
    };
  } */
  [Symbol.iterator]: function* () { // function* -> Generator
    let currentValue2 = this.start;
    while (currentValue2 <= this.end) {
      yield currentValue2++; // yield -> Keep doing pause
    }
  }
};

let iterate2 = obj[Symbol.iterator]();
console.log(iterate2.next());
// expected output: (See the Chrome DevTools Console)
// -> {done: false, value: 1}

console.log(iterate2.next());
// expected output: (See the Chrome DevTools Console)
// -> {done: false, value: 2}

console.log(iterate2.next());
// expected output: (See the Chrome DevTools Console)
// -> {done: false, value: 3}

console.log(iterate2.next());
// expected output: (See the Chrome DevTools Console)
// -> {done: false, value: 4}

console.log(iterate2.next());
// expected output: (See the Chrome DevTools Console)
// -> {done: false, value: 5}

console.log(iterate2.next());
// expected output: (See the Chrome DevTools Console)
// -> {done: true, value: undefined}

console.log(iterate2.next());
// expected output: (See the Chrome DevTools Console)
// -> {done: true, value: undefined}

function* generate() {
  yield 1; // yield -> pause
  yield 2; // yield -> pause
  yield 3; // yield -> pause
  // return undefined;
}

let it = generate(); // it for iterator
console.log(it);
// expected output: (See the Chrome DevTools Console)
// -> Generator {_invoke: ƒ}

console.log(it.next());
// expected output: (See the Chrome DevTools Console)
// -> {value: 1, done: false}

console.log(it.next());
// expected output: (See the Chrome DevTools Console)
// -> {value: 2, done: false}

console.log(it.next());
// expected output: (See the Chrome DevTools Console)
// -> {value: 3, done: false}

console.log(it.next());
// expected output: (See the Chrome DevTools Console)
// -> {value: undefined, done: true}

function* generate2(collection2) {
  for (let i = 0; i < collection2.length; i++) {
    yield collection2[i];
  }
}

let it2 = generate2(arr);
console.log(it2.next());
// expected output: (See the Chrome DevTools Console)
// -> {value: 1, done: false}

console.log(it2.next());
// expected output: (See the Chrome DevTools Console)
// -> {value: 2, done: false}

console.log(it2.next());
// expected output: (See the Chrome DevTools Console)
// -> {value: 3, done: false}

console.log(it2.next());
// expected output: (See the Chrome DevTools Console)
// -> {value: undefined, done: true}

const arr2 = [10, 22, 35];

function* generate3(collection3) {
  for (let i = 0; i < collection3.length; i++) {
    yield collection3[i];
  }
}

let it3 = generate3(arr2);
console.log(it3.next());
// expected output: (See the Chrome DevTools Console)
// -> {value: 10, done: false}

console.log(it3.next());
// expected output: (See the Chrome DevTools Console)
// -> {value: 22, done: false}

console.log(it3.next());
// expected output: (See the Chrome DevTools Console)
// -> {value: 35, done: false}

console.log(it3.next());
// expected output: (See the Chrome DevTools Console)
// -> {value: undefined, done: true}

// Chapter Fifteen
// 155. How to Create Custom Iterable Object

let obj2 = {
  start: 1,
  end: 5
};

// The for...of statement
/* for (let v of obj2) {
  console.log(v);
} */

// expected output: (See the Chrome DevTools Console)
/* -> bundle.js:9336 Uncaught TypeError: Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method. */

let obj3 = {
  start: 1,
  end: 5,
  [Symbol.iterator]: function () {
    let currentValue3 = this.start;
    const self2 = this;
    return {
      next() {
        return {
          done: currentValue3 > self2.end,
          // value: currentValue3++
          // Extra logic
          value: currentValue3 > self2.end ? undefined : currentValue3++
        };
      }
    };
  }
};

// The for...of statement
for (let v of obj3) {
  console.log(v);
}

// expected output: (See the Chrome DevTools Console)
/* 1
2
3
4
5 */

// Works as an iterator
let iterate3 = obj3[Symbol.iterator]();
console.log(iterate3.next());
// expected output: (See the Chrome DevTools Console)
// -> {done: false, value: 1}

console.log(iterate3.next());
// expected output: (See the Chrome DevTools Console)
// -> {done: false, value: 2}

console.log(iterate3.next());
// expected output: (See the Chrome DevTools Console)
// -> {done: false, value: 3}

console.log(iterate3.next());
// expected output: (See the Chrome DevTools Console)
// -> {done: false, value: 4}

console.log(iterate3.next());
// expected output: (See the Chrome DevTools Console)
// -> {done: false, value: 5}

console.log(iterate3.next());
// expected output: (See the Chrome DevTools Console)
// -> {done: true, value: undefined}

console.log(iterate3.next());
// expected output: (See the Chrome DevTools Console)
// -> {done: true, value: undefined}

// Chapter Fifteen
// 156. Understanding Set in ES6

let set = new Set([1, 2, 3]);
console.log(set);
// expected output: (See the Chrome DevTools Console)
// -> Set(3) {1, 2, 3}

let set2 = new Set();
set2.add(5);
set2.add(6);
console.log(set2);
// expected output: (See the Chrome DevTools Console)
// -> Set(2) {5, 6}

let set3 = new Set([1, 2, 3]);
set3.add(5);
set3.add(6);
console.log(set3);
// expected output: (See the Chrome DevTools Console)
// -> Set(5) {1, 2, 3, 5, 6}

let set4 = new Set([1, 2, 3]);
set4.add(5);
set4.add(6);
set4.add(1);
set4.add(2);
console.log(set4);
// expected output: (See the Chrome DevTools Console)
// -> Set(5) {1, 2, 3, 5, 6}

console.log(set4.size);
// expected output: (See the Chrome DevTools Console)
// 5

// Some collection of the Set
// clear()
let set5 = new Set([1, 2, 3]);
set5.add(5);
set5.add(6);
set5.add(1);
set5.add(2);

// clear()
set5.clear();
console.log(set5);
// expected output: (See the Chrome DevTools Console)
// -> Set(0) {}

// delete()
let set6 = new Set([1, 2, 3]);
set6.add(5);
set6.add(6);
set6.add(1);
set6.add(2);

// delete()
set6.delete(5);
console.log(set6);
// expected output: (See the Chrome DevTools Console)
// -> Set(4) {1, 2, 3, 6}

// has()
let set7 = new Set([1, 2, 3]);
set7.add(5);
set7.add(6);
set7.add(1);
set7.add(2);

// has()
console.log(set7.has(5));
// expected output: (See the Chrome DevTools Console)
// true

console.log(set7);
// expected output: (See the Chrome DevTools Console)
// -> Set(5) {1, 2, 3, 5, 6}

// keys()
console.log(set7.keys());
// expected output: (See the Chrome DevTools Console)
// -> SetIterator {1, 2, 3, 5, 6}

// values()
console.log(set7.values());
// expected output: (See the Chrome DevTools Console)
// -> SetIterator {1, 2, 3, 5, 6}

let keyIterate = set7.keys();
console.log(keyIterate.next());
// expected output: (See the Chrome DevTools Console)
// -> {value: 1, done: false}

let valueIterate = set7.values();
console.log(valueIterate.next());
// expected output: (See the Chrome DevTools Console)
// -> {value: 1, done: false}

function isIterable(obj) {
  return typeof obj[Symbol.iterator] === 'function';
}

console.log(isIterable({}));
// expected output: (See the Chrome DevTools Console)
// false

console.log(isIterable(obj));
// expected output: (See the Chrome DevTools Console)
// true

console.log(isIterable([]));
// expected output: (See the Chrome DevTools Console)
// true

console.log(isIterable('test'));
// expected output: (See the Chrome DevTools Console)
// true

console.log(isIterable(new Number(45)));
// expected output: (See the Chrome DevTools Console)
// false

console.log(isIterable(new Set()));
// expected output: (See the Chrome DevTools Console)
// true

console.log(isIterable(set));
// expected output: (See the Chrome DevTools Console)
// true

// The for...of statement
for (let v of set7) {
  console.log(v);
}

// expected output: (See the Chrome DevTools Console)
/* 1
2
3
5
6 */

// entries()
console.log(set7.entries());
// expected output: (See the Chrome DevTools Console)
// -> SetIterator {1 => 1, 2 => 2, 3 => 3, 5 => 5, 6 => 6}

// Chapter Fifteen
// 157. Understanding Map in ES6

let map = new Map([
  ['a', 10],
  ['b', 20],
  ['c', 30]
])

console.log(map);
// expected output: (See the Chrome DevTools Console)
// -> Map(3) {"a" => 10, "b" => 20, "c" => 30}

// Some collection of the Map
// set()
map.set('d', 40);
console.log(map);
// expected output: (See the Chrome DevTools Console)
// -> Map(4) {"a" => 10, "b" => 20, "c" => 30, "d" => 40}

// size()
console.log(map.size);
// expected output: (See the Chrome DevTools Console)
// 4

// delete()
map.delete('c');

console.log(map.size);
// expected output: (See the Chrome DevTools Console)
// 3

console.log(map);
// expected output: (See the Chrome DevTools Console)
// -> Map(3) {"a" => 10, "b" => 20, "d" => 40}

// clear()
map.clear();
console.log(map);
// expected output: (See the Chrome DevTools Console)
// -> Map(0) {}

let map2 = new Map([
  ['a', 10],
  ['b', 20],
  ['c', 30]
])

// set()
map2.set('d', 40);
console.log(map2);
// expected output: (See the Chrome DevTools Console)
// -> Map(4) {"a" => 10, "b" => 20, "c" => 30, "d" => 40}

// delete()
map2.delete('c');

console.log(map2.size);
// expected output: (See the Chrome DevTools Console)
// 3

console.log(map2);
// expected output: (See the Chrome DevTools Console)
// -> Map(3) {"a" => 10, "b" => 20, "d" => 40}

// get()
console.log(map2.get('a'));
// expected output: (See the Chrome DevTools Console)
// 10

console.log(map2.get('b'));
// expected output: (See the Chrome DevTools Console)
// 20

// values()
console.log(map2.values());
// expected output: (See the Chrome DevTools Console)
// -> MapIterator {10, 20, 40}

// keys()
console.log(map2.keys());
// expected output: (See the Chrome DevTools Console)
// -> MapIterator {"a", "b", "d"}

// entries()
console.log(map2.entries());
// expected output: (See the Chrome DevTools Console)
// -> MapIterator {"a" => 10, "b" => 20, "d" => 40}

// The for...of statement
let map3 = new Map([
  ['a', 10],
  ['b', 20],
  ['c', 30]
])

// set()
map3.set('d', 40);
console.log(map3);
// expected output: (See the Chrome DevTools Console)
// -> Map(4) {"a" => 10, "b" => 20, "c" => 30, "d" => 40}

map3.set({name: 'S M Anwarul Islam'}, 30); // key, value
// expected output: (See the Chrome DevTools Console)
// -> {name: "S M Anwarul Islam"} 30

for (let [k, v] of map3) { // [k, v] -> key-value destructure from an array
  console.log(v, k); // v -> value | k -> key
}

// expected output: (See the Chrome DevTools Console)
/* 10 "a"
20 "b"
30 "c"
40 "d" */

// The forEach() method
map3.forEach((v, k) => {
  console.log(k, v);
})

// expected output: (See the Chrome DevTools Console)
/* a 10
b 20
c 30
d 40 */