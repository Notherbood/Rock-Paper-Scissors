

function getComputerChoice(){
    const options = ["rock", "paper" , "scissor"]
    return choice = options[Math.floor(Math.random()* options.length)]
}

function playRound(playerSelection, computerSelection) {
    
    if (playerSelection === "scissor" && computerSelection === "paper"){
    alert("You win! Scissor beats Paper")
    }
    else if (playerSelection === "paper" && computerSelection === "rock"){
    alert("You win! Paper beats Rock")
    }
    else if (playerSelection === "rock" && computerSelection === "scissor"){
    alert("You win! Rock beats scissor")
    }


  }


const computerSelection = getComputerChoice();
const playerSelection = "paper"

console.log(playRound(playerSelection, computerSelection));