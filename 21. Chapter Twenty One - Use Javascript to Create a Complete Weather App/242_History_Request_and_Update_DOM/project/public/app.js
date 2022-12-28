const condition = document.getElementById('condition');
const city = document.getElementById('city');
const country = document.getElementById('country');
const mainText = document.getElementById('main');
const description = document.getElementById('description');
const temp = document.getElementById('temp');
const pressure = document.getElementById('pressure');
const humidity = document.getElementById('humidity');

const cityInput = document.getElementById('city-input');
const historyElm = document.getElementById('history');
const masterHistory = document.getElementById('master-history');

// API key (Name: sl):
const API_KEY = 'd81093031c91a42358961c949f2c6e35';
// Built-in API request by city name
// Example of API call:
const BASE_URL = `https://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}`;
// Get icon URL
const ICON_URL = 'http://openweathermap.org/img/wn/';
// Default city name
const DEFAULT_CITY = 'kushtia,bd';

// Now the first thing that we will do is that when we visit the page, we will implement that by asking us to take location permission.
// - But everything we do will be done after the window is loaded. If the window isn't loaded, we won't do anything.
// window.onload = function () {
  // So how is it possible that the browser will ask us to ask permission for the location?
  // - There are some APIs provided inside the navigator for that.
  // navigator.geolocation.getCurrentPosition(s => { // By calling this method we can give the prompt to the user where the browser will ask us do we want to share our location or not.
    // console.log(s);
  // }, e => {
    // console.log(e);
  // });
// };

// Chrome DevTools Console (See the Google Chrome JavaScript Console)

// Open with Live Server (Live Server Extension)

// expected output: (shows the popup)
/* http://127.0.0.1:5500 wants to
Know your location
Allow | Block */

// Here:
// 127.0.0.1 → Local Server | This IP address is basically our local host
// 5500 → Port number

// If we click 'Block' from the prompt
// expected output (run in the console):
// -> GeolocationPositionError {code: 1, message: 'User denied Geolocation'}
//     code: 1
//     message: "User denied Geolocation"
//   -> [[Prototype]]: GeolocationPositionError

// If we unblock or delete (http://127.0.0.1:5500) by clicking 'Manage' from the 'Location access denied' prompt
// Refresh the tab again
// - So now it is asking us again with the prompt. If I didn't unblock or delete it, it wouldn't ask again with the 'Location blocked' prompt. Because there is a 'Block', the 'Block' was taken.

// Now if we click 'Allow for this site' from the prompt written 'Location blocked'
// expected output (run in the console):
// -> GeolocationPosition {coords: GeolocationCoordinates, timestamp: 1670055780315}
//   -> coords: GeolocationCoordinates {latitude: 23.7897134, longitude: 90.3736568, altitude: null, accuracy: 19.933, altitudeAccuracy: null, …}
//      timestamp: 1670055780315
//   -> [[Prototype]]: GeolocationPosition

// We need 'latitude' and 'longitude' from this data. That is the very very important part.

// Now if it is in the Allow state, you can refresh it thousands of times, but you will not be asked for data.
// - But it will give us the data in the output.
// - And we will basically send the Axios request using the 'latitude' and 'longitude' that is here.

// Now our first task is to send the request.
// - But we need to think of some logic to send this request.
// - Here are our 2 cases.
// - Either user can Allow the location. Then this part (console.log(s);) will work.
// - Or the user can Block the location. And Block will execute this part (console.log(e);).
// - No matter which of the 2 parts is executed, it will send a request to the server.
// - In the first case (console.log(s);), he will send a request to the server with our coordinates. That is, by the value of 'latitude' and 'longitude'.
// - And if someone blocks that field, he will send a request by city name and that default city name will be in this variable (const DEFAULT_CITY).
// - So the first time he sends the request by 'latitude' and 'longitude' (console.log(s);).
// - But later he is sending a request by city name (console.log(e);).
// - But the main thing is to send the request.
// - So what should we do? Then we need to create a function.
// - So we will call (getWeatherData()) the same function in both places.

