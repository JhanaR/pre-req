//using SPLICE

const transpor =['car','bus','van','jeep','bike','scooter']

const splice =transpor.splice(2,3);//.splice(start, deleteCount)

console.log('splice',splice);
//output [ 'van', 'jeep', 'bike' ]

//using SLICE
const vehicles =['car','bus','van','jeep','bike','scooter']

const slice =vehicles.slice(2,3)  ;//.slice(start, end)

console.log('slice',slice);
//output ['van']

const transport2 =['car','bus','van','jeep','bike','scooter']
//using CONCATE

const number = [1,2,3,4]
const join = transport2.concat(vehicles,number);
console.log('JOIN', join);
//['car', 'bus', 'van', 'jeep', 'bike', 'scooter', 'car', 'bus', 'van', 'jeep', 'bike', 'scooter', 1, 2, 3, 4] 

//joining an array
const concat = transport2.concat(vehicles,number);// in concat(we can define n number of arrays separated with comma
console.log('concat', concat);
//['car', 'bus', 'van', 'jeep', 'bike', 'scooter', 'car', 'bus', 'van', 'jeep', 'bike', 'scooter', 1, 2, 3, 4]

const alphe = ['abc','def','ghi','jkl'];
const separate = alphe.join(',');
console.log('SEPARATE', separate);
//output: abc,def,ghi,jkl

//FIND INDEX
const vehi =[
    {id:1,title:"car"},
    {id:2,title:"bus"},
    {id:3,title:"van"},
    {id:4,title:"jeep"},
    {id:5,title:"bike"},
    {id:6,title:"scooter"}
  ]

  const findIndex = vehi.findIndex((val)=>{
    //return val.id == 2;
    return val.title == "van";
  })

  console.log('findIndex',findIndex);
  //OUTPUT: index value

//FIND
const vehic =[
    {id:1,title:"car"},
    {id:2,title:"bus"},
    {id:3,title:"van"},
    {id:4,title:"jeep"},
    {id:5,title:"bike"},
    {id:6,title:"scooter"}
  ]

  const find = vehi.find((val)=>{
    return val.id == 2;
  })

  console.log('find',find)

const ages = [1, 33, 76, 40, 66];
let filter = ages.filter((value)=>{
    return value > 40
})
console.log('filter value',filter)
//output: [76, 66]


function checkAge(age) {
  return age >= 18;
}
const age = [1, 33, 76, 40, 66].filter(checkAge)

console.log('filter function',age)
//output:[33, 76, 40, 66] 

//object Array
const transport =[
  {id:1,title:"car"},
  {id:2,title:"bus"},
  {id:3,title:"van"},
  {id:4,title:"jeep"},
  {id:5,title:"bike"},
  {id:6,title:"scooter"}
]

//requirement 1. need to return the value which is in title.

const newfilter = transport.filter((even)=>{
  return even.id % 2 == 0;
})
console.log('Array Filter index',newfilter)
//output:{id: 2, title: 'bus'} {id: 4, title: 'jeep'} {id: 6, title: 'scooter'}

//Map 

let array =[22,52,11,6,49,59,1];//using this array need to form another array.

let map = array.map((greater)=>{
    return greater >42
})
console.log('Map value',map)
//output: [false, true, false, false, true, true, false]


const numberss = [1, 11, 22, 44];
const newArr = numberss.map(myFunction);

function myFunction(numem) {
    return numem * 10;
  }

  console.log('Array map fun',newArr)
  //output [10, 110, 220, 440]

const no = [1, 2, 3, 4];
  //object Array
const transport1 =[
    {id:1,title:"car"},
    {id:2,title:"bus"},
    {id:3,title:"van"},
    {id:4,title:"jeep"},
    {id:5,title:"bike"},
    {id:6,title:"scooter"}
  ]

  //requirement 1. need to return the value which is in title.

  const newTitle = transport1.map((tit)=>{
    return tit.title;
  })
  console.log('Array map title',newTitle)
  //output:['car', 'bus', 'van', 'jeep', 'bike', 'scooter']

  //requirement 2. need to return the value which is in title with upper case.
  const newUpperTitle = transport1.map((tit)=>{
    return tit.title.toUpperCase();
  })
  console.log('Array map title in upper case',newUpperTitle)
  //output:['CAR', 'BUS', 'VAN', 'JEEP', 'BIKE', 'SCOOTER']

  const fruits = ["Apple", "Orange", "papaya", "Mango"];
let index = fruits.indexOf("Apple") + 1;
console.log('index',index);
//1

