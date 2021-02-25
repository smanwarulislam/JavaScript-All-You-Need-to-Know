// Chapter Eighteen
// 197. Understanding The Document Object in DOM

// A child object in a window object is a document object. And this document object is basically the main object of the DOM.

window.document;
// expected output: (See the Chrome DevTools Console)
// -> #document // (Highlighted) | (Giving us the whole document)

document;
// expected output: (See the Chrome DevTools Console)
// -> #document // (Highlighted) | (Giving us the whole document)

console.dir(document);
// expected output: (See the Chrome DevTools Console)
/* -> #document
  URL: "http://localhost:9000/" */

document.URL;
// expected output: (See the Chrome DevTools Console)
// "http://localhost:9000/"

// Google's website
document.URL;
// expected output: (See the Chrome DevTools Console)
// "https://www.google.com/"

document.body;
// expected output: (See the Chrome DevTools Console)
// -> <body data-new-gr-c-s-check-loaded="14.997.0" data-gr-ext-installed="">...</body>

document.head;
// expected output: (See the Chrome DevTools Console)
// -> <head>...</head>

document;
// expected output: (See the Chrome DevTools Console)
/* -> #document
...
...
...
  -> __proto__: HTMLDocument
  ...
  ...
  ...
    -> __proto__: Document
    ...
    ...
    ...
      -> __proto__: Node
      ...
      ...
      ...
        -> __proto__: EventTarget
        ...
        ...
        ...
          -> __proto__: Object */