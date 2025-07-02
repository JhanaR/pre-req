const number = [1, 2, 3, 4];

let newNumber1 = number.map(function (element, index) {
  return element * 2;
});
console.log("newNumber1", newNumber1);

//converting newNumber to arrow function

let newNumber2 = number.map((n) => n * 2); // in order to see multiple outputs flower bracket is must
// and return key word is must.
console.log("newNumber2", newNumber2);

let newNumber3 = number.map((n) => {
  return n * 2;
}); //if used {} must use return keyword
// and return key word is must.
console.log("newNumber2", newNumber2);

let userObj = [
  { userName: "Aila", age: 31, salary: 31000 },
  { userName: "Baheera", age: 32, salary: 32000 },
  { userName: "Caby", age: 33, salary: 33000 },
  { userName: "Dency", age: 34, salary: 34000 },
];

//increase salary by 2000;

let increaseSalary = userObj.map((obje) => obje.salary + 2000);
console.log("Only increaseSalary", increaseSalary);
//out put: [33000, 34000, 35000, 36000]

let increaseSalar = userObj.map((obje) => {
  obje.salary + 2000;
  return obje;
});
console.log("Whole obj with increaseSalar", increaseSalar); //output :undefined if you return more values it must have return keyword in flower braces.

let increaseSala = userObj.map((obje) => {
  obje.salary = obje.salary + 2000;
  return obje;
});
console.log("increaseSala", increaseSala);
//output :
// 0: {userName: 'Aila', age: 31, salary: 33000}
// 1: {userName: 'Baheera', age: 32, salary: 34000}
// 2: {userName: 'Caby', age: 33, salary: 35000}
// 3: {userName: 'Dency', age: 34, salary: 36000}

//FILTER

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//let evenNumb = numbers.filter (n =>n%2===0)

let evenNumb = numbers.filter(function (n) {
  return n % 2 === 0;
});

console.log("evenNumb", evenNumb);

let userAge = userObj.filter((obje) => obje.age > 33);
console.log("userAge", userAge);

let userAge1 = userObj.filter((obje) => {
  if (obje.age === 33) {
    obje.salary = obje.salary + 10000; //if you want to modify salary then use this line.
  }
  return obje;
});
console.log("userAge1", userAge1);

//if userObj age is above 33 then only modify salary.
let userSalaryModify = userObj
  .filter((obje) => obje.age > 33)
  .map((obje) => {
    return {
     name: obje.name,
      age: obje.age,
      salary: obje.salary + 2000
    };
  });

console.log("userSalaryModify", userSalaryModify);


let alternate = userObj
  .filter((obje) => obje.age > 33)
  .map((obje) => {           
    obje.salary = obje.salary + 2000;
    return obje;
  });

  console.log("alternate", alternate);
