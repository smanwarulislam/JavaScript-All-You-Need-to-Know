// Chapter Seventeen
// 185. How to Handle XMLHttpRequest Using Callback

// AJAX implementation with the help of Callback

const xhr = new XMLHttpRequest(); // Object creation | Constructed
xhr.open('get', 'https://jsonplaceholder.typicode.com/users');

xhr.onreadystatechange = function (e) { // Get the event on 'e' | e -> We have to see what happens at the event
  if (xhr.readyState === 4) { // 4 means he is ready
    if (xhr.status === 200) { // 200 means everything is OK
      console.log(xhr.response);
    } else {
      console.log(xhr.status);
    }
  }
};

xhr.send();
// expected output: (See the Chrome DevTools Console) | 10 users
/* [
  {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  },
  {
    "id": 2,
    "name": "Ervin Howell",
    "username": "Antonette",
    "email": "Shanna@melissa.tv",
    "address": {
      "street": "Victor Plains",
      "suite": "Suite 879",
      "city": "Wisokyburgh",
      "zipcode": "90566-7771",
      "geo": {
        "lat": "-43.9509",
        "lng": "-34.4618"
      }
    },
    "phone": "010-692-6593 x09125",
    "website": "anastasia.net",
    "company": {
      "name": "Deckow-Crist",
      "catchPhrase": "Proactive didactic contingency",
      "bs": "synergize scalable supply-chains"
    }
  },
  {
    "id": 3,
    "name": "Clementine Bauch",
    "username": "Samantha",
    "email": "Nathan@yesenia.net",
    "address": {
      "street": "Douglas Extension",
      "suite": "Suite 847",
      "city": "McKenziehaven",
      "zipcode": "59590-4157",
      "geo": {
        "lat": "-68.6102",
        "lng": "-47.0653"
      }
    },
    "phone": "1-463-123-4447",
    "website": "ramiro.info",
    "company": {
      "name": "Romaguera-Jacobson",
      "catchPhrase": "Face to face bifurcated interface",
      "bs": "e-enable strategic applications"
    }
  },
  {
    "id": 4,
    "name": "Patricia Lebsack",
    "username": "Karianne",
    "email": "Julianne.OConner@kory.org",
    "address": {
      "street": "Hoeger Mall",
      "suite": "Apt. 692",
      "city": "South Elvis",
      "zipcode": "53919-4257",
      "geo": {
        "lat": "29.4572",
        "lng": "-164.2990"
      }
    },
    "phone": "493-170-9623 x156",
    "website": "kale.biz",
    "company": {
      "name": "Robel-Corkery",
      "catchPhrase": "Multi-tiered zero tolerance productivity",
      "bs": "transition cutting-edge web services"
    }
  },
  {
    "id": 5,
    "name": "Chelsey Dietrich",
    "username": "Kamren",
    "email": "Lucio_Hettinger@annie.ca",
    "address": {
      "street": "Skiles Walks",
      "suite": "Suite 351",
      "city": "Roscoeview",
      "zipcode": "33263",
      "geo": {
        "lat": "-31.8129",
        "lng": "62.5342"
      }
    },
    "phone": "(254)954-1289",
    "website": "demarco.info",
    "company": {
      "name": "Keebler LLC",
      "catchPhrase": "User-centric fault-tolerant solution",
      "bs": "revolutionize end-to-end systems"
    }
  },
  {
    "id": 6,
    "name": "Mrs. Dennis Schulist",
    "username": "Leopoldo_Corkery",
    "email": "Karley_Dach@jasper.info",
    "address": {
      "street": "Norberto Crossing",
      "suite": "Apt. 950",
      "city": "South Christy",
      "zipcode": "23505-1337",
      "geo": {
        "lat": "-71.4197",
        "lng": "71.7478"
      }
    },
    "phone": "1-477-935-8478 x6430",
    "website": "ola.org",
    "company": {
      "name": "Considine-Lockman",
      "catchPhrase": "Synchronised bottom-line interface",
      "bs": "e-enable innovative applications"
    }
  },
  {
    "id": 7,
    "name": "Kurtis Weissnat",
    "username": "Elwyn.Skiles",
    "email": "Telly.Hoeger@billy.biz",
    "address": {
      "street": "Rex Trail",
      "suite": "Suite 280",
      "city": "Howemouth",
      "zipcode": "58804-1099",
      "geo": {
        "lat": "24.8918",
        "lng": "21.8984"
      }
    },
    "phone": "210.067.6132",
    "website": "elvis.io",
    "company": {
      "name": "Johns Group",
      "catchPhrase": "Configurable multimedia task-force",
      "bs": "generate enterprise e-tailers"
    }
  },
  {
    "id": 8,
    "name": "Nicholas Runolfsdottir V",
    "username": "Maxime_Nienow",
    "email": "Sherwood@rosamond.me",
    "address": {
      "street": "Ellsworth Summit",
      "suite": "Suite 729",
      "city": "Aliyaview",
      "zipcode": "45169",
      "geo": {
        "lat": "-14.3990",
        "lng": "-120.7677"
      }
    },
    "phone": "586.493.6943 x140",
    "website": "jacynthe.com",
    "company": {
      "name": "Abernathy Group",
      "catchPhrase": "Implemented secondary concept",
      "bs": "e-enable extensible e-tailers"
    }
  },
  {
    "id": 9,
    "name": "Glenna Reichert",
    "username": "Delphine",
    "email": "Chaim_McDermott@dana.io",
    "address": {
      "street": "Dayna Park",
      "suite": "Suite 449",
      "city": "Bartholomebury",
      "zipcode": "76495-3109",
      "geo": {
        "lat": "24.6463",
        "lng": "-168.8889"
      }
    },
    "phone": "(775)976-6794 x41206",
    "website": "conrad.com",
    "company": {
      "name": "Yost and Sons",
      "catchPhrase": "Switchable contextually-based project",
      "bs": "aggregate real-time technologies"
    }
  },
  {
    "id": 10,
    "name": "Clementina DuBuque",
    "username": "Moriah.Stanton",
    "email": "Rey.Padberg@karina.biz",
    "address": {
      "street": "Kattie Turnpike",
      "suite": "Suite 198",
      "city": "Lebsackbury",
      "zipcode": "31428-2261",
      "geo": {
        "lat": "-38.2386",
        "lng": "57.2232"
      }
    },
    "phone": "024-648-3804",
    "website": "ambrose.net",
    "company": {
      "name": "Hoeger LLC",
      "catchPhrase": "Centralized empowering task-force",
      "bs": "target end-to-end models"
    }
  }
] */

