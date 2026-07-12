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
        computerScore++;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        resultDisplay.textContent = "You win! Paper beats Rock.";
        humanScore++;
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        resultDisplay.textContent = "You win! Rock beats Scissors!";
        humanScore++;
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        resultDisplay.textContent = "You lose! Rock beats Scissors.";
        computerScore++;
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        resultDisplay.textContent = "You lose! Scissors beats Paper.";
        computerScore++;
    }
    else if (humanChoice === "scissors" && computerChoice === "paper") {
        resultDisplay.textContent = "You win! Scissors beats paper.";
        humanScore++;
    }
    else {
        resultDisplay.textContent = "Tie";
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
resultDisplay.classList.add("results");
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












