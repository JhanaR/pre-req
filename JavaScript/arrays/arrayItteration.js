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


const numbers = [1, 11, 22, 44];
const newArr = numbers.map(myFunction);

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