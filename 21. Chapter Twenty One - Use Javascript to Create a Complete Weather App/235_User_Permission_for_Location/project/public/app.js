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
};

// So now first we need to generate this (getWeatherData()) function.
// - We can do that outside of 'window.onload' with no problem.
function getWeatherData(city = DEFAULT_CITY, coords) {
  // Now we will create a URL (url) based on this city name (city) or coordinates (coords).
  // Just made a copy of BASE_URL where we can edit, and update.
  let url = BASE_URL;

  city === null ? url = `${url}&lat=${coords.latitude}&lon=${coords.longitude}` : url = `${url}&q=${city}`;

  // console.log(url);

  // We need to send an Axios request and that is a GET request. We will send a GET request through the url we have.
  axios.get(url)
    .then(response => { // It will return a 'Promise' to us
      console.log(response.data); // Because everything comes in the form of data with response in Axios
    })
    .catch(e => {
      console.log(e);
    });
}

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