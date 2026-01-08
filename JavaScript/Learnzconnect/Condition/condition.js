/*let isRaining = true;
//debugger

if(isRaining){
    console.log("take umbrella")
} else{
    console.log("safe to go without umbrella")
}

let time = "12PM"

if(time == "12PM"){
    console.log("Time Exactly matched")
} else{
    console.log("Its not the time you looking up")
}

//&& both true 
//|| any 1 is true


let weatherValue = "summer";
// debugger;

if(weatherValue == "summer" || weatherValue == "winter" ){
    console.log("take umbrella it may be hot or rainy");
} else if(weatherValue == "Autumn"){
    console.log("Sweep the leaves away its autumn");
} else {
    console.log("Always prefer sweater");
}*/

document.getElementById('joinbtn').addEventListener('click', function(){
 joinText();
console.log("clicked join button");
})

function joinText(){
     let first = document.getElementById('first').value;
     console.log(first);
     let last = document.getElementById('last').value
      console.log(last);

if(first && last){
    console.log("i am in if")
    document.getElementById('result').innerHTML = `Added ${first} and ${last}`
} else {
    console.log("i am in else")
    document.getElementById('result').innerHTML = `Not provided value for both first and last`
}
}

