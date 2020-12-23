// Chapter Thirteen
// Don't Overwrite Built in Prototypes

// Change the prototype of the built-in object or constructor
Array.prototype.shuffle = function () {

};

console.log([].shuffle());
// expected output: (See the Chrome DevTools Console)
// undefined

// Note:
// Do not change the prototype of any built-in object
// We will only work with prototypes of the objects we create