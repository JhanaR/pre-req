//initialization, condition, increment/decrement step should be in organized way so its more meaniful than while
//i want to print 1 to 10 using

let colors = ["red", "blue", "green"];

for (let i in colors) { console.log(i); }    // 0,1,2  → keys (indexes)
for (let c of colors) { console.log(c); }    // red,blue,green → values


for(let j=0; j<=3; j++){
  console.log('j',j);
}

let nums = [10, 1, 5, 22, 20, 30, 40];
for (let n of nums) {
  if (n === 30) break;
  console.log(n);
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

let data = {
  name: "Ravi",
  skills: ["JS", "React", "Node"],
  details: { city: "Chennai", exp: 5 }
};


for (let key in data) { //used for object properties, loops through keys
  console.log("Key:", key);
//Key: name 
//Key: skills 
//Key: details 
  console.log("Value:", data[key]); // to fetch values need to access data[key]
//Val: Ravi 
//Val: [ 'JS', 'React', 'Node' ] 
//Val: { city: 'Chennai', exp: 5 } 
}
  //OR
  for (let val of Object.values(data)) { //object is not iterable
  console.log("Val:", val);
//Val: Ravi 
//Val: [ 'JS', 'React', 'Node' ] 
//Val: { city: 'Chennai', exp: 5 } 
} 
console.log("----------");