let lastIndex =fruits.lastIndexOf("Apple") + 1;
console.log('lastIndex',lastIndex);
//1

let includes =fruits.includes("Apple");
console.log('includes',includes);
//true

let items = [250,500];
// ADD REMOVE
items.push(100);
console.log(items);
items.pop();
console.log(items);
items.unshift(120);
console.log(items);
items.shift();
console.log(items);


let arrayA = [250,500];
let arrayB = [150,500];

arrayA= arrayA.concat(arrayB);
console.log(arrayA);

arrayA.sort();
console.log(arrayA);
arrayA.reverse();
console.log(arrayA);

console.log(arrayA.toString());
console.log(arrayA);

let firstArray = [10,20,30,40,50,10,20,30,10,50,90];

//sub array from firstArray

console.log(firstArray.slice(3,6)); // 
let firstSubArray = firstArray.slice(3,6);
console.log('slice',firstArray);

// indexOf
console.log("index of -------",firstArray.indexOf(10)); // 0
console.log("index of -------",firstArray.lastIndexOf(10)); // 8

function show(element){
    console.log(element);
}

function doSomething(){
   var printArray = [10,20,30,40,50,10,20,30,10,50,90];
//    printArray.forEach(show);
   printArray.forEach((element) => {
    console.log('forEach',element);
   })
}
//doSomething();


var numbers = [10,20,30,40,50,60];

numbers.splice(0,0,1,2,3);

console.log('splice',numbers);

// 30 40  
numbers.splice(5,2);
console.log('splice',numbers);

        let a = 10;
		let b = true;
		let c = 'Apple';
		let array1 = [a,b,c] // array packing 
		array1[0];
		//unpacking 
		var x , y , z;
		[x,y,z]= array1;
        console.log('X',x);
        console.log('Y',y);
        console.log('Z',z);
        console.log('array',array1);

        let Array =["apple","ball","cat","dog",[1,2]];

        //console.log(Array);
        
        //console.log(Array.length);
        
        console.log('4th array zeroth index',Array[4][0]);
      

//MAP Double the Array 

let numm = [1, 2, 3];
let dblNumm = numm.map(num =>  num * 2)
console.log('Double the Array', dblNumm);
//Output: [2, 4, 6]

//FILTER out odd numbers
let wholee = [10, 21, 32, 41]
let odde = wholee.filter(num =>num%2 !== 0)
console.log('Filter out odd numbers', odde);
//Output: [21, 41]

//find first number greater than 50
let numrr = [10, 35, 60, 25]
let firstGreaterr = numrr.find(num => num>50 )
console.log('find first number greater than 50', firstGreaterr);
//Output: 60

//sum of all numbers
let sume = [1, 2, 3, 4]
let tote = sume.reduce((acc, curr )=>acc +curr, 0)
console.log('sum of all numbers', tote);
//Output: 10

//return an object showing the count of each fruit
const fruity = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

let count = fruity.reduce((acc, cur) => {
  acc[cur] = (acc[cur] || 0) + 1;
  return acc;
}, {});

console.log('count', count); // { apple: 3, banana: 2, orange: 1 }
const arr = [1,2,3,4,5,6,7,8];
const size = 3;
    //output [[1,2,3], [4,5,6], [7,8]]

const result = arr.reduce((acc,curr)=>{
    const resize = acc[acc.length - 1];

    if(!resize || resize.length === size){
        acc.push([curr])
    } else {
        resize.push(curr);
    }
    return acc;

},[])

console.log(result)

//Flattened Array

const nested = [1, [2, 3], [4, [5, 6]]];
const flatArray = nested.flat(2);// flattens up to 2 levels deep
console.log('Flattened Array', flatArray);
//Output: [1, 2, 3, 4, 5, 6]

//ascending order
const ascending = [5, 3, 8, 1, 2];
const sortedAscending = ascending.sort((a, b) => a - b);
console.log('ascending order', sortedAscending);
//Output: [1, 2, 3, 5, 8]


//descending order
const descending = [5, 3, 8, 1, 2].sort((a, b) => b - a);
console.log('descending order', descending);  
//Output: [8, 5, 3, 2, 1]

//Get names of users who are older than 30 in uppercase.
const users = [
  { id: 1, name: 'Alice', age: 31 },
  { id: 2, name: 'Bobbilie', age: 34 },
  { id: 3, name: 'Charlie', age: 25 },
  { id: 4, name: 'Donglege', age: 28 },
  { id: 5, name: 'Eveninly', age: 29 }
];

let Allname = users
  .filter(Allname => Allname.age > 30)
  .map(Allname => Allname.name.toUpperCase());

