var button = document.querySelector("#btn")
var bulb = document.querySelector("#bulb")
var flag = 0;
button.addEventListener("click", function() {
    if (flag === 0) {
        bulb.style.backgroundColor = "yellow";
        flag = 1
        button.innerHTML = "OFF"

    } else {
        bulb.style.backgroundColor = "white";
        flag = 0
        button.innerHTML = "ON"


    }
})