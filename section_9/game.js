// create secret number
var secretNumber = 4;

// ask user for their guess

var userGuess = prompt("Guess a number!");
var guess = Number(userGuess);

// check if guess is right 
if(guess === secretNumber){
	alert("YOU GUESSED IT RIGHT!");
}
// check if guess is higher 
else if(guess > secretNumber){
	alert("Too high. Guess again!");
}
// check if guess is lower
else {
	alert("Too low. Guess again!");
}