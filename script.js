const body = document.querySelector("body");
const changeColorCard = document.querySelector(".container > div");

const input = document.getElementById("userinput");
const submitBtn = document.getElementById("submit");

// Variabal for storing color
let color = "";

// Function for taking an input
function getInput(event){
    color = event.target.value;
    console.log(color);
}

function changeColor(){
    body.style.backgroundColor = color;
}

const resetColor = () =>{
    body.style.backgroundColor = "#c5d89d";
}


input.addEventListener('input', getInput);
submitBtn.addEventListener('click', resetColor);
changeColorCard.addEventListener('click', changeColor);

submitBtn.innerText = "Reset";

