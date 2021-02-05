const newGame = document.querySelector("#newGame")
const roll = document.querySelector("#roll")
const hold = document.querySelector("#hold")
let displayDice = document.querySelector("#displayDice")
let displayPoints1 = document.querySelector("#displayPoints1")
let displayPoints2 = document.querySelector("#displayPoints1")
let currentPoints1 = document.querySelector("#currentPoints1")
let currentPoints2 = document.querySelector("#currentPoints2")
let playerStatus1 = document.querySelector("#playerStatus1")
let playerStatus2 = document.querySelector("#playerStatus2")
let pointsCounter1 = 0;
let pointsCounter2 = 0;

let playerOne = true;

roll.style.display = "none";
hold.style.display = "none";

newGame.addEventListener("click", (event) => {
    roll.style.display = "block";
    hold.style.display = "block";
    newGame.style.display = "none"; 
});

roll.addEventListener("click", (event) => {
    if (playerOne === true) {
        playOne();
        console.log("player one playing");
    } else if (playerOne === false) {
        playerOne = false;
        console.log("player two playing");
        playOne();
    }  
});

hold.addEventListener("click", (event) => {
    if (playerOne === true) {
        console.log("should start player two?");
    } else if (playerOne === false) {
        console.log("should start player one?");
        playTwo();
    }
});



function startAgain() {
    window.location.reload();
};


function playOne() {
    let cp1 = document.getElementById('playerStatus1').classList.add('currentP1');
    let cp2 = document.getElementById('playerStatus2').classList.remove('currentP2');

    const diceRoll = Math.floor(Math.random() * 6) + 1;
    
    if (diceRoll === 1) {
        displayDice.src = "img/dice1.png"
        currentPoints1.innerText = diceRoll;
        displayPoints1.innerText = "1";
        setTimeout(startAgain, 1500);
    } else if (diceRoll === 2) {
        displayDice.src = "img/dice2.png"
        displayPoints1.innerText = pointsCounter1;
        currentPoints1.innerText = diceRoll;
        pointsCounter1 += diceRoll;
    } else if (diceRoll === 3) {
        displayDice.src = "img/dice3.png"
        displayPoints1.innerText = pointsCounter1;
        currentPoints1.innerText = diceRoll;
        pointsCounter1 += diceRoll;
    } else if (diceRoll === 4) {
        displayDice.src = "img/dice4.png"
        displayPoints1.innerText = pointsCounter1;
        currentPoints1.innerText = diceRoll;
        pointsCounter1 += diceRoll;
    } else if (diceRoll === 5) {
        displayDice.src = "img/dice5.png"
        displayPoints1.innerText = pointsCounter1;
        currentPoints1.innerText = diceRoll;
        pointsCounter1 += diceRoll;
    } else {
        displayDice.src = "img/dice6.png"
        displayPoints1.innerText = pointsCounter1;
        currentPoints1.innerText = diceRoll;
        pointsCounter1 += diceRoll;
    }

    if (pointsCounter1 >= 20) {
        displayPoints1.innerText = "You won!";
        setTimeout(startAgain, 1500);
    }

    console.log(pointsCounter1);
}


function playTwo() {
    let cp1 = document.getElementById('playerStatus1').classList.remove('currentP1');
    let cp2 = document.getElementById('playerStatus2').classList.add('currentP2');
    
    const diceRoll = Math.floor(Math.random() * 6) + 1;

    if (diceRoll === 1) {
        displayDice.src = "img/dice1.png"
        currentPoints2.innerText = diceRoll;
        displayPoints2.innerText = "Game over";
        roll.style.display = "none";
        setTimeout(startAgain, 1500);
    } else if (diceRoll === 2) {
        displayDice.src = "img/dice2.png"
        currentPoints2.innerText = diceRoll;
        displayPoints2.innerText = pointsCounter2;
        pointsCounter2 += diceRoll;
    } else if (diceRoll === 3) {
        displayDice.src = "img/dice3.png"
        currentPoints2.innerText = diceRoll;
        displayPoints2.innerText = pointsCounter2;
        pointsCounter2 += diceRoll;
    } else if (diceRoll === 4) {
        displayDice.src = "img/dice4.png"
        currentPoints2.innerText = diceRoll;
        displayPoints2.innerText = pointsCounter2;
        pointsCounter2 += diceRoll;
    } else if (diceRoll === 5) {
        displayDice.src = "img/dice5.png"
        currentPoints2.innerText = diceRoll;
        displayPoints2.innerText = pointsCounter2;
        pointsCounter2 += diceRoll;
    } else {
        displayDice.src = "img/dice6.png"
        currentPoints2.innerText = diceRoll;
        displayPoints2.innerText = pointsCounter2;
        pointsCounter2 += diceRoll;
    }


    if (pointsCounter2 >= 20) {
        displayPoints2.innerText = "You won!";
        setTimeout(startAgain, 1500);
    }

    console.log(pointsCounter2);
}

