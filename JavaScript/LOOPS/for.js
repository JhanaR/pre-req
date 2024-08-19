//initialization, condition, increment/decrement are in organized way so its more meaniful than while
//i want to print 1 to 10 using

// for(let j=0; j<=3; j++){
//   console.log(j);
// }

//for in loop used for object.
let obj = {
  name: "heva",
  age: 3,
  hobbies: "playing"
}

for(let prop in obj)
{
  //console.log(obj.name);
  console.log(prop, obj[prop]);
}


//for of loop used for arrays.
let arr =["1", "2", "3"];

// for(let k=0; k<arr.length; k++)// first try
// {
//   console.log(k);
// }

for(let prop of arr){///its simple
 console.log(arr);
}
