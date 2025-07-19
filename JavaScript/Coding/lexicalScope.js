let x = "global";

function showX() {
  console.log(x); //global
}

function callShowX() {
  let x = "local";
   console.log(x);// local
  showX(); 
}

//showX();
callShowX(); // prints "global"
