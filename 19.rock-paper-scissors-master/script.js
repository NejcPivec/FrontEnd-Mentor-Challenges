// DOM Elements
const score = document.querySelector(".main-score");
const pickedBtns = document.querySelectorAll(".option");
const finalResult = document.querySelector(".result");
const drawResult = document.querySelector(".draw-result");
const playerPick = document.getElementById("player-pick");
const computerChoice = document.getElementById("computer-pick");

const selection = document.querySelector(".selection");
const signs = document.querySelector(".signs");
const playAgain = document.querySelector(".play-again");

const modal = document.getElementById("modal");
const closeBtn = document.querySelector(".close");
const rulesBtn = document.querySelector(".btn-rules");

const choices = ["paper", "rock", "lizard", "scissors", "spock"];
let scoreNumber = 0;

// Get what user picked
pickedBtns.forEach((button) => {
  button.addEventListener("click", () => {
    userInput = button.getAttribute("data-choice");

    getWinner();
  });
});

// Get Winner
const getWinner = () => {
  const computerSelection = computerPick();

  updateGame(playerPick, userInput);
  updateGame(computerChoice, computerSelection);

  //Check winner
  if (userInput === computerSelection) {
    // Draw
    finalResult.innerText = "Draw";

    console.log(userInput);
    console.log(computerSelection);
  } else if (
    (userInput === "paper" && computerSelection === "rock") ||
    (userInput === "paper" && computerSelection === "spock") ||
    (userInput === "rock" && computerSelection === "lizard") ||
    (userInput === "rock" && computerSelection === "scissors") ||
    (userInput === "lizard" && computerSelection === "spock") ||
    (userInput === "lizard" && computerSelection === "paper") ||
    (userInput === "spock" && computerSelection === "scissors") ||
    (userInput === "spock" && computerSelection === "rock") ||
    (userInput === "scissors" && computerSelection === "paper") ||
    (userInput === "scissors" && computerSelection === "lizard")
  ) {
    // Winner
    updateScore(1);
    finalResult.innerText = "win";
  } else {
    // Loser
    updateScore(-1);
    finalResult.innerText = "lost";
  }

  signs.style.display = "none";
  selection.style.display = "flex";
};

// Get Random computer pick
const computerPick = () => {
  return choices[Math.floor(Math.random() * choices.length)];
};

// Update score
const updateScore = (value) => {
  scoreNumber += value;
  score.innerText = scoreNumber;
};

// Update played game
const updateGame = (element, picked) => {
  // Reset all classes
  element.classList.remove("rock");
  element.classList.remove("paper");
  element.classList.remove("scissors");
  element.classList.remove("spock");
  element.classList.remove("lizard");

  // Add the picked class
  element.classList.add(`${picked}`);
  element.querySelector("img").src = `./images/icon-${picked}.svg`;
};

// Play again - Reset
playAgain.addEventListener("click", () => {
  signs.style.display = "block";
  selection.style.display = "none";
});

/* Modal */
rulesBtn.addEventListener("click", () => {
  modal.style.display = "flex";
  rulesBtn.style.display = "none";
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
  rulesBtn.style.display = "block";
});
