/* get computer choice and assign numeric value */
let getComputerChoice = (Math.random() <= (1/3))? 1: (Math.random() <= (2/3))? 2: (Math.random() <= 1)? 3: "error";
console.log(getComputerChoice)
/* prompt user for choice and assign numeric value */
let playerSelection = prompt("Rock, Paper, or Scissors?")
let userChoice = (playerSelection.toLowerCase() == "rock")? 1: (playerSelection.toLowerCase() == "paper")? 2: (playerSelection.toLowerCase() == "scissors")? 3: "Try again";
console.log(playerSelection)
console.log(userChoice)
/* perform function to determine the winner */

/* display win/lose message and tally wins/losses */