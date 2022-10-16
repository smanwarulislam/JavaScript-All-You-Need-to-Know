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