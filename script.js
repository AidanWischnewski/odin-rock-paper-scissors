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
