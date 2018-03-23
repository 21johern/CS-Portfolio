/* global nextFrame correctGuesses message*/
var randomNumber = Math.floor(Math.random() * 6);
var message = document.getElementById("message");
var guess1 = document.getElementById("guess1");
var guess2 = document.getElementById("guess2");
var guess3 = document.getElementById("guess3");
var guess4 = document.getElementById("guess4");
var guess5 = document.getElementById("guess5");
var guess6 = document.getElementById("guess6");
var guess7 = document.getElementById("guess7");
var guess8 = document.getElementById("guess8");
var guess9 = document.getElementById("guess9");
var guess10 = document.getElementById("guess10");
var guess11 = document.getElementById("guess11");
var letterGuessed = document.getElementById("letterGuessed");
var button = document.getElementById("button");
var letter1 = document.getElementById("letter1");
var letter2 = document.getElementById("letter2");
var letter3 = document.getElementById("letter3");
var letter4 = document.getElementById("letter4");
var letter5 = document.getElementById("letter5");
var letter6 = document.getElementById("letter6");
var previousGuesses = [];
var lastGuess = -1;
var nextFrame = 0;
var correctGuesses = 0;
button.addEventListener("click", function() {
    var lettersLeft = 6 - correctGuesses;
    var guess = letterGuessed.value;
    previousGuesses.push(guess);
    lastGuess += 1;
    guess1.innerHTML = "1.) " + previousGuesses[0];
    guess2.innerHTML = "2.) " + previousGuesses[1];
    guess3.innerHTML = "3.) " + previousGuesses[2];
    guess4.innerHTML = "4.) " + previousGuesses[3];
    guess5.innerHTML = "5.) " + previousGuesses[4];
    guess6.innerHTML = "6.) " + previousGuesses[5];
    guess7.innerHTML = "7.) " + previousGuesses[6];
    guess8.innerHTML = "8.) " + previousGuesses[7];
    guess9.innerHTML = "9.) " + previousGuesses[8];
    guess10.innerHTML = "10.) " + previousGuesses[9];
    guess11.innerHTML = "11.) " + previousGuesses[10];
    if (randomNumber === 0) {
        if (previousGuesses[lastGuess] === "t" || previousGuesses[lastGuess] === "T") {
            letter1.innerHTML = " T ";
            letter4.innerHTML = " T ";
            correctGuesses += 2;
        }
        else if (previousGuesses[lastGuess] === "u" || previousGuesses[lastGuess] === "U") {
            letter2.innerHTML = " U ";
            correctGuesses += 1;
        }
        else if (previousGuesses[lastGuess] === "r" || previousGuesses[lastGuess] === "R") {
            letter3.innerHTML = " R ";
            correctGuesses += 1;
        }
        else if (previousGuesses[lastGuess] === "l" || previousGuesses[lastGuess] === "L") {
            letter5.innerHTML = " L ";
            correctGuesses += 1;
        }
        else if (previousGuesses[lastGuess] === "e" || previousGuesses[lastGuess] === "E") {
            letter6.innerHTML = " E ";
            correctGuesses += 1;
        }
        else if (previousGuesses[lastGuess] === "turtle" || previousGuesses[lastGuess] === "Turtle") {
            letter1.innerHTML = " T ";
            letter2.innerHTML = " U ";
            letter3.innerHTML = " R ";
            letter4.innerHTML = " T ";
            letter5.innerHTML = " L ";
            letter6.innerHTML = " E ";
            correctGuesses += lettersLeft;
        }
        else {
            nextFrame += 1;
        }
    }
    else if (randomNumber === 1) {
        if (previousGuesses[lastGuess] === "a" || previousGuesses[lastGuess] === "A") {
            letter1.innerHTML = " A ";
            letter3.innerHTML = " A ";
            correctGuesses += 2;
        }
        else if (previousGuesses[lastGuess] === "b" || previousGuesses[lastGuess] === "B") {
            letter2.innerHTML = " B ";
            correctGuesses += 1;
        }
        else if (previousGuesses[lastGuess] === "c" || previousGuesses[lastGuess] === "C") {
            letter4.innerHTML = " C ";
            correctGuesses += 1;
        }
        else if (previousGuesses[lastGuess] === "u" || previousGuesses[lastGuess] === "U") {
            letter5.innerHTML = " U ";
            correctGuesses += 1;
        }
        else if (previousGuesses[lastGuess] === "s" || previousGuesses[lastGuess] === "S") {
            letter6.innerHTML = " S ";
            correctGuesses += 1;
        }
        else if (previousGuesses[lastGuess] === "abacus" || previousGuesses[lastGuess] === "Abacus") {
            letter1.innerHTML = " A ";
            letter2.innerHTML = " B ";
            letter3.innerHTML = " A ";
            letter4.innerHTML = " C ";
            letter5.innerHTML = " U ";
            letter6.innerHTML = " S ";
            correctGuesses += lettersLeft;
        }
        else {
            nextFrame += 1;
        }
    }
    else if (randomNumber === 2) {
        if (previousGuesses[lastGuess] === "d" || previousGuesses[lastGuess] === "D") {
            letter1.innerHTML = " D ";
            correctGuesses += 1;
        }
        else if (previousGuesses[lastGuess] === "o" || previousGuesses[lastGuess] === "O") {
            letter2.innerHTML = " O ";
            correctGuesses += 1;
        }
        else if (previousGuesses[lastGuess] === "n" || previousGuesses[lastGuess] === "N") {
            letter3.innerHTML = " N ";
            correctGuesses += 1;
        }
        else if (previousGuesses[lastGuess] === "a" || previousGuesses[lastGuess] === "A") {
            letter4.innerHTML = " A ";
            correctGuesses += 1;
        }
        else if (previousGuesses[lastGuess] === "t" || previousGuesses[lastGuess] === "T") {
            letter5.innerHTML = " T ";
            correctGuesses += 1;
        }
        else if (previousGuesses[lastGuess] === "e" || previousGuesses[lastGuess] === "E") {
            letter6.innerHTML = " E ";
            correctGuesses += 1;
        }
        else if (previousGuesses[lastGuess] === "donate" || previousGuesses[lastGuess] === "Donate") {
            letter1.innerHTML = " D ";
            letter2.innerHTML = " O ";
            letter3.innerHTML = " N ";
            letter4.innerHTML = " A ";
            letter5.innerHTML = " T ";
            letter6.innerHTML = " E ";
            correctGuesses += lettersLeft;
        }
        else {
            nextFrame += 1;
        }
    }
    else if (randomNumber === 3) {
        if (previousGuesses[lastGuess] === "z" || previousGuesses[lastGuess] === "Z") {
            letter1.innerHTML = " Z ";
            correctGuesses += 1;
        }
        else if (previousGuesses[lastGuess] === "y" || previousGuesses[lastGuess] === "Y") {
            letter2.innerHTML = " Y ";
            correctGuesses += 1;
        }
        else if (previousGuesses[lastGuess] === "g" || previousGuesses[lastGuess] === "G") {
            letter3.innerHTML = " G ";
            correctGuesses += 1;
        }
        else if (previousGuesses[lastGuess] === "o" || previousGuesses[lastGuess] === "O") {
            letter4.innerHTML = " O ";
            correctGuesses += 1;
        }
        else if (previousGuesses[lastGuess] === "t" || previousGuesses[lastGuess] === "T") {
            letter5.innerHTML = " T ";
            correctGuesses += 1;
        }
        else if (previousGuesses[lastGuess] === "e" || previousGuesses[lastGuess] === "E") {
            letter6.innerHTML = " E ";
            correctGuesses += 1;
        }
        else if (previousGuesses[lastGuess] === "zygote" || previousGuesses[lastGuess] === "Zygote") {
            letter1.innerHTML = " Z ";
            letter2.innerHTML = " Y ";
            letter3.innerHTML = " G ";
            letter4.innerHTML = " O ";
            letter5.innerHTML = " T ";
            letter6.innerHTML = " E ";
            correctGuesses += lettersLeft;
        }
        else {
            nextFrame += 1;
        }
    }
    else if (randomNumber === 4) {
        if (previousGuesses[lastGuess] === "r" || previousGuesses[lastGuess] === "R") {
            letter1.innerHTML = " R ";
            correctGuesses += 1;
        }
        else if (previousGuesses[lastGuess] === "y" || previousGuesses[lastGuess] === "Y") {
            letter3.innerHTML = " Y ";
            correctGuesses += 2;
        }
        else if (previousGuesses[lastGuess] === "t" || previousGuesses[lastGuess] === "T") {
            letter4.innerHTML = " T ";
            correctGuesses += 1;
        }
        else if (previousGuesses[lastGuess] === "h" || previousGuesses[lastGuess] === "H") {
            letter2.innerHTML = " H ";
            letter5.innerHTML = " H ";
            correctGuesses += 2;
        }
        else if (previousGuesses[lastGuess] === "m" || previousGuesses[lastGuess] === "M") {
            letter6.innerHTML = " M ";
            correctGuesses += 1;
        }
        else if (previousGuesses[lastGuess] === "rhythm" || previousGuesses[lastGuess] === "Rhythm") {
            letter1.innerHTML = " R ";
            letter2.innerHTML = " H ";
            letter3.innerHTML = " Y ";
            letter4.innerHTML = " T ";
            letter5.innerHTML = " H ";
            letter6.innerHTML = " M ";
            correctGuesses += lettersLeft;
        }
        else {
            nextFrame += 1;
        }
    }
    else if (randomNumber === 5) {
        if (previousGuesses[lastGuess] === "s" || previousGuesses[lastGuess] === "S") {
            letter1.innerHTML = " S ";
            correctGuesses += 1;
        }
        else if (previousGuesses[lastGuess] === "p" || previousGuesses[lastGuess] === "P") {
            letter3.innerHTML = " P ";
            correctGuesses += 2;
        }
        else if (previousGuesses[lastGuess] === "h" || previousGuesses[lastGuess] === "H") {
            letter4.innerHTML = " H ";
            correctGuesses += 1;
        }
        else if (previousGuesses[lastGuess] === "y" || previousGuesses[lastGuess] === "y") {
            letter2.innerHTML = " Y ";
            correctGuesses += 1;
        }
        else if (previousGuesses[lastGuess] === "n" || previousGuesses[lastGuess] === "N") {
            letter6.innerHTML = " N ";
            correctGuesses += 1;
        }
        else if (previousGuesses[lastGuess] === "x" || previousGuesses[lastGuess] === "X") {
            letter6.innerHTML = " X ";
            correctGuesses += 1;
        }
        else if (previousGuesses[lastGuess] === "sphynx" || previousGuesses[lastGuess] === "Sphynx") {
            letter1.innerHTML = " S ";
            letter2.innerHTML = " P ";
            letter3.innerHTML = " H ";
            letter4.innerHTML = " Y ";
            letter5.innerHTML = " N ";
            letter6.innerHTML = " X ";
            correctGuesses += lettersLeft;
        }
        else {
            nextFrame += 1;
        }
    }
    if (correctGuesses === 6) {
        message.innerHTML = "YOU WIN!";
    }
});
