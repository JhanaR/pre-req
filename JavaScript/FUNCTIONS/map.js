//When you want to iterate over each and evey element.
//map always return new array by performing action on original array.

const number = [1,2,3,4];

// let newNumber = number.map(function(element,index){
// return element*2
// }
// )
// console.log(newNumber);


//converting newNumber to arrow function

let newNumber = number.map(n => n*2) // in order to see multiple outputs flower bracket is must and return key word is must.
console.log(newNumber);