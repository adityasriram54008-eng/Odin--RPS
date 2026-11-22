console.log("helloworld")

let rButton = document.getElementById("rock")
let pButton = document.getElementById("paper")
let sButton = document.getElementById("scissor")

let choices = ["rock","paper","scissors"]

let humanScore = 0
let compScore = 0
let tieScore = 0

rButton.addEventListener("click", function() {
    playRound("rock", getcompChoice());
})
pButton.addEventListener("click", function() {
    playRound("paper", getcompChoice());
})
sButton.addEventListener("click", function() {
    playRound("scissors", getcompChoice());
})


function getcompChoice() {

    let index = Math.floor(Math.random() * 10 % 3)
    let compChoice = choices[index]
    return compChoice
}


function playRound(humanChoice, compChoice) {
    humanChoice = humanChoice.toLowerCase()
    compChoice = compChoice.toLowerCase()

    if(compChoice==="rock" && humanChoice === "paper")
    {
        humanScore++
    }
    else if(compChoice==="rock" && humanChoice === "scissors")
    {
        compScore++
    }
    else if(compChoice==="paper" && humanChoice === "rock")
    {
        compScore++
    }
    else if(compChoice==="paper" && humanChoice === "scissors")
    {
        humanScore++
    }
    else if(compChoice==="scissors" && humanChoice === "rock")
    {
        humanScore++
    }
    else if(compChoice==="scissors" && humanChoice === "paper")
    {
        compScore++
    }
    else
    {
        tieScore++
    }
    console.log("Human wins: " + humanScore)
    console.log("Computer wins: " + compScore)
    console.log("Rounds tied: " + tieScore)
}


/*let rockButton = document.getElementById("rock")
let paperButton = document.getElementById("paper")
let scissorsButton = document.getElementById("scissors")

let userScore = document.getElementById("user")
let computerScore = document.getElementById("computer")
let tieScore = document.getElementById("tie")

let choiceArray = ["rock","paper","scissors"]

let userCount = 0
let compCount = 0

rockButton.addEventListener("click", playGame);
paperButton.addEventListener("click", playGame);
scissorsButton.addEventListener("click", playGame);*/