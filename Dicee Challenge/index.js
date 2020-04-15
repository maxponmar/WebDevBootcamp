function throwDice(diceNumber) {
    var randomNumber = Math.floor(Math.random() * 6) + 1;
    var randomDice = "images/dice" + randomNumber + ".png";
    document.querySelectorAll("img")[diceNumber].src = randomDice;
    return randomNumber;
}

var dice1 = throwDice(0);
var dice2 = throwDice(1);

var 
if (dice1 > dice2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
} else if (dice1<dice2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
} else {
    document.querySelector("h1").innerHTML = "Draw!";
}