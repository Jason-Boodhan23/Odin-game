console.log("hello world");

const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
  const computerPick = choices[Math.floor(Math.random() * choices.length)];

  return computerPick;
}

function getHumanChoice() {
  let validatedInput = false;

  while (validatedInput == false) {
    const userChoice = prompt("Pick rock, paper, or scissors!");

    if (userChoice == null) {
      continue;
    }

    const choiceInLower = userChoice.toLowerCase();

    if (choices.includes(choiceInLower)) {
      validatedInput = true;
      return choiceInLower;
    }
  }
}

function checkWinner(humanChoice, computerChoice) {
  if (humanChoice == computerChoice) {
    return "Tie";
  } else if (
    (humanChoice == "rock" && computerChoice == "scissors") ||
    (humanChoice == "scissors" && computerChoice == "paper") ||
    (humanChoice == "paper" && computerChoice == "rock")
  ) {
    return "Player";
  } else {
    return "Computer";
  }
}

function playRound(humanChoice, computerChoice) {
  const result = checkWinner(humanChoice, computerChoice);

  if (result === "Player") {
    return `You won! ${humanChoice} beats ${computerChoice}`;
  } else if (result === "Computer") {
    return `You lost! ${humanChoice} does not beat ${computerChoice}`;
  } else {
    return "It is a tie";
  }
}


function game() {

    let scorePlayer = 0;
    let scoreComputer = 0;

    console.log("Welcome!")

    for (let i = 0; i < 5; i++) {
        
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        
        console.log(playRound(humanSelection, computerSelection));
        console.log("===================");

        if(checkWinner(humanSelection, computerSelection) == "Player") {
            scorePlayer++;
        } else if(checkWinner(humanSelection, computerSelection) == "Computer") {
            scoreComputerr++;
        }

        console.log("Game Over!"); 

        if (scorePlayer > scoreComputer) {
            console.log("You won the game");
        } else if (scoreComputer > scorePlayer) {
            console.log("You lost the game");
        } else {
            console.log("The game is a tie");
        }

        console.log("The computer scored " + scoreComputer + " points");
        console.log("You scored " + scorePlayer + " points");


    }
}

game();



