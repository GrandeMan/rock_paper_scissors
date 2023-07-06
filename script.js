"use strict"

function restart() {
    let playerSelection = prompt("Choose rock, paper, or scissors",'').toLowerCase();

    while (!isValidChoice(playerSelection)) {
        playerSelection = prompt('Please choose rock, paper, or scissors', '').toLowerCase();
    }

    let computerSelection= getComputerChoice().toLowerCase();
    
    playRound(playerSelection, computerSelection);

    // console.log (computerSelection);
    // console.log(playRound(playerSelection, computerSelection));
}

function isValidChoice(choice) {
    return choice === 'rock' || choice === 'paper' || choice === 'scissors';
}

let choices = ['rock', 'paper', 'scissors'];

function getComputerChoice () {
    let randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

let playerSelection = restart();

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

