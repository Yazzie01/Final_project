"use strict";

/* Dark Mode*/
var icon = document.getElementById("dark")
dark.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        icon.src = "images/moon.256x256.png";
    }else{
        icon.src = "images/sun.256x256.png";
    }
}
/* Display section buttons*/

/*Variable categorizing section, focuses on object mapping by classifying the title, description, and image */
let activeTitle = document.querySelector("#activePoster h3");
let activeP = document.querySelector("#activePoster p");
let activeImg = document.querySelector("#activePoster img");

/*Targets the button control items in order to eneable user interaction */
let buttons = document.querySelectorAll("#product-control li button");

/*Mapping varibles for each poster output to display on the HTML through the DOM */
let p1 = {
    title: "All to Pieces",
    dsc: "An intricate poster with soft pastels from baby pink to mint green with soft blues and white oil like background. The main center piece is the renaissance marble statue fragmented into pieces with one hand raised into the air but head turned downward", 
    imgsrc: "images/Allto_Pieces.png"
} 
let p2 = {
    title: "Floating Tree",
    dsc: "From the tranquil forest setting with the grand island centered in the middle with a beautifully flowing waterfall descending into the valley below. Accompanying the floating island is the gorgeous red moon in the background to add a little bit more mystery and wonder to the poster.", 
    imgsrc: "images/Floating_Tree.png"
}
let p3 = {
    title: "Guided Lines",
    dsc: "A city landscape based at the bottom of an organized skyline of guided lines coming upward from behind the planed like planets. Each line placed closely together in ways that lead the eye along the horizon with three circles with the largest one having clouds inside Faint but there...",
    imgsrc: "images/Guided_lines.png"
}

let p4 = {
    title: "Kind Hearted",
    dsc: "For kind heart this is a misplaced assumption that it represents a weakness. When in fact being kind is the opposite of weakness. Enjoy a multi colored mix of added modern touch to add to an existing renaissance painting of those who have fallen from the sky..",
    imgsrc: "images/Kind_heart.png"
}

let p5 = {
    title: "Where is My Mind",
    dsc: "For a more abstract but gothic look, how about this pitch black background with a skull at the front? Because lets be real, we all enjoy a little bit of darkness from time to time. It gives us time to think about where we misplace our heads this time!",
    imgsrc: "images/Where_Is_My_Mind.png"
}

/*On load the focus is on the p1 or Poster one for display*/
let activePoster = p1

/*Looks for active object to place class on active object*/

function updateClass(){
for(let button of buttons){
    if(activePoster.title.toLowerCase().trim() == button.textContent.toLowerCase().trim()){
        button.classList.add("currentProductBtn");
    }else{
        button.classList.remove("currentProductBtn");
    }
}} 
updateClass()

/*Alternates between poster selection when button is clicked. Each connect to the variables above in order to display information
to the DOM through the event listener */
document.getElementById("allToPieces").addEventListener("click", function(){
    activePoster = p1
    activeTitle.innerHTML = activePoster.title;
    activeP.innerHTML = activePoster.dsc;
    activeImg.src = activePoster.imgsrc;
    updateClass()
})

document.getElementById("floatingTree").addEventListener("click", function(){
    activePoster = p2
    activeTitle.innerHTML = activePoster.title;
    activeP.innerHTML = activePoster.dsc;
    activeImg.src = activePoster.imgsrc;
    updateClass()
})

document.getElementById("guidedLines").addEventListener("click", function(){
    activePoster = p3
    activeTitle.innerHTML = activePoster.title;
    activeP.innerHTML = activePoster.dsc;
    activeImg.src = activePoster.imgsrc;
    updateClass()
})

document.getElementById("kindHearted").addEventListener("click", function(){
    activePoster = p4
    activeTitle.innerHTML = activePoster.title;
    activeP.innerHTML = activePoster.dsc;
    activeImg.src = activePoster.imgsrc;
    updateClass()
})

document.getElementById("whereismyMind").addEventListener("click", function(){
    activePoster = p5
    activeTitle.innerHTML = activePoster.title;
    activeP.innerHTML = activePoster.dsc;
    activeImg.src = activePoster.imgsrc;
    updateClass()
})

activeTitle.innerHTML = activePoster.title;
activeP.innerHTML = activePoster.dsc;
activeImg.src = activePoster.imgsrc;


/*Guessing Game*/

let button = document.getElementById("gamePlay"); /*Calls the button from the HTML page */

function guessingGame(){
    /*Variables connecting to the HTML elements through id selection*/
    let inputDisplay = document.getElementById("userGuess");
    let gameMessage = document.getElementById("gameMsg");
    let randNumFrom0To1 = Math.random()
    let randNumberToTen = Math.floor(randNumFrom0To1 *10)+1;
    let userGuess = inputDisplay.value;

    /*Game function layout. Starting form user guess and calculated between 1 - 10*/
    if(parseInt(userGuess) > 10 || parseInt(userGuess) < 1){
        alert("Please enter a number between 1 and 10"); 
    }else{
        if (randNumberToTen === parseInt(userGuess)){
            gameMessage.innerHTML = `Congrats you got it right! Your answer was ${userGuess} and the correct answer was ${randNumberToTen}`
        }else{
            gameMessage.innerHTML = `Sorry, about that! You guessed ${userGuess} and the correct answer was ${randNumberToTen}`
        } 
}
/*Displayed in the console in order to test responses*/
    console.log(userGuess);
    console.log(randNumberToTen);
}
/*Listens to the event of a click when value is entered into the input*/
button.addEventListener("click", function(e){
    e.preventDefault();
    guessingGame();
});

/* Form Validation*/

function validateForm(event){
    event.preventDefault();
}

let fullName = document.getElementById("fName");
let phone = document.getElementById("number");
let email = document.getElementById("email");
let fieldset = document.querySelector("fieldset");
let prefPhone = document.getElementById("prefPhone");
let prefEmail = document.getElementById("prefEmail");
let comments = document.getElementById("comments");
let submit = document.getElementById("mySubmit")

let e = document.getElementById("");


/*Regex for input validation*/
let fNameRegex = /^(?=.+\d)(?=.+[a-zA-Z]).{6,}$/g;
let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/;

/*Thank you Message pop-up*/

