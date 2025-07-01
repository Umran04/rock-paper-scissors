let playerScore = 0;
let cpuScore = 0;
let cpuChoices = ['Rock','Paper','Scissors']
let output = ['You win', 'CPU wins', "It's a tie"]
let playerSelect = null; 

let btnRock = document.getElementById("human-choice-rock");
let btnPaper = document.getElementById("human-choice-paper");
let btnScissors = document.getElementById("human-choice-scissors");

document.getElementById("player-score").innerText = "Player : " + playerScore;
document.getElementById("CPU-score").innerText = "CPU : " + cpuScore;
document.getElementById("computer-choice").innerText = "CPU wating for you to select"
document.getElementById("output").innerText = "No winner yet"



btnRock.addEventListener('click', () => {
    playerSelect = 'Rock'
    document.getElementById("computer-choice").innerText = "CPU choses " + getCPUchoice();
    
})

btnPaper.addEventListener('click', () => {
    playerSelect = 'Paper'
    document.getElementById("computer-choice").innerText = "CPU choses " + getCPUchoice();
    
})

btnScissors.addEventListener('click', () => {
    playerSelect = 'Scissors'
    document.getElementById("computer-choice").innerText = "CPU choses " + getCPUchoice();
    
})


function getCPUchoice(){
    let randIndex = Math.floor(Math.random() * cpuChoices.length)
    return cpuChoices[randIndex]
}

