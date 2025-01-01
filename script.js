let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    const randomNumber = Math.random()
    console.log(randomNumber)
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

function getHumanChoice(){
    const humanChoice = window.prompt("Type 'Rock', 'Paper' or 'Scissors'");
    if(humanChoice =="Rock"){
        return "Rock"
    }
    else if(humanChoice =="Paper"){
        return "Paper"
    }
    else if(humanChoice =="Scissors"){
        return "Scissors"
    }
    else{
        alert.log("That is not a valid choice, try again")
    }

}

function playRound(humanChoice, computerChoice){
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
    console.log(`${winner} Wins`)
    return winner
    }


function incrementScore(winner){
    switch(winner){
        case "Human": humanScore+=1; break
        case "Computer": computerScore+=1; break
        case "Nobody": break
    }
}
function playGame(){
    for (let i=0; i<5 ;i++){
        let humanChoice = getHumanChoice()
        let computerChoice = getComputerChoice()
        console.log(`Computer Plays ${computerChoice}`)
        console.log(`Human Plays ${humanChoice}`)
        let winner = playRound(humanChoice,computerChoice)
        incrementScore(winner)

        console.log(`Human Score: ${humanScore}`)
        console.log(`Computer Score: ${computerScore}`)
    }
    if (computerScore==humanScore){
        console.log("The Game is a tie")
    }
    else if(computerScore>humanScore){
        console.log("Computer Wins")
    }
    else if(humanScore> computerScore){
        console.log("Human Wins")
    }
    }

playGame();