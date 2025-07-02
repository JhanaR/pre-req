let baby = {
name : "bhuva",
age: 3,
hobby: "imsai",
address: "thandalam"
}
console.log('Before default baby',baby);//object return
console.log('properties',baby.name,baby.age,baby.hobby )
const { age, hobby} = baby; //destructuring of object
console.log('age',age);
console.log('hobby',hobby);
const { address="chennai"} = baby;
const addresss = baby.address === undefined ? 'defaultValue' :baby.address //ternary operator
console.log('address',address);

const {name, ...other} = baby
console.log('name',name);
console.log('other',other);

// const {name, namyy='karthik'} = baby;
// console.log('name',name);
// console.log('namyy',namyy);
console.log('After default baby',baby);//object return
console.log('baby',baby);//object return

const colors = ["red", "green", "blue", "yellow", "pink"];

const [first, second, third, ...number] = colors;//desctructing of array

console.log('first',first);
console.log('Second',second);
console.log('Third',third);
console.log('Number',number);

//nested Object

let babies = {
name1 : "bhuva",
age1: 3,
hobby1: "imsai",
address1:{
    city: "chennai",
    state: "tamilnadu", 
    post: "thandalam",
    location : {
        latitude: 12.9716,
        longitude: 79.1582
    } 
}
}

// const { name1, age1, hobby1, address1: { city, state, post } } = babies; //destructuring nested object
const { name1, age1, hobby1, address1: { city, state, post, location: { latitude, longitude } } } = babies;
console.log('name1', name1);
console.log('age1', age1);
console.log('hobby1', hobby1);
console.log('city', city);
console.log('state', state);
console.log('post', post);     
console.log('latitude', latitude);
console.log('longitude', longitude);

let personalData = {};
console.log('address from personalData', personalData.address); //undefined
// console.log('city from personalData', personalData.address.city); //undefined.undefined will give an error

console.log('Is Exist', personalData?.address?.city); //Optional chaining to safely check if 'address' and 'city' exist

