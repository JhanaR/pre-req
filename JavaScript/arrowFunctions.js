//FUNCTION EXPRESSION

let sum = function(a, b) {
  return a + b;
};
//Arrow function is a simplied code reduce of lines

let addingNumber1 = (a,b) => { return a+b }; 
//console.log('addingNumber',addingNumber(2,1))
let addingNumber2 = (a,b) => a+b;
console.log('addingNumber',addingNumber(2,1))

let double = function (n) {
    return n*2;
}

let doubleNumber1 = (n) => { return n*2 } //inorder to more simplyfy.
let doubleNumber2 = n => n*2
console.log('doubleNumber',doubleNumber2(2))
