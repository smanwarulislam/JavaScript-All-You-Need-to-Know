// Chapter Eighteen
// 212. Check Box Element and Event Handling

let skills = document.getElementsByName('skills');
let result = document.getElementById('result'); // To print the data in place of Selected Skills:

let checkedSkills = [];

[...skills].forEach(skill => {
  skill.addEventListener('change', function (event) {
    // console.log(event.target.checked); // event.target is referring to the element
    if (event.target.checked) {
      checkedSkills.push(event.target.value);
      // console.log(checkedSkills);
      // To print the data in place of Selected Skills:
      outputSkills(result, checkedSkills);
    } else {
      let ind = checkedSkills.indexOf(event.target.value);
      checkedSkills.splice(ind, 1);
      // console.log(checkedSkills);
      // To print the data in place of Selected Skills:
      outputSkills(result, checkedSkills);
    }
  });
});

// For console.log(event.target.checked)
// Checks and uncheck the checkboxes
// expected output: (See the Chrome DevTools Console)
// true
// false
// true
// false
// true
// false
// true
// false

// For console.log(checkedSkills)
// Using the if statement (if (event.target.checked) {})
// Checks and uncheck the checkboxes
// expected output: (See the Chrome DevTools Console)
// -> ["C Programming"]
// -> (2) ["C Programming", "Java Programming"]
// -> (3) ["C Programming", "Java Programming", "Javascript"]

// Using the if...else statement
// Checks and uncheck the checkboxes
// expected output: (See the Chrome DevTools Console)
// -> ["C Programming"]
// -> []
// -> ["Java Programming"]
// -> (2) ["Java Programming", "C Programming"]
// -> (3) ["Java Programming", "C Programming", "Javascript"]
// -> (4) ["Java Programming", "C Programming", "Javascript", "Python"]
// -> (3) ["Java Programming", "C Programming", "Javascript"]

// We will now use this perfect array (let checkedSkills = []) to print all the data in the form of text here in our Selected Skills:.

function outputSkills(parent, skills) {
  let result = '';
  skills.forEach((skill, index) => {
    result += `(${index + 1}) ${skill} `;
  });
  parent.innerHTML = result;
}

// To print the data in place of Selected Skills:
// Checks and uncheck the checkboxes
// expected output: (See the webpage output)
// Selected Skills: (1) C Programming (2) Java Programming (3) Javascript (4) Python
// Selected Skills: (1) C Programming (2) Javascript (3) Python
// Selected Skills: (1) C Programming (2) Javascript
// Selected Skills: (1) Javascript
// Selected Skills: (1) Javascript (2) Java Programming (3) C Programming (4) Python
// Selected Skills: (1) Java Programming (2) C Programming (3) Python
// Selected Skills: (1) C Programming (2) Python
// Selected Skills: (1) Python
// Selected Skills: