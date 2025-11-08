function changeText() {
  document.getElementById("parah1").innerHTML = "Now Updated";
}

/* document.getElementById('change').onclick = function (){
    console.log("Trying to change text");
    changeText();
} */

    document.getElementById('change').addEventListener('click', function(){
        changeText();
    })
