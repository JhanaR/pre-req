document.getElementById('joinbtn').addEventListener('click', function(){
 joinText();
console.log("work");
})

function joinText(){
    //document.getElementById('result').innerHTML = document.getElementById('firstName').value + document.getElementById('lastName').value
    let firstName = document.getElementById('firstName').value 
    let lastName = document.getElementById('lastName').value
    // document.getElementById('result').innerHTML = firstName + lastName;
     document.getElementById('result').innerHTML = `Using TemplateLiterals ${firstName + "  " + lastName}`;
     document.getElementById('result1').innerHTML = `Using TemplateLiterals ${firstName} ${lastName}`;
}