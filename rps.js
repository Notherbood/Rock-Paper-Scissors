

function getComputerChoice(){
    const options = ["rock", "paper" , "scissor"]
    return choice = options[Math.floor(Math.random()* options.length)]
}
function getPlayerChoice(){
    const playerInput = prompt("Choose Rock, Paper or Scissor")
    return choice = playerInput.toLowerCase();
}


function playRound(playerSelection, computerSelection) {
    
    if (playerSelection === "scissor" && computerSelection === "paper"){
        ++userScore;
        return("You win! Scissor beats Paper");  
    }
    else if (playerSelection === "paper" && computerSelection === "rock"){
        ++userScore;
        return("You win! Paper beats Rock"); ++userScore
    }
    else if (playerSelection === "rock" && computerSelection === "scissor"){
        ++userScore;
        return("You win! Rock beats scissor"); 
    }
    else if (computerSelection === "scissor" && playerSelection === "paper"){
        ++computerScore;
        return("You lose! Scissor beats Paper"); 
    }
    else if (computerSelection === "paper" && playerSelection === "rock"){
        ++computerScore;
        return("You lose! Paper beats Rock"); 
    }
    else if (computerSelection === "rock" && playerSelection === "scissor"){
        ++computerScore;
        return("You lose! Rock beats scissor");
    }
    else if (playerSelection === computerSelection){
        return("Draw!")
    }
    else {
        return("Please choose Rock, Paper or Sccisor")
    }
    
}



function game(){
    for (let i = 0; i < 5; i++){
    const playerSelection = getPlayerChoice();
    console.log("You choose " + playerSelection)       
    const computerSelection = getComputerChoice();
    console.log("Computer choose " + computerSelection)

console.log(playRound(playerSelection, computerSelection));

console.log("your score = " + userScore);
console.log("Computer's score = " + computerScore);
    }
    if (userScore > computerScore){
        console.log("You Win! You won " + userScore + " rounds and the computer " + computerScore + " rounds")
    }
    else if(userScore < computerScore){
        console.log("You Lose! You won " + userScore + " rounds and the computer " + computerScore + " rounds")
    }
    else if (userScore === computerScore){
        console.log("Tie!")
    }
}

let userScore = 0;
let computerScore = 0;

game()