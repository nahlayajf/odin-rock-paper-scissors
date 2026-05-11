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

}
console.log(getComputerChoice())

function getHumanChoice() {
    // prompt user for choice 
    let humanChoice = prompt("Enter Game Choice: ");
    // return user choice 
    return humanChoice;
}

console.log(getHumanChoice());

