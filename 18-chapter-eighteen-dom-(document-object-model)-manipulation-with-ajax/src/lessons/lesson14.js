// Chapter Eighteen
// 208. How to Work with Style in DOM

let title = document.getElementById('title');
console.log(title.style);
// expected output: (See the Chrome DevTools Console)
// -> CSSStyleDeclaration {alignContent: "", alignItems: "", alignSelf: "", alignmentBaseline: "", all: "", …}

// title.style.color = 'orange';
// expected output: (See the webpage output)
// (The title will be orange in color)

// title.style.color = 'rgb(255, 0, 0)';
// expected output: (See the webpage output)
// (The title will be red in color)

// title.style.color = '#f00';
// expected output: (See the webpage output)
// (The title will be red in color)

// title.style.fontSize = '4rem';
// expected output: (See the webpage output)
// The title will be 4rem big

// title.style.backgroundColor = '#000';
// expected output: (See the webpage output)
// The background of the title will be black

// Working in shortcut ways

let styleObj = {
  backgroundColor: 'black',
  fontSize: '30px',
  color: '#efefef'
};

let list = document.getElementById('list');

// list.style = styleObj;
// expected output: (See the webpage output)
// (Nothing has changed)

// console.log(list.style);
// expected output: (See the Chrome DevTools Console)
// (There has been no change. This means read-only.)
// -> CSSStyleDeclaration {alignContent: "", alignItems: "", alignSelf: "", alignmentBaseline: "", all: "", …}

// Object.assign(list.style, styleObj);
// expected output: (See the webpage output)
// (Font size and color have changed but background color has not changed. That is, it has not changed properly.)

[...list.children].forEach(li => Object.assign(li.style, styleObj));
// expected output: (See the webpage output)
// (The style of the list item has changed properly)