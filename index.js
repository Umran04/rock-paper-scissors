let playerScore = 0;
let cpuScore = 0;
let finalScore =0;
let cpuChoices = ['Rock','Paper','Scissors']
let output = ['You win', 'CPU wins', "It's a tie"]
let playerSelect = null; 
let cpuSelect = null;
let playerRoundScore = 0;
let cpuRoundScore = 0;

let btnRock = document.getElementById("human-choice-rock");
let btnPaper = document.getElementById("human-choice-paper");
let btnScissors = document.getElementById("human-choice-scissors");
let btnPlayAgain = document.getElementById("PA-btn"); 

document.getElementById("player-round-scores").innerText = "Player Total : " + playerRoundScore;
document.getElementById("cpu-round-scores").innerText = "CPU Total : " + cpuRoundScore;
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

function cpuWins(){
        document.getElementById("output").innerText = "CPU wins"
        cpuScore++;
        if (playerScore === 5 || cpuScore === 5){
            if(playerScore > cpuScore){
                document.getElementById("output").innerText = "Game Over: You win, Click Play Again";
                playerRoundScore++
                document.getElementById("player-round-scores").innerText = "Player Total : " + playerRoundScore;
            }else if (cpuScore > playerScore){
                document.getElementById("output").innerText = "Game Over: CPU wins, Click Play Again";
                cpuRoundScore++
                document.getElementById("cpu-round-scores").innerText = "CPU Total : " + cpuRoundScore;
            }else{}
            btnDisable();
        }
        document.getElementById("CPU-score").innerText = "CPU : " + cpuScore;
}

function playerWins(){
    document.getElementById("output").innerText = "You win, you chose " + playerSelect
        playerScore++;
        if (playerScore === 5 || cpuScore === 5){
            if(playerScore > cpuScore){
                document.getElementById("output").innerText = "Game Over: You win, Click Play Again";
                playerRoundScore++
                document.getElementById("player-round-scores").innerText = "Player Total : " + playerRoundScore;
            }else if (cpuScore > playerScore){
                document.getElementById("output").innerText = "Game Over: CPU wins, Click Play Again";
                cpuRoundScore++
                document.getElementById("cpu-round-scores").innerText = "CPU Total : " + cpuRoundScore;
            }else{}
            btnDisable();
        }
        document.getElementById("player-score").innerText = "Player : " + playerScore;
}

function btnDisable(){
    btnPaper.disabled = true;
    btnScissors.disabled = true;
    btnRock.disabled = true;
}

function getWinner(){
    if (playerSelect === cpuSelect){
        document.getElementById("output").innerText = "It's a tie"
    }else if (playerSelect === 'Rock' && cpuSelect === 'Paper'){
        cpuWins();
    }else if (playerSelect === 'Paper' && cpuSelect === 'Rock'){
        playerWins();
    }else if (playerSelect === 'Paper' && cpuSelect === 'Scissors'){
       cpuWins();
    }else if (playerSelect === 'Scissors' && cpuSelect === 'Paper'){
        playerWins();
    }else if (playerSelect === 'Scissors' && cpuSelect === 'Rock'){
        cpuWins();
    }else if (playerSelect === 'Rock' && cpuSelect === 'Scissors'){
        playerWins();
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