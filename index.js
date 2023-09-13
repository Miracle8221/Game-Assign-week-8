const prompt = require("prompt-sync");
// to create the comupter choice
function getComputerChoice(){
    let choices = ["rock", "paper", "scissors"];
    let choice = Math.floor(Math.random() * choices.length);
    console.log("Computer picked" + " " + choices[choice])
    return choices[choice]
}
// to create round for the playerSelection and computerSelection
function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    if(!["rock", "paper", "scissors"].includes(playerSelection)) {
        return "invalid input.Please choose rock, paper, scissors.";
    }
    if (playerSelection === computerSelection) {
        return "It's a tie!";
      }
      if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "rock")
      ) {
        return `You win! ${playerSelection} beats ${computerSelection}.`;
      } else {
        return `You lose! ${computerSelection} beats ${playerSelection}.`;
      }
}
// to create game for playerSelection and computerSelection
function game(){
    let playerScore = 0;
    let computerScore = 0;
    // add a for loop to make the game play 
    for (let round = 1; round <= 5; round++) {
        const playerSelection = prompt(`Round ${round}: Enter your choice (rock, paper, or scissors):`);
        const computerSelection = getComputerChoice();
        const result = playRound(playerSelection, computerSelection);
        console.log(result);
        if (result.includes("win")) {
            playerScore++;
          } else if (result.includes("lose")) {
            computerScore++;
          }
        }
        console.log("Game over!");
        console.log(`Player Score: ${playerScore}`);
        console.log(`Computer Score: ${computerScore}`);
        // to check who win the game
        if (playerScore > computerScore) {
            console.log("Congratulations! You win the game!");
          } else if (computerScore > playerScore) {
            console.log("Sorry, you lose the game.");
          } else {
            console.log("It's a tie game!");
          }
    } 
    game(); 
        
    