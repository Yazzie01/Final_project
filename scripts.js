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

