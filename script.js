// Computer randomly returns rock, paper, or scissors
function getComputerChoice() {
    let choiceNum = Math.floor(Math.random() * 3);

    if (choiceNum === 1) {
        return "rock";
    } else if (choiceNum === 2) {
        return "paper";
    } else {
        return "scissors";
    }
}


let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === "rock" && computerChoice === "paper") {
        resultDisplay.textContent = "You lose! Paper beats Rock.";
        compScoreDis.textContent = `Computer Score: ${++computerScore}`

    } else if (humanChoice === "paper" && computerChoice === "rock") {
        resultDisplay.textContent = "You win! Paper beats Rock.";
        playerScoreDis.textContent = `Player Score: ${++humanScore}`;
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        resultDisplay.textContent = "You win! Rock beats Scissors!";
        playerScoreDis.textContent = `Player Score: ${++humanScore}`;
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        resultDisplay.textContent = "You lose! Rock beats Scissors.";
        compScoreDis.textContent = `Computer Score: ${++computerScore}`;
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        resultDisplay.textContent = "You lose! Scissors beats Paper.";
        compScoreDis.textContent = `Computer Score: ${++computerScore}`;
    }
    else if (humanChoice === "scissors" && computerChoice === "paper") {
        resultDisplay.textContent = "You win! Scissors beats paper.";
        playerScoreDis.textContent = `Player Score: ${++humanScore}`;
    }
    else {
        resultDisplay.textContent = "Tie";
    }

    if (computerScore === 5) {
        winnerDisplay.textContent = "Computer Wins Game!";
    }

    if (humanScore === 5) {
        winnerDisplay.textContent = "Human Wins Game!";
    }
}
const container = document.body
const content = document.createElement("div");
content.classList.add("content");
container.appendChild(content)

const selectionBtns = document.createElement("div");
selectionBtns.classList.add("selection-btn");
content.appendChild(selectionBtns);

const resultDisplay = document.createElement("div");
resultDisplay.classList.add("round-results");
content.appendChild(resultDisplay);


const rockBtn = document.createElement("button");
rockBtn.innerText = "Rock";
rockBtn.addEventListener('click', () => playRound("rock", getComputerChoice()));

selectionBtns.appendChild(rockBtn);

const paperBtn = document.createElement("button");
paperBtn.innerText = "Paper";
paperBtn.addEventListener('click', () => playRound("paper", getComputerChoice()));
selectionBtns.appendChild(paperBtn);

const scissorBtn = document.createElement("button");
scissorBtn.innerText = "Scissor";
scissorBtn.addEventListener('click', () => playRound("scissors", getComputerChoice()));
selectionBtns.appendChild(scissorBtn);


const compScoreDis = document.createElement("div");
compScoreDis.classList.add("comp-score");
content.appendChild(compScoreDis);
compScoreDis.textContent = "ComputerScore:"

const playerScoreDis = document.createElement("div");
playerScoreDis.classList.add("player-score");
content.appendChild(playerScoreDis);
playerScoreDis.textContent = "PlayerScore:"

const winnerDisplay = document.createElement("div");
winnerDisplay.classList.add("winner-display");
content.appendChild(winnerDisplay);












