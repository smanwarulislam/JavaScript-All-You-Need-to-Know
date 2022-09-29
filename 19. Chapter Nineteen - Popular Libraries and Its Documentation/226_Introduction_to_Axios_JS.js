// Axios JS Library Introduction

// axios
// New axios docs website:
// https://axios-http.com/

// Getting Started | Axios Docs
// https://axios-http.com/docs/intro

// Axios - GitHub
// https://github.com/axios/axios

// Axios
// https://axios-http.com/

// Promise based HTTP client for the browser and node.js
// Axios is a simple promise based HTTP client for the browser and node.js. Axios provides a simple to use library in a small package with a very extensible interface.

// Getting Started | Axios Docs
// https://axios-http.com/docs/intro

// Getting Started

// Promise based HTTP client for the browser and node.js

// What is Axios?
/* Axios is a promise-based HTTP Client for node.js and the browser.
It is isomorphic (= it can run in the browser and nodejs with the same codebase).
On the server-side it uses the native node.js http module, while on the client (browser) it uses XMLHttpRequests. */

// Axios - GitHub
// https://github.com/axios/axios

// Features
/* - Make XMLHttpRequests from the browser
- Make http requests from node.js
- Supports the Promise API
- Intercept request and response
- Transform request and response data
- Cancel requests
- Automatic transforms for JSON data
- Automatic data object serialization to multipart/form-data and x-www-form-urlencoded body encodings (new)
- Client side support for protecting against XSRF */

// Minimal Example

// A little example of using axios

// note: CommonJS usage
// In order to gain the TypeScript typings (for intellisense / autocomplete) while using CommonJS imports with require() use the following approach:
const axios = require('axios').default;

// axios.<method> will now provide autocomplete and parameter typings

// Example

// Performing a GET request
const axios = require('axios').default;

// Make a request for a user with a given ID
axios.get('/user?ID=12345')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });

// Optionally the request above could also be done as
axios.get('/user', {
    params: {
      ID: 12345
    }
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {
    // always executed
  });

// Want to use async/await? Add the `async` keyword to your outer function/method.
async function getUser() {
  try {
    const response = await axios.get('/user?ID=12345');
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

// NOTE: async/await is part of ECMAScript 2017 and is not supported in Internet Explorer and older browsers, so use with caution.

// POST Requests

// How to perform POST requests with Axios

// Performing a POST request
axios.post('/user', {
  firstName: 'Fred',
  lastName: 'Flintstone'
})
.then(function (response) {
  console.log(response);
})
.catch(function (error) {
  console.log(error);
});

// Performing multiple concurrent requests
function getUserAccount() {
  return axios.get('/user/12345');
}

function getUserPermissions() {
  return axios.get('/user/12345/permissions');
}

Promise.all([getUserAccount(), getUserPermissions()])
  .then(function (results) {
    const acct = results[0];
    const perm = results[1];
  });

// axios API

// The Axios API Reference

// Requests can be made by passing the relevant config to axios.
// axios(config)

// Send a POST request
axios({
  method: 'post',
  url: '/user/12345',
  data: {
    firstName: 'Fred',
    lastName: 'Flintstone'
  }
});

// GET request for remote image in node.js
axios({
  method: 'get',
  url: 'https://bit.ly/2mTM3nY',
  responseType: 'stream'
})
  .then(function (response) {
    response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
  });

// axios(url[, config])

// Send a GET request (default method)
axios('/user/12345');

// Request method aliases
// For convenience, aliases have been provided for all common request methods.

// axios.request(config)
// axios.get(url[, config])
// axios.delete(url[, config])
// axios.head(url[, config])
// axios.options(url[, config])
// axios.post(url[, data[, config]])
// axios.put(url[, data[, config]])
// axios.patch(url[, data[, config]])

// NOTE
// When using the alias methods url, method, and data properties don't need to be specified in config.

// Concurrency (Deprecated)
// Please use Promise.all to replace the below functions.
// Helper functions for dealing with concurrent requests.
// axios.all(iterable) axios.spread(callback)

// Promises
// axios depends on a native ES6 Promise implementation to be supported. If your environment doesn't support ES6 Promises, you can polyfill.

// TypeScript
// axios includes TypeScript definitions and a type guard for axios errors.
let user: User = null;
try {
  const { data } = await axios.get('/user?ID=12345');
  user = data.userDetails;
} catch (error) {
  if (axios.isAxiosError(error)) {
    handleAxiosError(error);
  } else {
    handleUnexpectedError(error);
  }
}