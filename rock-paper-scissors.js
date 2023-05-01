/* these come in handy towards the end, but need to be assigned outside of and before the loop */
let playerWinCount = 0;
let computerWinCount = 0;
let tieCount = 0;

for (i = 0; i < 5; i++){

/* to play first to five wins (instead of just five rounds), comment out the above for loop and uncomment the below while loop */
//while (playerWinCount < 5 && computerWinCount < 5){

/* get computer choice and assign numeric value */
let getComputerChoice = (Math.random() <= (1/3))? 1: (Math.random() <= (2/3))? 2: (Math.random() <= 1)? 3: "error";

console.log(getComputerChoice)

/* prompt user for choice and assign numeric value */
let playerSelection = prompt("Rock, Paper, or Scissors?")

if (playerSelection == null){alert("Fine. I didn't want to play anyway."); break} // displays exit message and breaks loop if player selects cancel

let playerChoice = (playerSelection.toLowerCase() == "rock")? 1: (playerSelection.toLowerCase() == "paper")? 2: (playerSelection.toLowerCase() == "scissors")? 3: "error";

console.log(playerSelection)
console.log(playerChoice)

/* perform function to determine the winner */
let whoWon = (playerChoice - getComputerChoice) 

/* display win/lose message and tally wins/losses */
let computerSelection = (getComputerChoice == 1)? "rock": (getComputerChoice == 2)? "paper": (getComputerChoice == 3)? "scissors": "error";

let message = (whoWon == 1 || whoWon == -2)? `You win! ${playerSelection} beats ${computerSelection}!`: (whoWon == 0)? `It's a tie!`: (whoWon == -1 || whoWon == 2)? `You lose! ${computerSelection} beats ${playerSelection}!`: "error";

(whoWon == 1 || whoWon == -2)? playerWinCount++ : (whoWon == 0)? tieCount++ : (whoWon == -1 || whoWon == 2)? computerWinCount++ : "error";

alert(message);

console.log(computerSelection)
console.log(message)
console.log(playerWinCount)
console.log(tieCount)
console.log(computerWinCount)

}

/* tally total wins/losses and display winner */

let gameMessage = (playerWinCount > computerWinCount)? `You win! Final score: ${playerWinCount} to ${computerWinCount}` : (computerWinCount > playerWinCount)? `You lose! Final score: ${playerWinCount} to ${computerWinCount}` : `It's a tie! Final score: ${playerWinCount} to ${computerWinCount}`;

(playerWinCount == 0 && computerWinCount == 0 && tieCount !== 5)? "": alert(gameMessage);