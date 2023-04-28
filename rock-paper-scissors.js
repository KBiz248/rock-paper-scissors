/* get computer choice and assign numeric value */
let getComputerChoice = (Math.random() <= (1/3))? 1: (Math.random() <= (2/3))? 2: (Math.random() <= 1)? 3: "error";

console.log(getComputerChoice)

/* prompt user for choice and assign numeric value */
let playerSelection = prompt("Rock, Paper, or Scissors?")
let playerChoice = (playerSelection.toLowerCase() == "rock")? 1: (playerSelection.toLowerCase() == "paper")? 2: (playerSelection.toLowerCase() == "scissors")? 3: "Try again";

console.log(playerSelection)
console.log(playerChoice)

/* perform function to determine the winner */
let computerSelection = (getComputerChoice == 1)? "rock": (getComputerChoice == 2)? "paper": (getComputerChoice == 3)? "scissors": "error";
let whoWon = (playerChoice - getComputerChoice)

let message = (whoWon == 1 || whoWon == -2)? `You win! ${playerSelection} beats ${computerSelection}!`: (whoWon == 0)? `It's a tie!`: (whoWon == -1 || whoWon == 2)? `You lose! ${computerSelection} beats ${playerSelection}!`: "error";


console.log(computerSelection)
console.log(message)

/* display win/lose message and tally wins/losses */
alert(message);