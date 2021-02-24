// Chapter Eighteen
// 196. Understanding The Window Object in DOM

// The Window is the global content

// See the Chrome DevTools Console

window;
// expected output: (See the Chrome DevTools Console)
// -> Window {window: Window, self: Window, document: document, name: "", location: Location, …}

typeof window;
// expected output: (See the Chrome DevTools Console)
// "object"

window.Math;
// expected output: (See the Chrome DevTools Console)
// -> Math {abs: ƒ, acos: ƒ, acosh: ƒ, asin: ƒ, asinh: ƒ, …}

let a = 10;
window.a;
// expected output: (See the Chrome DevTools Console)
// undefined

var b = 20;
window.b;
// expected output: (See the Chrome DevTools Console)
// 20

window;
// expected output: (See the Chrome DevTools Console)
/* -> Window {window: Window, self: Window, document: document, name: "", location: Location, …}
  -> atob: ƒ atob()
     b: 20 */

// The Window object is basically the main object of all of us

// If we want to see the location (http://localhost:9000/) using the window object, we can do that
window.location;
// expected output: (See the Chrome DevTools Console)
/* -> Location {ancestorOrigins: DOMStringList, href: "http://localhost:9000/", origin: "http://localhost:9000", protocol: "http:", host: "localhost:9000", …}
  -> ancestorOrigins: DOMStringList {length: 0}
  -> assign: ƒ assign()
     hash: ""
     host: "localhost:9000"
     hostname: "localhost"
     href: "http://localhost:9000/"
     origin: "http://localhost:9000"
     pathname: "/"
     port: "9000"
     protocol: "http:"
  -> reload: ƒ reload()
  -> replace: ƒ replace()
     search: ""
  -> toString: ƒ toString()
  -> valueOf: ƒ valueOf()
     Symbol(Symbol.toPrimitive): undefined
  -> __proto__: Location
    -> constructor: ƒ Location()
       Symbol(Symbol.toStringTag): "Location"
    -> __proto__: Object */

location;
// expected output: (See the Chrome DevTools Console)
// -> Location {ancestorOrigins: DOMStringList, href: "http://localhost:9000/", origin: "http://localhost:9000", protocol: "http:", host: "localhost:9000", …}

window;
// expected output: (See the Chrome DevTools Console)
/* -> Window {window: Window, self: Window, document: document, name: "", location: Location, …}
  -> document: document
    URL: "http://localhost:9000/" */

// The work we do with document properties is basically DOM Manipulation

// What we mean by direct DOM Manipulation is manipulating the document property in various ways

window.document; // (Highlighted)
// expected output: (See the Chrome DevTools Console)
// -> #document // (Giving us the whole document)

// The parent of the document is the window object. And in the case of JavaScript, the window is the global object.
// The window is everyone's parent object.