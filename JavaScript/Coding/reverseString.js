//Reverse the letters in a string

let stringOut = "interview"

let result = stringOut.split('').reverse().join('')

console.log(result)
/////////////////////////////////////////////////////

function reverseString(str) {
  let result = "";

  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }

  return result;
}

console.log(reverseString("interview"));

////////////////////////////////////////////////////

let word = "interview";
let resulty = [];
for (let i = word.length - 1; i >= 0; i--) {
  result.push(word[i]);
}

console.log(result.join(""));

///////////////////////////////////////////////

function reverseString(str) {
  let reversed = "";

 
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }

  return reversed;
}

// Test it
console.log(reverseString("world")); // expected: "dlrow"
