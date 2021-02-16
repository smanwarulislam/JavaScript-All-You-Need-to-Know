// Chapter Seventeen
// 189. Implement Your Own Version of Fetch API

// Basically, the fetch API returns a promise

const BASE_URL = "https://jsonplaceholder.typicode.com";

/* let res = fetch(`${BASE_URL}/users/1`);
console.log(res); */
// expected output: (See the Chrome DevTools Console)
/* -> Promise {<pending>}
  -> __proto__: Promise
    [[PromiseState]]: "fulfilled"
  -> [[PromiseResult]]: Response */

// All you have to do is take the data
fetch(`${BASE_URL}/users/1`)
  .then((res) => {
    // console.log(res);
    console.log(res.json());
  })
  .catch((e) => {
    console.log(e);
  });

// For console.log(res)
// expected output: (See the Chrome DevTools Console)
/* -> Response {type: "cors", url: "https://jsonplaceholder.typicode.com/users/1", redirected: false, status: 200, ok: true, …}
  body: (...)
  -> headers: Headers {}
  -> __proto__: Response
    -> json: ƒ json() */

// For console.log(res.json())
// expected output: (See the Chrome DevTools Console)
/* -> Promise {<pending>}
  -> __proto__: Promise
    [[PromiseState]]: "fulfilled"
  -> [[PromiseResult]]: Object
    -> address: {street: "Kulas Light", suite: "Apt. 556", city: "Gwenborough", zipcode: "92998-3874", geo: {…}}
    -> company: {name: "Romaguera-Crona", catchPhrase: "Multi-layered client-server neural-net", bs: "harness real-time e-markets"}
       email: "Sincere@april.biz"
       id: 1
       name: "Leanne Graham"
       phone: "1-770-736-8031 x56442"
       username: "Bret"
       website: "hildegard.org"
    -> __proto__: Object */

// It's about the difference between promise and callback
fetch(`${BASE_URL}/users/1`)
  // Callback
  /* .then(res => {
    res.json()
      .then()
      .catch();
  }) */
  // We can do this more easily with Promise
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  })
  .catch((e) => {
    console.log(e);
  });

// expected output: (See the Chrome DevTools Console)
/* -> {id: 1, name: "Leanne Graham", username: "Bret", email: "Sincere@april.biz", address: {…}, …}
  -> address: {street: "Kulas Light", suite: "Apt. 556", city: "Gwenborough", zipcode: "92998-3874", geo: {…}}
  -> company: {name: "Romaguera-Crona", catchPhrase: "Multi-layered client-server neural-net", bs: "harness real-time e-markets"}
     email: "Sincere@april.biz"
     id: 1
     name: "Leanne Graham"
     phone: "1-770-736-8031 x56442"
     username: "Bret"
     website: "hildegard.org"
  -> __proto__: Object */

fetch(`${BASE_URL}/users/1`)
  // We can do this more easily with Promise
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    return Promise.resolve("Something");
  })
  .then((str) => {
    console.log(str);
    return Promise.resolve("Another Promise");
  })
  .then((another) => {
    console.log(another);
  })
  .catch((e) => {
    console.log(e);
  });

// expected output: (See the Chrome DevTools Console)
// -> {id: 1, name: "Leanne Graham", username: "Bret", email: "Sincere@april.biz", address: {…}, …} | lesson13.js:83

// Something | lesson13.js:87

// Another Promise | lesson13.js:91

// If we look at it from the point of view of callback
/* getRequest(function () {
  getRequest(function () {
    getRequest(function () {
      getRequest(function () {

      });
    });
  });
}); */

// We will return to the Promise the getRequest() method that we had. I will omit the callback
function getRequest(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('get', url);

    xhr.onreadystatechange = function (e) { // Get the event on 'e' | e -> We have to see what happens at the event
      if (xhr.readyState === 4) { // 4 means he is ready
        if (xhr.status === 200) { // 200 means everything is OK
          // Converts a JavaScript Object Notation (JSON) string into an object
          let response = JSON.parse(xhr.response);
          resolve(response);
        } else {
          reject(new Error('Error Occurred')); // error
        }
      }
    };

    xhr.send();
  });
}

let res = getRequest(`${BASE_URL}/users/1`);
console.log(res);
// expected output: (See the Chrome DevTools Console)
/* -> Promise {<pending>}
  -> __proto__: Promise
    [[PromiseState]]: "fulfilled"
  -> [[PromiseResult]]: Object
    -> address: {street: "Kulas Light", suite: "Apt. 556", city: "Gwenborough", zipcode: "92998-3874", geo: {…}}
    -> company: {name: "Romaguera-Crona", catchPhrase: "Multi-layered client-server neural-net", bs: "harness real-time e-markets"}
       email: "Sincere@april.biz"
       id: 1
       name: "Leanne Graham"
       phone: "1-770-736-8031 x56442"
       username: "Bret"
       website: "hildegard.org"
    -> __proto__: Object */

// All you have to do is take the data
getRequest(`${BASE_URL}/users/1`)
  .then(data => {
    console.log(data);
  })
  .catch(e => {
    console.log(e);
  });

// expected output: (See the Chrome DevTools Console)
/* -> {id: 1, name: "Leanne Graham", username: "Bret", email: "Sincere@april.biz", address: {…}, …}
  -> address: {street: "Kulas Light", suite: "Apt. 556", city: "Gwenborough", zipcode: "92998-3874", geo: {…}}
  -> company: {name: "Romaguera-Crona", catchPhrase: "Multi-layered client-server neural-net", bs: "harness real-time e-markets"}
     email: "Sincere@april.biz"
     id: 1
     name: "Leanne Graham"
     phone: "1-770-736-8031 x56442"
     username: "Bret"
     website: "hildegard.org"
  -> __proto__: Object */

// If an error occurs
getRequest(`${BASE_URL}/users/1445`)
  .then(data => {
    console.log(data);
  })
  .catch(e => {
    // console.log(e);
    console.log(e.message);
  });

// expected output: (See the Chrome DevTools Console)  
// -> GET https://jsonplaceholder.typicode.com/users/1445 404 | lesson13.js:133

// For console.log(e)
// Error: Error Occurred | lesson13.js:181
//     at XMLHttpRequest.xhr.onreadystatechange (lesson13.js:128)

// For console.log(e.message)
// Error Occurred | lesson13.js:182