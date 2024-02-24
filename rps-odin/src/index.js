let userScore = 0;
let computerScore = 0;
let roundResult = document.createElement("div");
let gameResult = document.createElement("div");
let rockButton = document.createElement("button");
let paperButton = document.createElement("button");
let scissorsButton = document.createElement("button");
let body = document.body;
let rounds = 5;

function getComputerChoice() {
  let rngGenerator = Math.floor(Math.random() * 3);

  switch (rngGenerator) {
    case 0:
      return "Rock";
    case 1:
      return "Paper";
    case 2:
      return "Scissors";
  }
}

function playRound(playerSelection, computerSelection) {
  if (
    playerSelection == "Rock" &&
    (computerSelection == "Paper" || computerSelection == "Scissors")
  ) {
    roundResult.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
    userScore++;
    gameResult.textContent = `You: ${userScore} Computer: ${computerScore}`;
  } else if (playerSelection == "Paper" && computerSelection == "Rock") {
    roundResult.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
    userScore++;
    gameResult.textContent = `You: ${userScore} Computer: ${computerScore}`;
  } else if (playerSelection == "Scissors" && computerSelection == "Paper") {
    roundResult.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
    userScore++;
    gameResult.textContent = `You: ${userScore} Computer: ${computerScore}`;
  } else if (playerSelection === computerSelection) {
    roundResult.textContent = `Tie!`;
    gameResult.textContent = `You: ${userScore} Computer: ${computerScore}`;
  } else {
    roundResult.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
    computerScore++;
    gameResult.textContent = `You: ${userScore} Computer: ${computerScore}`;
  }

  if (computerScore === rounds) {
    disableGame();
    body.removeChild(roundResult);
    gameResult.textContent = `You lose the game! You: ${userScore} Computer: ${computerScore}`;
  }

  if (userScore === rounds) {
    disableGame();
    body.removeChild(roundResult);
    gameResult.textContent = `You win the game! You: ${userScore} Computer: ${computerScore}`;
  }
}

rockButton.textContent = "Rock";
paperButton.textContent = "Paper";
scissorsButton.textContent = "Scissors";

rockButton.addEventListener("click", () => {
  computerSelection = getComputerChoice();
  playRound("Rock", computerSelection);
});
paperButton.addEventListener("click", () => {
  computerSelection = getComputerChoice();
  playRound("Paper", computerSelection);
});
scissorsButton.addEventListener("click", () => {
  computerSelection = getComputerChoice();
  playRound("Scissors", computerSelection);
});

function disableGame() {
  rockButton.disabled = true;
  paperButton.disabled = true;
  scissorsButton.disabled = true;
}

body.appendChild(rockButton);
body.appendChild(paperButton);
body.appendChild(scissorsButton);
body.appendChild(roundResult);
body.appendChild(gameResult);
