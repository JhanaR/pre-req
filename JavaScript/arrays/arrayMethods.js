//Requirement:1 Need to form new array by removing last 2 values from current 
//using SPLICE

const transpor =['car','bus','van','jeep','bike','scooter']

const splice =transpor.splice(2,2);//Removal --- splice(from which index, how many delete)

console.log('splice',splice);
//output ['van','jeep']

//Requirement:1 Need to form new array by removing 2 values from current array
//using SLICE
const vehicles =['car','bus','van','jeep','bike','scooter']

const slice =vehicles.slice(2,3);//Removal --- splice(from which index, how many elements)

console.log('slice',slice);
//output ['car','bus']

//using CONCATE

const number = [1,2,3,4]


//joining an array
const join = transpor.concat(vehicles,number);// in concat(we can define n number of arrays separated with comma

console.log('JOIN', join);

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
    //return val.id == 2;
    return val.title == "van";
  })

  console.log('find',find)

    //OUTPUT: object will return

    //FILTER need to extract few data from the current array

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

let array =[22,52,11,6,49,59,1];//using this array i need to form another array.


let map = array.map((value)=>{
    return value >42
})
console.log('Map value',map)
//output: [false, true, false, false, true, true, false]


const numberss = [1, 11, 22, 44];
const newArr = numberss.map(myFunction);

function myFunction(num) {
    return num * 10;
  }

  console.log('Array map fun',newArr)
  //output [10, 110, 220, 440]

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

// Array find()
// Array findIndex()
// Array findLast()
// Array findLastIndex()
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
console.log(firstArray);

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
    console.log(element);
   })
}
//doSomething();


var numbers = [10,20,30,40,50,60];

// add + 2 to all 

// numbers.map(function(num){
//   num = num+2;
// });
// var result = numbers.map((num) => num+2);
// console.log(result);

// var result1= numbers.reduce((a,b) => a+b);
// console.log(result1);

// var result2 = numbers.filter(num => num>35);
// console.log(result2);

//Adding elements 1,2,3 from 0 index 
//= 1 2 3 10 20 30 40 50 

numbers.splice(0,0,1,2,3);

console.log(numbers);

// 30 40  
numbers.splice(5,2);
console.log(numbers);

        let a = 10;
		let b = true;
		let c = 'Apple';
		let array1 = [a,b,c] // array packing 
		array1[0];
		//unpacking 
		var x , y , z;
		[x,y,z]= array1;
        console.log(x);
        console.log(y);
        console.log(z);
        console.log(array1);

        let Array =["apple","ball","cat","dog",[1,2]];

        //console.log(Array);
        
        //console.log(Array.length);
        
        console.log(Array[4][0]);
        

        // Array sort()
// Array reverse()
// Array toSorted()
// Array toReversed()
// Sorting Objects

// Numeric Sort
// Random Sort
// Math.min()
// Math.max()
// Home made Min()
// Home made Max()