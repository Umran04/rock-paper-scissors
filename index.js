let playerScore = 0;
let cpuScore = 0;
let cpuChoices = ['Rock','Paper','Scissors']
let output = ['You win', 'CPU wins', "It's a tie"]
let playerSelect = null; 
let cpuSelect = null;

let btnRock = document.getElementById("human-choice-rock");
let btnPaper = document.getElementById("human-choice-paper");
let btnScissors = document.getElementById("human-choice-scissors");
let btnPlayAgain = document.getElementById("PA-btn"); 

document.getElementById("player-score").innerText = "Player : " + playerScore;
document.getElementById("CPU-score").innerText = "CPU : " + cpuScore;
document.getElementById("computer-choice").innerText = "CPU wating for you to select"
document.getElementById("output").innerText = "No winner yet"




function play(){
    cpuSelect = getCPUchoice();
    document.getElementById("computer-choice").innerText = "CPU choses " + cpuSelect;
    getWinner();
}

btnRock.addEventListener('click', () => {
    playerSelect = 'Rock'
    play();
    console.log('R')
})

btnPaper.addEventListener('click', () => {
    playerSelect = 'Paper'
    play();
    console.log('P')
})

btnScissors.addEventListener('click', () => {
    playerSelect = 'Scissors'
    play();
    console.log('S')
})


function getCPUchoice(){
    let randIndex = Math.floor(Math.random() * cpuChoices.length)
    return cpuChoices[randIndex]
}

function getWinner(){
    if (playerSelect === cpuSelect){
        document.getElementById("output").innerText = "It's a tie"
    }else if (playerSelect === 'Rock' && cpuSelect === 'Paper'){
        document.getElementById("output").innerText = "CPU wins"
        cpuScore++;
        if (playerScore === 5 || cpuScore === 5){
            btnPaper.disabled = true;
            btnScissors.disabled = true;
            btnRock.disabled = true;
        }
        document.getElementById("CPU-score").innerText = "CPU : " + cpuScore;
    }else if (playerSelect === 'Paper' && cpuSelect === 'Rock'){
        document.getElementById("output").innerText = "You win, you chose " + playerSelect
        playerScore++;
        if (playerScore === 5 || cpuScore === 5){
            btnPaper.disabled = true;
            btnScissors.disabled = true;
            btnRock.disabled = true;
        }
        document.getElementById("player-score").innerText = "Player : " + playerScore;
    }else if (playerSelect === 'Paper' && cpuSelect === 'Scissors'){
        document.getElementById("output").innerText = "CPU wins"
        cpuScore++;
        if (playerScore === 5 || cpuScore === 5){
            btnPaper.disabled = true;
            btnScissors.disabled = true;
            btnRock.disabled = true;
        }
        document.getElementById("CPU-score").innerText = "CPU : " + cpuScore;
    }else if (playerSelect === 'Scissors' && cpuSelect === 'Paper'){
        document.getElementById("output").innerText = "You win, you chose " + playerSelect
        playerScore++;
        if (playerScore === 5 || cpuScore === 5){
            btnPaper.disabled = true;
            btnScissors.disabled = true;
            btnRock.disabled = true;
        }
        document.getElementById("player-score").innerText = "Player : " + playerScore;
    }else if (playerSelect === 'Scissors' && cpuSelect === 'Rock'){
        document.getElementById("output").innerText = "CPU wins"
        cpuScore++;
        if (playerScore === 5 || cpuScore === 5){
            btnPaper.disabled = true;
            btnScissors.disabled = true;
            btnRock.disabled = true;
        }
        document.getElementById("CPU-score").innerText = "CPU : " + cpuScore;
    }else if (playerSelect === 'Rock' && cpuSelect === 'Scissors'){
        document.getElementById("output").innerText = "You win, you chose " + playerSelect
        playerScore++;
        if (playerScore === 5 || cpuScore === 5){
            btnPaper.disabled = true;
            btnScissors.disabled = true;
            btnRock.disabled = true;
        }
        document.getElementById("player-score").innerText = "Player : " + playerScore;
    }else{}
}



btnPlayAgain.addEventListener('click', () => {
    playerScore = 0;
    cpuScore = 0;
    document.getElementById("CPU-score").innerText = "CPU : " + cpuScore;
    document.getElementById("player-score").innerText = "Player : " + playerScore;
    document.getElementById("computer-choice").innerText = "CPU wating for you to select"
    document.getElementById("output").innerText = "No winner yet"

    btnPaper.disabled = false;
    btnScissors.disabled = false;
    btnRock.disabled = false;
})