window.onload = function () {
  // So how is it possible that the browser will ask us to ask permission for the location?
  // - There are some APIs provided inside the navigator for that.
  navigator.geolocation.getCurrentPosition(s => { // By calling this method we can give the prompt to the user where the browser will ask us do we want to share our location or not.
    // The first time it gets getWeatherData() by 'latitude' and 'longitude'. But almost always we have to search by city name.
    // By coordinates, it will search only once. Then we have to keep the option of the city name and the option to search by coordinates.
    getWeatherData(null, s.coords);
  }, e => {
    getWeatherData();
  });
  // Start of the folder (directory) (Part 1 of 2): 242_History_Request_and_Update_DOM
  // So we have almost finished our backend work, now it's time to come back to the frontend and set the history task correctly in the frontend.
  // - When someone enters a city, it is our job to store that history in our 'History' API or in our database.
  // So at first what we'll do is when the 'window' loads we'll try to check, send a request to our API and check if we actually have any history.
  // - If there is, I will set that history at the time of 'onload'.
  // - And if there is not then we say that there is nothing.
  // In this case, since we are inside the same server, that is, the 'app.js' file is now inside our 'public' directory, which means our server. In that case, we don't have to give localhost or any other URL in front of us.
  axios.get('/api/history') // Just write our route and the route is history and we are sending the GET request here.
    // And it will return us a 'Promise' that we have to resolve the 'Promise'.
    .then(({ data }) => { // ({ data }) → And I did destructure in the same way, fetching the data from the response.
      if (data.length > 0) {
        // So we have to do some work to create history:
        // - So before creating we need to handle how to show if there is data here.
        // - What would we do if there was history here?:
        // - We used to call a function called 'updateHistory()'.
        // - I used to create a function called 'updateHistory()' and inside this function, the data we got was basically a 'weather' object and I used to pass that object.
        // - And later we had to create a function 'updateHistory()' to update this history object since we never created one before.
        updateHistory(data);
      } else {
        historyElm.innerHTML = 'There is no History';
      }
    })
    .catch(e => {
      console.log(e);
      alert('Error Occurred');
    });
  // End of the folder (directory) (Part 1 of 2): 242_History_Request_and_Update_DOM
  // The next task we have is to take input from here (input box → 'Enter Your City Name').
  // - The name of our input element is 'cityInput'. Its reference is 'cityInput'.
  cityInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      // And if enter key is pressed then we have to check
      if (e.target.value) {
        getWeatherData(e.target.value); // e.target.value is our City Name | And later we don't want to call anything by coordinates (coords)
        // - What we need to do is to clean the text of the input box.
        e.target.value = ''; // or → cityInput.value = '';
      } else {
        alert('Please Enter a Valid City Name');
      }
    }
  });
};

// So now first we need to generate this (getWeatherData()) function.
// - We can do that outside of 'window.onload' with no problem.
// function getWeatherData(city = DEFAULT_CITY, coords) {
  // Now we will create a URL (url) based on this city name (city) or coordinates (coords).
  // Just made a copy of BASE_URL where we can edit, and update.
  // let url = BASE_URL;

  // city === null ? url = `${url}&lat=${coords.latitude}&lon=${coords.longitude}` : url = `${url}&q=${city}`;

  // console.log(url);

  // We need to send an Axios request and that is a GET request. We will send a GET request through the url we have.
  // axios.get(url)
    // .then(response => { // It will return a 'Promise' to us
      // console.log(response.data); // Because everything comes in the form of data with response in Axios
    // })
    // .catch(e => {
      // console.log(e);
    // });
// }

// console.log(url):

// When we have already set the location → 'Location access allowed' prompt (Allowed to see your location)
// expected output:
// https://api.openweathermap.org/data/2.5/weather?appid=d81093031c91a42358961c949f2c6e35&lat=23.7896956&lon=90.3736789

// And what if we had blocked it?
// (shows the popup)
/* http://127.0.0.1:5500 wants to
Know your location
Allow | Block */

// If we click 'Block' from the prompt
// expected output:
// https://api.openweathermap.org/data/2.5/weather?appid=d81093031c91a42358961c949f2c6e35&q=kushtia,bd

