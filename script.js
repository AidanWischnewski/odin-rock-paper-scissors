let humanScore = 0;
let computerScore = 0;
let humanChoice = "None";
let computerChoice = "None"
let roundCount = 1
let gameWinner = null

function getComputerChoice(){
    const randomNumber = Math.random()
    if(randomNumber < 1/3){
        return "Rock"
    }
    else if(randomNumber <= 2/3){
        return "Paper"
    }
    else if(randomNumber <= 1){
        return "Scissors"
    }
}

function playRound(event){
    humanChoice = event.target.id;
    computerChoice = getComputerChoice()
    let winner = "Nobody"
    if(humanChoice==computerChoice){
        winner = "Nobody"
   }
    else if(humanChoice=="Rock" && computerChoice=="Scissors"){
        winner = "Human"
   }
    else if(humanChoice=="Paper" && computerChoice=="Rock"){
       winner = "Human"
   }
    else if(humanChoice=="Scissors" && computerChoice=="Paper"){
       winner = "Human"
   }
    else if(computerChoice=="Rock" && humanChoice=="Scissors"){
        winner = "Computer"
    }
    else if(computerChoice=="Paper" && humanChoice=="Rock"){
        winner = "Computer"
    }
    else if(computerChoice=="Scissors" && humanChoice=="Paper"){
        winner = "Computer"
        }
    announceWinner(winner);
    incrementScore(winner);
    checkForGameWinner();
    return winner
    }

function announceWinner(winner){
    const result_list = document.querySelector(".result");
    const announcment =  document.createElement("li");
    announcment.textContent = `Round ${roundCount}: Human chose ${humanChoice}! Computer chose ${computerChoice}! ${winner} wins!`;
    roundCount +=1
    result_list.appendChild(announcment);

}

function incrementScore(winner){
    switch(winner){
        case "Human": humanScore+=1; break
        case "Computer": computerScore+=1; break
        case "Nobody": break
    }
    const humanScoreRecord = document.querySelector(".human-score")
    const computerScoreRecord = document.querySelector(".computer-score")
    humanScoreRecord.textContent = `Human: ${humanScore}`
    computerScoreRecord.textContent = `Computer: ${computerScore}`
}
function checkForGameWinner(){
    if (humanScore >=5){
        gameWinner = "Human";
    }
    if (computerScore >= 5){
        gameWinner = "Computer";
    }
    if (gameWinner != null){
        document.querySelector(".content").remove();
        message = document.createElement("h1");
        message.textContent = `${gameWinner} Wins!`;
        document.querySelector("body").appendChild(message);   
    }
}


choices = document.querySelector(".choices");
choices.addEventListener("click",(e) => playRound(e))
