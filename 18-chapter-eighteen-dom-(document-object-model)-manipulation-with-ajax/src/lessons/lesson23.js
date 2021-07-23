// Chapter Eighteen
// 217. AJAX - How to Send Post Request and Display Data

// At first, we will select the form
let postForm = document.getElementById('post-form');

// To show data
let posts = document.getElementById('posts');

let URL = 'https://jsonplaceholder.typicode.com/posts';

postForm.addEventListener('submit', function (e) {
  // Calling this function/method will prevent the behavior that the default behavior browser was providing us related to this form | Page refresh will not happen
  e.preventDefault();

  // console.log(this.title);
  // console.log(this.body);

  let title = this.title.value || undefined;
  let body = this.body.value || undefined;

  // Now we have to create an object
  if (title && body) {
    let postObj = {
      userId: 100,
      title,
      body
    };

    // Now I will send the request through fetch API
    fetch(URL, {
      method: 'POST',
      headers: {
        'Content-type': 'Application/JSON'
      },
      body: JSON.stringify(postObj) // JSON.stringify() -> To convert any JavaScript object to a JSON string
    })
      .then(response => response.json())
      // And after that, I will work inside the Promise that will be returned (We're actually working on its data)
      /* .then(data => {
        console.log(data);
      }) */
      .then(post => {
        // item -> I will generate the item first
        let item = listItemGenerator(post);
        // Now the post that has been created must be appended inside the ul tag. The name of our ul tag is posts
        posts.appendChild(item);
        // To clean the form (I can also reset the form)
        this.reset();
      })
      // I just logged the error of the console
      .catch(e => console.log(e.message));

  } else {
    alert('Please Provide Every Detail');
  }
});

// Now if we click on the Submit button | console.log(this.title); console.log(this.body);
// expected output: (See the Chrome DevTools Console)
{/* <input type="text" class="form-control" id="title" name="title" placeholder="Enter Title"></input>
<textarea class="form-control" name="body" id="body" cols="30" rows="10"></textarea> */}

// When I click on the Submit button in postForm | console.log(data)
// After writing something in title and body
// expected output: (See the Chrome DevTools Console) | In the end, he gave us a response back
/* -> {userId: 100, title: "Test Title", body: "Test Body", id: 101}
body: "Test Body"
id: 101 // (The id of the last element of JSONPlaceholder is 100)
title: "Test Title"
userId: 100
-> __proto__: Object */

// Now I will work with this whole object
// We will store the data of console.log (data) inside the ul
function listItemGenerator(item) { // item -> I am imagining the post object in the form of an item
  let li = document.createElement('li');
  li.className = 'list-group-item';
  li.innerHTML = `${item.id}. ${item.title} by User Id - ${item.userId}`;

  return li;
}

// After writing something in title and body
// Please Provide a Title
// ___ (Test Title 1)
// Please Provide a Description
// ___ (Test Description by user 1 post 1)
// (After clicking the Submit button)
// expected output: (See the webpage output)
// 101. Test Title 1 by User Id - 100

// After writing another post
// Please Provide a Title
// ___ (Test Title 2)
// Please Provide a Description
// ___ (Test Description 2 by post 2 by user 100)
// (After clicking the Submit button)
// expected output: (See the webpage output)
// 101. Test Title 2 by User Id - 100 // (Whose ID will be 101 because if we use this API we will always get 101 ID)

// CRUD Operation

// C - Create
// R - Read
// U - Update
// D - Delete

// https://bookstore.com/api/books GET []
// https://bookstore.com/api/books Book {} POST
// https://bookstore.com/api/books/id GET {}
// https://bookstore.com/api/books/id UpdatedBook {} PUT/PATCH
// https://bookstore.com/api/books/id DELETE