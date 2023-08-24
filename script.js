function getComputerChoice(){
    let computer_choice = Math.floor(Math.random() * 3) + 1;
    if(computer_choice==1){
        return "rock";
    } else if(computer_choice == 2){
        return "paper";
    } else if(computer_choice==3){
        return "scissor";
    }
}

function playRound(computerSelection, playerSelection){
    if(computerSelection=="rock"){
        if(playerSelection=="paper"){
            playerWins++;
            return "you win! paper beats rock"
        } else if(playerSelection=="scissor"){
            computerWins++;
            return "you lose! rock beats scissor"
        } else {
            return "Both chose rock"
        } 
    } else if(computerSelection=="paper"){
        if(playerSelection=="paper"){
            return "Both chose paper"
        } else if(playerSelection=="scissor"){
            playerWins++;
            return "you win! scissor beats paper"
        } else {
            computerWins++;
            return "you lose! paper beats rock"
        } 
    } else if(computerSelection=="scissor"){
        if(playerSelection=="scissor"){
            return "Both chose scissor"
        } else if(playerSelection=="rock"){
            computerWins++;
            return "you lose! rock beats paper"
        } else {
            playerWins++;
            return "you win! rock beats scissors"
        } 
    }
}


function game(){
    while(playerWins!=5 && computerWins!=5){
        console.log("Computer Wins : " + computerWins + " Player Wins : " + playerWins);
        let computerSelection = getComputerChoice();
        let playerSelection = prompt("Enter your chocie : ");
        playerSelection = playerSelection.toLowerCase();
        console.log(playRound(computerSelection, playerSelection));
    }
    if(computerWins==5){
        alert("Computer won the game!");
    } else{
        alert("You won the game!");
    }

}

let playerWins = 0;
let computerWins = 0;
game();
