//Destructuring of Objects and Arrays,, extracting the proper from an object and assigning to the variable.

let baby = {
name : "heva",
age: 3,
hobby: "imsai",
address: thandalam
}

// to access the key name it needs to call baby.name..
//inorder to acces more than 10 times, we have an option called destructing.

const { name, age, hobby } = baby; //always key name and variable name should be same.
//internally it takes up like baby.name.. baby.age, baby.hobby
//While destructuring we should provide deafault value but never be a part of the object.

const { name, address="chennai"};
const address = baby.address === undefined- ? defaultValue :baby.address
//const varName = condition ? "if true will execute " : "if false will execute"



