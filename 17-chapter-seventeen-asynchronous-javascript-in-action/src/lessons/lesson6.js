// Chapter Seventeen
// 182. NodeJS vs Browser - Does Javascript Act Same [V8 Engine]

// Question:
// Do we get the same asynchronous behavior in JavaScript in both Node JS and Web/Browser?

// Answer:
/* - Of course, will get it. Because
Behind the scene, JavaScript and Node JS both use Google's V8 engine in the background.
That's means, we don't have to worry about the platform anymore. */

// What is the V8 engine?
// V8 is Google's open-source high-performance JavaScript and WebAssembly engine, written in C++.

// What does it mean (V8 engine)?
// V8 is a C++ program, which receives JavaScript code, compiles, and executes it.

// What does V8 do?
/* - Compile and Executes JavaScript code
- Handling Call Stack
- Handling Heap Memory to allocate Memory for Variables
- Collect garbage - Release Memory which is no longer necessary
- Provide Data Types, Operators, Objects, and Functions */

// What does V8 do not do?
/* - Document Object Model (DOM) - Don't know anything about it
- Multiple V8 engines never share Variables or Context */