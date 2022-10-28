

function getComputerChoice(){
    const options = ["rock", "paper" , "scissor"]
    return choice = options[Math.floor(Math.random()* options.length)]
}

 playerInput = prompt("Choose Rock, Paper or Scissor")


function playRound(playerSelection, computerSelection) {
    
    if (playerSelection === "scissor" && computerSelection === "paper"){
        return("You win! Scissor beats Paper")
    }
    else if (playerSelection === "paper" && computerSelection === "rock"){
        return("You win! Paper beats Rock")
    }
    else if (playerSelection === "rock" && computerSelection === "scissor"){
        return("You win! Rock beats scissor")
    }
    else if (computerSelection === "scissor" && playerSelection === "paper"){
        return("You lose! Scissor beats Paper")
    }
    else if (computerSelection === "paper" && playerSelection === "rock"){
        return("You lose! Paper beats Rock")
    }
    else if (computerSelection === "rock" && playerSelection === "scissor"){
        return("You lose! Rock beats scissor")
    }
    else if (playerSelection === computerSelection){
        return("Draw!")
    }
    else {
        return("Please choose Rock, Paper or Sccisor")
    }


  }


const computerSelection = getComputerChoice();
const playerSelection = playerInput.toLowerCase();
console.log(playRound(playerSelection, computerSelection));