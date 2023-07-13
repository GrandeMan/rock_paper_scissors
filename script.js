"use strict";
let playerScore = 0;
let computerScore = 0;

function game() {
    let playerSelection;

    function getPlayerChoice() {
        let buttons = document.getElementsByClassName('buttons')[0];

        buttons.addEventListener('click', function(event) {
            let clickedElement = event.target;
            let choices = ['rock', 'paper', 'scissors'];

            if (clickedElement.classList.contains('rock')) {
                playerSelection = choices[0];
            } else if (clickedElement.classList.contains('paper')) {
                playerSelection = choices[1];
            } else if (clickedElement.classList.contains('scissors')) {
                playerSelection = choices[2];
            }

            let computerSelection = getComputerChoice().toLowerCase();

            playRound(playerSelection, computerSelection);

            let result = playRound(playerSelection, computerSelection);

            const body = document.querySelector('body');

            let results = document.createElement('div');
            let score = document.createElement('div');

            if (result === "It's a tie!") {
                results.textContent = "It's a tie! You both chose " + playerSelection + ".";
            } else if (result.startsWith("You lose")) {
                computerScore++;
                results.textContent = result;
            } else {
                playerScore++;
                results.textContent = result;
            }

            results.setAttribute('style', 'font-size: 24px; font-weight: 600;');
            score.textContent = `Player Score: ${playerScore} | Computer Score: ${computerScore}`;
            score.setAttribute('style', 'font-weight: 200; border: inset 2px black;');

            body.append(results, score);

            if (playerScore === 5 || computerScore === 5) {
                endGame();
            }
        });
    }

    function endGame() {
        if (playerScore === 5) {
            alert("You Win!");
        } else if (computerScore === 5) {
            alert("You Lose!");
        }

        restartGame();
    }

    function restartGame() {
        let restart = confirm('Would you like to play again?');
        if (restart === true) {
            playerScore = 0;
            computerScore = 0;
            location.reload();
        } else {
            alert("Thanks for playing!");
        }
    }

    getPlayerChoice();
}

let choices = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    let randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "It's a tie!";
    } else if (playerSelection == 'rock' && computerSelection == 'paper') {
        return "You lose! Paper beats rock";
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        return "You lose! Scissors beats paper";
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        return "You lose! Rock beats scissors";
    } else {
        return "You win!";
    }
}

game();
