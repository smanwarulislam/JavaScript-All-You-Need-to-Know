// Moment.js Library Introduction

// Moment.js | Home
// https://momentjs.com/

// moment/moment: Parse, validate, manipulate, and display dates in javascript - GitHub
// https://github.com/moment/moment/

// Moment.js | Home
// https://momentjs.com/

// Moment.js 2.29.4
// Parse, validate, manipulate, and display dates and times in JavaScript.

// moment/moment: Parse, validate, manipulate, and display dates in javascript - GitHub
// https://github.com/moment/moment/

// Moment.js
// A JavaScript date library for parsing, validating, manipulating, and formatting dates.

// https://momentjs.com/
// Home
// Moment.js | Home

// Format Dates
moment().format('MMMM Do YYYY, h:mm:ss a'); // September 28th 2022, 7:35:01 pm
moment().format('dddd');                    // Wednesday
moment().format("MMM Do YY");               // Sep 28th 22
moment().format('YYYY [escaped] YYYY');     // 2022 escaped 2022
moment().format();                          // 2022-09-28T19:35:01+06:00

// Relative Time
moment("20111031", "YYYYMMDD").fromNow(); // 11 years ago
moment("20120620", "YYYYMMDD").fromNow(); // 10 years ago
moment().startOf('day').fromNow();        // 20 hours ago
moment().endOf('day').fromNow();          // in 4 hours
moment().startOf('hour').fromNow();       // 43 minutes ago

// Calendar Time
moment().subtract(10, 'days').calendar(); // 09/18/2022
moment().subtract(6, 'days').calendar();  // Last Thursday at 7:46 PM
moment().subtract(3, 'days').calendar();  // Last Sunday at 7:46 PM
moment().subtract(1, 'days').calendar();  // Yesterday at 7:46 PM
moment().calendar();                      // Today at 7:46 PM
moment().add(1, 'days').calendar();       // Tomorrow at 7:46 PM
moment().add(3, 'days').calendar();       // Saturday at 7:46 PM
moment().add(10, 'days').calendar();      // 10/08/2022

// Multiple Locale Support
moment.locale();         // en
moment().format('LT');   // 7:50 PM
moment().format('LTS');  // 7:50:30 PM
moment().format('L');    // 09/28/2022
moment().format('l');    // 9/28/2022
moment().format('LL');   // September 28, 2022
moment().format('ll');   // Sep 28, 2022
moment().format('LLL');  // September 28, 2022 7:50 PM
moment().format('lll');  // Sep 28, 2022 7:50 PM
moment().format('LLLL'); // Wednesday, September 28, 2022 7:50 PM
moment().format('llll'); // Wed, Sep 28, 2022 7:50 PM

// Guides
// Moment.js | Guides

// Moment.js Guides

// Docs
// Moment.js | Docs

// Moment.js Documentation

// Using Moment
// Moment was designed to work both in the browser and in Node.js.

// Parse
// Now
moment();
moment(undefined);
// From 2.14.0 onward, also supported
moment([]);
moment({});

// To get the current date and time, just call moment() with no parameters.
var now = moment();

// This is essentially the same as calling moment(new Date()).

// Display
// Format
moment().format();
moment().format(String);

// This is the most robust display option. It takes a string of tokens and replaces them with their corresponding values.
moment().format(); // "2014-09-08T08:02:17-05:00" (ISO 8601, no fractional seconds)
moment().format("dddd, MMMM Do YYYY, h:mm:ss a"); // "Sunday, February 14th 2010, 3:25:50 pm"
moment().format("ddd, hA");                       // "Sun, 3PM"
moment().format("[Today is] dddd");               // "Today is Sunday"
moment('gibberish').format('YYYY MM DD');         // "Invalid date"