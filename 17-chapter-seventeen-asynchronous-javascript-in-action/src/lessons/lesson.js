// Chapter Seventeen
// 177. Understanding Asynchronous Programming in Javascript

// What is Synchronous Programming?

/* synchronous:
existing or occurring at the same time. */

/* Synchronous Programming:
Synchronous basically means that you can only execute one thing at a time. */

// Example

var a = 10;
var b = 20;

var result = a + b;
console.log(result);

/* A function called storeResult has been created and we do not know where it was created. We just know the storeResult function has been called here. */
// var response = storeResult(result); // Waiting

/* if (response.success) {
  console.log('Successfully stored');
} else {
  console.log('Data store failed');
} */

// What is Asynchronous Programming?

/* asynchronous:
(of two or more objects or events) not existing or happening at the same time. */

/* Asynchronous Programming:
Asynchronous means that you can execute multiple things at the same time and you don't have to finish executing the current thing in order to move on to the next one. */

// Example

var a2 = 10;
var b2 = 20;

var result2 = a2 + b2;
console.log(result2);

/* A function called storeResult2 has been created and we do not know where it was created. We just know the storeResult2 function has been called here. */
// var response2 = storeResult2(result2); // Waiting silently

/* if (response2.success2) {
  console.log('Successfully stored 2');
} else {
  console.log('Data store failed 2');
} */