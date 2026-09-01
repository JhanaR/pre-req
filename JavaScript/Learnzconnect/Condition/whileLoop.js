let count = 0;

document.getElementById("inc").addEventListener("click",function(){
    count++;
    updateValue();
})

document.getElementById("dec").addEventListener("click",function(){
    count--;
    updateValue();
})


function updateValue(){
    document.getElementById("result").innerHTML = `Updated result ${count}`;
}

