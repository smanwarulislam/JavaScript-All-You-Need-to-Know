// Chapter Seventeen
// 180. Why does Javascript Act Like Asynchronous

// Why does JavaScript act like asynchronous?
/* Because
JavaScript is A Single-Threaded Language
That's mean, JavaScript Process One Task at A Time */

// Behind the scene, JavaScript handles two types of data structures

/* JavaScript uses Two Data Structure to handle Variables and Function Calls
- Heap
- Stack */

/* Heap
Heap to manage Variables */

/* Stack
Stack to manage Function Calls */

// Here is an example of mainly synchronous code:
// let responseA = serverCall(url);
// let responseB = serverCall(url);
// let responseC = serverCall(url);

// console.log(responseA);
// console.log(responseB);
// console.log(responseC);

// How it works:
/* Call Stack
...
...
...
serverCall(); // responseC | When the function call is finished, it will be deleted from the Stack
serverCall(); // responseB | When the function call is finished, it will be deleted from the Stack
serverCall(); // responseA | When the function call is finished, it will be deleted from the Stack
Main(); */

// The JavaScript engine (V8) handles this asynchronous matter in a very nice system. Which is inside:
/* Call Stack
Web API
Event Loop
Callback Queue */