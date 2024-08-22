let array =[22,52,11,6,49,59,1];


let map = array.map((value)=>{
    return value >42
})
console.log('Map value',map)



const numbers = [1, 11, 22, 44];
const newArr = numbers.map(myFunction);


function myFunction(num) {
    return num * 10;
  }

  console.log('Array map fun',newArr)
