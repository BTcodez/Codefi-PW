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
const story = `My friends and I started a secret club! We meet every day by the <b>${adj1}</b> <b>${noun}</b>. Our club has some very special rules. If you want to join you have to wear a <b>${adj2}</b> <b>${cloth}</b> on your <b>${bdypt}</b>. You are not allowed to <b>${verb}</b> during meetings, and you can only eat <b>${food}</b> for your meals. If you are interested in joining, let me know!`;

form.addEventListener ("submit", function (event) {
    event.preventDefault();

    if(adj1.value == "") {
        alert(`${adj1.name} cannot be blank`);
        adj1.focus(); 
}   else if (noun.value == "") {
        alert(`${noun.name} cannot be blank`);
        noun.focus(); 
}   else if (adj2.value == "") {
        alert(`${adj2.name} cannot be blank`);
        adj2.focus(); 
}   else if (cloth.value == "") {
        alert(`${cloth.name} cannot be blank`);
        cloth.focus(); 
}   else if (bdypt.value == "") {
        alert(`${bdypt.name} cannot be blank`);
        bdypt.focus(); 
}   else if (verb.value == "") {
        alert(`${verb.name} cannot be blank`);
        verb.focus(); 
}   else if (food.value == "") {
        alert(`${food.name} cannot be blank`);
        food.focus(); 
}       else {
        madLibStoryDisplay();
}

});


function madLibStoryDisplay () {
    madLibDisplay.innerHTML = story
        .replace(`${adj1}`, adj1.value)
        .replace(`${noun}`, noun.value)
        .replace(`${adj2}`, adj2.value)
        .replace(`${cloth}`, cloth.value)
        .replace(`${bdypt}`, bdypt.value)
        .replace(`${verb}`, verb.value)
        .replace(`${food}`, food.value);
}