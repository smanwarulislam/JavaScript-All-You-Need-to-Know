// Chapter Eighteen
// 216. AJAX - How to Send Get Request and Display Data

// At first, we grab the IDs
let load = document.getElementById('load');
let postList = document.getElementById('posts');

const URL = 'https://jsonplaceholder.typicode.com/posts';

load.addEventListener('click', function () {
  // Now when you click on the button, an HTTP request will go. And to send an HTTP request we need to fetch API or XMLHttpRequest object. Since we know the promise, we will simply use the fetch API.
  fetch(URL)
    .then(response => response.json())
    .then(posts => {
      // Press the button to see if the data is coming so we logged the console
      // console.log(data);
      // But we have numerous list items.
      // This can be done in two ways. Work can be done using the map and also through the forEach method.
      // 1. Using forEach
      posts.forEach((post, index) => { // index -> I could also pass the item number
        // I will create a li tag with each post of this singular post
        let listItem = listItemGenerator(post, index + 1); // index + 1 -> I could also pass the item number
        // console.log(listItem);
        // li tags must be appended inside our ul tags. PostList is our ul tag
        postList.appendChild(listItem);
      });

      // 2. Using map
      /* let postsList = posts.map((post, index) => listItemGenerator(post, index + 1));
      // console.log(postsList);

      // We can append
      postList.appendChild(...postsList); // ...postsList -> We can try to spread the array */
    })
    // I just logged the error of the console
    .catch(e => console.log(e.message));
});

// For console.log(data)
// expected output: (See the Chrome DevTools Console)
// -> (100) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]

// Showing the data on the console is not our target.
// Our target is to show the data in the form of a li tag inside the invisible ul of the webpage in the form of its title.

// In that case, first, we have to make a list item generator. That is basically a function.
// This function can generate a list item.
/* function listItemGenerator(item) { // item -> I am imagining the post object in the form of an item
  let li = document.createElement('li');
  li.className = 'list-group-item';
  li.innerHTML = item.title; // title -> I'm just thinking of working on the title

  return li;
} */

// 1. Using forEach (console.log(listItem))
// expected output: (See the Chrome DevTools Console)
{/* <li class="list-group-item">sunt aut facere repellat provident occaecati excepturi optio reprehenderit</li>
...
<li class="list-group-item">at nam consequatur ea labore ea harum</li> */}

// 1. Using forEach (postList.appendChild(listItem))
// expected output: (See the webpage output)
// sunt aut facere repellat provident occaecati excepturi optio reprehenderit
// ...
// at nam consequatur ea labore ea harum

// We could have done better. I could also pass the item number.
function listItemGenerator(item, no) { // item -> I am imagining the post object in the form of an item
  let li = document.createElement('li');
  li.className = 'list-group-item';
  li.innerHTML = `${no}. ${item.title}`; // title -> I'm just thinking of working on the title

  return li;
}

// 1. Using forEach (postList.appendChild(listItem))
// expected output: (See the webpage output)
// 1. sunt aut facere repellat provident occaecati excepturi optio reprehenderit
// ...
// 100. at nam consequatur ea labore ea harum

// 2. Using map (console.log(postsList))
// expected output: (See the webpage output)
// (100) [li.list-group-item, li.list-group-item, li.list-group-item, li.list-group-item, li.list-group-item, li.list-group-item, li.list-group-item, li.list-group-item, li.list-group-item, li.list-group-item, li.list-group-item, li.list-group-item, li.list-group-item, li.list-group-item, li.list-group-item, li.list-group-item, li.list-group-item, li.list-group-item, li.list-group-item, li.list-group-item, li.list-group-item, li.list-group-item, li.list-group-item, li.list-group-item, li.list-group-item, li.list-group-item, li.list-group-item, li.list-group-item, li.list-group-item, li.list-group-item, li.list-group-item, li.list-group-item, li.list-group-item, li.list-group-item, li.list-group-item, li.list-group-item, li.list-group-item, li.list-group-item, li.list-group-item, li.list-group-item, li.list-group-item, li.list-group-item, li.list-group-item, li.list-group-item, li.list-group-item, li.list-group-item, li.list-group-item, li.list-group-item, li.list-group-item, li.list-group-item, li.list-group-item, li.list-group-item, li.list-group-item, li.list-group-item, li.list-group-item, li.list-group-item, li.list-group-item, li.list-group-item, li.list-group-item, li.list-group-item, li.list-group-item, li.list-group-item, li.list-group-item, li.list-group-item, li.list-group-item, li.list-group-item, li.list-group-item, li.list-group-item, li.list-group-item, li.list-group-item, li.list-group-item, li.list-group-item, li.list-group-item, li.list-group-item, li.list-group-item, li.list-group-item, li.list-group-item, li.list-group-item, li.list-group-item, li.list-group-item, li.list-group-item, li.list-group-item, li.list-group-item, li.list-group-item, li.list-group-item, li.list-group-item, li.list-group-item, li.list-group-item, li.list-group-item, li.list-group-item, li.list-group-item, li.list-group-item, li.list-group-item, li.list-group-item, li.list-group-item, li.list-group-item, li.list-group-item, li.list-group-item, li.list-group-item, li.list-group-item]

// 2. Using map (postList.appendChild(...postsList))
// expected output: (See the webpage output)
// 1. sunt aut facere repellat provident occaecati excepturi optio reprehenderit