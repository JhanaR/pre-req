function sayHi() {
  console.log("Hello");
}

const greet = () => {
  console.log("Hi");
};

sayHi(); //Hello
greet(); //Hi

//****************************** */
const person = {
  name: "Jhana",
  sayHello: function () {
    console.log("Hello", this.name);
  },
  sayHelloArrow: () => {
    console.log("Hi", this.name);
  }
};

person.sayHello();//Jhana
person.sayHelloArrow(); //its not declared so its undefined 

// --------------------------------------------//
const user = {
  name: "Jhana",
  role: "Lead"
};

// const { name, position } = user;
// console.log(position); // undefined because position does not exist in the user object.

const { name, position = "UI Developer" } = user; //assigned defaukt value

// --------------------------------------------//
const fruits = ["apple", "banana"];
const moreFruits = [...fruits, "mango"];

console.log(moreFruits); // ["apple", "banana", "mango"]

// --------------------------------------------//
const userObj = { name: "Jhana", role: "Lead" };
const locationInfo = { city: "Chennai" };

const fullProfile = { ...userObj, ...locationInfo };

console.log(fullProfile);// { name: 'Jhana', role: 'Lead', city: 'Chennai' }

// --------------------------------------------//

const nums = [4, 8, 12];
Math.max(...nums); //
Math.max(nums);

console.log('first',Math.max(...nums));
console.log('first',Math.max(nums));