// I always click 'Allow' from the prompt ('Location access allowed' → · Continuing allowing this site to access your location) for now because without 'Allow' we can't work properly.
// expected output:
// https://api.openweathermap.org/data/2.5/weather?appid=d81093031c91a42358961c949f2c6e35&lat=23.7897017&lon=90.3736224

// Axios:
// We need to send an Axios request and that is a GET request. We will send a GET request through the url we have.

// expected output:
// -> {coord: {…}, weather: Array(1), base: 'stations', main: {…}, visibility: 3500, …}
//     base: "stations"
//  -> clouds: {all: 0}
//  -> coord: {lon: 90.3736, lat: 23.7897}
//  -> main: {temp: 297.14, feels_like: 297.27, temp_min: 297.14, temp_max: 297.14, pressure: 1013, …}
//     name: "Dhaka District"
//  ...

// What is this information (data) based on?
// - The information has arrived, and our location is set. That is based on our location 'Allow' ('Location access allowed' → · Continuing allowing this site to access your location) is selected.

// This time I will 'Block' the location.
// - Then we will see if the data comes based on our 'kushtia' or default data.
// (shows the popup)
/* http://127.0.0.1:5500 wants to
Know your location
Allow | Block */

// If we click 'Block' from the prompt
// expected output:
// -> {coord: {…}, weather: Array(1), base: 'stations', main: {…}, visibility: 10000, …}
//     base: "stations"
//  -> clouds: {all: 0}
//  -> coord: {lon: 89.1221, lat: 23.9011}
//  -> main: {temp: 292.11, feels_like: 291.45, temp_min: 292.11, temp_max: 292.11, pressure: 1013, …}
//     name: "Kushtia"
//  -> sys: {country: 'BD', sunrise: 1670027445, sunset: 1670066157}
//  ...

// So he is working properly on both parts.

// In fact, we are not supposed to work this way.
// - We mean that this data will print out nicely on the screen.
// - Then we don't need 'console.log'. We need the representation of data at a specific place on the screen.

// But we don't really work with the data; It is not enough to fetch the data and do 'console.log', we need to embed that data with our HTML document.
function getWeatherData(city = DEFAULT_CITY, coords) {
  // Now we will create a URL (url) based on this city name (city) or coordinates (coords).
  // Just made a copy of BASE_URL where we can edit, and update.
  let url = BASE_URL;

  city === null ? url = `${url}&lat=${coords.latitude}&lon=${coords.longitude}` : url = `${url}&q=${city}`;

  // console.log(url);

  // We need to send an Axios request and that is a GET request. We will send a GET request through the url we have.
  axios.get(url)
    .then(({data}) => { // It will return a 'Promise' to us. | I can destructuring the 'data' from here.
      // console.log(response.data); // Because everything comes in the form of data with response in Axios
      // Create an object called weather. Later we will use this same object (weather) to save the data in the database.
      let weather = {
        icon: data.weather[0].icon,
        name: data.name,
        country: data.sys.country,
        main: data.weather[0].main,
        description: data.weather[0].description,
        temp: data.main.temp,
        pressure: data.main.pressure,
        humidity: data.main.humidity
      };

      // Since we need to set this weather data in multiple places, we can create a 'setWeather()' function.
      setWeather(weather); // - I will provide the 'weather' as an argument inside the 'setWeather()' function.
      // - Now our task is to create the 'setWeather()' function.
      // Got our weather object. After receiving this weather object, what do we actually have to do?
      // - And when will we get this weather object when there will be no 'catch'?
      // - When 'catch' occurs when any error occurs. 'error' when 'city' can't actually be found.
    })
    .catch(e => { // When 'catch' occurs when any error occurs. 'error' when 'city' can't actually be found.
      console.log(e);
      alert('City not found');
    });
}

function setWeather(weather) { // Here we take the 'weather' as a parameter in 'setWeather()' function.
  // What is our job now?
  // - Our job is to change the innerHTML or sources of the reference that we captured the data or references.
  // 'condition' is basically an image whose source needs to be changed.
  // - Now, what will this source (src) basically do? The source (src) will basically be the 'ICON_URL' that has the 'ICON_URL'.
  condition.src = `${ICON_URL}${weather.icon}.png`;
  city.innerHTML = weather.name;
  country.innerHTML = weather.country;
  mainText.innerHTML = weather.main;
  description.innerHTML = weather.description;
  temp.innerHTML = weather.temp;
  pressure.innerHTML = weather.pressure;
  humidity.innerHTML = weather.humidity;
}

