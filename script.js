function getComputerChoice(){
    let randomNumber = Math.random()
    console.log(randomNumber)
    if(randomNumber < 1/3){
        return "Rock!"
    }
    else if(randomNumber <= 2/3){
        return "Paper!"
    }
    else if(randomNumber <= 1){
        return "Scissors!"
    }
}

function getHumanChoice(){
    let humanChoice = window.prompt("Type 'Rock', 'Paper' or 'Scissors'");
    if(humanChoice =="Rock"){
        return "Rock!"
    }
    else if(humanChoice =="Paper"){
        return "Paper!"
    }
    else if(humanChoice =="Scissors"){
        return "Scissors!"
    }
    else{
        console.log("That is not a valid choice, try again")
    }

}

console.log(getHumanChoice());