// Chapter Seventeen
// 187. Callback is Not Always a Good Solution

// We need to create a different way than we can send any request for anything
/* This means that we will create an API that can send a get request to any server and from there it can fetch data in JSON format and convert it to JavaScript objects */
function getRequest(url, callback) {
  const xhr = new XMLHttpRequest();
  xhr.open('get', url);

  xhr.onreadystatechange = function (e) { // Get the event on 'e' | e -> We have to see what happens at the event
    if (xhr.readyState === 4) { // 4 means he is ready
      if (xhr.status === 200) { // 200 means everything is OK
        // Converts a JavaScript Object Notation (JSON) string into an object
        let response = JSON.parse(xhr.response);
        callback(null, response); // If the first argument is 'null' then there is no error
      } else {
        callback(xhr.status, null); // xhr.status -> error | null -> Because there is no response
      }
    }
  };

  // xhr.send();
}

const BASE_URL = 'https://jsonplaceholder.typicode.com';

getRequest(`${BASE_URL}/posts/1`, (err, res) => {
  if (err) {
    throw new Error('Error Occurred');
  }

  let {userId} = res; // We can also do destruction here
  
  // We will send a request again with this userId
  getRequest(`${BASE_URL}/users/${userId}`, (err, res) => {
    if (err) {
      throw new Error('Error Occurred');
    }

    getRequest(`${BASE_URL}/posts/1/comments/${res.id}`, (err, res) => {
      if (err) {
        throw new Error('Error Occurred')
      }

      console.log(res);
    });
  });
});