console.log(Allname); // Output: ['ALICE', 'BOBBILIE']

// Find the first user who is younger than 30.

let first_name = users
  .filter(first_name => first_name.age >30)
  .find(first_name => first_name.name.toUpperCase());

  console.log(first_name); // Output: { id: 1, name: 'Alice', age: 31 }

// Sort the users by age in descending order.

let sortUsers = users.sort((a,b) => b.age - a.age) 
console.log(sortUsers);
// Output:  
// {id: 2, name: 'Bobbilie', age: 34}
// {id: 1, name: 'Alice', age: 31}
// {id: 5, name: 'Eveninly', age: 29}
// {id: 4, name: 'Donglege', age: 28}
// {id: 3, name: 'Charlie', age: 25} 

//Check if at least one user is younger than 25
let out = users
		.some( use => use.age>30)
console.log(out); // Output: true

const orders = [
  { id: 1, amount: 250 },
  { id: 2, amount: 400 },
  { id: 3, amount: 150 }
];
let order = orders.some(order => order.amount > 300);
console.log('order', order); // Output: true
//Double the Array
let numeric = [1, 2, 3];
let dblNum = numeric.map(num =>  num* 2)
console.log('Double the Array', dblNum);
//Output: [2, 4, 6]

//Filter out odd numbers
let whole = [10, 21, 32, 41]
let odd = whole.filter(num =>num%2 !== 0)
console.log('Filter ut odd numbers', odd);
//Output: [21, 41]

//find first number greater than 50
let numr = [10, 35, 60, 25]
let firstGreater = numr.find(num => num>50 )
console.log('find first number greater than 50', firstGreater);
//Output: 60

//sum of all numbers
let sum = [1, 2, 3, 4]
let tot = sum.reduce((acc, curr )=>acc + curr, 0)
console.log('sum of all numbers', tot);
//Output: 10

let nums = [3, 7, 1, 9, 4];

let max = nums.reduce((acc, curr) => (acc > curr ? acc : curr));
console.log("Max using reduce:", max);  // Output: 9
let mathMax = Math.max(...nums);
console.log("Max using mathMax:", mathMax);  // Output: 9
let mathMax1 = nums.reduce((acc, curr) => Math.max(acc, curr));
console.log("Max using reduce & Math.max:", mathMax1);  // Output: 9

let min = nums.reduce((acc, curr) => (acc < curr ? acc : curr)); 
console.log("Min:", min);  // Output: 1
let mathMin = Math.min(...nums);
console.log("Min using mathMin:", mathMin);  // Output: 1 
let mathMin1 = nums.reduce((acc, curr) => Math.min(acc, curr));
console.log("Min using reduce & Math.min:", mathMin1);  // Output: 1

/////////////////////////////////////////////////////////////////////////////
const cart = [
  { id: 1, item: "Rice", price: 50, category: "Grains" },
  { id: 2, item: "Milk", price: 30, category: "Dairy" },
  { id: 3, item: "Apple", price: 120, category: "Fruits" },
  { id: 4, item: "Dhal", price: 90, category: "Grains" }
];

const newCart = cart.map((items)=>{
  if(items.item ==="Apple"){
    return {...items, price: 150}
  } else {
    return items
  }
  
})
console.log('newCart',newCart);

///////////////////////////////////////////////////////////////////////////
const players = [
  { name: "Dhoni", runs: 45, type: "WK" },
  { name: "Kohli", runs: 82, type: "Batsman" },
  { name: "Rohit", runs: 15, type: "Batsman" },
  { name: "Jadeja", runs: 30, type: "All-rounder" },
  { name: "Bumrah", runs: 5, type: "Bowler" }
];

const filePlayers = players.filter((file)=>{
  if(file.runs>50){
    return file
  }
})

console.log('filePlayers',filePlayers);

const mapPlayers = players.map((mape)=>{
  return {...mape, runs: mape.runs +10}
})

console.log('mapPlayers',mapPlayers);

const redPlayers = players.reduce((acc,cur)=>{
  const run = cur.runs
  return (acc + run)
},0)
console.log('redPlayers',redPlayers);

const somee = players.some (som=>som.type ==="All-rounder")
console.log('somee',somee);

const finde = players.find (fin=>fin.type === "Bowler");
console.log('finde',finde);

const sorte = players.sort((a,b)=> a.runs - b.runs)

console.log('sorte',sorte);


//////////////////////////////////////////////////Chained

const chainFilter = players.filter(fil => fil.type === "Batsman")
                           .map(na => na.name.toUpperCase());

console.log('chainFilter',chainFilter);

