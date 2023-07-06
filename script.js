let choices = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice () {
    let randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}
console.log(getComputerChoice());