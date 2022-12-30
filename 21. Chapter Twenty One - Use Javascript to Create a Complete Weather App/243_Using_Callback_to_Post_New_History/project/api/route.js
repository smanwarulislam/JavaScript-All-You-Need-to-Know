// Inside this route file, we will first take the route reference. The route is basically inside 'express'.
// - There is a function called Router() which we need to call.
const route = require('express').Router();

// We will create a 'history' object and create the 'history' object we need to import 'History' as well. What is the model (History) we created?
const History = require('./History');

// Next, we need the GET request. It's not enough to just make a POST request, we also need to get the data.
// - We will simply create a GET request to get the data.
route.get('/', (req, res) => {
  History.find() // History.find() → It will go to the database server and fetch all the 'History' finds.
    .then(history => { // Inside the 'then()' block basically, we will get a 'history' object which is basically an array.
      res.status(200).json(history); // Either the array is empty or there is something inside that array.
    })
    .catch(e => {
      console.log(e);
      res.status(500).json({
        message: 'Error Occurred'
      });
    });
});

// Now we have to handle different routes here, one for GET requests, and one for POST requests.
// - So at first, we create a POST request route through which we can create a history.
route.post('/', (req, res) => {
  // We will create a 'history' object and create the 'history' object we need to import 'History' as well. What is the model (History) we created?
  // - Using this 'History' model we will now create a 'new History'.
  // (req.body) → Here an object had to be given as an argument. Basically, we will get that object from the body i.e. the 'weather' object.
  // - For that 'weather' object we get 'req.body' as we connect to 'body-parser'.
  let history = new History(req.body);
  // When we have this 'history' object what can we do to save the 'history' object.
  history.save() // This will return us a 'Promise' so we take a 'then()' block and a 'catch()' block.
    // History.find() → But basically, we don't need an object. Our API system needs multiple histories. Multiple means as many histories as there are, everyone needs history.
    // - So I'll call the History.find() method.
    .then(() => History.find()) // So what will return? Another 'Promise' will return.
    .then(history => { // 'history' → Basically an array.
      res.status(201).json(history); // Here we got the 'history' object which is basically an array and sent that array.
    })
    .catch(e => { // In the 'catch()' block we will basically get 'e' or error.
      console.log(e);
      res.status(500).json({
        message: 'Error Occurred'
      });
    });
});

// Here:
// - Inside this body, we will handle the route.
// (req, res) => {

// });

// - Basically, if someone hits this route
// route.post('/',

// - So what we have to do basically we will tell here.
// (req, res) => {

// });

// route.post('/', (req, res) => {});
// - This is the URL to send a POST request. This URL will handle how to send a POST request and how to save the data to our database.

// Next, we need the GET request. It's not enough to just make a POST request, we also need to get the data.
// - We will simply create a GET request to get the data.

// Note: GET request code is written above the POST request code.

// Finally, we will 'module.exports' this router (route) below.
module.exports = route;

// That's all. Our API creation is complete.
// - Our backend is done. We don't need to do anything on the backend anymore.

// Now we can very easily work from the frontend using our API. There will be no problem.
// - So now we can go back to the frontend because the facilities we needed to work with 'History' were not there, so we moved from the frontend to the backend.
// - Now that we are able to come to the backend, what can we do using these 'History' APIs to go to the frontend and handle that 'History'.
// - Later we will work on 'History'.