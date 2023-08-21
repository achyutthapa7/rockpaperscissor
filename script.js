let playerScore = 0;
let computerScore = 0;
const choices = ["rock", "paper", "scissors"];
const resultText = document.getElementById("result");
const computerIcon = document.getElementById("computer-choice");
const userIcon = document.getElementById("user-choice");
const playerScoreDisplay = document.getElementById("player-score");
const computerScoreDisplay = document.getElementById("computer-score");

function getRandomChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function determineWinner(user, computer) {
  if (user === computer) {
    return "It's a tie!";
  } else if (
    (user === "rock" && computer === "scissors") ||
    (user === "paper" && computer === "rock") ||
    (user === "scissors" && computer === "paper")
  ) {
    playerScore++;
    return "You win!";
  } else {
    computerScore++;
    return "Computer wins!";
  }
}

function displayChoice(choice, element) {
  element.className = `material-icons ${choice}-icon`;
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  resultText.textContent = "";
  computerIcon.className = "material-icons help_outline";
  userIcon.className = "material-icons person";
  playerScoreDisplay.textContent = "0";
  computerScoreDisplay.textContent = "0";
}

function makeChoice(choice) {
  const computerChoice = getRandomChoice();
  displayChoice(choice, userIcon);
  displayChoice(computerChoice, computerIcon);

  const result = determineWinner(choice, computerChoice);
  resultText.textContent = result;
  playerScoreDisplay.textContent = playerScore;
  computerScoreDisplay.textContent = computerScore;
}

// Initial setup
resetGame();
