//function declaration
function sumDeclaration(){
  let a = 5;
  let b = 10;
  let add = a+b;
  console.log('sumDeclaration',add);
}

sumDeclaration();

//function Expression
let sumExpression = () =>{
   let a = 5;
   let b = 10;
   let add = a+ b;
   console.log('sumExpression',a+b);
}

sumExpression();

//function Expression without default value - reusable code
let sumExpression1 = (a,b) =>{
   let add = a+b;
   return add;
}

console.log('sumExpression1', sumExpression1(5, 10));

//income tax calculation

function incomTax(salary, slab){
   return final;
}


//FUNCTION DECLARATION
sum(5,5);// follows hoisting so it will show the result
console.log('sum',sum(5,5))

function sum (a, b) {
  return a + b;
};

sum(5,5);// function call follows hoisting method;
console.log('sum',sum(5,5))

let array =[1,2,3,4,5];

// let doubleArray = function(array){
//   let addition = 0
//   for(let val of array){//for of loop used for arrays.
//     addition += val
// }
// return addition
// }

// console.log(doubleArray(array))

// ===OR===

//converting above function into arrow function----simply function.

let doubleArray = (array) => { let addition = 0
     for(let val of array){//for of loop used for arrays.
      addition += val
 }
 return addition
}
console.log(doubleArray(array))


// var x = 896 , y;
// while(x > 0){
//     y = x % 10;             //y = 896 % 10; y = 6                89 % 10             8 % 10
//     console.log(y); //698     //6                                9                   8
//     x = Math.floor(x/10);    //896/10 = floor(89.6) = 89         89 / 10 8.9 8       0.89
// }
//Function Declaration
// function add(num1,num2){
//     console.log(num1+num2);
// }
// var add = add(30,40);
// console.log(add(30,20));
// add(100,200);
// add(12000,3000);

// Function Expressions
// var sub = function(num1,num2){

//    return num1-num2;
// }
// console.log("function expression call----",sub(50,30));
//  // Nested Functions

//  function averageMarks(html,css,js){

//     function totalMarks(html,css,js){   //private to the function averageMarks
//         return (html+css+js);
//     }
//      return totalMarks(html,css,js)/3;
//  }
//  console.log("average----",averageMarks(3,4,5));

// Arrow Functions

let doDisplay = message =>  console.log(message);
   
doDisplay("Arrow Functions Display");
		  
//Arrow function with single parameter and without return value 
// let cube = (num) => {
//    console.log(Math.pow(num,3));
// }
// let cube = num => {
//    console.log(Math.pow(num,3));
// }
// more simplification
let cube = num => Math.pow(num,3);	
console.log(cube(10));

//IIFE

(function(){
   console.log("IIFE");
})();

(function(){
   let num1=30,num2=40;
   console.log(num1+num2);
})();
		
(function(num1,num2){
   console.log(num1+num2);
})(65,67);

let sum = (function(num1,num2){
   return num1+num2;
})(180,20);

console.log(sum);