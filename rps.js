

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
    else if (computerSelection === "scissor" && playerSelection === "paper"){
        alert("You lose! Scissor beats Paper")
    }
    else if (computerSelection === "paper" && playerSelection === "rock"){
        alert("You lose! Paper beats Rock")
    }
    else if (computerSelection === "rock" && playerSelection === "scissor"){
        alert("You lose! Rock beats scissor")
    }
    else if (playerSelection === computerSelection){
        alert("Draw!")
    }
    else {
        alert("Please choose Rock, Paper or Sccisor")
    }


  }


const computerSelection = getComputerChoice();
const playerSelection = "rock"

console.log(playRound(playerSelection, computerSelection));