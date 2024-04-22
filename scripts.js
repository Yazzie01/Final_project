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

// let clickBtn = document.querySelector("#click button");
// let clickP = document.querySelector("#click p");

// // attach and write a handler for clicks on the button
// clickBtn.addEventListener("click", function(){
//     // hide/show the paragraph in this section using the 
//    // hidden class
//   clickP.classList.toggle("hidden");
// });

let activeTitle = document.querySelector("#activePoster h3");
let activeP = document.querySelector("#activePoster p");
let activeImg = document.querySelector("#activePoster img");

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
    title: "Grided Lines",
    dsc: "A city landscape based at the bottom of an organized skyline of guided lines coming upward from behind the planed like planets. Each line placed closely together in ways that lead the eye along the horizon with three circles with the largest one having clouds inside Faint but there...",
    imgsrc: "images/Guided_lines.png"
}

let activePoster = p1

document.getElementById("floatingTree").addEventListener("click", function(){
    activePoster = p2
    activeTitle.innerHTML = activePoster.title;
    activeP.innerHTML = activePoster.dsc;
    activeImg.src = activePoster.imgsrc;
})

document.getElementById("guidedLines").addEventListener("click", function(){
    activePoster = p3
    activeTitle.innerHTML = activePoster.title;
    activeP.innerHTML = activePoster.dsc;
    activeImg.src = activePoster.imgsrc;
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

/*Test */

/*Thank you Message pop-up*/

