let name = "krishna"; //global scope 

function greet(firstName){
    let lastName = "Kumar";
    // console.log(firstName);           
    return `Hello ${firstName}`;  //local/functional scope
}

//console.log('Hello ',firstName)

const str = greet(name);
 // Hello krishna
console.log(lastName);


console.log(str); 