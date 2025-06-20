let item = {
    name:'laptop',
    price:33000,
    quantity:1,
    categories:['electronics','laptop'],
    dimensions:{
      length:7,
      breadth:3.5,
      height:.12
    }
  }
item.check ="verified"
delete item.price;
item.check ="UnVerified"
//access the object properties using .(dot) notation
console.log(item);
// console.log(item.quantity);
// console.log(item.dimensions.breadth);
// console.log(item.check);

// let user = {
//    "name" : "rakesh",
//    age : 32
// };

// //access the object properties
// // . (dot) notation
// console.log(user);
// console.log(user.name);
// console.log(user.age);
// //add property 
// user.isAdmin = false;

// user.age = 31;

// console.log(user);

// delete user.age;

// console.log(user);

// let a = 10;
// delete a;
// console.log(a);

// user = {
//     "likes code": true
// }

// //console.log(user.likes code);

// // square notation 

// console.log(user["likes code"]);
const value=10;
let user = {
    const : 10,
    return : 20
}
console.log(user);

let users = [];

let userOne = {
    name:"rakesh",
    id:123,
    age:31
}

users.push(userOne);
users.push(userOne);
users.push(userOne);
users.push(userOne);
users.push(userOne);

console.log(users);

let userDetails = {
    name:"krishna",
    age:31,
    id:123,
    hobbies:["singing","shopping","dancing"]
}

console.log(userDetails.hobbies[1]);