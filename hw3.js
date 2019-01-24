
// variables 
let wins = 0;
let loss = 0;
let guesses = 9;
let guessed;

//array for guesses
let alpha = "abcdefghijklmnopqrstuvwxyz";

//math for randomLetter
//console.log(randomLetter)
guess();
//get user input
function guess() {
    document.onkeyup = function(event) {
        let randomLetter = alpha[Math.floor(Math.random() * 26)];
        console.log("The number is now " + randomLetter);

        userGuess = event.key
        console.log("Your Guess " + userGuess);
        if (userGuess === randomLetter) {
            wins++;
            $("#wins").text("Wins!: " + wins);
            guesses = 9;
        }
        else {guesses-- };
        $("#guessed").append(userGuess);
        if (guesses === 0) {
            loss++;
            $("#loss").text("Loss!: " + loss);
            guesses = 9;
        }
        $("#guesslft").text("Guesses Left!: " + guesses);
    };
};
