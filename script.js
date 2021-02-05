const newGame = document.querySelector("#newGame")
const roll = document.querySelector("#roll")
const hold = document.querySelector("#hold")
let displayDice = document.querySelector("displayDice")
let displayPoints1 = document.querySelector("displayPoints1")
let displayPoints2 = document.querySelector("displayPoints1")
let playerStatus1 = document.querySelector("playerStatus1")
let playerStatus2 = document.querySelector("playerStatus2")
let pointsCounter1 = 0;
let pointsCounter2 = 0;
let cp1;


roll.style.display = "none";
hold.style.display = "none";

newGame.addEventListener("click", (event) => {
    let cp1 = document.getElementById('playerStatus1').classList.add('currentP1');
    roll.style.display = "block";
    hold.style.display = "block";
    return cp1;
});

roll.addEventListener("click", (event) => {
    playOne();
});


hold.addEventListener("click", (event) => {
    if (cp1.classList.contains(currentP1)) {
        playTwo();
    }  else {
        playOne();
    }
});

function startAgain() {
    newGame.addEventListener("click", (event) => {
        roll.style.display = "block";
        hold.style.display = "block";
    });
};


function playOne() {
    const diceRoll = Math.floor(Math.random() * 6) + 1;

    if (diceRoll === 1) {
        displayDice.src = "img/dice1.png"
        displayPoints1.innerText = "Game over";
        roll.style.display = "none";

    } else if (diceRoll === 2) {
        displayDice.src = "img/dice2.png"
        displayPoints1.innerText = pointsCounter;
        pointsCounter1 += diceRoll;
    } else if (diceRoll === 3) {
        displayDice.src = "img/dice3.png"
        displayPoints1.innerText = pointsCounter;
        pointsCounter1 += diceRoll;
    } else if (diceRoll === 4) {
        displayDice.src = "img/dice4.png"
        displayPoints1.innerText = pointsCounter;
        pointsCounter1 += diceRoll;
    } else if (diceRoll === 5) {
        displayDice.src = "img/dice5.png"
        displayPoints1.innerText = pointsCounter;
        pointsCounter1 += diceRoll;
    } else {
        displayDice.src = "img/dice6.png"
        displayPoints1.innerText = pointsCounter;
        pointsCounter1 += diceRoll;
    }


    if (pointsCounter >= 20) {
        displayPoints1.innerText = "You won!";
        pleyOne();
    }

    console.log(pointsCounter1);
}


function playTwo() {
    const diceRoll = Math.floor(Math.random() * 6) + 1;

    if (diceRoll === 1) {
        displayDice.src = "img/dice1.png"
        displayPoints1.innerText = "Game over";
        roll.style.display = "none";

    } else if (diceRoll === 2) {
        displayDice.src = "img/dice2.png"
        displayPoints1.innerText = pointsCounter;
        pointsCounter1 += diceRoll;
    } else if (diceRoll === 3) {
        displayDice.src = "img/dice3.png"
        displayPoints1.innerText = pointsCounter;
        pointsCounter1 += diceRoll;
    } else if (diceRoll === 4) {
        displayDice.src = "img/dice4.png"
        displayPoints1.innerText = pointsCounter;
        pointsCounter1 += diceRoll;
    } else if (diceRoll === 5) {
        displayDice.src = "img/dice5.png"
        displayPoints1.innerText = pointsCounter;
        pointsCounter1 += diceRoll;
    } else {
        displayDice.src = "img/dice6.png"
        displayPoints1.innerText = pointsCounter;
        pointsCounter1 += diceRoll;
    }


    if (pointsCounter >= 20) {
        displayPoints2.innerText = "You won!";
        pleyOne();
    }

    console.log(pointsCounter2);
}