// In JSON format converting a string key-value to a JavaScript array
// This system implementation will only work for sending a request
const xhr2 = new XMLHttpRequest(); // Object creation | Constructed
xhr2.open('get', 'https://jsonplaceholder.typicode.com/users'); // It Will only work for sending a request

xhr2.onreadystatechange = function (e) { // Get the event on 'e' | e -> We have to see what happens at the event
  if (xhr2.readyState === 4) { // 4 means he is ready
    if (xhr2.status === 200) { // 200 means everything is OK
      let users = JSON.parse(xhr2.response); // Converts a JavaScript Object Notation (JSON) string into an object
      console.log(users);
    } else {
      console.log(xhr2.status);
    }
  }
};

xhr2.send();
// expected output: (See the Chrome DevTools Console) | 10 users
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
  -> 9: {id: 10, name: "Clementina DuBuque", username: "Moriah.Stanton", email: "Rey.Padberg@karina.biz", address: {…}, …}
    length: 10
  -> __proto__: Array(0) */

// The system that has been implemented above will only work for sending a request

// We need to create a different way than we can send any request for anything
/* This means that we will create an API that can send a get request to any server and from there it can fetch data in JSON format and convert it to JavaScript objects */
function getRequest(url, callback) {
  const xhr3 = new XMLHttpRequest();
  xhr3.open('get', url);

  xhr3.onreadystatechange = function (e) { // Get the event on 'e' | e -> We have to see what happens at the event
    if (xhr3.readyState === 4) { // 4 means he is ready
      if (xhr3.status === 200) { // 200 means everything is OK
        // Converts a JavaScript Object Notation (JSON) string into an object
        let response = JSON.parse(xhr3.response);
        callback(null, response); // If the first argument is 'null' then there is no error
      } else {
        callback(xhr3.status, null); // xhr3.status -> error | null -> Because there is no response
      }
    }
  };

  xhr3.send();
}

// Now you can send as many requests as you want using getRequest()
getRequest('https://jsonplaceholder.typicode.com/users', (err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log(res);
    // Just to take the name
    res.forEach(r => alert(r.name));
  }
});
// expected output: (See the Chrome DevTools Console) | 10 users
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
  -> 9: {id: 10, name: "Clementina DuBuque", username: "Moriah.Stanton", email: "Rey.Padberg@karina.biz", address: {…}, …}
    length: 10
  -> __proto__: Array(0) */

// expected output: (See the Chrome DevTools Console) | name
/* Leanne Graham
Ervin Howell
Clementine Bauch
Patricia Lebsack
Chelsey Dietrich
Mrs. Dennis Schulist
Kurtis Weissnat
Nicholas Runolfsdottir V
Glenna Reichert
Clementina DuBuque */

// /posts (100 posts)
getRequest('https://jsonplaceholder.typicode.com/posts', (err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log(res);
  }
});
// expected output: (See the Chrome DevTools Console) | /posts (100 posts)
/* -> (100) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}] */

/* This means that we have created an API that can send a get request to any server and from there it can fetch data in JSON format and convert it to JavaScript objects */

// Just to take the title of the post
getRequest('https://jsonplaceholder.typicode.com/posts', (err, res) => {
  if (err) {
    console.log(err);
  } else {
    res.forEach(r => console.log(r.title));
  }
});
// expected output: (See the Chrome DevTools Console) | title
/* sunt aut facere repellat provident occaecati excepturi optio reprehenderit
...
...
...
at nam consequatur ea labore ea harum */