const fruits = ["Apple", "Orange", "papaya", "Mango"];
let index = fruits.indexOf("Apple") + 1;
console.log('index',index);
//1

let lastIndex =fruits.lastIndexOf("Apple") + 1;
console.log('lastIndex',lastIndex);
//1

let includes =fruits.includes("Apple");
console.log('includes',includes);
//true

// Array find()
// Array findIndex()
// Array findLast()
// Array findLastIndex()