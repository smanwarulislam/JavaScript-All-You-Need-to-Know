// At first, I need to import 'mongoose' here too since we will be working with mongoose.
const mongoose = require('mongoose');

// Next, what we need to do is extract a 'Schema' from the mongoose because the mongoose provides us with 'Schema'.
const Schema = mongoose.Schema;

// Using this Schema we will now create a HistorySchema.
// - It takes an object as an argument. Inside this object, we have to tell what data will be inside this HistorySchema.
const HistorySchema = new Schema({
  icon: String,
  name: String,
  country: String,
  main: String,
  description: String,
  temp: Number,
  pressure: Number,
  humidity: Number
});

// In JavaScript, you don't need to declare datatype but when you work in Mongoose you need to declare datatype.
// - This (HistorySchema) is our basic Schema.

// Now we will create a 'History' model using this (HistorySchema) Schema which I named 'History'.
const History = mongoose.model('History', HistorySchema);

// At the end, we have to export this Schema or actually this model (HistorySchema).
module.exports = History;

// Our 'model' is done.
// - This is the simple 'model'.
// - Using this 'model' we can now create any 'History' object and store it in our database. We will do that later.

// We created the 'History' model.
// - But if we want to work properly with the 'History' model we need to create some 'route'.
// - Why create 'route'?
// - You may remember that we have to go to the route to get the data. To post our data we need to hit certain routes or URLs. So there is no such URL or route in our application.
// - We have to create those routes so that we can provide data if someone hits the route or sends a get request, and if someone sends a post request to that route, we can enter data there.
// - We have to do such work, right?
// - So to do this the first thing we will do is go to the 'index.js' file. Now we need to use the 'body-parser' inside the 'index.js' file.