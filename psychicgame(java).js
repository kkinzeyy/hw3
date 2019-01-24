//variables for game
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var yourGuess = [];
var computerChoice;

//to initiate the game
theGame();

function theGame() {
  //letter randomizer
  var alphabet = "abcdefghijklmnopqrstuvwxyz";
  var randomLetter = alphabet[Math.floor(Math.random() * 26)];
  var computerChoice = randomLetter;

  console.log(computerChoice);
  checkIfCorrect();

  function checkIfCorrect() {
    document.onkeyup = function(event) {
      //turns it into a lowercase string.
      var userChoice = String.fromCharCode(event.keyCode).toLowerCase();

      //the alphabet. a = unicode 65, z = unicode 90.
      if (event.keyCode < 65 || event.keyCode > 90) {
        alert("Invalid Entry");
      } else if (yourGuess.indexOf(userChoice) >= 0) {
        alert("You already guessed that!");

        //if the user guesses correctly
      } else if (userChoice === computerChoice) {
        {
          alert("You win!");
        }
        wins = wins + 1;
        document.getElementById("your-wins").innerHTML = wins;

        resetGame();

        //if the user guesses wrong
      } else {
        guessesLeft = guessesLeft - 1;

        document.getElementById("guesses-left").innerHTML = guessesLeft;
        yourGuess.push(userChoice);

        //append choice to array yourGuess

        console.log("Your guesses so far: " + yourGuess);

        document.getElementById("guesses").innerHTML = yourGuess;

        console.log("Guesses Left: " + guessesLeft);
        noGuessesLeft();
      }
    };
  }
  //reset
  function resetGame() {
    guessesLeft = 9;
    yourGuess = [];
    document.getElementById("guesses-left").innerHTML = guessesLeft;
    document.getElementById("guesses").innerHTML = yourGuess;
    theGame();
  }

  function noGuessesLeft() {
    if (guessesLeft === 0) {
      alert("YOU LOSE!");
      losses = losses + 1;
      document.getElementById("guesses-left").innerHTML = losses;

      resetGame();
    } else {
      console.log("Incorrect. Try again");
      checkIfCorrect();
    }
  }
}
