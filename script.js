let rockButton = document.getElementById("rock")
let paperButton = document.getElementById("paper")
let scissorButton = document.getElementById("scissor")

let userScore = document.getElementById("user")
let computerScore = document.getElementById("computer")
let tieScore = document.getElementById("tie")

let choiceArray = ["rock","paper","scissor"]

let userCount = 0
let compCount = 0

function playGame(event) {
    let index = Math.floor(Math.random() * 10 % 3)
    let computerChoice = choiceArray[index]

    if(computerChoice==="rock" && event.target.id === "paper")
    {
        userScore.innerText = (userScore.innerText) + 1
    }
    else if(computerChoice==="rock" && event.target.id === "scissor")
    {
        computerScore.innerText = (computerScore.innerText) + 1
    }
    else if(computerChoice==="paper" && event.target.id === "rock")
    {
        computerScore.innerText = (computerScore.innerText) + 1
    }
    else if(computerChoice==="paper" && event.target.id === "scissor")
    {
        userScore.innerText = (userScore.innerText) + 1
    }
    else if(computerChoice==="scissor" && event.target.id === "rock")
    {
        userScore.innerText = (userScore.innerText) + 1
    }
    else if(computerChoice==="scissor" && event.target.id === "paper")
    {
        computerScore.innerText = (computerScore.innerText) + 1
    }
    else
    {
        tieScore.innerText = (tieScore.innerText)+1
    }
}

rockButton.addEventListener("click", playGame);
paperButton.addEventListener("click", playGame);
scissorButton.addEventListener("click", playGame);