// When will this 'setWeather()' function be called?
// - When getWeatherData() is called.

// Save and go to the browser:
// (shows the popup)
/* http://127.0.0.1:5500 wants to
Know your location
Allow | Block */

// If we click 'Block' at first
// If we see the webpage output:
// Kushtia, BD
// Clear (clear sky)
// TEMP: 292.86 PRESSURE: 1014 HUMIDITY: 51

// Again if we remove from 'Manage' → (Not allowed to see your location)
// - Remove and refresh the page again and click 'Allow'

// If we see the webpage output:
// Dhaka District, BD
// Haze (haze)
// TEMP: 296.14 PRESSURE: 1014 HUMIDITY: 64

// It will fill up data by current location.

// The next task we have is to take input from here ('Enter Your City Name').
// - I will send a request accordingly with the input.
// - And we will set the part here ('current location', 'TEMP', 'PRESSURE', 'HUMIDITY') with the data that will come after sending the request.

// When the enter key is pressed in this input box ('Enter Your City Name'), if there is a City Name, we will send a request by that City Name.
// - I will fill up the data here ('current location', 'TEMP', 'PRESSURE', 'HUMIDITY') with the data that comes by sending the request.

// Save, refresh and go to the webpage
// - It is 'Allow' ('Location access allowed' → · Continuing allowing this site to access your location)

// See the webpage:
// Dhaka District, BD
// Haze (haze)
// TEMP: 299.14 PRESSURE: 1012 HUMIDITY: 61

// Now typed Kushtia in the input box and searched (press enter key)
// - If we see the webpage output:
// Kushtia, BD
// Clear (clear sky)
// TEMP: 295.33 PRESSURE: 1012 HUMIDITY: 43

// But the text we wrote in the input box is not clean.
// - What we need to do is to clean the text of the input box.
// e.target.value = '';
// - So now our input box text will be clean.

// Again typed Kushtia,bd in the input box and searched (press enter key).
// - See the webpage output and notice the input box (now the input box is empty).
// Kushtia, BD
// Clear (clear sky)
// TEMP: 294.58 PRESSURE: 1013 HUMIDITY: 45

// Now if I write khulna,bd in the input box.
// - See the webpage output and notice the input box.
// Khulna, BD
// Clear (clear sky)
// TEMP: 293.65 PRESSURE: 1013 HUMIDITY: 46

// So what do we do next?
// - There is more work to be done next.
// - Now we can fetch weather using weather API and display it.
// - But we have to save them in our database.
// - Why do we need to save it in the database? Because later we can show the recently searched results here (Recently Searched Result:) in the form of history.
// - For this, we need to set up our own backend server and set up our own database.
// - And most importantly an API has to be created here.
// - Of course, it is possible without creating an API but I will do it with the API because I will keep the front-end work only in the front-end and not do anything else.
// - AJAX (Asynchronous JavaScript And XML) will be used here. I will show the data here (Recently Searched Result:) through AJAX by creating an API.
// - When our API is created in the backend, we will come back to the front-end and finish the work here (Recently Searched Result:).
// - Next, we will work on our backend.

// So our frontend work is almost done and the little work left is also dependent on the backend we have created. That's why we won't look at the front end for now.
// - The front end is in our 'public' directory (folder).
// - Because this ('public') directory will be just a directory of our backend that we will search over the net.
// - Those who are end users, who will use our application, can only access the data that is in this ('public') directory.

// Now the first task is to make our 'project' directory suitable for the backend server or working with the backend.
// - When I do the work with Node.js means I basically want to do the work using Express.js (or simply Express) in Node.js runtime.
// - For this first, I need to 'npm init' using the terminal inside our 'project' directory.

// Using the terminal inside our 'project' directory:
// npm init -y
// - The reason for the 'y' here is to prevent Node.js or npm from asking us the same questions. Set up the default thing.
// - See a file named 'package.json' created.

