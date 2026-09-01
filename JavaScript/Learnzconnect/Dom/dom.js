

/* document.getElementById('change').onclick = function (){
    console.log("Trying to change text");
    changeText();
} */

 
 const text = document.getElementById("parah1").innerHTML;
 const textlength = text.length;
 document.getElementById('p1L').innerHTML = textlength;
 document.getElementById("p1Changed").innerHTML = "First Line Changed";

document.getElementById('change').addEventListener('click', function(){
    changeText();
})
function changeText() {
    // debugger
    console.log("changeText executed");

  document.getElementById("parah1").innerHTML = "First Line now updated";
}
document.getElementById("parah2").innerHTML = "fetched";