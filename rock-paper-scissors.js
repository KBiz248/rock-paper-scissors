let playerWinCount = 0;
let computerWinCount = 0;
let tieCount = 0;

for (i = 0; i < 5; i++){

/* get computer choice and assign numeric value */
let getComputerChoice = (Math.random() <= (1/3))? 1: (Math.random() <= (2/3))? 2: (Math.random() <= 1)? 3: "error";

console.log(getComputerChoice)

/* prompt user for choice and assign numeric value */
let playerSelection = prompt("Rock, Paper, or Scissors?")
let playerChoice = (playerSelection.toLowerCase() == "rock")? 1: (playerSelection.toLowerCase() == "paper")? 2: (playerSelection.toLowerCase() == "scissors")? 3: "error";

console.log(playerSelection)
console.log(playerChoice)

/* perform function to determine the winner */
let computerSelection = (getComputerChoice == 1)? "rock": (getComputerChoice == 2)? "paper": (getComputerChoice == 3)? "scissors": "error";
let whoWon = (playerChoice - getComputerChoice)

let message = (whoWon == 1 || whoWon == -2)? `You win! ${playerSelection} beats ${computerSelection}!`: (whoWon == 0)? `It's a tie!`: (whoWon == -1 || whoWon == 2)? `You lose! ${computerSelection} beats ${playerSelection}!`: "error";

(whoWon == 1 || whoWon == -2)? playerWinCount++ : (whoWon == 0)? tieCount++ : (whoWon == -1 || whoWon == 2)? computerWinCount++ : "error";

console.log(computerSelection)
console.log(message)
console.log(playerWinCount)
console.log(tieCount)
console.log(computerWinCount)


/* display win/lose message and tally wins/losses */
alert(message);

}

/* tally total wins/losses and display winner */