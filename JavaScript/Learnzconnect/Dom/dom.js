

/* document.getElementById('change').onclick = function (){
    console.log("Trying to change text");
    changeText();
} */

document.getElementById('change').addEventListener('click', function(){
    changeText();
})
function changeText() {
    // debugger

  document.getElementById("parah1").innerHTML = "Now Updated";
}
document.getElementById("parah2").innerHTML = "fetched";