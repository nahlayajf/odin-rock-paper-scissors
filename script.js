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

function getHumanChoice() {
    let humanChoice = prompt("Enter Game Choice:");
    return humanChoice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === "rock" && computerChoice === "paper") {
        console.log("You lose! Paper beats Rock.");
        computerScore++;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("You win! Paper beats Rock.");
        humanScore++;
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("You win! Rock beats Scissors!");
        humanScore++;
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        console.log("You lose! Rock beats Scissors.");
        computerScore++;
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log("You lose! Scissors beats Paper.");
        computerScore++;
    }
    else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("You win! Scissors beats paper.");
        humanScore++;
    }
    else {
        console.log("Tie");
    }
}
const container = document.body
const content = document.createElement("div");
content.classList.add("content");
container.appendChild(content)
const selectionBtns = document.createElement("div");
selectionBtns.classList.add("selection-btn");
content.appendChild(selectionBtns);


const rockBtn = document.createElement("button");
rockBtn.innerText = "Rock";
rockBtn.addEventListener("click", playRound("rock", getComputerChoice()))

selectionBtns.appendChild(rockBtn);

const paperBtn = document.createElement("button");
paperBtn.innerText = "Paper";
paperBtn.addEventListener("click", playRound("paper", getComputerChoice()))
selectionBtns.appendChild(paperBtn);

const scissorBtn = document.createElement("button");
scissorBtn.innerText = "Scissor";
scissorBtn.addEventListener("click", playRound("scissors", getComputerChoice()))
selectionBtns.appendChild(scissorBtn);












