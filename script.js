const game = () => {

    let playerWins = 0;
    let computerWins = 0;

    const playGame = () => {
        const rockBtn = document.querySelector('.rock');
        const paperBtn = document.querySelector('.paper');
        const scissorBtn = document.querySelector('.scissor');
        const playerOptions = [rockBtn,paperBtn,scissorBtn];
        const computerOptions = ['rock','paper','scissor']

        const score = document.querySelector('.score');
        score.innerHTML = `Player Score : ${playerWins} Computer Score : ${computerWins}`;
          
        // Function to start playing game
        playerOptions.forEach(option => {
            option.addEventListener('click',function(){
  
                const choiceNumber = Math.floor(Math.random()*3);
                const computerChoice = computerOptions[choiceNumber];
  
                if(playerWins<5 && computerWins<5){
                    playRound(this.innerText,computerChoice);
                }

                score.innerHTML = `Player Score : ${playerWins} Computer Score : ${computerWins}`;
                
                if(playerWins==5 || computerWins==5){
                    gameOver(playerWins, computerWins)
                }
                
            })
        })

    }


    function playRound(playerSelection, computerSelection){
        const result = document.querySelector('.result');
        const content = document.createElement('div');
        playerSelection = playerSelection.toLowerCase();
        console.log(playerSelection, computerSelection);
        if(computerSelection=="rock"){
            if(playerSelection=="paper"){
                ++playerWins;
                console.log(playerWins);
                //const content = document.createElement('div');
                content.innerHTML = "you win! paper beats rock";
                result.appendChild(content);
            } else if(playerSelection=="scissor"){
                ++computerWins;
                //l content = document.createElement('div');
                content.innerHTML = "you lose! rock beats scissor";
                result.appendChild(content);
            } else {
                //let content = document.createElement('div');
                content.innerHTML = "Both chose rock";
                result.appendChild(content);
            } 
        } else if(computerSelection=="paper"){
            if(playerSelection=="paper"){
                //let content = document.createElement('div');
                content.innerHTML = "Both chose paper";
                result.appendChild(content);
            } else if(playerSelection=="scissor"){
                ++playerWins;
                console.log(playerWins);
                //let content = document.createElement('div');
                content.innerHTML = "you win! scissor beats paper";
                result.appendChild(content);
            } else {
                ++computerWins;
                //let content = document.createElement('div');
                content.innerHTML = "you lose! paper beats rock";
                result.appendChild(content);
            } 
        } else if(computerSelection=="scissor"){
            if(playerSelection=="scissor"){
                //let content = document.createElement('div');
                content.innerHTML = "Both chose scissor";
                result.appendChild(content);
            } else if(playerSelection=="rock"){
                ++playerWins;
                //let content = document.createElement('div');
                content.innerHTML = "you win! rock beats scissor";
                result.appendChild(content);
            } else {
                ++computerWins;
                console.log(playerWins);
                //let content = document.createElement('div');
                content.innerHTML = "you lose! scissors beat paper";
                result.appendChild(content);
            } 
        }
    }

    const gameOver = (playerWins, computerWins) => {
        const result = document.querySelector('.result');
        if(playerWins==5){
            result.innerHTML = "Game Over! Player Won!"
        }
        else{
            result.innerHTML = "Game Over! Computer Won!";
        }
    }

    
playGame();
    

}

game();


