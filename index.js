const prompt = require("prompt-sync");
// to create the comupter choice
function getComputerChoice(){
    let choices = ["rock", "paper", "scissors"];
    let choice = Math.floor(Math.random() * choices.length);
    console.log("Computer picked" + " " + choices[choice])
    return choices[choice]
}
function round(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    if(!["rock", "paper", "scissors"].includes(playerSelection)) {
        return "invalid input.Please choose rock, paper, scissors.";
    }
    
}
