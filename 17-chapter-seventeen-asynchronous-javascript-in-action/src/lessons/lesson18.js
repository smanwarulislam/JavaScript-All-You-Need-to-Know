// Chapter Seventeen
// 194. Create Async Iterator Using Async Generators

// async generator creation
async function* myAsyncGenerator() { // function* -> Generator
  let i = 0;

  while (true) { // Attention, please
    if (i > 5) return; // Attention, please
    yield await Promise.resolve(i++); // yield -> pause
  }
}

// I can run this function through the 'for of' loop. Because since it is returning async iterator. So I can use it.
// First, you have to take it with a semicolon (;). Then IIFE has to be created.
/* ; (async function () {
  for (let v of myAsyncGenerator()) {
    console.log(v);
  }
})(); */ // () -> Calling the IIFE

// expected output: (See the Chrome DevTools Console)
/* -> Uncaught (in promise) TypeError: Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method. */

; (async function () {
  for await (let v of myAsyncGenerator()) {
    console.log(v);
  }
})(); // () -> Calling the IIFE

// expected output: (See the Chrome DevTools Console)
/* 0
1
2
3
4
5 */

// Note:
/* We can do the same thing with the async iterator and async generator as we did with the iterator generator.
The difference is that our function here must always be an async function.
We can never 'await' without the async function.
And if we can't 'await', we won't be able to resolve the promises.
That's why we always have to use the 'async' keyword.
Besides, there is no difference. Everything is almost the same. */