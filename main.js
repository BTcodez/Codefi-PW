// variables for user inputs
const adj1 = document.getElementById("adj1");
const noun = document.getElementById("noun");
const adj2 = document.getElementById("adj2");
const cloth = document.getElementById("cloth");
const bdypt = document.getElementById("bdypt");
const verb = document.getElementById("verb");
const food = document.getElementById("food");

// variable to display mad lib
const madLibDisplay = document.querySelector(".mad-lib");


// Variable for the form
const form = document.querySelector("form");

// Variable for the mad lib story
const story = ``

form.addEventListener("submit", function (event) {
    event.preventDefault();
    madLibDisplay.innerHTML = story
        .replace(`${adj1}`, adj1.value)
        .replace(`${noun}`, adj1.value)
        .replace(`${adj2}`, adj1.value)
        .replace(`${cloth}`, cloth.value)
        .replace(`${bdypt}`, bdypt.value)
        .replace(`${verb}`, verb.value)
        .replace(`${food}`, food.value)
    
})