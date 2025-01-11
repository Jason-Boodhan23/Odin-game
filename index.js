console.log("hello world");

const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
    const computerPick = choices[Math.floor((Math.random() * choices.length))];
     console.log(computerPick);
}

getComputerChoice();