// We will set up some packages using the terminal inside our 'project' directory:
// npm i express cors mongoose body-parser
// - Next, we will set up another tool as a dev dependency called 'nodemon'.
// npm i -D nodemon
// - It is basically to make our server smooth and without refreshing every moment when we change something in our file, our server will automatically update. To do this we will install 'nodemon'.

// Finally, we will move inside the 'package.json' file.
// - Inside the 'package.json' file we will remove the "test" scripts. Here we write, "start": "nodemon index.js"
// - Then when the "start" command is given, it will start "index.js" through "nodemon".
// - So far we don't have anything named "index.js". So what we can do is go to the root level and create a file called "index.js". This (index.js) is our root file.

// What do we do next?
// - Next, we will create our server inside the "index.js" file.

// Start of the folder (directory) (Part 2 of 2): 242_History_Request_and_Update_DOM

// Save, refresh and go to the webpage
// - Now we will go to the URL of the browser:
// localhost:4444

// expected output (See the webpage output):
// There is no History

// That is, after a while, it (webpage) tells us:
// There is no History

// That means we got everything updated. Because we haven't created any history yet that's why the webpage is showing 'There is no History'.

// - updateHistory(data) → And later we had to create a function 'updateHistory()' to update this history object since we never created one before.
function updateHistory(history) {
  // So what will actually happen inside this function?
  // There are many things to do here:
  // At first, what we will do when it comes to 'updateHistory()' means the 'updateHistory()' function will be called then we will empty the contents inside the 'historyElm' element.
  // - Why empty? Because we want to start from blank.
  historyElm.innerHTML = '';
  // After that, we have to reverse the 'history' array that we have.
  // - Because when we pick the data from MongoDB and get it by GET, the first data that we submitted will be first, then the data that we submitted will be after it.
  // - But when we want to see, we want to see what we did recently first.
  // - For this, we will reverse the 'history'.
  history = history.reverse();

  // Now since 'history' is an array we need to create one card for each array element.
  // - We will traverse. Get an individual 'h' element which is basically a 'history' element.
  history.forEach(h => {
    // We will first clone the master template that we had i.e. 'masterHistory' template.
    // - And we will do deep clone that's why I made it 'true'.
    let tempHistory = masterHistory.cloneNode(true);
    // Our 'style.css' file has (#master-history {display: none;}) that's why every element will have 'history' {display: none}. We will clean its 'id' so that it does not happen. Then it will be visible again.
    tempHistory.id = '';
    // This time what we will do is find something from each 'tempHistory' by specific 'id' or 'class' name which is set inside our 'index.html' file. Each is named in the form 'class'.
    tempHistory.getElementsByClassName('condition')[0].src = `${ICON_URL}${h.icon}.png`; // `${ICON_URL}${weather.icon}.png` → There will be no {weather.icon}. Here will be {h.icon}. Because 'h' is holding a singular 'weather' information.
    tempHistory.getElementsByClassName('city')[0].innerHTML = h.name;
    tempHistory.getElementsByClassName('country')[0].innerHTML = h.country;
    tempHistory.getElementsByClassName('main')[0].innerHTML = h.main;
    tempHistory.getElementsByClassName('description')[0].innerHTML = h.description;
    tempHistory.getElementsByClassName('temp')[0].innerHTML = h.temp;
    tempHistory.getElementsByClassName('pressure')[0].innerHTML = h.pressure;
    tempHistory.getElementsByClassName('humidity')[0].innerHTML = h.humidity;
  });
}

// Now we save the file and see if there is any error in the 'Console' of our browser.
// - No, there is no error in the 'Console' of the browser. That means everything is fine.

// This was the job of our 'updateHistory()' function.
// - Although still when we call the 'updateHistory()' function we don't know if it is working properly. Because we have not created any 'history' yet.
// - So we will create 'history' later.

// Later, when someone enters a 'city name' here ('Enter Your City Name'), I will store that place in 'history' and when a 'history' is created, it should appear here (Recently Searched Result:) in the search result.

// End of the folder (directory) (Part 2 of 2): 242_History_Request_and_Update_DOM