//initialization, condition, increment/decrement step should be in organized way so its more meaniful than while
//i want to print 1 to 10 using

//FOR LOOP
// for(let j=0; j<=3; j++){
//   console.log(j);
// }


let obj = {
    name: "heva",
    age: 3,
    hobbies: "playing"
  }
  // // //FOR IN
  for(let IN in obj)
  {
    //console.log(obj.name);
    // console.log(prop + ":" ,  prop);//properties
    console.log(IN, obj[IN]);//value of properties
  
  }
  //FOR OFF
  for(let OFF of Object.keys(obj))
  {
    //console.log(obj.name);
    // console.log('prop', prop);//properties
    console.log(OFF, obj[OFF]);//value of properties
  }
  
  
  
  
  //  let arr =["apple", "ball", "cat"];
  
  //FOR
  
  
  
  //FOR OFF
  // for(let prop of arr){///its simple
  //   //  console.log('prop', prop);//value in properties
  //   console.log(arr + ":", prop[arr]);//value in properties
  //   }
  
  // //FOR IN
  
  // for(let prop in arr){///its simple
  //     // console.log('prop', prop);//index in properties
  //    console.log(arr + ":", prop[arr]);//value in properties
  //   }
  
  
  let object = {
    name : "kumar",
    id : 123,
    age : 32,
    isAdmin: true 
  }
  
  for(let backtick in object){
  
    console.log(`${backtick} ------ ${object[backtick]}`);
    
  }
  
  let fruits = ["Apple","Banana","Plum"];
  // for(let i = 0 ; i < fruits.length;i++){
  
  // }
  
  for(let fruit of fruits){
    console.log(fruit);
  }
  
  //for EACH
  