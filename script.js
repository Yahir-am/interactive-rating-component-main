const buttons = document.querySelectorAll("li");
const submit = document.querySelector("button");
const rateContainer = document.querySelector(".rate__container");
const thanksContainer = document.querySelector(".thanks__container");
const rating = document.querySelector(".rating");
const error = document.querySelector(".error");
let value = 0;

buttons.forEach((btn) => {
    btn.addEventListener("click", select);
});

submit.addEventListener("click", () => {
    if(value == 0){
        deployError();
    }else{
        cardInteraction();
    }
});

function select(e) {
    // Remove active class from all buttons
    buttons.forEach((btn) => btn.classList.remove("active"));
    // Add active class to the clicked button
    e.target.classList.add("active");
    // Get the clicked button's value and display it
    value = e.target.innerHTML;
    rating.innerHTML = `${value} out of 5`;
    deployError();

}

function cardInteraction(){
    rateContainer.classList.add("hide");
    thanksContainer.classList.remove("hide");
}

function deployError(){
    if(value == 0){
        error.style.display = "block";
    }else{
        error.style.display = "none";
    }
}


