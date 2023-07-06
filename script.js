let choices = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice () {
    let randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}
console.log(getComputerChoice());

let playerSelection = prompt("Choose rock, paper, or scissors",'');

function play(playerSelection, computerSelection){
    computerSelection = getComputerChoice().toLowerCase();
    playerSelection= playerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if (playerSelection == 'rock' && computerSelection == 'paper') {
        return "You lose! Paper beats rock"}
}

const computerSelection= getComputerChoice();
console.log(play(playerSelection, computerSelection));

