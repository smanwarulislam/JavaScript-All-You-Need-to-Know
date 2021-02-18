// Chapter Seventeen
// 191. Async Function with Await Keyword

function myPromise() {
  return Promise.resolve('Test value');
}

console.log(myPromise());
// expected output: (See the Chrome DevTools Console)
/* -> Promise {<fulfilled>: "Test value"}
  -> __proto__: Promise
    [[PromiseState]]: "fulfilled"
    [[PromiseResult]]: "Test value" */

// The basic definition of an async function
// async function
async function test() {

}

console.log(test());
// expected output: (See the Chrome DevTools Console)
/* -> Promise {<fulfilled>: undefined}
  -> __proto__: Promise
    [[PromiseState]]: "fulfilled"
    [[PromiseResult]]: undefined */

async function test2() {
  return 'Test';
}

console.log(test2());
// expected output: (See the Chrome DevTools Console)
/* -> Promise {<fulfilled>: "Test"}
  -> __proto__: Promise
    [[PromiseState]]: "fulfilled"
    [[PromiseResult]]: "Test" */

// test2().then(v => alert(v));
// expected output: (See the Chrome DevTools Console) | (Will show alert message)
// Test

// That means we can return a new resolve promise directly by creating an async function.

// Also what else can be done with the async function

let p1 = Promise.resolve('I am a Promise');

function myAsyncFunc() {
  p1.then(v2 => alert(v2)); // resolve p1 | That's what we do as usual
}

// myAsyncFunc();
// expected output: (See the Chrome DevTools Console) | (Will show alert message)
// I am a Promise

// To do more simply (async function, await)
let p2 = new Promise(resolve => {
  setTimeout(resolve, 5000, 'Test value 2');
});

async function myAsyncFunc2() {
  // To resolve a promise inside an async function
  let v3 = await p2; // await -> Where there is an await keyword, he will wait until the promise is resolved
  // console.log('Test 2');
  console.log(v3);
}

myAsyncFunc2();
// For console.log('Test 2')
// expected output: (See the Chrome DevTools Console)
// Test 2

// For console.log(v3)
// expected output: (See the Chrome DevTools Console)
// Test value 2

// Working with fetch API for better understanding

/* function fetchData() {
  let res = await fetch('https://jsonplaceholder.typicode.com/users'); // The fetch API returns a promise

  console.log(res);
}

fetchData(); */
// expected output: (See the Chrome DevTools Console)
/* -> Uncaught Error: Module build failed (from ./node_modules/babel-loader/lib/index.js): | app.js:27
/* SyntaxError: G:\GitHub\repositories\JavaScript-All-You-Need-to-Know\17-chapter-seventeen-asynchronous-javascript-in-action\src\lessons\lesson15.js: Unexpected reserved word 'await' (81:12) */

async function fetchData2() {
  let res2 = await fetch('https://jsonplaceholder.typicode.com/users'); // The fetch API returns a promise

  console.log(res2);
}

fetchData2();
// expected output: (See the Chrome DevTools Console)
/* -> Response {type: "cors", url: "https://jsonplaceholder.typicode.com/users", redirected: false, status: 200, ok: true, …} */

async function fetchData3() {
  let res3 = await fetch('https://jsonplaceholder.typicode.com/users'); // The fetch API returns a promise

  console.log(res3.json()); // res3.json() -> It's basically a promise. This promise must also be resolve.
}

fetchData3();
// expected output: (See the Chrome DevTools Console)
/* -> Promise {<pending>}
  -> __proto__: Promise
     [[PromiseState]]: "fulfilled"
  -> [[PromiseResult]]: Array(10) */

// To resolve this promise (console.log(res3.json()))
async function fetchData4() {
  let res4 = await fetch('https://jsonplaceholder.typicode.com/users'); // The fetch API returns a promise

  let data = await res4.json();

  console.log(data);
}

fetchData4();
// expected output: (See the Chrome DevTools Console)
/* -> (10) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
  -> 0: {id: 1, name: "Leanne Graham", username: "Bret", email: "Sincere@april.biz", address: {…}, …}
  -> 1: {id: 2, name: "Ervin Howell", username: "Antonette", email: "Shanna@melissa.tv", address: {…}, …}
  -> 2: {id: 3, name: "Clementine Bauch", username: "Samantha", email: "Nathan@yesenia.net", address: {…}, …}
  -> 3: {id: 4, name: "Patricia Lebsack", username: "Karianne", email: "Julianne.OConner@kory.org", address: {…}, …}
  -> 4: {id: 5, name: "Chelsey Dietrich", username: "Kamren", email: "Lucio_Hettinger@annie.ca", address: {…}, …}
  -> 5: {id: 6, name: "Mrs. Dennis Schulist", username: "Leopoldo_Corkery", email: "Karley_Dach@jasper.info", address: {…}, …}
  -> 6: {id: 7, name: "Kurtis Weissnat", username: "Elwyn.Skiles", email: "Telly.Hoeger@billy.biz", address: {…}, …}
  -> 7: {id: 8, name: "Nicholas Runolfsdottir V", username: "Maxime_Nienow", email: "Sherwood@rosamond.me", address: {…}, …}
  -> 8: {id: 9, name: "Glenna Reichert", username: "Delphine", email: "Chaim_McDermott@dana.io", address: {…}, …}
  -> 9: {id: 10, name: "Clementina DuBuque", username: "Moriah.Stanton", email: "Rey.Padberg@karina.biz", address: {…}, …} */

// Print out everyone's name
async function fetchData5() {
  let res5 = await fetch('https://jsonplaceholder.typicode.com/users'); // The fetch API returns a promise

  let data2 = await res5.json();

  let names = data2.map(u => u.name);
  console.log(names);
}

fetchData5();
// expected output: (See the Chrome DevTools Console)
/* -> (10) ["Leanne Graham", "Ervin Howell", "Clementine Bauch", "Patricia Lebsack", "Chelsey Dietrich", "Mrs. Dennis Schulist", "Kurtis Weissnat", "Nicholas Runolfsdottir V", "Glenna Reichert", "Clementina DuBuque"] */

// If an error occurs for any reason
async function fetchData6() {
  let res6 = await fetch('https://jsonplaceholder.typicode.com/user'); // The fetch API returns a promise

  let data3 = await res6.json();

  let names2 = data3.map(u2 => u2.name);
  console.log(names2);
}

// fetchData6();
// expected output: (See the Chrome DevTools Console)
/* -> GET https://jsonplaceholder.typicode.com/user 404 | lesson15.js:153
-> lesson15.js:157 Uncaught (in promise) TypeError: data3.map is not a function | lesson15.js:157 */

async function fetchData7() {
  try {
    let res7 = await fetch('https://jsonplaceholder.typicode.com/user'); // The fetch API returns a promise

    let data4 = await res7.json();

    let names3 = data4.map(u3 => u3.name);
    console.log(names3);
  } catch (e) {
      // console.log(e);
      console.log(e.message);
  }
}

fetchData7();
// expected output: (See the Chrome DevTools Console)
/* -> GET https://jsonplaceholder.typicode.com/user 404 | lesson15.js:168
TypeError: data4.map is not a function | lesson15.js:175 | For console.log(e) */

// For console.log(e.message)
/* GET https://jsonplaceholder.typicode.com/user 404 | lesson15.js:168
data4.map is not a function | lesson15.js:176 */

// If there are multiple promises
let promises = [Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)];

async function promiseAll() {
  let result = await Promise.all(promises);
  console.log(result);
}

promiseAll();
// expected output: (See the Chrome DevTools Console)
// -> (3) [1, 2, 3]