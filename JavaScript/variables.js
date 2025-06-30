//examples
console.log('before VAR declaration',apple);//undefined
var apple;
console.log('before initialize var',apple);//undefined
apple = 10;
console.log('After assigning',apple);//10
apple = 20;
console.log('After Re-assigning',apple);//20

//console.log('before LETdeclaration',ball); -- //Cannot access 'ball' before initialization
let ball;
console.log('before initialize',ball);//undefined
ball = 20;
console.log('After assigning',ball);//20
ball= 30
console.log('After Re-assigning',ball);//30

// const calendar;//Missing initializer in const declaration
// console.log('before initialize',calendar);
const calendar = 20;
console.log('After assigning',calendar);
// const calendar = 50;//Identifier 'calendar' has already been declared
// console.log('After Re-assigning',calendar);


const constant = 10;//redeclare not possible
let letting = 15;//redeclare not possible
letting = 100;//updation possible for var and let alone.
//

const person = {
  name: "Alice",
  age: 30
};

//updation is possible for const object
console.log('person before update', person);
person.age = 31;
console.log('person after update', person);

const arr = [1,2,3,4];//reassigning array is not possible but we can change value for the index of arr
console.log('before arr', arr);
arr[0] = 0;
console.log('After arr', arr);


function letCheck() {
    for(let a=0; a<7; a++){
        console.log("a inside for let:", a);
    }
    //console.log("a inside function but outside for let:", a);//error because it is outside the for loop
}
//console.log("a outside function for let:", a);//error because it is outside

letCheck();

function constCheck() {
    for(let a=0; a<7; a++){
        console.log("a inside for:", a);
    }
    //console.log("a inside function but outside for:", a);//error because it is outside the for loop
}
//console.log("a outside function:", a);//error because it is outside

constCheck();

function varCheck() {
    for(var a=0; a<7; a++){
        console.log("a inside for var:", a);
    }
    console.log("a inside function but outside for var:", a);
    //it is outside the for loop but inside the function: 7)
}
//console.log("a outside function for var:", a);//error because it is outside

varCheck();