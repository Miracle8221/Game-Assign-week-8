const prompt = require("prompt-sync");
// to create the comupter choice
function getComputerChoice(){
    let choices = ["rock", "paper", "scissors"];
    let choice = Math.floor(Math.random() * choices.length);
    console.log("Computer picked" + " " + choices[choice])
    return choices[choice]
}
// to create round for the playerSelection and computerSelection
function round(playerSelection, computerSelection){
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
function game() {
    let playerScore = 0;
    let computerScore = 0;
}  
