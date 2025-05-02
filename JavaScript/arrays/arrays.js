let array = [10, 20, 30];
console.log(array);//[ 10, 20, 30 ]

//employee

let employee1 = ['Ajay', 35, 7500.99, true];
console.log(employee1);//[ 'Ajay', 35, 7500.99, true ]

//length
let personAges = [25, 22, 45, 50];
for (let i = 0; i < personAges.length; i++) {
    if (personAges[i] % 2 == 0) {
        console.log(i, " personAges ---- ", personAges[i]);//1  personAges ----  22 3  personAges ----  50
    }
}
//modify
personAges[1]=23;
console.log(personAges);//[ 25, 23, 45, 50 ]

personAges[5]=55;

console.log(personAges);//[ 25, 23, 45, 50, <1 empty item>, 55 ]
