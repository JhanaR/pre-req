//FUNCTION EXPRESSION

let sum = function(a, b) {
  return a + b;
};
//Arrow function is a simplied code reduce of lines

let addingNumber1 = (a,b) => { return a+b }; 
console.log('addingNumber',addingNumber1(2,1))
let addingNumber2 = (a,b) => a+b;
console.log('addingNumber',addingNumber2(2,1))

let double = function (n) {
    return n*2;
}

let doubleNumber1 = (n) => { return n*2 } //inorder to more simplyfy.
console.log('doubleNumber1',doubleNumber1(2))
let doubleNumber2 = n => n*2
console.log('doubleNumber2',doubleNumber2(2))


const obj = {
  name: "Jhana",
  regularFunc: function () {
    console.log("regularFunc:", this.name);
  },
  arrowFunc: () => {
    console.log("arrowFunc:", this.name);
  },
};

obj.regularFunc(); // ?Jhana 
obj.arrowFunc();   // undefined

