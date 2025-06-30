let playerScore = 0;
let cpuScore = 0;
let cpuChoice = ['rock','paper','scissors']
let output = ['You win', 'CPU wins', "It's a tie"]

document.getElementById("player-score").innerText = "Player : " + playerScore;
document.getElementById("CPU-score").innerText = "CPU : " + cpuScore;
document.getElementById("output").innerText = output[0]
document.getElementById("computer-choice").innerText = "CPU choses " + cpuChoice[0]

