console.log("helloworld")

let choices = ["rock","paper","scissors"]
let humanScore = 0
let compScore = 0
let tieScore = 0

function getcompChoice() {

    let index = Math.floor(Math.random() * 10 % 3)
    let compChoice = choices[index]
    return compChoice
}

function getHumanChoice() {
    let hChoice = prompt("Enter your choice: ")
    return hChoice
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

}
for(let i = 0; i < 5; i++) {
    const human = getcompChoice()
    const comp = getHumanChoice()
    playRound(human, comp)
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

function playGame(event) {
    let index = Math.floor(Math.random() * 10 % 3)
    let compChoice = choiceArray[index]

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
        tieScore.innerText = (tieScore.innerText)+1
    }
}

rockButton.addEventListener("click", playGame);
paperButton.addEventListener("click", playGame);
scissorsButton.addEventListener("click", playGame);*/