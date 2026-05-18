// Computer randomly returns rock, paper, or scissors
function getComputerChoice() {
    let choiceNum = Math.floor(Math.random() * 3)

    if (choiceNum === 1) {
        return "rock";
    }
    else if (choiceNum === 2) {
        return "paper";
    }
    else {
        return "scissors";
    }

    console.log()
}


function getHumanChoice() {
    // prompt user for choice 
    let humanChoice = prompt("Enter Game Choice: ");
    // return user choice 
    return humanChoice;
}



function playGame(humanChoice, computerChoice) {
    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();

        if (humanChoice === "rock" && computerChoice === "paper") {
            console.log("You loose! Paper beats Rock.");
            computerScore++;
        }
        else if (humanChoice === "paper" && computerChoice === "rock") {
            console.log("You win! Paper beats Rock.");
            humanScore++;
        }
        else if (humanChoice === "rock" && computerChoice === "scissors") {
            console.log("You win! Rock beats scissors!");
            humanScore++;
        }
        else if (humanChoice === "scissors" && computerChoice === "rock") {
            console.log("You loose! Rock beats scissors.");
            computerScore++;
        }
        else if (humanChoice === "paper" && computerChoice === "scissors") {
            console.log("You loose! Scissors beats paper.");
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




    playRound(humanChoice, computerChoice);



    console.log(humanScore);
    console.log(computerScore);


}

let humanScore = 0;
let computerScore = 0;
let humanSelection;
for (let i = 0; i < 5; i++) {
    humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    console.log(`Computer Choice: ${computerSelection}`);
    playGame(humanSelection, computerSelection);
}

