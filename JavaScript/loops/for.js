//initialization, condition, increment/decrement step should be in organized way so its more meaniful than while
//i want to print 1 to 10 using

//FOR LOOP
for(let j=0; j<=3; j++){
  console.log('j',j);
}


let obj = {
    name: "heva",
    age: 3,
    hobbies: "playing"
  }
  // // //FOR IN
  for(let prop in obj)
  {
    //console.log(obj.name);
    // console.log(prop + ":" ,  prop);//properties
    console.log('prop', obj[prop]);//value of properties
  
  }
  //FOR OFF
  for(let kop of Object.keys(obj))
  {
    //console.log(obj.name);
    // console.log('prop', prop);//properties
    console.log('kop', obj[kop]);//value of properties
  }
  
  
  
  
  let arr =["apple", "ball", "cat"];
  
  //FOR OFF->object
  for(let dop=0; dop<arr.length; dop++){///its simple
    console.log('arrOFdop' + ":", arr[dop]);//values avail in properties
    console.log('dop' + ":", dop);//index in properties
    }
  
  //FOR IN-->loop and its used for arrays
  
  for(let fop in arr){///its simple    
     console.log('arrINfop' + ":", arr[fop]);//values avail in properties
     console.log('fop', fop);//index in properties
    }
  
  
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
  