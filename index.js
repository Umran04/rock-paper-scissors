let playerScore = 0;
let cpuScore = 0;
let cpuChoice = ['rock','paper','scissors']
let output = ['You win', 'CPU wins', "It's a tie"]
let playerSelect = null; 

let btnRock = document.getElementById("human-choice-rock");
let btnPaper = document.getElementById("human-choice-paper");
let btnScissors = document.getElementById("human-choice-scissors");

document.getElementById("player-score").innerText = "Player : " + playerScore;
document.getElementById("CPU-score").innerText = "CPU : " + cpuScore;
document.getElementById("output").innerText = output[0]
document.getElementById("computer-choice").innerText = "CPU choses " + getCPUchoice();


btnRock.addEventListener('click', () => {
    playerSelect = 'Rock'
    console.log('Rock')
})

btnPaper.addEventListener('click', () => {
    playerSelect = 'Paper'
    console.log('Paper')
})

btnScissors.addEventListener('click', () => {
    playerSelect = 'Scissors'
    console.log('Scissors')
})


function getCPUchoice(){
    let randIndex = Math.floor(Math.random()*cpuChoice.length)
    return cpuChoice[randIndex]
}