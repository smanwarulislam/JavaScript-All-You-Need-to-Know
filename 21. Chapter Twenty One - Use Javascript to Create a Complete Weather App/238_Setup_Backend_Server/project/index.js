// When using Node.js to import, and export, it has to be done through the 'require()' function and stored inside a variable.
// - Normal 'import' something from something won't work in the case of Node.js at least not till now.
// - I import 'express'.
const express = require('express');

// Our API does not face the Cross-Origin Resource Sharing (CORS) problem that we faced, that's why we import 'CORS'.
const cors = require('cors');

// What will this 'body-parser' do?
// - The data that we will send from the frontend in the form of 'JSON' (JavaScript Object Notation) to the server of the client can take the data in the form of 'body' that's why this plugin is needed.
// - It is basically called 'Middleware' in Express.js.
const bodyParser = require('body-parser');

// Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js.
// - We will use the MongoDB database and the one that will help us to use the MongoDB database easily is this 'mongoose'.
const mongoose = require('mongoose');

// So, we imported the data or modules that we needed.

// Now we will create an app.
// - Creating apps in Express.js is very easy.
// - The 'express' we imported is basically a function. Calling that function will create an app.
const app = express();

// And to understand whether the app is running, we need to work with a route.
// - The route is
/* app.get('/', (req, res) => {
  res.send('<h1>Hello I am a Node server running on PORT 4444</h1>');
}); */

// We start our server using terminal.
// - And we don't need the live server that was the previous port (Port: 5500), that is, the live server we had. We disconnected it.
// - Now we will go to our terminal and run the 'npm start' command. Since we created a script called "start" ("start": "nodemon index.js") in the 'package.json' file.
// npm start

// Now talking here there is no need to take the 'h1' tag.
// - We need to send it to the 'public' directory we have.
// - Then we don't need to work with this route anymore.
// - It's all we can do
// - Here first we will remove the 'CORS'.
app.use(cors());

// - Now we need to provide a static folder ('public'). We need to tell the application that this ('public') is our static folder.
// - When someone tries to visit our application, you will take them to this ('public') folder.
app.use(express.static('public'));

// Here:
// express → Since I am using the express application.
// static → 'express' provides a method that is 'static'.
// 'public' → Which directory do we mean by 'static'? We basically mean 'static' by 'public' directory.

// Now if we save
// - Our terminal has already been refreshed. We don't have to make any changes.

// See, our application is now being served.

// Go to the browser and refresh the webpage:
// (shows the popup)
/* http://localhost:4444 wants to
Know your location
Allow | Block */

// If we click 'Allow'
// If we see the webpage output:
// Dhaka District, BD
// Haze (haze)
// TEMP: 297.14 PRESSURE: 1012 HUMIDITY: 57

// Now if I write khulna,bd in the input box.
// - See the webpage output:
// Khulna, BD
// Clouds (overcast clouds)
// TEMP: 293.73 PRESSURE: 1012 HUMIDITY: 51

// Now if I write kolkata in the input box.
// - See the webpage output:
// Kolkata, IN
// Haze (haze)
// TEMP: 296.12 PRESSURE: 1010 HUMIDITY: 64

// The server we used to frontend our application i.e. live server (extension | Port: 5500), as it was showing, now is a real server even though it is a 'localhost' server still it is working properly.

// When we host the file i.e. deploy it on our real server then they will give us a port.
// - If that port exists then we get that port through 'process.env.PORT'.
// - Since we are developing locally now, we don't have any such port.
// - When we develop locally, we will install a port to our liking. Now I gave it 4444.
// - If they have the port (process.env.PORT) provided then it will be taken otherwise we will take the port (4444) provided by us.
const PORT = process.env.PORT || 4444;

// At the end, we want to 'listen'.
// - An application should not only be created but it should also 'listen' on a specific port.
app.listen(PORT, () => {
  console.log('The App is running on PORT ' + PORT); // When 'app.listen()' is called it will 'console.log'
});

// - Now we will go to our terminal and run the 'npm start' command. Since we created a script called "start" ("start": "nodemon index.js") in the 'package.json' file.
// npm start

// expected output (terminal):
// The App is running on PORT 4444

// Now we will search by going to the URL of the browser:
// localhost:4444

// expected output (webpage output):
// Hello I am a Node server running on PORT 4444

// Here:
// localhost → 127.0.0.1 | This IP address is basically our localhost. | Our server is running on localhost.
// 4444 → Port

// We were able to create our own server by writing a few simple lines of code.

// The server we used to frontend our application i.e. live server (extension | Port: 5500), as it was showing, now is a real server even though it is a 'localhost' server still it is working properly.

// What do we do next?
// - Next, we will basically do API switching and for that, we will need 'mongoose'.