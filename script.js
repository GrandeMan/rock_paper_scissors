let choices = ['rock', 'paper', 'scissors'];

function getComputerChoice () {
    let randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection){
    if (playerSelection == computerSelection) {
        return "It's a tie!";
    } else if (playerSelection == 'rock' && computerSelection == 'paper') {
        return "You lose! Paper beats rock";
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        return "You lose! Scissors beats paper";
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        return "You lose! Rock beats scissors";
    } else return "You win!";
}

let playerSelection = prompt("Choose rock, paper, or scissors",'').toLowerCase();
let computerSelection= getComputerChoice().toLowerCase();

console.log(computerSelection);
console.log(playerSelection);
console.log(playRound(playerSelection, computerSelection));